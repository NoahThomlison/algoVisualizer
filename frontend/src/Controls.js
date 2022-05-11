import './App.css';
import {Dropdown, InputGroup, FormControl, Button, Form} from 'react-bootstrap'

function Controls({createArray, setStart, setArrayLength, setSortType, setArray}) {

  function handleChangeSlider(event) {
    let value = event.target.value
    console.log(value)
    setArrayLength(value)
  }

  function handleChangeType(type) {
    console.log(type)
    setSortType(type)
  }
  
  function reset() {
    setArrayLength(25)
    setArray(createArray())
    setStart(false)
  }


  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" >
          Sort Algos
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item value="Selection" onClick={() => handleChangeType("Selection")}>Selection Sort</Dropdown.Item>
          <Dropdown.Item value="Bubble" onClick={() => handleChangeType("Bubble")}>Bubble Sort</Dropdown.Item>
          <Dropdown.Item value="Insertion" onClick={() => handleChangeType("Insertion")}>Insertion Sort</Dropdown.Item>
          <Dropdown.Item value="Merge" onClick={() => handleChangeType("Merge")}>Merge Sort</Dropdown.Item>
          <Dropdown.Item value="Quick" onClick={() => handleChangeType("Quick")}>Quick Sort</Dropdown.Item>
          <Dropdown.Item value="Heap" onClick={() => handleChangeType("Heap")}>Heap Sort</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>        
      <InputGroup className="mb-3">
        <Form.Label>Size of Array</Form.Label>
        <Form.Range onChange={handleChangeSlider}/>
      </InputGroup>
      <Button onClick={()=>setStart(true)}>Start</Button>
      <Button onClick={()=>reset()}>Reset</Button>
    <h1>Controls</h1>
    </div>
  );
}
export default Controls;
