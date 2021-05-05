function main(jsonArr) {
    let output = '<table>';

    for (let employeeJsonStr of jsonArr) {
        let parsedArr = JSON.parse(employeeJsonStr);

        output += `\n  \<tr>`;

        employeeInfoObjValues(parsedArr).forEach(
            (value) => (output += `\n    \<td>${value}\</td>`)
        );

        output += `\n  \</tr>`;
    }

    output += `\n\</table>`;

    console.log(output);
}

function employeeInfoObjValues(parsedEmployObj) {
    let employeeArr = Object.values(parsedEmployObj);
    return employeeArr;
}
main([
    '{"name":"Peter","position":"Manager","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"George","position":"Lecturer","salary":1000}',
]);
