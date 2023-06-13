import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const remove = async () => {
  const fileToRemovePath = "files/fileToRemove.txt";
  const fileExistError = "FS operation failed";
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fs.access(path.join(__dirname, fileToRemovePath), (err, _) => {
    if (err) {
      throw Error(fileExistError);
    } else {
      fs.rm(path.join(__dirname, fileToRemovePath), () => {});
    }
  });
};

await remove();
