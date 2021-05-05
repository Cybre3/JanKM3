// let a = null;
// let b = 'welcome';
// let c = 'Done';
// console.log(a, b, c);

// let car = { type: 'Infinity', model: 'Spaceship', color: 'blue', rims: {} };

// let carType = car.type;
// let carType2 = car['type'];
// car.year = 2018;
// car.isSpaceShip = false;
// car['isRocket'] = true;
// console.log(car[0]);
// console.log(car, car.length);

// console.log(42 == '42' ? 4 : 10);
// console.log(42 === '42' ? 4 : 10);

// let someArray = new Array();
// someArray.push('cat');
// let someObject = new Object();
// someObject.pet = 'dog';
// console.log(someArray);
// console.log(someObject);

// function foo(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// foo(1, 2);

function printName(firstName, lastName) {  
    let name = firstName;  
    if (lastName != undefined) {     
        name += ' ' + lastName;  
    }  
    console.log(name);
}

printName('tony');
