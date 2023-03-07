import React, { useState } from "react";
import { Link } from "react-router-dom";
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);
  // hard-coded

  const kustuta = (jrkNr) => {
    ostukorvFailist.splice(jrkNr,1);
    uuendaOstukorv(ostukorvFailist.slice());
  };

  const lisa = (klikitudToode) => {
    ostukorvFailist.push(klikitudToode);
    uuendaOstukorv(ostukorvFailist.slice());
  }

  const tyhjenda = () => {
    ostukorvFailist = [];
    uuendaOstukorv([]);
  }

  return (
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      {ostukorv.length === 0 && <div>Ostukorv on tühi. <Link to="/">Tooteid lisama</Link></div>}
      {ostukorv.length > 0 && <div>Ostukorvi esemeid on {ostukorv.length} tk</div>}
      <div>
        {ostukorv.map((element, jrkNr) => 
          <div key={jrkNr}>
            <img className="pilt" src={element.pilt} alt="" />
            <div>{element.nimi}</div>
            <div>{element.hind} 000 €</div>
            <button onClick={() => kustuta(jrkNr)}>x</button>
            <button onClick={() => lisa(element)}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ostukorv;
