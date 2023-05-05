import './App.css';
import React from 'react';
import User from './User';

function App() {
  return (
    <div className="App">
      <h1 style={{color:"red"}}>App compo</h1>
      <User data={{name:"sagar polekar",age:30,address:"narhe"}} />
       </div>
  );
}

export default App;
