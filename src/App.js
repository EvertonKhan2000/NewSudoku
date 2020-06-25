import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { YourComponent } from './LoopingTxt';


function App() {

  const [values, setValues] = useState({
    list: [[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]
    ]
  });

  return (
    <div>

      <p class="Title"> Soduku Solver</p>
      <div class="container">
        <YourComponent setter={setValues} values={values} />
      </div>
      <button class="solvebutton"

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

// takes a number and checks if it is a provided list and returns true or false depending on the answer
function numberCheck(list, number) {

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

export default App;
