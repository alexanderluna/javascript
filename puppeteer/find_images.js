const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(process.argv[2]);
    await page.waitForFunction(() => 'lstImages' in window);

    let images = await page.evaluate(() => { return window.lstImages });
    fs.writeFile(process.argv[3], images.join("\n"), (err) => {
        if (err) throw err;
        console.log('saved image links to file');
    });

    await browser.close();
})();