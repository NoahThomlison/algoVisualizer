import logo from './logo.svg';
import './App.css';

function Vizualizer({sortType, arrayLength}) {
  let array = []
  for(let i = 0; i <= arrayLength; i++){
    array.push(Math.floor(Math.random(0, 1)*100))
  }

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
