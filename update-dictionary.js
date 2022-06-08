const fs = require("fs");
const { GoogleSpreadsheet } = require("google-spreadsheet"); // https://theoephraim.github.io/node-google-spreadsheet/#/

require("dotenv").config();
const sheetID = "16MXvgyvb-NFViSVvF7ZsNnkjDRzIvdi94DkZYuyWj9Y"; // long ID from sheets URL
const doc = new GoogleSpreadsheet(sheetID);

function wrapWithQuotes(text) {
  if (!text) return "";
  if (text.includes(",")) {
    console.log(text, "lo include");
    text = `"${text}"`;
  }
  return text;
}

async function main() {
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });
  await doc.loadInfo(); // loads document properties and worksheets

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

  let dictionaryOutput = "export const dizionario = `";

  //   sheet.loadHeaderRow(0);
  sheet.getRows().then((rows) => {
    dictionaryOutput += sheet.headerValues.join(",") + "\n";
    rows.forEach((r, idx) => {
      dictionaryOutput +=
        wrapWithQuotes(r["Kaibano"]) +
        "," +
        wrapWithQuotes(r["Italiano"]) +
        "," +
        wrapWithQuotes(r["Aggiunto da"]) +
        "," +
        ",";
      if (idx !== rows.length - 1) {
        dictionaryOutput += "\n";
      }
    });
    dictionaryOutput += "`;";

    // TODO: compare with previos file and detect new words
    // TODO: mark new words (so that they can be highlighted)
    // TODO: sort words

    fs.writeFile(
      "src/assets/dizionario.csv.js",
      dictionaryOutput,
      (err, data) => {
        if (err) {
          return console.error(err);
        }
        console.log("export completed");
      }
    );
  });
}

main();
