import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { YourComponent } from './LoopingTxt';
import { SmartSolve } from './OuterSolver';

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

        onClick={() => {setValues(SmartSolve(values))
        console.log(values)}}
        title="Solve"
        color="#841584"
        accessibilityLabel="We out here solving"
      >

        solve
      </button>



    </div>

  );
}

export default App;
