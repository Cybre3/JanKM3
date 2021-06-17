function main(stringArr) {
    stringArr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(stringArr.join('\n'));
}

main(["alpha", "beta", "gamma"]);
main(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
main(["test", "Deny", "omen", "Default"]);
