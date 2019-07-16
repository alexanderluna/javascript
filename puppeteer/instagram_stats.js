const puppeteer = require('puppeteer');
const fs = require('fs');

const instagramUrl = 'https://www.instagram.com/your-page/';
const backupFilePath = 'path/to/save/stats.txt';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(instagramUrl);
  var data = await page.$$eval('a', as => as.map(a => a.text));

  var stream = fs.createWriteStream(backupFilePath, { flags: 'a' });
  stream.write(`${data[2]}\t\t${data[3]}\t\t${new Date().toDateString()}\n`);
  stream.end();
  await browser.close();
})();
