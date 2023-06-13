import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const create = async () => {
  const filePath = "files/fresh.txt";
  const fileData = "I am fresh and young";
  const fileExistError = "FS operation failed";
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  
  fs.access(path.join(__dirname, filePath), (err, data) => {
    if (err && !data) {
      fs.writeFile(path.join(__dirname, filePath), fileData, () => {});
    } else {
      throw Error(fileExistError);
    }
  });
};

await create();
