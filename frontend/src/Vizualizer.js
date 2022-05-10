import './App.css';
import { useState } from 'react';

function Vizualizer({array, setArray, start, sortType, arrayLength}) {
  let blue = 5
  let red = 2
  let green = 3
  const timer = ms => new Promise(res => setTimeout(res, ms))
  const changeColor = (targer, color) => {
    document.getElementById(`${targer}`).style.backgroundColor = `${color}`;
  }
  
  function delayFun(){
    setTimeout(function()  { console.log("Jacob"); }, 300); 
 }
 
  async function selectionSort (array) {
    console.log(array)
    let delay = 10
    let minIndex
    let holder
    let heightHolder
    for (let i = 0 ; i < array.length; i++){
        minIndex = i
        for (let j = (i + 1) ; j < array.length; j++){
          changeColor(j, "red")
          await timer(delay);
          if(array[minIndex] >= array[j]){
            minIndex = j
          }
          changeColor(j, `rgb(${document.getElementById(`${j}`).innerText*red}, ${document.getElementById(`${j}`).innerText*green}, ${document.getElementById(`${j}`).innerText*blue})`)
        }
        await timer(delay);
        holder = array[i]
        heightHolder = `${array[i]*5}px`
        await timer(delay);
        document.getElementById(`${i}`).innerText = array[minIndex]
        array[i] = array[minIndex]
        await timer(delay);
        document.getElementById(`${i}`).style.height = `${array[minIndex]*5}px`
        await timer(delay);
        document.getElementById(`${minIndex}`).innerText = holder
        array[minIndex] = holder

        await timer(delay);
        document.getElementById(`${minIndex}`).style.height = heightHolder
        await timer(delay);
 
        console.log(`holder: ${holder}, array[i]:${array[i]}, array[minIndex]:${array[minIndex]}`)

        changeColor(i, `rgb(${ document.getElementById(`${i}`).innerText*red}, ${ document.getElementById(`${i}`).innerText*green}, ${ document.getElementById(`${i}`).innerText*blue})`)
        await timer(delay);
        changeColor(minIndex, `rgb(${document.getElementById(`${minIndex}`).innerText*red}, ${document.getElementById(`${minIndex}`).innerText*green}, ${document.getElementById(`${minIndex}`).innerText*blue})`)
        console.log(array)

    }
      console.log(array)

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
