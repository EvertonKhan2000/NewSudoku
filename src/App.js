import React, { useState, useRef  } from 'react';
import logo from './logo.svg';
import './App.css';
import { YourComponent } from './LoopingTxt';

function App() {

  const [values, setValues] = useState({list: [[null, null, null, null],[null, null, null, null],[null, null, null, null],[null, null, null, null]
  ]});

  return (
<div>

    <p class = "Title"> Soduku Solver</p>
    <div class = "container">
    <YourComponent setter = {setValues} values = {values}/>
    </div>
      <button class = "solvebutton"  

        onClick={() => { console.log("aagh") }}
        title="Solve"
        color="#841584"
        accessibilityLabel="We out here solving"
      >

        solve
      </button>

 

    </div>

  );
}

// maybe allow user to change size of the grid they want?
// box width i.e. 2 (rows / cols / boxes are 2 ^ 2)
let size = 2;
let testMatrix = [[1, 2, 3, 4],
[3, 4, 1, 2],
[2, 3, 4, 1],
[4, 1, 2, 3]]

// takes a number and checks if it is a provided list and returns true or false depending on the answer
// for checking rows
function rowCheck(list, number) {

  let check = false;
  let i;

  for (i = 0; i < list.length; i++) {
    if (number == list[i]) {
      check = true;
      break;
    }
  }
  return check;
}

// takes a number and checks if it is a provided list (with provided column)
// for checking columns
function colCheck(list, whichCol, number) {
  let check = false;
  let i;

  //nos in column
  const length = size * size

  for (i = 0; i < length; i++) {
    if (number == list[i][whichCol]) {
      check = true;
      break;
    }
  }
  return check;

}

function boxCheck(list, whichBox, number) {
  // from base col 0 is the box to the right? by how many boxes?
  let columnPad = (size - (whichbox % size));

  // eliminating hangovers in an incomplete row, is the box down from row 0? by how many boxes?
  let rowPad = (whichbox - (whichbox % size) / size);

  let baseRow = 0, baseCol = 0;

  // variables for searching from the top left coord in a box, adjusted for box size
  baseCol += columnPad * size;
  baseRow += rowPad * size;

  let check = false;
  let i, x;

  //row
  for (i = 0; i < size; i++) {
    //column
    for (x = 0; x < size; x++) {
      if (number == list[baseRow + i][baseCol + x]) {
        check = true;
        break;
      }
    }
    return check;
  }
}

// takes a no. (whichNo), checks if it is already in the row, col, or box (testType) specified (whereNo)
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
      break;
    }


  }
}

export default App;
