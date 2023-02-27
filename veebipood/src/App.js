import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import Meist from './pages/Meist';
import { useState } from 'react';
import Poed from './pages/Poed';

// HTML elemente on 2 erinevat:
// 1. algus ja lõpu tag, lõpp on kaldkriipsuga tag nimetuse ees
//          kõige standardsem, omadused/seadistused alguse sisse
// 2. self-closing, tagi nimetuse järel on kaldkriips
//          kui me teame ette et midagi kunagi kahe tagi vahele 
//          pole mõtet kirjutada

function App() {                                          // ????????
  const [aktiivneURL, uuendaAktiivneURL] = useState(window.location.href.split("localhost:3000")[1]);
  const [veebisaidiVarv, uuendaVeebisaidiVarv] = useState("light");
  // KODUS

  return (
    <div className={veebisaidiVarv === "dark" ? "dark-mode": "light-mode"}>
      <button onClick={() => uuendaVeebisaidiVarv("dark")}>Dark mode</button>
      <button onClick={() => uuendaVeebisaidiVarv("light")}>Light mode</button>
      <Link to="/">
        <img className="pilt" onClick={() => uuendaAktiivneURL("/")} src="https://nobecars.com/wp-content/uploads/2022/02/sergeizjuganov_IMG_5728-red-scaled.jpg" alt="" />
      </Link>
      <Link to="/ostukorv">
        <button 
          className={aktiivneURL === "/ostukorv" ? "aktiivne-url" : "nupp"} 
          onClick={() => uuendaAktiivneURL("/ostukorv")}>
            Ostukorv
        </button>
      </Link>
      <Link to="/lisa-toode">
        <button className={aktiivneURL === "/lisa-toode" ? "aktiivne-url" : "nupp"} onClick={() => uuendaAktiivneURL("/lisa-toode")}>Lisa toode</button>
      </Link>
      <Link to="/seaded">
        <button className={aktiivneURL === "/seaded" ? "aktiivne-url" : "nupp"} onClick={() => uuendaAktiivneURL("/seaded")}>Seaded</button>
      </Link>
      <Link to="/meist">
        <button className={aktiivneURL === "/meist" ? "aktiivne-url" : "nupp"} onClick={() => uuendaAktiivneURL("/meist")}>Meist</button>
      </Link>
      <Link to="/poed">
        <button className={aktiivneURL === "/poed" ? "aktiivne-url" : "nupp"} onClick={() => uuendaAktiivneURL("/poed")}>Poed</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="poed" element={ <Poed /> } />
      </Routes>
    </div>
  );
}

export default App;

// https://www.udacity.com/course/intro-to-html-and-css--ud001
// https://www.codecademy.com/learn/learn-html
// https://www.udemy.com/course/web-development-learn-by-doing-html5-css3-from-scratch-introductory/
// https://www.udemy.com/course/html5-fundamentals-for-beginners
// https://www.codecademy.com/learn/learn-css
// https://www.freecodecamp.org/learn/2022/responsive-web-design


// Esimesena: https://www.youtube.com/watch?v=W6NZfCO5SIk (kokku pakitud 1h sisse JavaScripti põhiteadmised, pigem nii lühikese ajaga keeruline mõista, aga annab pildi kiiresti korraks JavaScriptist ette)
// Järgmisena:
// https://www.codecademy.com/learn/introduction-to-javascript
// https://www.udacity.com/course/intro-to-javascript--ud803
// Nende kahe puhul palun mitte korraga vaadata ühte algusest lõpuni vaid nii, et teete ühes teema ära ja siis vaatate teises sama teemat. Ise teeksin nii:
// CodeAcademy peatükid 1-2
// Udacity peatükid 1-2
// CodeAcademy peatükk 3
// Udacity peatükk 3
// CodeAcademy peatükk 4,5    Array
// Udacity peatükk 5 (4 jääb vahele!)
// CodeAcademy peatükk 6
// Udacity peatükk 6
// CodeAcademy peatükk 7
// Udacity peatükk 4 (!)
// CodeAcademy lõpuni ehk peatükid 8,9,10
// Udacity lõpuni ehk peatükk 7