import os from "os";
import fs from "fs";


console.log("Free Memory:", os.freemem());
console.log("Total CPU Cores:", os.cpus().length);


// 1. Create data.txt with "Hello World"
fs.writeFileSync("data.txt", "Hello World");
console.log("data.txt created");

// 2. Create Readme.md with given content
fs.writeFileSync("Readme.md", "## This is first line in Readme");
console.log("Readme.md created");

// 3. Read data.txt and print content
const data = fs.readFileSync("data.txt", "utf-8");
console.log("Content of data.txt:", data);

// 4. Append "This is second line" to data.txt
fs.appendFileSync("data.txt", "\nThis is second line");
console.log("Text appended to data.txt");

// 5. Delete Readme.md
fs.unlinkSync("Readme.md");
console.log("Readme.md deleted");
