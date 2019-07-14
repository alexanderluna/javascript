const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(process.argv[2]);
  await page.waitForSelector('table')
  var data = await page.$$eval('a', as => as.map(a => a.href + '&s=rapidvideo'));
  data = data.reverse().filter(link => link.match("\\?id=")).pop();
  console.log(data);

  await browser.close();

  get_link(data);
})();

get_link = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector('iframe');
  var frames = await page.$$eval('iframe', fr => fr.map(f => f.src))
  video = frames.find(a => a.match('rapidvideo'));
  console.log(video);
  await browser.close();
}