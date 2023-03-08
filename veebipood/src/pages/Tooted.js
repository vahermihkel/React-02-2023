import React, { useState } from 'react';
import tootedFailist from "../data/tooted.json"; // TEGELIKKUSES: Ühendus andmebaasiga
import ostukorvFailist from "../data/ostukorv.json";
import { Link } from 'react-router-dom';

function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

                      // Nobe, BMW, Tesla
  const lisaOstukorvi = (klikitudToode) => {
    ostukorvFailist.push(klikitudToode);
  }

  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKasv = () => {
    tooted.sort((a,b) => a.hind - b.hind);
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKah = () => {
    tooted.sort((a,b) => b.hind - a.hind);
    uuendaTooted(tooted.slice());
  }

  // const filtreeriBgaAlgavad = () => {
  //   const tulem = tootedFailist.filter(toode => toode.nimi.startsWith("B"));
  //   uuendaTooted(tulem);
  // }

  // const filtreeriNgaAlgavad = () => {
  //   const tulem = tootedFailist.filter(toode => toode.nimi.startsWith("N"));
  //   uuendaTooted(tulem);
  // }

  // const filtreeriTgaAlgavad = () => {
  //   const tulem = tootedFailist.filter(toode => toode.nimi.startsWith("T"));
  //   uuendaTooted(tulem);
  // }

  const filtreeriAlguseJargi = (esiTaht) => {
    const tulem = tootedFailist.filter(toode => toode.nimi.startsWith(esiTaht));
    uuendaTooted(tulem);
  }

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriHindKasv}>Sorteeri hind kasvavalt</button>
      <button onClick={sorteeriHindKah}>Sorteeri hind kahanevalt</button>
      <br />
      <button onClick={() => filtreeriAlguseJargi("B")}>B</button>
      <button onClick={() => filtreeriAlguseJargi("N")}>N</button>
      <button onClick={() => filtreeriAlguseJargi("T")}>T</button>
      {tooted.map((el, index) => 
        <div key={index}>
  
          <Link to={"/toode/" + index}>
            <img className="pilt" src={el.pilt} alt="" />
            <div>{el.nimi}</div>
            <div>{el.hind} 000 €</div>
          </Link>
      
          <button onClick={() => lisaOstukorvi(el)}>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default Tooted