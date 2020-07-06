//moving to 3d array - put [0] at end of all list mentions


// maybe allow user to change size of the grid they want?
// box width i.e. 2 (rows / cols / boxes are 2 ^ 2)

const size = 2;

/* let testMatrix = [[1, 2, 3, 4],
[3, 4, 1, 2],
[2, 3, 4, 1],
[4, 1, 2, 3]] */

let testMatrix = [
[null, 2, 3, null],
[3, null, null, null],
[2, null, null, null],
[null, null, null, null]
]


let testRow = [[1, 2, 3, 4]]

let testColumn = [[1],
[3],
[2],
[4]]

// takes a number and checks if it is a provided list and returns true or false depending on the answer
// for checking rows
function rowCheck(list, row, number) {
    let i, check = true;

    for (i = 0; i < list[row].length; i++) {
        if (number == list[row][i]) {
            check = false;
            //console.log('row goteem ', number, ' = ', list[row]);
            break;
        }
    }
    return check;
}

// takes a number and checks if it is a provided list (with provided column)
// for checking columns
function colCheck(list, column, number) {
    let check = true, i;

    //nos in column
    const length = size * size

    for (i = 0; i < length; i++) {
        if (number == list[i][column]) {
            check = false;
            break;
        }
    }
    return check;

}

function boxCheck(list, whichBox, number) {
    // from base col 0 is the box to the right? by how many boxes?
    let columnPad = ((size - (whichBox % size) - 1));
    let placeHolder = whichBox;

    // eliminating hangovers in an incomplete row, is the box down from row 0? by how many boxes?
    if ((placeHolder % size) != 0) {
        placeHolder += (placeHolder % size);
    }
    let rowPad = (placeHolder / size - 1);

    let baseRow = 0, baseCol = 0;

    // variables for searching from the top left coord in a box, adjusted for box size




    baseCol += columnPad * size;
    baseRow += rowPad * size;

    let check = true;
    let i, x;

    //row
    for (let i = 0; i < size; i++) {
        //column
        for (let x = 0; x < size; x++) {


            if (number == list[baseRow + i][baseCol + x]) {
                check = false;

                //end loop
                break;
            }
        }

        //stop unnecessary looping
        if (check == false) break;
    }
    return check;
}

// converts x / y to corresponding 'box' relative to size of grid
function whichBox(whereRowY, whereColX) {
    let rowAdj, colAdj, boxRow, boxCol, box;

    // adjusting values to start at 1 not 0 do that the '(rowAdj % size) != 0' work properly
    rowAdj = (whereRowY).valueOf() + 1;
    colAdj = whereColX + 1;

    console.log(colAdj)

    // box row Y
    if ((rowAdj % size) != 0) {
        rowAdj += (rowAdj % size);
    }
    boxRow = rowAdj - size;

    // box column X
    if ((colAdj % size) != 0) {
        colAdj += (colAdj % size);
    }
    boxCol = colAdj / size;



    //which box
    box = boxRow + boxCol;

    return box;
}

// takes a no. (whichNo), checks if it is already in the row, col, or box specified (whereNo)
export function numberCheck(Matrix, whichNo, whereRowY, whereColX) {
    let check = false;
    if (whichNo < 1 || whichNo > size * size ) console.log('whoopsy daisy bubba');
    console.log(whichNo)

    if (rowCheck(Matrix,whereRowY, whichNo)) {

        if (colCheck(Matrix, whereColX, whichNo)) {
            if (boxCheck(Matrix, whichBox(whereRowY, whereColX), whichNo)) {
                check = true;
            }
        }
    }

    return check;


}