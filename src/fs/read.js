import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const fileToreadPath = "files/fileToRead.txt";
  const fileExistError = "FS operation failed";
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fs.access(path.join(__dirname, fileToreadPath), (err, _) => {
    if (err) {
      throw Error(fileExistError);
    } else {
      fs.readFile(
        path.join(__dirname, fileToreadPath),
        "utf-8",
        (_, string) => {
          console.log(string);
        }
      );
    }
  });
};

await read();
