import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { numberCheck } from './Testing';

function sodokoSolver(data) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (data[i][j] == null) {
        for (let k = 1; k <= 4; k++) {
          console.log(data);
          console.log(i);
          console.log(j);
          console.log(k);
          if (numberCheck(data, k, i, j)) {
            data[i][j] = k;
          if (sodokoSolver(data)) {
           return true;
          } else {
           data[i][j] = null;
           console.log('dumb')
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}  
  
  function ValidSolverCheck(){
  
  
  }
  
  export function SmartSolve(values) {
  
    let list = values;


    return sodokoSolver(list.list);
  }
  
  /*
  function innerDumbSolve(list) {
  
    for (row in values) {
      for (item in row) {
        if (item === null) {
          let possibilities = 0;
  
          for (let num = 1; num++; num <= values.length) {
  
            if (true) {
              list[row][item][num].push(num);
              possibilities++;
            }
  
          }
  
          if (possibilities === 1)
          {
            innerSolve()
          }
        }
      }
    }
  }
  
  
  function HumanSolve(values) {
  
    let list = values;
    innerDumbSolve();
    setValues(list);
  }
  */
  