import changeColor from './changeColor';
import timer from './timer'

async function selectionSort (array, blue, red, green) {
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
      holder = array[i]
      heightHolder = `${array[i]*5}px`
      await timer(delay);
      document.getElementById(`${i}`).innerText = array[minIndex]
      array[i] = array[minIndex]
      document.getElementById(`${i}`).style.height = `${array[minIndex]*5}px`
      await timer(delay);
      document.getElementById(`${minIndex}`).innerText = holder
      array[minIndex] = holder
      document.getElementById(`${minIndex}`).style.height = heightHolder
      await timer(delay);
      changeColor(i, `rgb(${ document.getElementById(`${i}`).innerText*red}, ${ document.getElementById(`${i}`).innerText*green}, ${ document.getElementById(`${i}`).innerText*blue})`)
      await timer(delay);
      changeColor(minIndex, `rgb(${document.getElementById(`${minIndex}`).innerText*red}, ${document.getElementById(`${minIndex}`).innerText*green}, ${document.getElementById(`${minIndex}`).innerText*blue})`)
  }
  return(array)
}

export default selectionSort;
