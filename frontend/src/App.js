import './App.css';
import Button from 'react-bootstrap/Button';
import Vizualizer from './Vizualizer'
import Controls from './Controls'
import { useState } from 'react';

function App() {
  const [arrayLength, setArrayLength] = useState()
  const [sortType, setSortType] = useState()
  const [start, setStart] = useState()

  return (
    <div className="App">
      <Controls setStart={setStart} setArrayLength={setArrayLength} setSortType={setSortType}></Controls>
      <Vizualizer start={start} arrayLength={arrayLength} sortType={sortType}></Vizualizer>
    </div>
  );
}

export default App;