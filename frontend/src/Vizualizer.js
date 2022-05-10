import './App.css';
import { useState } from 'react';
import selectionSort from './helperFunctions/selectionSort';

function Vizualizer({array, setArray, start, sortType, arrayLength}) {
  let blue = 5
  let red = 2
  let green = 3
  const timer = ms => new Promise(res => setTimeout(res, ms))

 
  if(start){
    selectionSort(array, blue, red, green)
  }
  
  return (
    <div className="vizualizerWrapper">
      <div className="vizualizerContainer">
        {array.map((item, index) => {
          return(
          <div className="unsorted" style={{backgroundColor: `rgb(${item*red}, ${item*green}, ${item*blue})` , height: `${item*5}px`}} id={index}>
            <div>
            <h6 className='value'>{item}</h6>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default Vizualizer;
