import research from '../assets/ana.png'
import resource from '../assets/resource.png'
import piano from '../assets/piano.jpeg'
import reading from '../assets/reading.png'
import monkey from '../assets/monkey.png'
import assertive from '../assets/assertive.jpeg'
import turbulent from '../assets/turb.jpeg'
import ss1 from '../assets/ss1.png'
import ss2 from '../assets/ss2.png'
import ss3 from '../assets/ss3.png'

import './MainPage.css';

const MainPage = () => {
  return (
    <div className="App">
      <p className="App-header">
        CONTEXT AND CONTENTS
      </p>
      <img src={ss1} className="zoom" alt="logo" />
      <img src={ss2} className="zoom" alt="logo" />
      <img src={ss3} className="zoom" alt="logo" />
      <p className="App-header">
        RESEARCH
      </p>
      <img src={research} className="zoom" alt="logo" />
      <p className="App-header">
        RESOURCES
      </p>
      <img src={resource} className="zoom" alt="logo" />
      <p className="App-header">
        MY ADDRESS
      </p>
      <p className='inline'>
        for me <br></br> <br></br>
        small points <br></br> <br></br>
        big points <br></br> <br></br>
      </p>
      <img src={assertive} className="zoom" alt="assertive" />
      <img src={turbulent} className="zoom" alt="turbulent" />
      <p className="App-header">
        CLOSING THOUGHTS
      </p>
      <img src={piano} className="zoom" id='piano' alt="logo" />
      <img src={reading} className="zoom" alt="logo" />
      <img src={monkey} className="zoom" alt="logo" />
    </div>
  );
}

export default MainPage;
