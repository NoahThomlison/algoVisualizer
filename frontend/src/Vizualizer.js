import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Vizualizer({start, sortType, arrayLength}) {
  
  const createArray = () => {
    let temp = []
    for(let i = 0; i <= arrayLength; i++){
      temp.push(Math.floor(Math.random(0, 1)*100))
    }
    return(temp)
  }
  // let array = createArray()
  const [array, setarray] = useState([createArray()])


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const selectionSort = (array) => {
    let holder
    for (let i = 0 ; i <= array.length; i++){

      for (let j = 0 ; j <= array.length; j++){
        if(array[j] > array[i]){
          holder = array[i]
          array[i] = array[j]
          array[j] = holder
        }
      }
    }
    return(array)
  }

  if(start){
    const timer = setInterval(selectionSort(array), 20000)
    // timer()
    // selectionSort(array)
  }

  return (
    <div className="vizualizerContainer">
      {array.map((item) => {
        return(
        <div style={{backgroundColor: "blue", height: `${item*5}px`, width: `${array.length}`}}>{item}</div>
        )
      })}
    </div>
  );
}

export default Vizualizer;
