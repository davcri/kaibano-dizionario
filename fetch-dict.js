/**
 * Export the dictionary from Google Sheets to a JSON module.
 *
 * Main workflow: Google Drive Sheet -> src/assets/dizionario.json
 */

const fs = require("fs");
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

const OUTPUT_PATH = "src/assets/dizionario.json";
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

// Unique key for identifying a word across runs. Including the translation
// means a changed translation is treated as a (re)new(ed) entry.
function makeKey(kaibano, italiano) {
  return `${(kaibano || "").trim()}||${(italiano || "").trim()}`;
}

// Read the previously generated file and return the set of known word keys.
function getPreviousWords(filePath) {
  const known = new Set();
  if (!fs.existsSync(filePath)) return known;

  const entries = JSON.parse(fs.readFileSync(filePath, "utf8"));
  for (const e of entries) {
    if (!e.Kaibano && !e.Italiano) continue; // skip blank lines
    known.add(makeKey(e.Kaibano, e.Italiano));
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
    return {
      Kaibano: kaibano,
      Italiano: italiano,
      "Aggiunto da": aggiuntoDa,
      Nuovo: isNew,
    };
  });

  entries.sort((a, b) =>
    a.Kaibano.localeCompare(b.Kaibano, "it", { sensitivity: "base" }),
  );

  // One object per line keeps git diffs readable.
  const dictionaryOutput =
    "[\n" + entries.map((e) => JSON.stringify(e)).join(",\n") + "\n]\n";

  fs.writeFile(OUTPUT_PATH, dictionaryOutput, (err) => {
    if (err) {
      return console.error(err);
    }
    const newCount = entries.filter((e) => e.Nuovo).length;
    console.log(
      `export completed (${entries.length} entries, ${newCount} marked as new)`,
    );
    updatePackageJsonVersion(formatItalianDate());
  });
}

main();
