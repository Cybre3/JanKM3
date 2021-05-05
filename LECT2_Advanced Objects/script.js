// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 50
// };

// console.log(Object.entries(person));

//     // convert array to an object
// function makeList(someArr) {
//     let myObject = {};
//     // even entries are the key, odd is the value
//     for(i = 0; i < someArr.length; i++) {
//         if(i % 2 === 0) {
//             // console.log('The key should be', someArr[i]);
//             // console.log('The key should be', someArr[i + 1]);
//             myObject[someArr[i]] = someArr[i + 1];
//         } else {
//             // console.log('odd', i);
//         }
//     }

//     console.log(myObject);
// }

// makeList(['Yoghurt', 48, 'Rice', 138, 'Apple', 52]);

const person = {
    firstName: 'John',
    lastName: 'Doe',
    returnThis: function () {
        return this;
    },
};

console.log(person.returnThis());
