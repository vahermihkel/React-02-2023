// ES7+ React/Redux/React-Native snippets
// rfce

import React, { useState } from 'react'

function Avaleht() {
  const [kogus, uuendaKogus] = useState(12);

  function nulli() {
    uuendaKogus(0);
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
  }

  function suurenda() {
    uuendaKogus(kogus + 1);
  }

  return (
    <div>
      <button onClick={nulli}>Nulli</button>
      <button onClick={vahenda}>-</button>
      {kogus}
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht
