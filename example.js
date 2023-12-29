import * as cheerio from 'https://esm.sh/cheerio@1.0.0-rc.12';

const $ = cheerio.load('https://app.simplenote.com/publish/162Y3m');
document.body.appendChild($('h1.x').text());