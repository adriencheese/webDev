import testIMG from './assets/test.jpg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <p className="App-header">
        CONTEXT AND CONTENTS
      </p>
      <img src={testIMG} className="zoom" alt="logo" />
      <p className="App-header">
        RESEARCH
      </p>
      <img src={testIMG} className="zoom" alt="logo" />
      <p className="App-header">
        MY ADDRESS
      </p>
      <img src={testIMG} className="zoom" alt="logo" />
      <p className="App-header">
        CLOSING THOUGHTS
      </p>
      <img src={testIMG} className="zoom" alt="logo" />  
    </div>
  );
}

export default App;
