// ES7+ React/Redux/React-Native snippets
// rfce

import React, { useState } from 'react'

// tumesinine - JS liigitused (function, const, let, var), HTML liigitus/tag (img, div, input, button), 
//                  boolean JS, HTML, undefined (tühjus) - tegemist on sissekirjutatud sõnaga JavaScripti, mis on väärtus
// tavaline sinine - muutuja, mida muudetakse
// helesinine - JS sissekirjutatud sõna, mille kaudu saan teha funktsionaalsusi (localStorage)
//              HTML-s sissekirjutatud sõna, mis on tagi omadus (className, src, disabled, onClick, ref, type)
// suure tähega roheline - JS-s tegemist on uue klassiga (new Date()),
//              HTML-s sisseimporditud koht (peab olema üleval import ... from "...")
// kollane - funktsiooniga, mis lõppeb kasutades sulgudega, sulgude sees antakse väärtusi
//          funktsioone saan korduvalt kasutada
// oranž - jutumärkides väärtus
// roheline - numbriline väärtus
// valge - JS-s igasugused märgid, HTMLs on teksti välja näitamine
// tumeroheline - kommentaar
// tuhm kollane - funktsioon pole kasutatud
// tuhm sinine - muutujat pole kasutatud
// sulud (kandilised, loogelised, tavalised) värvuvad kollaseks, lillakaks, siniseks, seda teeb Visual Studio Code
//      see ei oma tähendust, sellega näidatakse milline on paariline
// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

// =    annab väärtust/liigitust
// ===   kontrollib kas vasak pool ja parem pool ühtivad (täiesti identsed), 
//          kaks võrdusmärki Reactis ei sobi, see ei kontrolli tüüpi
// >   <    >=    <=      suurem, väiksem, suurem/võrdne, väiksem/võrdne
// =>    funktsiooni loomise ajal kui kasutan const nimi = () => {}
// ;     rea lõpetamise tähis, mis pole kohustuslik, neid ei panda loogeliste sulgude lõppu
// ()     tähistavad funktsiooni, nende sees antakse uusi väärtusi
// []     tähistavad väärtuste kogumit (array), useState abil genereeritakse 2-ne kogum
// {}     koodiblokk    function {}        if () {} else {}          
//        HTMLs on tegemist JavaScriptiga   {kogus}    onClick={suurenda}    {true && btn}
// &&     kui vasakpoolne on tõde, siis parempoolset näidatakse (HTML)   AND
// ||     kui vasakpoolne on tühjus, siis võetakse parempoolne (localStorage)   OR
// !      väärtus on vastupidine     !==   ei ole võrdne     !true ---> false
// ?  :   lühendatud if else   (ternary operator)    kas on tõsi ? teen seda kui on : teen seda kui ei ole
// ""   ''   pole vahet kumba kasutada, aga ei saa niimoodi "'     '"        'tere'    "tere"

// 1. selles samas projektis sarnaseid asju tehtud
// 2. kas mul on varasemates projektides või kodus tehtud projektides sarnaseid asju tehtud
// 3. Guugeldamine + selle järgi iseseisev kirjutamine

function Avaleht() {
  const [kogus, uuendaKogus] = useState(12); // numbrilised - saan arvutusi teha, toote hind, kogused
  const [sonum, uuendaSonum] = useState(""); // sõnalised - isikukood, telefoninumber
  const [laigitud, uuendaLaigitud] = useState(false); // kahendväärtus, koosneb vaid true/false. täisealine/sisselogitud/makstud

  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Kogus nullitud!");
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
    uuendaSonum("Kogus vähendatud!");
  }

  function suurenda() {
    uuendaKogus(kogus + 1);
    uuendaSonum("Kogus suurendatud!");
  }

  // <button onClick={() => uuendaLaigitud("uus väärtus")}>Muuda laigitut</button>
  // <button onClick={uuendaLaigitud}>Muuda laigitut</button>
  // EI TOHI:
  // <button onClick={uuendaLaigitud("uus väärtus")}>Muuda laigitut</button>
// Too many re-renders. React limits the number of renders to prevent an infinite loop.

  return (
    <div>
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      <button onClick={() => uuendaLaigitud(!laigitud)}>Muuda laigitut</button>
      <div>{sonum}</div>
      {/* { kogus !== 0 && <button onClick={nulli}>Nulli</button>} */}
      { kogus > 0 && <button onClick={nulli}>Nulli</button>}
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
        <span className={ kogus <= 10 ? "kollane" : "roheline" }>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht
