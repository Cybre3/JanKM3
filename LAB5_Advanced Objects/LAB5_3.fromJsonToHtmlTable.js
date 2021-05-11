function main(arrJSON) {
    const inputJSON = JSON.parse(arrJSON);
    let output = ['<table>'];
    let headerArr = ['  <tr>'];
    const headerLabels = Object.keys(inputJSON[0]);

    for (let eachLabel of headerLabels) {
        headerArr.push(`<th>${eachLabel}</th>`);
    }

    headerArr.push('</tr>');
    output.push(headerArr.join(''));

    for (let eachObj of inputJSON) {
        let eachDataRowArr = ['  <tr>'];
        for (let values of Object.values(eachObj)) {
            eachDataRowArr.push(`<td>${encodeURIComponent(values)}</td>`);
        }

        eachDataRowArr.push('</tr>');
        output.push(eachDataRowArr.join(''));
    }

    output.push('</table>');

    console.log(output.join('\n'));
}

main([
    '[{"Name":"Tomatoes & Chips","Price":2.35}, {"Name":"J&B Chocolate","Price":0.96}]',
]);

/* 
<table>   
    <tr><th>Name</th><th>Price</th></tr>    <tr><td>Tomatoes &amp; Chips</td><td>2.35</td></tr>    
    <tr><td>J&amp;B Chocolate</td><td>0.96</td></tr> 
</table>
*/
