import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const list = async () => {
  const pathDir = "files/";
  const fileExistError = "FS operation failed";
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fs.access(path.join(__dirname, pathDir), (err, _) => {
    if (err) {
      throw Error(fileExistError);
    } else {
      fs.readdir(path.join(__dirname, pathDir), (_, files) => {
        console.log(files);
      });
    }
  });
};

await list();
