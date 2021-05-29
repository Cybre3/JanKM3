function sortNums(arr) {
    arr.sort((a, b) => a - b);
}

// Arrange all necessary preconditions and inputs
let nums = [2, 15, -2, 4];

//Actontheobjectormethodundertest
sortNums(nums);
console.log(JSON.stringify(nums));

//Assertthattheobtainedresultsarewhatweexpect
if (JSON.stringify(nums) === "[-2,2,4,15]") {
    console.error("They are equal!");
} else {
    console.error('Not equal!');
}