class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        
    }

    toString() {
        return this.firstName + ' ' + this.lastName + ' ' + '(' + 'age: ' + this.age + ', ' + 'email: ' + this.email + ')';
    }

    static getPeople() {
        return [new Person("Anna", "Simpson", 22, "anna@yahoo.com")];
    }
}

function main(){
    return [
        new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
        new Person('Kingsland University'),
        new Person('Stephan', 'Johnson', 25),
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    ];
}


// let persons = main(); 
// persons.forEach(person => console.log(person.toString()));
