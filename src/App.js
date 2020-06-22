import React from 'react';
import logo from './logo.svg';
import './App.css';
import { YourComponent } from './LoopingTxt';

function App() {
  return (
<div>

    <p class = "Title"> Soduku Solver</p>
    <div id = "container">
    <YourComponent/>
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



export default App;
