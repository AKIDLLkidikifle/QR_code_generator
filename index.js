import qr from 'qr-image';
import inquirer from 'inquirer';
import fs from 'fs';
//var qr = require('qr-image');

inquirer
  .prompt([
    {
        message: "what is your github url",
        name: "URL",
    }
  ])
  .then((answers) => {
       var urlName = answers.URL;
       var qr_svg = qr.image(urlName);
       qr_svg.pipe(fs.createWriteStream('QR_image.png'));

       fs.writeFile('url_name.txt', urlName, (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });






/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// var qr_svg = qr.image('I love QR!', { type: 'svg' });
// qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
 
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });

//https://github.com/AKIDLLkidikifle