/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer 
    .prompt([
        {
        type: "input",
        name: "url",
        message: "Enter the URL you want to convert to a QR code: ",
        },
    ])
    .then((answers) => {
        const url = answers.url;
        const qrCode = qr.image(url, { type: "png" });
        const output = fs.createWriteStream("qr.png");
        qrCode.pipe(output);
        console.log("QR code generated and saved as qr.png");
    
        fs.writeFile("url.txt", url, (err) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log("URL saved to url.txt");
        }
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });

    console.