let expect = require("chai").expect;
let sum = require("./index").sum3Numbers;

let vat = require("./index").calculateSumAndVAT;

describe("sum(arr) - sum array of numbers", function () {
	
    it("should return 5 for ['1','2','2']", function () {
        expect(sum(['1','2','2'])).to.be.equal(5);
    });
	
});

describe("calculateSumAndVAT(arr) - calculates array of numbers", function () {
	
    it("should return 6 for ['1','2','2']", function () {
        expect(vat(['1','2','2'])).to.be.equal(6);
    });
	
});