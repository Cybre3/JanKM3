function main(integer) {
    let strNum = integer.toString();
    let isSame = true;
    let sum = 0;

    for(let index in strNum){
        sum += +strNum[index];
        if(strNum[+index + 1] && (strNum[+index + 1] !== strNum[index])) {
            isSame = false;
        }
    
    }

    console.log(`${isSame}\n${sum}`);
    
}

main(2222222);
main(1234);