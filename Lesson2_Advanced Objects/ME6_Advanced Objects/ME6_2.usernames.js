function main(usernNmesArr) {
    let noDuplicatesObj = new Set([...usernNmesArr]);
    
    console.log(
        Array.from(noDuplicatesObj)
            .sort((a, b) => a.length - b.length || a.localeCompare(b))
            .join('\n')
    );
}

main([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston',
]);
