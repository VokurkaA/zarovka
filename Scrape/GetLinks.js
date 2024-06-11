var fs = require('fs');
const puppeteer = require('puppeteer');

async function start() {
    let projects = [];
    const pages = ['rodinne-domy', 'obytne-domy', 'interiery', 'verejne-stavby', 'rekonstrukce', 'urbanismus']
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    for (const url of pages) {
        console.log(url)
        await page.goto('https://www.zarovkaarchitekti.cz/' + url)
        const selector = ('body > div > div > main > div > div > section:nth-last-child(1) > div > div > div:nth-last-child(1) > div > div > div:nth-child(2) > div');
        const childrenCount = await page.evaluate((selector) => {
            const element = document.querySelector(selector);
            return element ? element.childElementCount : 0;
        }, selector);
        for (let i = 0; i < childrenCount; i++) {
            const element = await page.$(selector + ` > div:nth-child(${i + 1})`)
            const link = await element.$$eval('a', as => as.map(a => a.href).pop()) || 'undefined';
            const img = await element.$$eval('source', as => as.map(source => source.srcset).pop().split(',')[1].trim().split(' ')[0]);
            const text = await element.evaluate(element => element.innerText.trim().split('\n').filter(line => line.trim() !== ''));
            const name = text[0].trim().toLowerCase();
            const place = text[1].trim().toLowerCase();
            let filter = [url]

            const existingProjectIndex = projects.findIndex(project => project.img === img);
            if (existingProjectIndex !== -1) {
                projects[existingProjectIndex].filter.push(...filter);
            } else {
                projects.push({ link, name, place, img, filter });
            }
        }
        console.log(projects)
    };

    projects = projects.filter(project => project.link !== 'undefined');

    const jsonData = JSON.stringify(projects, null, 2);
    fs.writeFileSync('places.json', jsonData);
    await browser.close();
}

start();
