import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { numberCheck } from './Testing';

function innerSolve(list) {
    for (let row in list.list) {
      
      for (let item in list.list[row]) {
        if (list.list[row][item] === null) {
          for (let num = 1; num++; num <= 4) {
            console.log(list.list.length)
            if (numberCheck(list.list, num, row, item)) {
              list.list[row][item] = num;
              innerSolve(list)
              list.list[row][item] = null;
            }
          }
        }
      }
    }

    console.log(list);
    return list;
  }
  
  function ValidSolverCheck(){
  
  
  }
  
  export function SmartSolve(values) {
  
    let list = values;


    return innerSolve(list);
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
  