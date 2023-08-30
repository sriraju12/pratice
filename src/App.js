import logo from './logo.svg';
import './App.css';
import Component1 from './Components/PropsDrilling/Component1';
import { store } from './Components/Context Api/store';
import ComponentA from './Components/Context Api/ComponentA';
import ComponentB from './Components/Context Api/ComponentB';
import { useState } from 'react';

function App() {
  // const [name, setName] = useState('hello raju');
  return (
    <div className="App">
      <Component1  />
      {/* <store.Provider value={[name, setName]} >
        <ComponentA />
        <ComponentB />
        <label>Update Name:</label>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
      </store.Provider> */}

    </div>
  );
}

export default App;
