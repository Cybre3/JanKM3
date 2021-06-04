class List {
    constructor() {
        this.list = [].sort((a, b) => a - b);
    }

    add(element) {
        this.list.push(element);
    }

    remove(index) {
        this.list.splice(index, 1);
    }

    get(index) {
        return this.list[index];
    }

    size() {
        return this.list.length;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
