const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(process.argv[2]);
    await page.waitForSelector('table')

    let links = await page.$$eval('a', as => as.map(a => a.href));
    links = links.reverse().filter(link => link.match("\\?id="));
    console.log("Found: ", links);
    fs.writeFile(process.argv[3], links.join("\n"), (err) => {
        if (err) throw err;
        console.log('saved links to file');
    });

    await browser.close();
})();