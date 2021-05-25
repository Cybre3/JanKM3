// // Declare a Class, the order factory is open! Plz order some objects. Nobody has ordered yet. :(

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

// // An object order has been placed to the class aka object factory above! Lets make a new object where the key height is 10 and key width is 20.
// // The new object has been named someRectangle, lets give it the value of the object we made!
// let someectangle = new Rectangle(10, 20);

// // Make a new variable and assogn the value to a new Class

// let Rectangle2 = class Rectangle2 {
//     // resolve to a new Object
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// };

// let secondRectangle = new Rectangle2(20, 42);
// console.log(someectangle, secondRectangle);

// /* ----------------------------------------------------------------------- */

// // Old School Code syntax before ES6

// function Person(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
// }

// Person.prototype.nationality = "American";

// let person1 = new Person("Sam", "Code", 19);
// console.log(person1);
// console.log(person1.nationality);

// function Rectangle3(width, height) {
//     this.width = width;
//     this.height = height;
// }

// Rectangle3.prototype.area = function () {
//     return this.width * this.height;
// };

// let rect = new Rectangle3(3, 5);

// /* ---------------------------------------------------------------- */

// // Static Method

// class Student {
//     constructor(name, grade) {
//         this.name = name;
//         this.grade = grade;
//     }
//     // Method! A function inside your object
//     calcGrade() {
//         return this.grade * 1.42;
//     }

//     // Method only the Class can use, not the object made from the Class
//     static greet() {
//         return "hello student!";
//     }
// }

// let student = new Student("Bran", 3);
// console.log(student, student.calcGrade());
// console.log(Student.greet());

// /* -------------------------------------------------------------- */

// // Getters and Setters

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     get diameter() {
//         return 2 * this.radius;
//     }
//     set diameter(diameter) {
//         this.radius = diameter / 2;
//     }
//     get area() {
//         return Math.PI * this.radius * this.radius;
//     }
// }

// let c = new Circle(2);
// console.log(`Radius: ${c.radius}`); // 2
// console.log(`Diameter: ${c.diameter}`); // 4
// console.log(`Area: ${c.area}`); // 12.566370614359172

// console.log('----------------------');

// c.diameter = 1.6;
// console.log('The new circle ', c);
// console.log(`Radius: ${c.radius}`); // 0.8
// console.log(`Diameter: ${c.diameter}`); // 1.6
// console.log(`Area: ${c.area}`); // 2.0106192982974678

/* ----------------------------------------------------------- */

// Class Inheritance

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email); // importing from Person class
        this.subject = subject;
    }
}

let newTeacher = new Teacher(
    "Mr. TeacherFace",
    "tf@school.com",
    "Full Stack Dev"
);
console.log(newTeacher);

console.log("--------------------------------");

let p = new Person("Anna", "anna@gmail.com");
console.log(`Person: ${p.name} (${p.email})`); // Person: Anna (anna@gmail.com)
let t = new Teacher("John", "joe@yahoo.com", "JavaScript");
console.log(`Teacher: ${t.name} (${t.email}), teaches ${t.subject}`); // Teacher: John (doe@yahoo.com), teaches JavaScript
