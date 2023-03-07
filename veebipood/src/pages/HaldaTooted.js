import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import tootedFailist from "../data/tooted.json";

function HaldaTooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const kustuta = (jarjekorraNumber) => {
    tootedFailist.splice(jarjekorraNumber, 1);
    uuendaTooted(tootedFailist.slice());
  }

  // indexi (järjekorranumbri) pean kaasa saatma kui muudan või kustutan
  return (
    <div>
      {tooted.map((el, ix) => 
        <div key={ix}>
          {/* {el} */}
          <img className="pilt" src={el.pilt} alt="" />
          <div>{el.pilt}</div>
          <div>{el.nimi}</div>
          <div>{el.hind} 000 €</div>
          <div>{el.aktiivne + 0}</div>
          <button onClick={() => kustuta(ix)}>x</button>
          <Link to={"/muuda/" + ix}><button>Muuda</button></Link>
        </div>)}
    </div>
  )
}

export default HaldaTooted