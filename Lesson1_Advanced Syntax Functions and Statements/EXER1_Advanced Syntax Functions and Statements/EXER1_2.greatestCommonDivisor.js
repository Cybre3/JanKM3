function main(num1, num2) {
    
    for(let i = num2; i > 0; i--) {
        if(num1 % i === 0 && num2 % i === 0){
            console.log(i);
            return;
        } 
    }
}

main(15, 5);
main(2154, 458);
main(1000, 500);
main(9, 7);