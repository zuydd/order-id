import fileHelper from "../helpers/file.js";

const idsText = fileHelper.readFile("id.txt");
const ids = idsText
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

const usersText = fileHelper.readFile("user.txt");
const users = usersText
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

let output = "";
for (const id of ids) {
  const user = users.find((user) => user.includes(id));
  if (user) {
    output += user + "\n";
  } else {
    output += "\n";
  }
}

if (output.length > 0) {
  fileHelper.writeFile("output.txt", output);
  console.log("Đã sắp xếp xong, dữ liệu đã được lưu vào file output.txt");
} else {
  console.log("Không có dữ liệu user data nào được sắp xếp");
}
