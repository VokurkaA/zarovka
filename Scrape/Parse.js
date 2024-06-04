var fs = require('fs');
const puppeteer = require('puppeteer');

const FastAverageColor = require('fast-average-color-node');

const dataString = fs.readFileSync('data.json', 'utf8').replace(/ /g, ' ');
const data = JSON.parse(dataString);

const placesString = fs.readFileSync('places.json', 'utf8').replace(/ /g, ' ');
const places = JSON.parse(placesString);

async function start() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    let obj = []
    let year;
    async function getImg(link, outputPath) {
        const viewSource = await page.goto(link);
        await fs.promises.writeFile(outputPath, await viewSource.buffer());
        const color = (await FastAverageColor.getAverageColor(outputPath)).hex;
        return { src: outputPath, background: color };
    }
    for (let i = 0; i < places.length; i++) {
        let authors = [];
        let text = data[i].text;
        try {
            if (text[0] === '404 - Page not found' || text.length == 0)
                continue;
            while (text[text.length - 1] === 'DALŠÍ PROJEKTY' || text[text.length - 1] === 'PORTFOLIO' || (text.length > 0 && text[text.length - 1].includes('www'))) {
                text = text.slice(0, -1);
            }
            let yearText = text[2].split(',').pop().trim().split(' ');
            const yearDate = yearText.pop();
            year = { text: yearText.join(' '), year: yearDate }

            text = text.slice(3)
            while (text.length > 0 && text[text.length - 1].includes(':')) {
                let people = text[text.length - 1].split(':');
                let position = people.slice(0, 1).pop();
                people.shift()
                people = people.map(p => p.trim());
                authors.push({ position, people })
                text = text.slice(0, -1)
            }
        }
        catch {
            // console.log('error')
        }
        const path = places[i].link.split('/').slice(-2, -1).pop();
        const cover = await getImg(places[i].img, 'img/' + path + '_Cover.webp');

        const images = [];
        const rawImages = data[i].img
        for (let j = 0; j < rawImages.length; j++) {
            images.push(await getImg(rawImages[j], `img/${path}_img${j + 1}.webp`));
        }
        obj.push(
            {
                link: path,
                name: places[i].name,
                location: places[i].place,
                year: year,
                authors: authors,
                text: text,
                cover: cover,
                images: images,
                filters: places[i].filter
            })
        console.log(places[i].name + ' done.');
    }

    const jsonData = JSON.stringify(obj, null, 2);
    fs.writeFileSync('final.json', jsonData);
    browser.close();
}
start()