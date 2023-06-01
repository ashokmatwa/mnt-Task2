import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import NewForm from './components/NewForm';
import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    <h2>React Practice</h2>
     
    <FirstComponent></FirstComponent> 
    <br></br>
    <Form/>
     {/* <NewForm></NewForm> */}

    </div>
  );
}

export default App;

// const App = () => {
//   return (
//     <div className='App.css'>
//       <h2>React Practice</h2>
     
//       <h3>First Component Created</h3>
     
//       <Form/>
//       {/* <NewForm></NewForm> */}
//     </div>
//   )
// }

// export default App