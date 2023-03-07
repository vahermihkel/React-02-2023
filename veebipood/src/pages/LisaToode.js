import React, { useRef, useState } from 'react';
import tootedFailist from "../data/tooted.json"; // TEGELIKKUSES: Andmebaas kasutusele

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa uus toode!");
  const inputiLuger = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  // function lisa () {
  //   uuendaSonum("Toode lisatud!");
  // }

  const lisa = () => {
    // uuendaKogus(kogus + 1);
    if (inputiLuger.current.value === "") {
      uuendaSonum("Tühja nimetusega toodet ei saa lisada!");
    } else {
      uuendaSonum("Toode lisatud " + inputiLuger.current.value);
      // []  ERROR:  tühi fail  {}   "[]"
      tootedFailist.push({
        "nimi":inputiLuger.current.value,
        "hind":hindRef.current.value,
        "pilt":piltRef.current.value,
        "aktiivne":aktiivneRef.current.value,
      }); // TEGELIKKUSES: Lisab andmebaasi
      inputiLuger.current.value = "";
    }
  }

  return (
    <div>
      {sonum} <br />
      <label>Uue toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <label>Uue toote hind</label> <br />
      <input ref={hindRef} type="text" /> <br />
      <label>Uue toote pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Uue toote aktiivne</label> <br />
      <input ref={aktiivneRef} type="text" /> <br />
      {/* <button onClick={() => lisa()}>Sisesta</button> <br /> */}
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode