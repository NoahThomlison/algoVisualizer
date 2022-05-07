import './App.css';
import { useState } from 'react';

function Vizualizer({array, setArray, start, sortType, arrayLength}) {
  const timer = ms => new Promise(res => setTimeout(res, ms))
  const changeColor = (targer, color) => {
    document.getElementById(`${targer}`).style.backgroundColor = `${color}`;
  }
  
  function delayFun(){
    setTimeout(function()  { console.log("Jacob"); }, 300); 
 }
 
  async function selectionSort (array) {
    console.log(array)
    let delay = 1
    for (let i = 0 ; i < array.length; i++){
        let holder
        let heightHolder
        changeColor(i, "green")
        await timer(delay);
        for (let j = (i + 1) ; j < array.length; j++){
          changeColor(j, "red")
          await timer(delay);
          if(array[i] > array[j]){
            holder = array[i]
            heightHolder = `${array[i]*5}px`

            array[i] = array[j]
            document.getElementById(`${i}`).innerText = array[j]
            document.getElementById(`${i}`).style.height = `${array[j]*5}px`

            array[j] = holder
            document.getElementById(`${j}`).innerText = holder
            document.getElementById(`${j}`).style.height = heightHolder
          }
          changeColor(j, "blue")
          await timer(delay);
        }
      console.log(array)
    }
    return(array)
  }

  if(start){
    selectionSort(array)
  }
  

  return (
    <div className="vizualizerWrapper">
      <div className="vizualizerContainer">
        {array.map((item, index) => {
          return(
          <div className="unsorted" style={{height: `${item*5}px`}} id={index}>
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
