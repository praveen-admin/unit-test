/**
 * Created by praveen on 18/08/2016.
 */
var crypto = require('crypto');
var apikey = 'DsETWlVjmXs5O4al5njsKZe0YFPeE2Jk';
var apisecret = '9KdPmHhob7WRc5wG';

var authkey = new Buffer(apikey + ':' + ~~ (new Date().getTime()/1000)).toString('base64');
var authdigest = crypto.createHmac('sha1', apisecret).update(authkey).digest('hex');

console.log('X-Auth-Key\r\n' + authkey + '\r\n');
console.log('X-Auth-Digest\r\n' + authdigest + '\r\n');

module.exports=function xAuthKey(req,res,next){
    return authkey;
};
module.exports=function xAuthDigest(req,res,next){
    return authdigest;
};