import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import $ from 'jquery';

function Vizualizer({start, sortType, arrayLength}) {
  
  const createArray = () => {
    let temp = []
    for(let i = 0; i <= arrayLength; i++){
      temp.push(Math.floor(Math.random(0, 1)*100))
    }
    return(temp)
  }
  let array = createArray()
  const [sortedArray, setSortedArray] = useState([createArray()])

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const timer = ms => new Promise(res => setTimeout(res, ms))

  async function selectionSort (array) {
    let holder
    let heightHolder
    for (let i = 0 ; i <= array.length; i++){
        document.getElementById(`${i}`).style.backgroundColor = 'green' ;
        await timer(100);
        console.log('ding')
        // for (let j = 0 ; j <= array.length; j++){
        //   await timer(100);
        //   document.getElementById(`${j}`).style.backgroundColor = 'yellow' ;
        //   if(array[j] > array[i]){
        //     holder = array[i]
        //     array[i] = array[j]
        //     array[j] = holder
        //     // document.getElementById(`${i}`).style.backgroundColor = 'yellow' ;
        //     // document.getElementById(`${j}`).style.backgroundColor = 'yellow' ;

        //   }
        // }
        document.getElementById(`${i}`).style.backgroundColor = 'blue' ;
    }
    console.log(array)
    return(array)
  }

  if(start){
    const timer = setInterval(selectionSort(array), 20000)
    // timer()
    // selectionSort(array)
  }

  return (
    <div className="vizualizerContainer">
      {array.map((item, index) => {
        return(
        <div className="unsorted" style={{height: `${item*5}px`, width: `${array.length}`}} id={index}>{item}</div>
        )
      })}
    </div>
  );
}

export default Vizualizer;
