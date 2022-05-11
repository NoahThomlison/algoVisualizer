import './App.css';
import selectionSort from './helperFunctions/selectionSort';
import quickSort from './helperFunctions/quickSort'

function Vizualizer({array, setArray, start, sortType, arrayLength}) {
  let blue = 5
  let red = 2
  let green = 3
  const timer = ms => new Promise(res => setTimeout(res, ms))
  let delay = 10

 
  if(start){
    switch(sortType) {
      case "Selection":
        selectionSort(array, blue, red, green, delay)
        break;
      case "Bubble":
        break;
      case "Insertion":
        break;
      case "Merge":
        break;
      case "Quick":
        console.log("quick")
        quickSort(array, 0, array.length - 1, blue, red, green, delay)        
        break;
      default:
    }
    
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
