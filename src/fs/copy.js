import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const pathDir = "files/";
  const pathCopyDir = "files_copy";
  const fileExistError = "FS operation failed";
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fs.access(path.join(__dirname, pathDir), (err, _) => {
    if (err) {
      throw Error(fileExistError);
    } else {
      fs.access(path.join(__dirname, pathCopyDir), (err, _) => {
        if (!err) {
          throw Error(fileExistError);
        } else {
          fs.mkdir(path.join(__dirname, pathCopyDir), () => {
            fs.readdir(path.join(__dirname, pathDir), (_, files) => {
              files.forEach((file) => {
                fs.copyFile(
                  path.join(__dirname, pathDir, file),
                  path.join(__dirname, pathCopyDir, file),
                  () => {}
                );
              });
            });
          });
        }
      });
    }
  });
};

await copy();
