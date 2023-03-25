import { MainPage, BigText, Recording, Password } from './components/exporting'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Password />} />
        <Route exact path='/goodkushandalcohol' element={<MainPage />} />
        <Route path='/iloveyouprincess' element={<Recording/>} />
    </Routes>
    <BigText />
    </Router>
  );
}

export default App;
