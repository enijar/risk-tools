import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

async function generateMapData() {
  const mapsDir = path.resolve(__dirname, "..", "public", "maps");
  const files = (await fs.promises.readdir(mapsDir))
    .filter((file) => {
      return file.startsWith("textureThumbnail_");
    })
    .map((file) => {
      const name = file
        .replace(/^textureThumbnail_/, "")
        .replace(/\.png$/, "")
        .replace(/_/g, " ")
        .replace(/([A-Z])/g, " $1");
      const words = name.split(" ");
      return {
        name: words
          .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(" "),
        image: file,
      };
    });
  await fs.promises.writeFile(
    path.resolve(__dirname, "..", "public", "maps.json"),
    JSON.stringify(files, null, 2),
    "utf-8",
  );
}

generateMapData()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
