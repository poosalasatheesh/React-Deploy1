import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);
  return (
    <div className='App'>
      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count++)}>Update</button>
    </div>
  );
}

export default App;
