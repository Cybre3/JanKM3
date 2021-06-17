const multiplyBy10 = require("../multiplyEnforcer").multiplyBy10;
const stringMultiplyBy3point5 =
    require("../multiplyEnforcer").stringMultiplyBy3point5;
const multiplyTwoNums = require("../multiplyEnforcer").multiplyTwoNums;
var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;

describe("function multiplyBy10(num)", function () {
    it("Output should be a number", function () {
        assert.typeOf(
            multiplyBy10(7),
            "number",
            "MuiltiplyEnforcer muiltiplyBy10(num) input is not a number"
        );
    });

    it("Should equal undefined if input is a string and not a number", function () {
        assert.equal(multiplyBy10("string"), undefined);
    });

    it("Should equal undefined if input is object and not a number", function () {
        assert.equal(multiplyBy10({ name: "George" }), undefined);
    });

    it("Should equal 50 when input is 5, input is a number", function () {
        expect(multiplyBy10(5)).to.equal(
            50,
            "Check Class MuiltiplyEnforcer mulitplyBy10() return caluculation or input"
        );
    });
});

describe("Function stringMultiplyBy3point5(num)", function () {
    it("Should return a string", function () {
        assert.typeOf(
            stringMultiplyBy3point5(5),
            "string",
            "Class MuiltiplyEnforcer stringMultiplyBy3point5(num) output should by type of string"
        );
    });

    it("Should return 'Please enter a valid number'", function () {
        expect(stringMultiplyBy3point5("string")).to.equal(
            "Please enter a valid number!",
            "MuiltiplyEnforcer stringMultiplyBy3point5() Error message should say: 'Please enter a valid number!'"
        );
    });

    it("Should return 'Please enter a valid number'", function () {
        expect(stringMultiplyBy3point5({ age: 65 })).to.equal(
            "Please enter a valid number!",
            "MuiltiplyEnforcer stringMultiplyBy3point5() Error message should say: 'Please enter a valid number!'"
        );
    });

    it("Should equal 28 when input is 8, input is a number", function () {
        assert.strictEqual(
            stringMultiplyBy3point5(8),
            "28",
            "MuiltiplyEnforcer stringMultiplyBy3point5() invalid input, should be a number or check calculation"
        );
    });
});

describe("Function MultiplyTwoNums()", function () {
    it("Should return input1 and input2 in an array", function () {
        expect(multiplyTwoNums("5", 3)).to.be.a("array");
    });

    it("Should return input1 and input2 in an array", function () {
        expect(multiplyTwoNums(5, "8")).to.be.a("array");
    });

    it("Should return input1 and input2 in an array", function () {
        expect(multiplyTwoNums("5", "1")).to.be.a("array");
    });

    it("Should return a number", function () {
        assert.strictEqual(
            multiplyTwoNums(4, 10),
            40,
            "Class MultiplyEnforcer multiplyTwoNums() Check calculation"
        );
    });
});
