import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Seaded() {                // localStorage.getItem("language");
  const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est");
  const emailViide = useRef(); // useRef-st alati import
  const telefonViide = useRef(); // alati inputi külge
  const aadressViide = useRef(); // viide === reference

  // const muudaKeelEst = () => {
  //   uuendaKeel("est");
  //   localStorage.setItem("keel","est");
  //   // localStorage.setItem("language", "et");
  //   // localStorage.setItem("language", "ru");
  // }

  // const muudaKeelEng = () => {
  //   uuendaKeel("eng");
  //   localStorage.setItem("keel","eng");
  // }

  // const muudaKeelRus = () => {
  //   uuendaKeel("rus");
  //   localStorage.setItem("keel","rus");
  // }

  const muudaKeel = (uusKeel) => {
    uuendaKeel(uusKeel);
    localStorage.setItem("keel",uusKeel);
  }

  const salvestaEmail = () => {
    localStorage.setItem("email", emailViide.current.value);
    if (emailViide.current.value.includes("@")) {
      toast.success("E-mail salvestatud!");
    } else {
      toast.error("E-mail ei ole korrektsel kujul");
    }   
     //   if (kasOn) {kui Tõde} else {kui Väär}        kasOn ?  kui Tõde  : kui Väär
  }

  const salvestaTelefon = () => {
    localStorage.setItem("telefon", telefonViide.current.value);
    // regulaaravaldis    regular expression    regex
    if (/^\d+$/.test(telefonViide.current.value)) {
      toast.success("Telefon salvestatud!");
    } else {
      toast.error("Telefon ei ole ainult numbritest koosnev");
    }
  }

  const salvestaAadress = () => {
    localStorage.setItem("aadress", aadressViide.current.value);
    if (aadressViide.current.value[0] === aadressViide.current.value.charAt(0).toUpperCase()) {
      toast.success("Aadress salvestatud!");
    } else {
      toast.error("Aadress ei ole suure tähega");
    }  
  }

  return (
    <div>
      <label>E-mail</label>
      <input ref={emailViide} defaultValue={localStorage.getItem("email")} type="text" />
      <button onClick={salvestaEmail}>Sisesta</button>
      <br />
      <label>Telefon</label>
      <input ref={telefonViide} defaultValue={localStorage.getItem("telefon")} type="text" />
      <button onClick={salvestaTelefon}>Sisesta</button>
      <br />
      <label>Aadress</label>
      <input ref={aadressViide} defaultValue={localStorage.getItem("aadress")} type="text" />
      <button onClick={salvestaAadress}>Sisesta</button>
      <br />          
                                                {/*      if (   true )     {            } else {     }         */}
      <button onClick={() => muudaKeel("est")} className={keel === "est" ? "aktiivne-keel" : undefined }>Eesti keelseks</button>
      <button onClick={() => muudaKeel("eng")} className={keel === "eng" ? "aktiivne-keel" : undefined }>To English</button>
      <button onClick={() => muudaKeel("rus")} className={keel === "rus" ? "aktiivne-keel" : undefined }>Pycckuj</button>
      {keel === "est" && <div>Leht on eestikeelne</div>}
      {keel === "eng" && <div>Page is in english</div>}
      {keel === "rus" && <div>Pycckuj Rsõk</div>}
      <ToastContainer
        position="bottom-right"
        theme="dark"
      />
    </div>
  )
}

export default Seaded