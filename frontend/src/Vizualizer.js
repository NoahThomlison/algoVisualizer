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
  let array = createArray()
  const [sortedArray, setSortedArray] = useState([createArray()])

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const timer = ms => new Promise(res => setTimeout(res, ms))

  const changeColor = (targer, color) => {
    document.getElementById(`${targer}`).style.backgroundColor = `${color}`;

  }
  async function selectionSort (array) {
    let minIndex 
    let holder
    let heightHolder
    console.log(array.length)
    console.log(array)

    for (let i = 0 ; i < array.length; i++){
        changeColor(i, "green")
        // await timer(300);
        for (let j = 0 ; j < array.length; j++){
          if(j > i){
          }
          if(array[j] > array[i]){
            holder = array[i]
            minIndex = i
            changeColor(i, "red")
          }
          if(j === array.length-1){
            console.log(array[minIndex])
            heightHolder = `${array[i]*5}px`
            array[i] = array[j]
            document.getElementById(`${i}`).style.height = `${array[j]*5}px`
            array[j] = holder
            document.getElementById(`${j}`).style.height = heightHolder

          }
        }
        // await timer(300);
        changeColor(i, "blue")

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
