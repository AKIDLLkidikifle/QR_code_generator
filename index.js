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




