import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const rename = async () => {
  const wrongFilePath = "files/wrongFilename.txt";
  const properFilePath = "files/properFilename.md";
  const fileExistError = "FS operation failed";
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fs.access(path.join(__dirname, wrongFilePath), (err, _) => {
    if (err) {
      throw Error(fileExistError);
    } else {
      fs.access(path.join(__dirname, properFilePath), (err, _) => {
        if (!err) {
          throw Error(fileExistError);
        } else {
          fs.rename(
            path.join(__dirname, wrongFilePath),
            path.join(__dirname, properFilePath),
            () => {}
          );
        }
      });
    }
  });
};

await rename();
