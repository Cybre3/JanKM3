function main(coordArr) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
    ];
    const player1 = "X";
    const player2 = "O";
    let currentPlayer = player1;
    const checkBoardForWin = [
        rowWin,
        col1Win,
        col2Win,
        col3Win,
        leftDiagWin,
        rightDiagWin,
    ];
    let boardFilled = false;
    let winner = "";

    for (let i = 0; i < coordArr.length; i++) {
        let [row, col] = coordArr[i].split(" ");

        if (board[row][col] !== false && i + 1) {
            console.log("This space is already taken. Please choose another!");
            i++;
            [row, col] = coordArr[i].split(" ");
            board[row][col] = currentPlayer;
            if (currentPlayer === player1) {
                currentPlayer = player2;
            } else {
                currentPlayer = player1;
            }
            continue;
        } else if (board[row][col] !== false && i + 1 === undefined) {
            break;
        } else {
            board[row][col] = currentPlayer;

            if (currentPlayer === player1) {
                currentPlayer = player2;
            } else {
                currentPlayer = player1;
            }

            for (let possibleWinOn of checkBoardForWin) {
                if (possibleWinOn(board)) {
                    winner = possibleWinOn(board);
                    break;
                }
            }

            if (winner === "X" || winner === "O") {
                break;
            }

            let stillFalse = false;

            for (let row of board) {
                if (row.includes(false)) {
                    stillFalse = true;
                }
            }

            if (!stillFalse) {
                boardFilled = true;
            }

            if (boardFilled) {
                console.log("The game has ended! Nobody wins :(");
                break;
            }
        }
    }

    console.log(`Player ${winner} wins!`);
    board.forEach((arr) => console.log(arr.join("   ")));
}

function rowWin(board) {
    for (let row of board) {
        const p1Win = row.every((space) => space === "X");
        const p2Win = row.every((space) => space === "O");
        if (p1Win) {
            return "X";
        }
        if (p2Win) {
            return "O";
        }
    }
}

function col1Win(board) {
    let col1 = [];
    for (let row of board) {
        for (let index in row) {
            index = +index;
            if (index === 0) {
                col1.push(row[index]);
            }
        }
    }
    const p1Win = col1.every((space) => space === "X");
    const p2Win = col1.every((space) => space === "O");
    if (p1Win) {
        return "X";
    }
    if (p2Win) {
        return "O";
    }
}

function col2Win(board) {
    let col2 = [];
    for (let row of board) {
        for (let index in row) {
            index = +index;
            if (index === 1) {
                col2.push(row[index]);
            }
        }
    }
    const p1Win = col2.every((space) => space === "X");
    const p2Win = col2.every((space) => space === "O");
    if (p1Win) {
        return "X";
    }
    if (p2Win) {
        return "O";
    }
}

function col3Win(board) {
    let col3 = [];
    for (let row of board) {
        for (let index in row) {
            index = +index;
            if (index === 2) {
                col3.push(row[index]);
            }
        }
    }
    const p1Win = col3.every((space) => space === "X");
    const p2Win = col3.every((space) => space === "O");
    if (p1Win) {
        return "X";
    }
    if (p2Win) {
        return "O";
    }
}

function leftDiagWin(board) {
    let allSpacesArr = [];
    let leftDiagArr = [];

    board.forEach((row) => {
        allSpacesArr = allSpacesArr.concat(row);
    });

    for (let i = 0; i < allSpacesArr.length; i += 4) {
        leftDiagArr.push(allSpacesArr[i]);
    }
    const p1Win = leftDiagArr.every((space) => space === "X");
    const p2Win = leftDiagArr.every((space) => space === "O");
    if (p1Win) {
        return "X";
    }
    if (p2Win) {
        return "O";
    }
}

function rightDiagWin(board) {
    let allSpacesArr = [];
    let rightDiagArr = [];

    board.forEach((row) => {
        allSpacesArr = allSpacesArr.concat(row);
    });

    for (let i = 2; i < allSpacesArr.length - 1; i += 2) {
        rightDiagArr.push(allSpacesArr[i]);
    }
    const p1Win = rightDiagArr.every((space) => space === "X");
    const p2Win = rightDiagArr.every((space) => space === "O");
    if (p1Win) {
        return "X";
    }
    if (p2Win) {
        return "O";
    }
}

main(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
main(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
main(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
