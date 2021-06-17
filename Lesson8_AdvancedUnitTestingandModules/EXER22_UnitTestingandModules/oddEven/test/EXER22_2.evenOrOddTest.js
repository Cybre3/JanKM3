const chai = require("chai");
const assert = require("chai").assert;
const expect = require("chai").expect;
// const should = chai.should();
var should = require("chai").should();
console.log(should);

const isOddOrEven = require("../EXER22_2.evenOrOdd").isOddOrEven;
// const oddEven = require("../EXER22_2.evenOrOdd");

describe("isOddOrEven", function () {
    it("should return undefined with number parameter", function () {
        expect(isOddOrEven(13)).to.equal(
            undefined,
            "Function did not return the correct result!"
        );
    });

    it("should return undefined with an object parameter", function () {
        let result = { name: "George" };
        (isOddOrEven(result)).should.not.equal(undefined);
    });

    it("should return correct result with even length", function () {
        assert.equal(
            isOddOrEven("roar"),
            "even",
            "Function did not return the correct result!"
        );
    });

    it("should return correct result with odd length", function () {
        expect(isOddOrEven("Peter")).to.equal(
            "odd",
            "Function did not return the correct result!"
        );
    });
});
