var request = require("request");
var helloWorld = require("../index.js")
var base_url = "https://dev.mobile-api.woolworths.com.au/wow/v1/addresses?postcode=2150"

describe("To check the Store Locator APIs", function() {
    describe("By Postcode /", function() {
        it("returns status code 200", function(done) {
            request.get(base_url, function(error, response, body) {
                expect(response.statusCode).toBe(201);
                //console.log("Status Code is "+response.statusCode);
                //console.log("Response Body is"+body);
                done();
            });
        });
    });
    
    
});