/**
 * Convert csv to js.
 *
 * Main workflow: Google Drive Sheet -> .csv export -> dizionario.csv.js
 */

const fs = require("fs");
const path = require("path");
const { GoogleSpreadsheet } = require("google-spreadsheet"); // https://theoephraim.github.io/node-google-spreadsheet/#/

require("dotenv").config();
const sheetID = "16MXvgyvb-NFViSVvF7ZsNnkjDRzIvdi94DkZYuyWj9Y"; // long ID from sheets URL
const doc = new GoogleSpreadsheet(sheetID);

// env variables
const client_email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const private_key = process.env.GOOGLE_PRIVATE_KEY;

if (!client_email || !private_key) {
  console.error("env variables not set correctly");
  process.exit(1);
}

const OUTPUT_PATH = "src/assets/dizionario.csv.js";
const PACKAGE_JSON_PATH = "package.json";

const ITALIAN_MONTHS = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

function formatItalianDate(date = new Date()) {
  const day = date.getDate();
  const month = ITALIAN_MONTHS[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function updatePackageJsonVersion(dateStr) {
  if (!fs.existsSync(PACKAGE_JSON_PATH)) {
    console.warn(`package.json not found at ${PACKAGE_JSON_PATH}, skipping`);
    return;
  }
  const raw = fs.readFileSync(PACKAGE_JSON_PATH, "utf8");
  const pkg = JSON.parse(raw);
  pkg.dictionaryVersion = dateStr;
  fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(pkg, null, 2) + "\n");
  console.log(`package.json dictionaryVersion set to "${dateStr}"`);
}

function wrapWithQuotes(text) {
  if (!text) return "";
  text = text.replaceAll("\n", " "); // allow entries with multiple lines
  if (text.includes(",") || text.includes('"')) {
    text = `"${text.replaceAll('"', '""')}"`;
  }
  return text;
}

// Unique key for identifying a word across runs. Including the translation
// means a changed translation is treated as a (re)new(ed) entry.
function makeKey(kaibano, italiano) {
  return `${(kaibano || "").trim()}||${(italiano || "").trim()}`;
}

// Minimal CSV parser that understands quoted fields (with escaped "").
function parseCSV(content) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < content.length; i++) {
    const c = content[i];
    if (inQuotes) {
      if (c === '"') {
        if (content[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (c !== "\r") {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

// Read the previously generated file and return the set of known word keys.
function getPreviousWords(filePath) {
  const known = new Set();
  if (!fs.existsSync(filePath)) return known;

  const content = fs.readFileSync(filePath, "utf8");
  // Extract the template-literal contents between the backticks.
  const match = content.match(/`([\s\S]*?)`/);
  if (!match) return known;

  const rows = parseCSV(match[1]);
  // Skip the header row.
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    if (!r || r.length === 0) continue;
    if (!r[0] && !r[1]) continue; // skip blank lines
    known.add(makeKey(r[0], r[1]));
  }
  return known;
}

async function main() {
  await doc.useServiceAccountAuth({ client_email, private_key });
  await doc.loadInfo(); // loads document properties and worksheets

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();
  const previousWords = getPreviousWords(OUTPUT_PATH);

  // Build normalized entries.
  const entries = rows.map((r) => {
    const kaibano = (r["Kaibano"] || "").trim();
    const italiano = (r["Italiano"] || "").trim();
    const aggiuntoDa = (r["Aggiunto da"] || "").trim();
    const isNew = !previousWords.has(makeKey(kaibano, italiano));
    return { kaibano, italiano, aggiuntoDa, isNew };
  });

  entries.sort((a, b) =>
    a.kaibano.localeCompare(b.kaibano, "it", { sensitivity: "base" }),
  );

  const headers = ["Kaibano", "Italiano", "Aggiunto da", "Nuovo"];

  let dictionaryOutput = "export const dizionario = `";
  dictionaryOutput += headers.join(",") + ",\n";

  entries.forEach((e, idx) => {
    dictionaryOutput +=
      wrapWithQuotes(e.kaibano) + "," +
      wrapWithQuotes(e.italiano) + "," +
      wrapWithQuotes(e.aggiuntoDa) + "," +
      (e.isNew ? true : false) + ",";

    if (idx !== entries.length - 1) {
      dictionaryOutput += "\n";
    }
  });

  dictionaryOutput += "`;";

  fs.writeFile(OUTPUT_PATH, dictionaryOutput, (err) => {
    if (err) {
      return console.error(err);
    }
    const newCount = entries.filter((e) => e.isNew).length;
    console.log(
      `export completed (${entries.length} entries, ${newCount} marked as new)`,
    );
    updatePackageJsonVersion(formatItalianDate());
  });
}

main();