/**
 * Created by praveen on 8/08/2016.
 */
var express = require('express');
var app = express();
var exports = module.exports = {};

app.get('/', function(req, res){
    res.send('Hello world');
});

var server = app.listen(3004, function(){
    console.log('Magic is happening on port 3000');
});

exports.closeServer = function(){
    server.close();
};