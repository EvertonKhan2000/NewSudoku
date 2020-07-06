//moving to 3d array - put [0] at end of all list mentions


// maybe allow user to change size of the grid they want?
// box width i.e. 2 (rows / cols / boxes are 2 ^ 2)
const size = 2;
let testMatrix = [[1, 2, 3, 4],
[3, 4, 1, 2],
[2, 3, 4, 1],
[4, 1, 2, 3]]

// takes a number and checks if it is a provided list and returns true or false depending on the answer
// for checking rows
function rowCheck(list, row, number) {
    let i, check = true;

    for (i = 0; i < list[row].length; i++) {
        console.log(number);
        console.log(list[i]);

        if (number == list[row][i]) {
            check = false;
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
    let columnPad = (size - (whichBox % size));
    console.log(size);

    // eliminating hangovers in an incomplete row, is the box down from row 0? by how many boxes?
    let rowPad = (whichBox - (whichBox % size) / size);

    let baseRow = 0, baseCol = 0;

    // variables for searching from the top left coord in a box, adjusted for box size
    console.log(whichBox);


    baseCol += columnPad * size - size;
    baseRow += rowPad * size;

    let check = false;
    let i, x;

    //row
    for (let i = 0; i < size; i++) {
        //column
        for (let x = 0; x < size; x++) {
            console.log(baseRow);
            console.log(baseCol);
            console.log(i);
            console.log(x);
            console.log(list);
            console.log(list[baseRow + i][baseCol + x]);

            if (number == list[baseRow + i][baseCol + x]) {
                check = true;
                // can't use break, figure out more efficient way
                break;
            }
        }
        return check;
    }
}

// converts x / y to corresponding 'box' relative to size of grid
function whichBox(whereRowY, whereColX) {
    let i, boxRow, boxCol, box;

    // box column X
    for (i = 0; i < size; i++) {
        if ((whereColX - size) < 1) {
            boxCol = i;
        }
    }

    // box row Y
    for (i = 0; i < size; i++) {
        if ((whereRowY - size) < 1) {
            boxRow = i;
        }
    }

    console.log(boxCol)
    console.log(whereRowY)

    //which box
    box = (boxRow - 1) * size + boxCol;

    return box;
}

// old and stinky
/*// takes a no. (whichNo), checks if it is already in the row, col, or box (testType) specified (whereNo)
function numberCheck(testType, whereNo, whichNo) {
  if (testType == 'row') {
    if (rowCheck(testMatrix[whereNo], whichNo)) {
      break;
    }
  }
  if (testType == 'col') {
    if (colCheck(testMatrix, whereNo, whichNo)) {
      break;
    }
  }
  if (testType == 'box') {
    if (boxCheck(testMatrix, whereNo, whichNo)) {
     // break;
    }
*/
// takes a no. (whichNo), checks if it is already in the row, col, or box specified (whereNo)
export function numberCheck(Matrix, whichNo, whereRowY, whereColX) {
    let check = false;
    console.log(whichNo)

    if (rowCheck(Matrix, whereRowY, whichNo)) {
        if (colCheck(Matrix, whereColX, whichNo)) {
            if (boxCheck(Matrix, whichBox(whereRowY,whereColX), whichNo)) {
                check = true;
            }
        }
    }

    return check;


}