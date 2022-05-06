import './App.css';
import { useState } from 'react';

function Vizualizer({start, sortType, arrayLength}) {
  
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
    let delay = 1
    for (let i = 0 ; i < array.length; i++){
      console.log("new row")
        // changeColor(i, "green")
        // await timer(delay);
        for (let j = (i + 1) ; j < array.length; j++){
          // changeColor(j, "red")
          // await timer(delay);
          if(array[i] > array[j]){
            console.log(array[i])
            console.log(`${array[i]} > ${array[j]}`)
            holder = array[i]
            heightHolder = `${array[i]*5}px`

            array[i] = array[j]
            document.getElementById(`${i}`).innerText = array[j]
            document.getElementById(`${i}`).style.height = `${array[j]*5}px`

            array[j] = holder
            document.getElementById(`${j}`).innerText = holder
            document.getElementById(`${j}`).style.height = heightHolder

          }
          // changeColor(j, "blue")
          // await timer(delay);
        }
        // await timer(delay);
        // changeColor(i, "blue")

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
