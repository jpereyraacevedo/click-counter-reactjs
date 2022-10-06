import './App.css';
import { useState } from 'react';
import Counter from './components/Counter/Counter';
import Button from "./components/Button/Button"
import logoImage from "./resources/images/freecodecamp-logo.png"


function App() {

  let [numClicks, setNumClicks] = useState(0);

  let handleClick = () => {
    setNumClicks (numClicks + 1);
  }

  let resetCounter = () => {
    setNumClicks (0)
  }

  return (
    <div className="App">
      <div className="logo-container">
        <img 
          src={logoImage} 
          alt="Blabla" 
          className="logo-image"/>
      </div>
      <div className="counter-container">
        <Counter clicksNumber={ numClicks } />
        <Button 
          text="Click" 
          isClickButton= { true } 
          handleClick= {handleClick} />
        <Button
        text="Reset" 
        isClickButton= { false } 
        handleClick= {resetCounter} />
      </div>
    </div>
  );
}

export default App;
