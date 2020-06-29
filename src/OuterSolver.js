import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { numberCheck } from './Testing';

function innerSolve(list) {
    for (row in values) {
      for (item in row) {
        if (item === null) {
          for (let num = 1; num++; num <= values.length) {
            if (numberCheck(list, num, row, item)) {
              list[row][item] = num;
              innerSolve()
              list[row][item] = 0
            }
          }
        }
      }
    }
  }
  
  function ValidSolverCheck(){
  
  
  }
  
  export function SmartSolve(values) {
  
    let list = values;
  
    innerSolve();
    setValues(list);
  }
  
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
  