function firstThing() {
    return 'First Thing'
}

function secondThing() {
    return firstThing() + ' Second Thing!';
}

secondThing();

/* 
cause stack overflow
function firstThing() {
    return secondThing()
}

function secondThing() {
    return firstThing() + ' Second Thing!';
}

secondThing();
*/