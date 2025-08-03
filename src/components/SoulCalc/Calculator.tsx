import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Calculator.css';

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleInput = (value: string) => {
    setExpression(prev => prev + value);
  };

  const calculate = () => {
    try {
      // Check for 42 easter egg
      if (expression === '42') {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 3000);
      }
      // eslint-disable-next-line no-eval
      const evalResult = eval(expression);
      setResult(evalResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setExpression('');
    setResult('');
  };

  const clearEntry = () => {
    setExpression('');
  };

  const backspace = () => {
    setExpression(prev => prev.slice(0, -1));
  };

  const buttons = [
    '7', '8', '9', '/', '√', 'sin',
    '4', '5', '6', '*', 'π', 'cos',
    '1', '2', '3', '-', 'e', 'tan',
    '0', '.', '=', '+', '!', 'ln',
    '(', ')', '^', 'CE', 'C', '⌫'
  ];

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clear();
    } else if (value === 'CE') {
      clearEntry();
    } else if (value === '⌫') {
      backspace();
    } else {
      handleInput(value);
    }
  };

  return (
    <div className="soulcalc-container">
      <motion.div 
        className="calculator-frame"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="display">
          <div className="expression">{expression}</div>
          <div className="result">{result}</div>
        </div>
        
        <div className="button-grid">
          {buttons.map((btn) => (
            <motion.button
              key={btn}
              className="calc-button"
              onClick={() => handleButtonClick(btn)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {btn}
            </motion.button>
          ))}
        </div>
        
        {showEasterEgg && (
          <motion.div 
            className="easter-egg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            "The answer to life, the universe & everything."
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Calculator;