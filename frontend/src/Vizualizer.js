import logo from './logo.svg';
import './App.css';

function Vizualizer({sortType, arrayLength}) {
  let array = []
  for(let i = 0; i <= arrayLength; i++){
    array.push(Math.floor(Math.random(0, 1)*100))
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


  console.log((array))
  console.log(selectionSort(array))
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
