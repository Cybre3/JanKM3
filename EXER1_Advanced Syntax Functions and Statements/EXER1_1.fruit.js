function main(fruit, weight, price) {
    console.log(`I need $${(price * weight / 1000).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`);
}

main('orange', 2500, 1.80);
main('apple', 1563, 2.35);