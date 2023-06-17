const fs = require('fs');
const request = require('request');

const input = process.argv;

const URL = input[2];
const localPath = input[3];

request(URL, (error, response, body) => {
  fs.writeFile(localPath, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Donwloaded and saved ${body.length} bytes to ${localPath}`);
  });
});
