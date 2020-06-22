import React from 'react';
import logo from './logo.svg';
import './App.css';
import { YourComponent } from './LoopingTxt';

function App() {
  return (
<div>
    <p> Auto Suduko </p>
    <div id = "container">
    <YourComponent/>
    </div>
    <button

    

      onPress={() => { console.log("aagh") }}
      title="Solve"
      color="#841584"
      accessibilityLabel="We out here solving"
>
    </button>

    </div>

  );
}



export default App;
