class StringBuilder {
    constructor(someInput) {
        if (typeof someInput === "string") {
            this.newString = someInput.split("");
        } else {
            throw "Argument must be a string";
        }
    }

    // try {

    // } catch () {

    // }
    append(stringToAdd) {
        // Check to see if stringToAdd is a string, using typeof
        if (typeof stringToAdd === "string") {
            this.newString = this.newString.concat(stringToAdd.split(""));
        } else {
            throw "Argument must be a string";
        }
    }

    prepend(stringToAdd) {
        if (typeof stringToAdd === "string") {
            this.newString = stringToAdd.split("").concat(this.newString);
        } else {
            throw "Argument must be a string";
        }
    }

    insertAt(stringToAdd, index) {
        if (typeof stringToAdd === "string") {
            this.newString.splice(index, 0, ...stringToAdd.split(""));
        } else {
            throw "Argument must be a string";
        }
    }

    remove(startIndex, givenLength) {
        this.newString.splice(startIndex, givenLength);
    }

    allToUpper() {
        this.newString = this.newString.map((letter) => letter.toUpperCase());
    }

    allToLower() {
        this.newString = this.newString.map((letter) => letter.toLowerCase());
    }

    toUpper(index) {
        this.newString[index] = this.newString[index].toUpperCase();
    }

    toLower(index) {
        this.newString[index] = this.newString[index].toLowerCase();
    }

    toString() {
        return this.newString.join("");
    }
}

// let str = new StringBuilder("hello");
// str.append(", there");
// str.prepend("User, ");
// str.insertAt("woop", 5);
// console.log(str.toString());
// str.remove(6, 3);
// str.allToUpper();
// console.log(str.toString());

// let str2 = new StringBuilder("hello");
// str2.append(5);
