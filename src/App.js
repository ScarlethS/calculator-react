import './App.css';
import Buttons from './components/Buttons';
import Screen from './components/Screen.js';
import ButtonClear from './components/Clear-button';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import FreeCodeCampLogoComp from './components/Logo-component.js';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    const endvalue = input.at(-1);
    const isoperators = isNaN(val) && (val !== '.') && (val !== '=');
    const isvalueoperators = isNaN(endvalue) && (endvalue !== '.') && (endvalue !== '=');
    if(input.length === 0 && isoperators === true){
      alert('Please add a number first');
    }
    else if(isoperators === true && isvalueoperators === true){
      alert('Not allow 2 operators');
    } else {
      setInput(input + val);
    } 
    // setInput(input + val);
    console.log('input',input);
    console.log(input.at(-1));
  };

  const calculateResult = () =>{
    if(input){
      setInput(evaluate(input));
    } else {
      alert('Please add values to calculate')
    }    
  }

  return (
    <div className='App'>
      <FreeCodeCampLogoComp />
        {/* <div className="freecodecamp-logo-container">
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo of freeCodeCamp' />
        </div> */}
      <div className='calculator-container'>
        <Screen input={input}/>
          <div className='rows'>
            <Buttons handleclick={addInput}>1</Buttons>
            <Buttons handleclick={addInput}>2</Buttons>
            <Buttons handleclick={addInput}>3</Buttons>
            <Buttons handleclick={addInput}>+</Buttons>
          </div>
          <div className='rows'>
            <Buttons handleclick={addInput}>4</Buttons>
            <Buttons handleclick={addInput}>5</Buttons>
            <Buttons handleclick={addInput}>6</Buttons>
            <Buttons handleclick={addInput}>-</Buttons>
          </div>
          <div className='rows'>
            <Buttons handleclick={addInput}>7</Buttons>
            <Buttons handleclick={addInput}>8</Buttons>
            <Buttons handleclick={addInput}>9</Buttons>
            <Buttons handleclick={addInput}>*</Buttons>
          </div>
          <div className='rows'>
            <Buttons handleclick={calculateResult}>=</Buttons>
            <Buttons handleclick={addInput}>0</Buttons>
            <Buttons handleclick={addInput}>.</Buttons>
            <Buttons handleclick={addInput}>/</Buttons>
          </div>
          <div className='rows'>
            <ButtonClear handleClear={() => setInput('')}>Clear</ButtonClear>
          </div>
      </div>
    </div>

  );
}

export default App;
