let mathEnforcer = require("../mathEnforcer");
// const chai = require("chai");
// const { expect } = require("chai");
const expect = require('chai').expect;

describe("Tests for addFive() method", function () {
    it("Should return 10 when the argument is 5", function () {
        expect(mathEnforcer.addFive(5)).to.equal(10);
    });

    it("Should return -15 when the argument is -20", function () {
        expect(mathEnforcer.addFive(-20)).to.equal(-15);
    });

    it("This test isn't real 2 + 2", function () {
        expect(true).to.equal(true);
    });

    it("Should be within .01 of 42 when the argument is 36.99", function () {
        expect(mathEnforcer.addFive(36.99)).to.be.closeTo(42, 0.01);
    });
});

describe("Tests for subtract() method", function () {
    it("Should return 0 when the argument is 10", function () {
        expect(mathEnforcer.subtractTen(10)).to.equal(0);
    });

    it("Should return -20 when the argument is -10", function () {
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    });

    it("Should be within .01 of 10 when the argument is 19.99", function () {
        expect(mathEnforcer.subtractTen(19.999)).to.be.closeTo(10, 0.01);
    });
});

describe("Tests for sum() method", function () {
    it("Should return 22 when the arguments are 11, 11", function () {
        expect(mathEnforcer.sum(11, 11)).to.equal(22);
    });

    it("Should return -15 when the argument is -20", function () {
        expect(mathEnforcer.sum(-5, -10)).to.equal(-15);
    });

    it("Should be within .01 of 42 when the argument is 36.99", function () {
        expect(mathEnforcer.sum(36.99, 5)).to.be.closeTo(42, 0.01);
    });
});

// describe("Tests for verifyNum() method", function () {
//     it("Should return 10 when the argument is 5", function () {
//         expect(mathEnforcer.verifyNum('5')).to.equal(throw new TypeError("Argument must be number "));
//     });

//     it("Should return -15 when the argument is -20", function () {
//         expect(mathEnforcer.verifyNum(-20)).to.equal(-15);
//     });

//     it("Should be within .01 of 42 when the argument is 36.99", function () {
//         expect(mathEnforcer.verifyNum(36.99)).to.be.closeTo(42, 0.01);
//     });
// });
