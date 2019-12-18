import React from 'react';
import './App.css';
import Autocomplete from './Autocomplete';

function App() {
  return (
    <div className="App">
      <Autocomplete
        options={[
          "Papaya",
          "Football",
          "Macron",
          "LifeStyle",
          "Persimmon",
          "Mercedes",
          "Renault",
          "Paw Paw",
          "Fishing",
          "Outlaw",
          "Mathematics",
          "Prickly Pear",
          "JavaScript",
          "React",
          "Peach",
          "Redux",
          "Node",
          "Pomegranate",
          "Tomato",
          "Fruits",
          "Christmas",
          "Pineapple"
        ]}
      />
    </div>
  );
}

export default App;
