import React, { Component } from 'react';
import ButtonPannel from './ButtonPanel';
import Display from './Display';
import Button from './Button';
import calculate from '../logic/calculate';

const buttons = [
  ['AC', '+/-', '%', '/'],
  ['9', '8', '7', '*'],
  ['6', '5', '4', '+'],
  ['3', '2', '1', '-'],
  ['0', '.', '='],
];
class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      prev: '0',
      next: '0',
      operator: null,
    };
  }

  handledisplay = (prev, next, tot, op) => {
    let ans;
    if (tot) {
      ans = tot;
    } else if (!op) {
      ans = prev;
    } else {
      ans = next;
    }
    return ans;
  };

  handleClick = e => {
    const {
      total, next, operator, prev,
    } = this.state;
    const res = calculate({
      total, next, operator, prev,
    }, e.target.value);

    this.setState({
      ...res,
    });
  };

  render() {
    const {
      prev, next, total, operator,
    } = this.state;
    return (
      <>
        <div className="App">
          <div className="App__calculator">
            <Display current={this.handledisplay(prev, next, total, operator)} />
            <ButtonPannel>
              {buttons.map(group => (
                <div key={group} className="row">
                  {group.map(button => {
                    const operators = ['+', '-', '*', '/', '='];
                    const isOperator = operators.includes(button);
                    return (
                      <Button
                        onClick={this.handleClick}
                        key={button}
                        name={button}
                        color={isOperator}
                        wide={button === '0'}
                      />
                    );
                  })}
                </div>
              ))}
            </ButtonPannel>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
