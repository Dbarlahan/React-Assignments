import { getSuggestedQuery } from '@testing-library/dom';
import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
      lastName={'Gates'}
      firstName={'Bill'}
      age={65}
      hairColor={'Gray'}
      />

      <PersonCard 
      lastName={'Bezos'}
      firstName={'Jeff'}
      age={57}
      hairColor={'Gray'}
      />

      <PersonCard 
      lastName={'Musk'}
      firstName={'Elon'}
      age={49}
      hairColor={'Brown'}
      />

      <PersonCard 
      lastName={'Zuckerberg'}
      firstName={'Mark'}
      age={36}
      hairColor={'Blonde'}
      />
    </div>
  );
}

export default App;
