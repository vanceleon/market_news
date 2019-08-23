const Nightmare = require('nightmare');
const cheerio = require('cheerio');


const nightmare = Nightmare({show: true});
const url = 'https://seekingalpha.com/';


nightmare
    .goto(url)
    .wait('body')
    .type(`input[type='search']`, 'AMZN' )
    .click(`button.btn[type='submit']`)
    .wait('app-root.ng-tns-c0-0')
    .evaluate(() => document.querySelector('body').innerHTML)
    .end()
    .then(res => {
        console.log(getData(res))
    }).catch(err => {
        console.log(err)
    });


    let getData = html => {
        data = [];
        const $ = cheerio.load(html);
        // console.log("what is $", $);
        const raw_element = $('main section section div app-the-big-picture app-html-loader span.ng-star-inserted div')
        let title = $(raw_element).find('div div').text();
        // console.log(raw_element)
        // console.log(title)
        if(title) {
            data.push({
                title: title
            });
        }
        return data;
    }