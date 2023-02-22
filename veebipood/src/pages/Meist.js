import React, { useState } from 'react'

function Meist() {
  const [n2itaEmaili, uuendaN2itaEmaili] = useState(false);
  const [telefon, uuendaTelefoni] = useState(localStorage.getItem("telefon") || "");
  const [aadress, uuendaAadress] = useState(localStorage.getItem("aadress") || "");

  return (
    <div>
      Meie email: {n2itaEmaili === true && localStorage.getItem("email")}
                  {n2itaEmaili === false && <button onClick={() => uuendaN2itaEmaili(true)}>Näita emaili</button> }
      <br />
      Meie telefon: {telefon} 
        { telefon.startsWith("+372") === false && <button onClick={() => uuendaTelefoni("+372" + telefon)}>Lisa suunakood</button>}
      <br />
      Meie aadress: {aadress}
        <button onClick={() => uuendaAadress(aadress.toUpperCase())}>Aadress suurteks tähtedeks</button>
        <button onClick={() => uuendaAadress(aadress.toLowerCase())}>Aadress väikesteks tähtedeks</button>
    </div>
  )
}

export default Meist