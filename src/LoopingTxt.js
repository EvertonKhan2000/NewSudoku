import React from 'react';
import logo from './logo.svg';
import './App.css';

export class YourComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { values: [] };
    }
  
    handleChange(i, e) {
      this.setState({
        values: { ...this.state.values, [i]: e.target.value }
      });
    }
  
    render() {
      var fieldsArray = [];
  
      
      for (var i = 0; i < 16; i++) {
        fieldsArray.push(
          <div >
              <label>
                  <input class = "box" 
                    type='number' 
                    value={this.state.values[i]} 
                    name={this.state.values[i]} 
                    onChange={this.handleChange.bind(this, i)} />
              </label>
          </div>
        );
      }
  
      return (
        <div class = 'inputs'>
          {fieldsArray}
        </div>
      );
    }
  }