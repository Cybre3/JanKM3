function main(strArr) {
    let rotateNum = +strArr.pop();

    for(let i = 0; i < rotateNum; i++) {
        strArr.unshift(strArr.pop());
    }

    console.log(strArr.join(' '));
}

main(['1', '2', '3', '4', '2']);
main(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
