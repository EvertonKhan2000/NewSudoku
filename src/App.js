import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class = "idk">
      <p class = "Title"> Soduku Solver</p>
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
