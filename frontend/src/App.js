import './App.css';
import Button from 'react-bootstrap/Button';
import Vizualizer from './Vizualizer'
import Controls from './Controls'
import { useState, useEffect  } from 'react';

function App() {
  const createArray = () => {
    let temp = []
    for(let i = 0; i <= arrayLength; i++){
      let number = (Math.floor(Math.random(0, 1)*100))
      if(number === 0) {
        number++
      }
      temp.push(number)
    }
    return(temp)
  }

  const [arrayLength, setArrayLength] = useState(25)
  const [sortType, setSortType] = useState()
  const [start, setStart] = useState(false)
  const [array, setArray] = useState(createArray())

  useEffect(() => {
    setArray(createArray())
    // document.title = `You clicked ${count} times`;
  },[arrayLength]);

  return (
    <div className="App">
      <h1>{array.length}</h1>
      <Controls createArray={createArray} setStart={setStart} setArrayLength={setArrayLength} setSortType={setSortType} setArray={setArray}></Controls>
      <Vizualizer array={array} start={start} arrayLength={arrayLength} sortType={sortType}></Vizualizer>
    </div>
  );
}

export default App;