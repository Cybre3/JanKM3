function main(strArr) {
    let delimiter = strArr.pop();

    console.log(strArr.join(delimiter));
}

main(['One', 'Two', 'Three', 'Four', 'Five', '-']);
main(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);
