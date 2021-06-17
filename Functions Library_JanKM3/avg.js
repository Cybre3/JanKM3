function avg(listOfNums) {
    let sum = 0;

    for (let i = 0; i < listOfNums.length; i++) {
        sum += listOfNums[i];
    }

    return sum / listOfNums.length;
}

// EXAMPLE FOR SORT BY AVG
let sorted = classGradesArr.sort(function (student1, student2) {
    return avg(student1[1]) - avg(student2[1]); // arr of grades attached to student name
});
