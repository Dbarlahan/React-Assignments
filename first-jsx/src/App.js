import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li><span className="lightslategray">Climb Mt. Everest</span></li>
          <li>Run a marathon</li>
          <li><span className="lightslategray">Feed the dogs</span></li>
        </ul>
    </div>
  );
}

export default App;