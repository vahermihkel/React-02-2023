import React from 'react';
import tooted from "../data/tooted.json";
import ostukorv from "../data/ostukorv.json";
import { Link } from 'react-router-dom';

function Tooted() {
                      // Nobe, BMW, Tesla
  const lisaOstukorvi = (klikitudToode) => {
    ostukorv.push(klikitudToode);
  }

  return (
    <div>
      {tooted.map((el, index) => 
        <div key={index}>
  
          <Link to={"/toode/" + index}>{el}</Link>
      
          <button onClick={() => lisaOstukorvi(el)}>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default Tooted