import './App.css';
import logoImage from "./resources/images/freecodecamp-logo.png"


function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img 
          src={logoImage} 
          alt="Blabla" 
          className="logo-image"/>
      </div>
      <div className="counter-container">
        
      </div>
    </div>
  );
}

export default App;
