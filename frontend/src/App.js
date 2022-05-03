import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Vizualizer from './Vizualizer'
import Controls from './Controls'

function App() {
  return (
    <div className="App">
      <Controls></Controls>
      <Vizualizer></Vizualizer>
    </div>
  );
}

export default App;

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// <Button type="button" class="btn btn-primary">Primary</Button>
// </header>