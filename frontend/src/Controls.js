import logo from './logo.svg';
import './App.css';
import {Dropdown, InputGroup, FormControl, Button, Form} from 'react-bootstrap'
function Controls() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort Algos
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Selection Sort</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Bubble Sort</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Insertion Sort</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Merge Sort</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Quick Sort</Dropdown.Item>
          <Dropdown.Item href="#/action-6">Heap Sort</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>        
      <InputGroup className="mb-3">
        <Form.Label>Size of Array</Form.Label>
        <Form.Range />
      </InputGroup>
    <h1>Controls</h1>
    </div>
  );
}
export default Controls;
