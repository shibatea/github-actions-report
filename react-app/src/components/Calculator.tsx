import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const inputNumber = (num: number) => {
    if (waitingForNewValue) {
      setDisplay(String(num));
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputOperator = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operator);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForNewValue(true);
    setOperator(nextOperator);
  };

  const calculate = (firstValue: number, secondValue: number, operator: string): number => {
    switch (operator) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operator) {
      const newValue = calculate(previousValue, inputValue, operator);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperator(null);
      setWaitingForNewValue(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNewValue(false);
  };

  return (
    <div className="calculator">
      <h2>電卓</h2>
      <div className="calculator-display" data-testid="display">
        {display}
      </div>
      <div className="calculator-buttons">
        <button className="calculator-button" onClick={clear}>C</button>
        <button className="calculator-button operator" onClick={() => inputOperator('/')}>/</button>
        <button className="calculator-button operator" onClick={() => inputOperator('*')}>×</button>
        <button className="calculator-button operator" onClick={() => inputOperator('-')}>-</button>

        <button className="calculator-button" onClick={() => inputNumber(7)}>7</button>
        <button className="calculator-button" onClick={() => inputNumber(8)}>8</button>
        <button className="calculator-button" onClick={() => inputNumber(9)}>9</button>
        <button className="calculator-button operator" onClick={() => inputOperator('+')}>+</button>

        <button className="calculator-button" onClick={() => inputNumber(4)}>4</button>
        <button className="calculator-button" onClick={() => inputNumber(5)}>5</button>
        <button className="calculator-button" onClick={() => inputNumber(6)}>6</button>
        <button className="calculator-button operator" onClick={performCalculation}>=</button>

        <button className="calculator-button" onClick={() => inputNumber(1)}>1</button>
        <button className="calculator-button" onClick={() => inputNumber(2)}>2</button>
        <button className="calculator-button" onClick={() => inputNumber(3)}>3</button>
        <button className="calculator-button" onClick={() => inputNumber(0)}>0</button>
      </div>
    </div>
  );
};

export default Calculator;
