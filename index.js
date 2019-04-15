const request = require('request');
const cheerio = require('cheerio');

exports.handler = function (event, context, callback) {
    request('https://sj.qq.com/myapp/detail.htm?apkName=cn.soulapp.android', function (error, response, body) {
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the homepage.
        const $ = cheerio.load(body);
        console.log('Link: ' + $('a.det-down-btn')[0].attribs['data-apkurl']);
        callback(null, response && response.statusCode);
    });
}