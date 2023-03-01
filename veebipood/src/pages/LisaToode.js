import React, { useRef, useState } from 'react';
import tooted from "../data/tooted.json";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa uus toode!");
  const inputiLuger = useRef();

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
      tooted.push(inputiLuger.current.value);
      inputiLuger.current.value = "";
    }
  }

  return (
    <div>
      {sonum} <br />
      <label>Uue toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      {/* <button onClick={() => lisa()}>Sisesta</button> <br /> */}
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode