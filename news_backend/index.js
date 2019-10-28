const Nightmare = require('nightmare');
const cheerio = require('cheerio');

const nightmare = Nightmare({ show: false });
const url = 'https://seekingalpha.com/';

nightmare
  .goto(url)
  .wait('body')
  .type(`input[type='search']`, 'AMZN')
  .click(`button.btn[type='submit']`)
  .wait('div.content_section')
  .evaluate(() => document.querySelector('body').innerHTML)
  .end()
  .then(res => {
    console.log(getData(res));
  })
  .catch(err => {
    console.log(err);
  });

let getData = html => {
  // console.log(html)
  data = [];
  const $ = cheerio.load(html);
  $(
    'div.symbol_articles_list div.portfolio_selections div.content_block_investment_views'
  ).each((row, row_element) => {
    $(row_element)
      .find('ul li')
      .each((i, elem) => {
        let author = $(elem)
          .find('a.small_picture')
          .attr('href');
        let title = $(elem)
          .find('div.symbol_article')
          .text();
        if (author) {
          data.push({
            author: author,
            title: title
          });
        }
      });
  });
  return data;
};
