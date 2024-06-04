var fs = require('fs');

const data = JSON.parse(fs.readFileSync('final.json', 'utf8'));
data.forEach(element => {
    console.log(element.year.year)
});