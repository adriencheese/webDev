import testIMG from './assets/test.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* default text and css linking
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        */}
        <p>
          CONTEXT AND CONTENTS
        </p>
        <img src={testIMG} className="zoom" alt="logo" />
        <p>
          RESEARCH
        </p>
        <img src={testIMG} className="zoom" alt="logo" />
        <p>
          MY ADDRESS
        </p>
        <img src={testIMG} className="zoom" alt="logo" />
        <p>
          CLOSING THOUGHTS
        </p>
        <img src={testIMG} className="zoom" alt="logo" />

        {/* 888 HOW TO LINK TO TEXT 888<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>
    </div>
  );
}

export default App;
