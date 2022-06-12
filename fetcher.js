const fs = require('fs/promises');
const request = require('request');

const url = process.argv[2];
const path = process.argv[3];

const fetcher = ((url, path) => {
  request(url, (err, _, body) => {
    if (err) {
      console.log('Error', err);
      return;
    }
    fs.writeFile(path, body, err => {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
});

fetcher(url, path);