import React, { useState } from "react";
import { Link } from "react-router-dom";

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState([
    "Coca",
    "Fanta",
    "Sprite",
    "Vichy",
    "Vitamin well",
  ]);

  const kustuta = (jrkNr) => {
    ostukorv.splice(jrkNr,1);
    uuendaOstukorv(ostukorv.slice());
  };

  const lisa = (klikitudToode) => {
    ostukorv.push(klikitudToode);
    uuendaOstukorv(ostukorv.slice());
  }

  const tyhjenda = () => {
    uuendaOstukorv([]);
  }

  return (
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      {ostukorv.length === 0 && <div>Ostukorv on tühi. <Link to="/">Tooteid lisama</Link></div>}
      {ostukorv.length > 0 && <div>Ostukorvi esemeid on {ostukorv.length} tk</div>}
      <div>
        {ostukorv.map((element, jrkNr) => 
          <div>
            {element} <button onClick={() => kustuta(jrkNr)}>x</button>
                      <button onClick={() => lisa(element)}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ostukorv;
