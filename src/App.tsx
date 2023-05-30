import React from 'react';
import Details from './Details'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="head">My Details</h1>
      <Details
      name="Jake"
      email="jake@gmail.com"
      age={25}
      friends={["Alex","Ben","Sara"]}
      />

    </div>
  );
}

export default App;
