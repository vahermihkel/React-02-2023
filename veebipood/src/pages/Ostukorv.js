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

  const arvutaKogusumma = () => {
    let kogusumma = 0; // const tüüpi muutujaid rohkem muuta ei saa. let tüüpi muutujaid saan lõpmatuseni muuta
    //[{"nimi":"Nobe", "hind": 67}, {"nimi":"Tesla", "hind": 87},{"nimi":"Nobe", "hind": 67} ]
    // 1. {"nimi":"Nobe", "hind": 67} =>   67     =    0      +   67
    // 2. {"nimi":"Tesla", "hind": 87} =>  154    =    67     +   87
    // 3. {"nimi":"Nobe", "hind": 67} =>   221    =    154    +   67
    ostukorvFailist.forEach(yksToode => kogusumma = kogusumma + yksToode.hind);
    return kogusumma; // väljastan kogusumma HTMLi
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
      {ostukorv.length > 0 && <div>Summa kokku: {arvutaKogusumma()} 000 €</div>}
    </div>
  );
}

export default Ostukorv;
