import React from 'react';
import logo from './logo.svg';
import './App.css';

export class YourComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      values: []
    };
  }

  update(i) {
    console.log(this.state.value)
    this.props.setter((finalstate) => {
      console.log(this);

      const list = finalstate.list.map((row, j) => {

        if (j === (Math.floor(i / 4))) {
          var newrow = row.map((item, k) => {

            if (k == (i % 4)) {
              return this.state.value;
            }
            else {
              return item;
            }
          });

          return newrow;
        }
        else {
          return row;
        }
      });

      console.log(list)

      return {
        list
      };
    });
  }

  handleChange(i, e) {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    }, this.update.bind(this, i));

  }

  render() {
    var fieldsArray = [];


    for (var i = 0; i < 16; i++) {
      fieldsArray.push(
        <div >
          <label>
            <input class="box"
              type='number'
              value={this.state.values[i]}
              name={this.state.values[i]}
              onChange={this.handleChange.bind(this, i)} />
          </label> 
        </div>
      );
    }

    return (
      <div class='inputs'>
        {fieldsArray}
      </div>
    );
  }
}