import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';

// HTML elemente on 2 erinevat:
// 1. algus ja lõpu tag, lõpp on kaldkriipsuga tag nimetuse ees
//          kõige standardsem, omadused/seadistused alguse sisse
// 2. self-closing, tagi nimetuse järel on kaldkriips
//          kui me teame ette et midagi kunagi kahe tagi vahele 
//          pole mõtet kirjutada

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img className="pilt" src="https://nobecars.com/wp-content/uploads/2022/02/sergeizjuganov_IMG_5728-red-scaled.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Nupp</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Nupp</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
      </Routes>
    </div>
  );
}

export default App;
