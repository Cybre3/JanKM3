function main(commandsArr) {
    let numsArr = [];

    for (let i = 0; i < commandsArr.length; i++) {
        commandsArr[i] === 'add' ? numsArr.push(i + 1) : numsArr.pop();
    }

    numsArr.length > 0 ? console.log(numsArr.join('\n')) : console.log('Empty');
}

main(['add', 'add', 'add', 'add']);
main(['add', 'add', 'remove', 'add', 'add']);
main(['remove', 'remove', 'remove']);
