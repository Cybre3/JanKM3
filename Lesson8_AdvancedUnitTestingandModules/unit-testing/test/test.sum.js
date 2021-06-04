let sum = require("../sum.js");
const expect = require("chai").expect; // imported Chai library of code from Node

describe("#sum()", function () {
    it("Should return 0", function () {
        expect(sum()).to.equal(0);
    });

    it("Should return 1", function () {
        expect(sum(1)).to.equal(1);
    });

    it("Should return 2", function () {
        expect(sum(1, 1)).to.equal(2);
    });

    it("Should through and error if the arg is not a number", function () {
        expect(function () {
            sum(1, 2, "3", [4], 5);
        }).to.throw(TypeError, "The function sum ( ) expects only numbers.");
    });
});
