const cheerio = require('cheerio');
const puppeteer = require('puppeteer');


const url = 'https://www.tsa.gov/coronavirus/passenger-throughput?mod=article_inline';

(async function main() {

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        devtools: true,
        args: ['--window-size=1180, 800', '--window-position=0,0']
    })

    const page = await browser.newPage();

    await page.goto('https://www.google.com');


}
)


