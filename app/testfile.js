/**
 * Created by praveen on 18/08/2016.
 */
'use strict';
var request = require('request');
var auth = require("./authKeys");

//console.log(auth.xAuthKey);

var options = {
    method:'POST',
    url:'https://dev.mobile-api.woolworths.com.au/wow/v2/commerce/token',
    headers:{
        'X-Auth-Key':'RHNFVFdsVmptWHM1TzRhbDVuanNLWmUwWUZQZUUySms6MTQ3MTUwNzMyNg==',
        'X-Auth-Digest':'d4f6cdbcc68ea7f9d110ae6d8122b9344000585e',
        'content-type': 'application/json',
        'cache-control': 'no-cache'
    },
    body:
    { user_name: 'fridge@gmail.com', password: '123456' },
    json: true
};
request(options,function (error,response,body) {

    console.log((response.statusCode));
    console.log(response.headers);
    console.log(body);
    //var bodyParser= JSON.parse(body);
    //console.log(bodyParser.status);

});

//
// var options = { method: 'POST',
//     url: 'https://dev.mobile-api.woolworths.com.au/wow/v2/commerce/token',
//     headers:
//     { 'postman-token': '87cc89e6-1dfa-fb10-d76b-ecad150a1661',
//         'cache-control': 'no-cache',
//         'x-auth-digest': '86cf89c27b9591721ff12c777d751a89da3654b1',
//         'x-auth-key': 'RHNFVFdsVmptWHM1TzRhbDVuanNLWmUwWUZQZUUySms6MTQ3MTUwNjkzNg==',
//         'content-type': 'application/json' },
//     body: { user_name: 'fridge@gmail.com', password: '123456' },
//     json: true };
//
// request(options, function (error, response, body) {
//     if (error) throw new Error(error);
//
//     console.log(body);
// });
