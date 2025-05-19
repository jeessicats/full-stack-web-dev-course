const fs = require("fs");

fs.writeFile("hello.txt", "Hello, my name is Oliver", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File written successfully");
  }
});

fs.readFile("hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});