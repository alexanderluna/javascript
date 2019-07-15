const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(process.argv[2]);
  await page.waitForSelector('.listing')
  var data = await page.$$eval('a', as => as.map(a => a.href + "&s=rapid"));
  data = data.reverse().filter(link => link.match("\\?id="));
  console.log(data.join("\n"));
  await browser.close();

  get_iframe_links(data);
})();

get_iframe_links = async (data) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  var stream = fs.createWriteStream("video_download.txt", { flags: 'a' });

  for (const [episode, link] of data.entries()) {
    if (process.argv[3] && process.argv[3] > episode) continue
    try {
      await page.goto(link);
      await page.waitForSelector('iframe#my_video_1');
      var frames = await page.$$eval('iframe', fr => fr.map(f => f.src))
      video = frames.find(a => a.match("rapidvid"));
      stream.write(video + "\n");
      console.log("=> ", video);
    } catch (err) {
      stream.write(link + "\n");
      console.log("=> ", link);
    }
    await page.waitFor(3000);
  }

  stream.end();
  await browser.close();
}