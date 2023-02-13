import React, { useRef, useState } from 'react'

function Seaded() {                // localStorage.getItem("language");
  const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est");
  const emailViide = useRef(); // useRef-st alati import
  const telefonViide = useRef(); // alati inputi külge
  const aadressViide = useRef(); // viide === reference

  const muudaKeelEst = () => {
    uuendaKeel("est");
    localStorage.setItem("keel","est");
    // localStorage.setItem("language", "et");
    // localStorage.setItem("language", "ru");
  }

  const muudaKeelEng = () => {
    uuendaKeel("eng");
    localStorage.setItem("keel","eng");
  }

  const muudaKeelRus = () => {
    uuendaKeel("rus");
    localStorage.setItem("keel","rus");
  }

  const salvestaEmail = () => {
    localStorage.setItem("email", emailViide.current.value);
  }

  const salvestaTelefon = () => {
    localStorage.setItem("telefon", telefonViide.current.value);
  }

  const salvestaAadress = () => {
    localStorage.setItem("aadress", aadressViide.current.value);
  }

  return (
    <div>
      <label>E-mail</label>
      <input ref={emailViide} type="text" />
      <button onClick={salvestaEmail}>Sisesta</button>
      <br />
      <label>Telefon</label>
      <input ref={telefonViide} type="text" />
      <button onClick={salvestaTelefon}>Sisesta</button>
      <br />
      <label>Aadress</label>
      <input ref={aadressViide} type="text" />
      <button onClick={salvestaAadress}>Sisesta</button>
      <br />
      <button onClick={muudaKeelEst}>Eesti keelseks</button>
      <button onClick={muudaKeelEng}>To English</button>
      <button onClick={muudaKeelRus}>Pycckuj</button>
      {keel === "est" && <div>Leht on eestikeelne</div>}
      {keel === "eng" && <div>Page is in english</div>}
      {keel === "rus" && <div>Pycckuj Rsõk</div>}
    </div>
  )
}

export default Seaded