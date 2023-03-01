import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json";

function HaldaTooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const kustuta = (jarjekorraNumber) => {
    tootedFailist.splice(jarjekorraNumber, 1);
    uuendaTooted(tootedFailist.slice());
  }

  return (
    <div>
      {tooted.map((el, ix) => 
        <div key={ix}>
          {el}
          <button onClick={() => kustuta(ix)}>x</button>
        </div>)}
    </div>
  )
}

export default HaldaTooted