const puppeteer = require('puppeteer');
var fs = require('fs');

async function start() {
    async function getData(link, selector) {
        await page.goto(link);
        const element = await page.$(selector);
        const text = await element.evaluate(element => element.innerText.trim().split('\n').filter(line => line.trim() !== ''));
        const imgs = await page.$$eval('source', sources => sources.map(source => source.getAttribute('srcset').split(',').pop().split(' ')[0]).filter(value => value != ''));
        return { link, text, imgs };
    }
    const places = JSON.parse(fs.readFileSync('places.json'));
    const links = places.map(place => place.link);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const selector = 'body > div > div > main > div > div > section:nth-last-child(1) > div > div > div:nth-last-child(1) > div > div'
    const data = [];

    for (const link of links) {
        data.push(await getData(link, selector));
        console.log(link + ' done!');
    }
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync('data.json', jsonData);
    // const link = 'https://www.zarovkaarchitekti.cz/hotel-aldis/'
    // data.push(await getData(link, selector));

    browser.close();
    console.log('done');

}
start()