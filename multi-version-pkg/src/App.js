import logo from './logo.svg';
import { useState } from 'react';
import { Button } from 'antd';
import { Button as Button4 } from 'antd4';

import JsonView from './JsonView';

import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1)
  }

  const handleMinus = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='btn'>
          <p>{count}</p>
          <Button type='primary' onClick={handlePlus}>Plus</Button>
          <Button4 type='secondary' onClick={handleMinus}>Minus</Button4>
        </div>
      </header>
      <JsonView></JsonView>
    </div>
  );
}

export default App;
