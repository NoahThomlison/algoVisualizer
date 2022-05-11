import changeColor from './changeColor';
import timer from './timer'

function partition(array, l, r)
{
  let pivot = array[r]
  let i = l - 1
  let holder
  for(let j = l; j <= r - 1; j++){
    if(array[j] < pivot){
      i += 1 
      holder = array[j]
      array[j] = array[i]
      array[i] = holder
    }
  }

  holder = array[r]
  array[r] = array[i+1]
  array[i+1] = holder
  
  return(i+1)
}

async function quickSort (array, l, r, blue, red, green) {
  if(l >= r){
    return
  }

  let p = partition(array, l, r)
  quickSort(array, l, p - 1)
  quickSort(array, l, p + 1)
  return(array)
}

export default quickSort;



// console.log(array)
// let delay = 10
// let minIndex
// let holder
// let heightHolder
// for (let i = 0 ; i < array.length; i++){
//     minIndex = i
//     for (let j = (i + 1) ; j < array.length; j++){
//       changeColor(j, "red")
//       await timer(delay);
//       if(array[minIndex] >= array[j]){
//         minIndex = j
//       }
//       changeColor(j, `rgb(${document.getElementById(`${j}`).innerText*red}, ${document.getElementById(`${j}`).innerText*green}, ${document.getElementById(`${j}`).innerText*blue})`)
//     }
//     holder = array[i]
//     heightHolder = `${array[i]*5}px`
//     await timer(delay);
//     document.getElementById(`${i}`).innerText = array[minIndex]
//     array[i] = array[minIndex]
//     document.getElementById(`${i}`).style.height = `${array[minIndex]*5}px`
//     await timer(delay);
//     document.getElementById(`${minIndex}`).innerText = holder
//     array[minIndex] = holder
//     document.getElementById(`${minIndex}`).style.height = heightHolder
//     await timer(delay);
//     changeColor(i, `rgb(${ document.getElementById(`${i}`).innerText*red}, ${ document.getElementById(`${i}`).innerText*green}, ${ document.getElementById(`${i}`).innerText*blue})`)
//     await timer(delay);
//     changeColor(minIndex, `rgb(${document.getElementById(`${minIndex}`).innerText*red}, ${document.getElementById(`${minIndex}`).innerText*green}, ${document.getElementById(`${minIndex}`).innerText*blue})`)