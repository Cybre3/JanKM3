class Rat {
    constructor(ratName) {
        this.name = ratName;
        this.unitedRats = [];
    }

    unite(otherRat) {
        this.unitedRats.push(otherRat);
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let output = this.name;
        for(let rat of this.unitedRats){
            output += `\n##${rat.name}`;
        }
        return output;
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString());

console.log(firstRat.getRats());

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));

console.log(firstRat.getRats());
console.log(firstRat.toString());

console.log(firstRat);