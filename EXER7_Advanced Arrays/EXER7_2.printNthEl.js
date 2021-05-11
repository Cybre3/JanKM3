function main(strArr) {
    let nthStep = +strArr.pop();

    for (let i = 0; i < strArr.length; i += nthStep) {
        console.log(strArr[i]);
    }
}

main(['1', '2', '3', '4', '5', '6']);
main(['5', '20', '31', '4', '20', '2']);
main(['dsa', 'asd', 'test', 'tset', '2']);
