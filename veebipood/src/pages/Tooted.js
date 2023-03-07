import React from 'react';
import tootedFailist from "../data/tooted.json"; // TEGELIKKUSES: Ühendus andmebaasiga
import ostukorvFailist from "../data/ostukorv.json";
import { Link } from 'react-router-dom';

function Tooted() {
                      // Nobe, BMW, Tesla
  const lisaOstukorvi = (klikitudToode) => {
    ostukorvFailist.push(klikitudToode);
  }

  // TEGELIKKUSES: Võtame andmebaasis
  return (
    <div>
      {tootedFailist.map((el, index) => 
        <div key={index}>
  
          <Link to={"/toode/" + index}>
            <img className="pilt" src={el.pilt} alt="" />
            <div>{el.nimi}</div>
            <div>{el.hind} 000 €</div>
          </Link>
      
          <button onClick={() => lisaOstukorvi(el)}>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default Tooted