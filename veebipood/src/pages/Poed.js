import React, { useState } from 'react';
import poedFailist from "../data/poed.json";

function Poed() {
  // [] -- array
  // ["element1", "element2", "e"]
  const [poed, uuendaPoed] = useState(poedFailist);

  const originaaliTagasi = () => {
    uuendaPoed(poedFailist);
  }

  const sorteeriAZ = () => {
    //poed.sort(); // sort on default, sorteeribki A-Z, muutsin poed muutujat
    poed.sort((a, b) => a.localeCompare(b)); 
    uuendaPoed(poed.slice()); // uuendan poed muutujat useState sees, asendades ära eelneva väärtuse
                  // .slice() teeb muutujast koopia ja see tähendab, et asukoha jälg kaotatakse
    // .sort() muteerib ehk muudab esialgset arrayd ka
    // mutates  
  }

  const sorteeriZA = () => {
    poed.sort((a, b) => b.localeCompare(a)); 
    // poed.sort((first, second) => second.localeCompare(first)); 
    uuendaPoed(poed.slice()); 
  }

  const sorteeriTahedKasvavalt = () => {
    poed.sort((a, b) => a.length - b.length);
    uuendaPoed(poed.slice()); 
  }

  const sorteeriTahedKahanevalt = () => {
    // poed.sort((a, b) => -1 * (a.length - b.length));
    poed.sort((a, b) => b.length - a.length);
    uuendaPoed(poed.slice()); 
  }

  const sorteeriKolmasTahtAZ = () => {
    poed.sort((a, b) => a.charAt(2).localeCompare(b.charAt(2)));
    uuendaPoed(poed.slice()); 
  }

  const filtreeriEgaLoppevad = () => {
    const tulem = poed.filter(yksPood => yksPood.endsWith("e"));
    uuendaPoed(tulem);
  }

  const filtreeriRohkemTahtiKui7 = () => {
    const tulem = poed.filter(yksPood => yksPood.length > 7);
    uuendaPoed(tulem);
  }

  const filtreeriSisaldabTahtiIs = () => {
    const tulem = poed.filter(yksPood => yksPood.includes("is"));
    uuendaPoed(tulem);
  }

  const filtreeriKolmasTahtI = () => {
    const tulem = poed.filter(yksPood => yksPood.charAt(2) === "i");
    uuendaPoed(tulem);
  }

  const filtreeriTahti9 = () => {
    const tulem = poed.filter(yksPood => yksPood.length === 9);
    uuendaPoed(tulem);
  }

  const asendaSuurteks = () => {
    const tulem = poed.map(yksPood => yksPood.toUpperCase());
    uuendaPoed(tulem);
  }

  const asendaVaikesteks = () => {
    const tulem = poed.map(yksPood => yksPood.toLowerCase());
    uuendaPoed(tulem);
  }

  const asendaKriipsudEtte = () => {
    const tulem = poed.map(yksPood => "--" + yksPood);
    uuendaPoed(tulem);
  }

  const asendaTagurpidi = () => {
    const tulem = poed.map(yksPood => yksPood.split("").reverse().join(""));
    uuendaPoed(tulem);
  }

  const asendaITahtOga = () => {
    const tulem = poed.map(yksPood => yksPood.replaceAll("i", "o"));
    uuendaPoed(tulem);
  }

  return (
    <div>
      <button onClick={originaaliTagasi}>Originaali tagasi</button>
      <br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähtede arv kasvavalt</button>
      <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähtede arv kahanevalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
      <br /><br />
      <button onClick={filtreeriEgaLoppevad}>Filtreeri E-ga lõppevad</button>
      <button onClick={filtreeriRohkemTahtiKui7}>Filtreeri kellel on rohkem kui 7 tähte</button>
      <button onClick={filtreeriSisaldabTahtiIs}>Filtreeri kellel sisaldab tähti "is"</button>
      <button onClick={filtreeriKolmasTahtI}>Filtreeri kellel kolmas täht on i</button>
      <button onClick={filtreeriTahti9}>Filtreeri kellel tähti 9</button>
      <br /><br />
      <button onClick={asendaSuurteks}>Pane kõik suurteks tähtedeks</button>
      <button onClick={asendaVaikesteks}>Pane kõik väikesteks tähtedeks</button>
      <button onClick={asendaKriipsudEtte}>Pane kõigile -- ette</button>
      <button onClick={asendaTagurpidi}>Kirjuta kõik tagurpidi</button>
      <button onClick={asendaITahtOga}>Asenda kõigil i täht o tähega</button>

      <div>{poed.length} tk</div>

      {poed.map(yksPood => <div key={yksPood}>{yksPood}</div> )}
      <div>--------------------</div>
      <div>Ülemiste</div>
      <div>Viimsi</div>
      <div>Rocca al Mare</div>
      <div>Magistral</div>
      <div>Vesse</div>
      <div>Kristiine</div>
      <div>Järveotsa</div>
    </div>
  )
}

export default Poed