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
    poed.sort((a, b) => a.nimi.localeCompare(b.nimi)); 
    uuendaPoed(poed.slice()); // uuendan poed muutujat useState sees, asendades ära eelneva väärtuse
                  // .slice() teeb muutujast koopia ja see tähendab, et asukoha jälg kaotatakse
    // .sort() muteerib ehk muudab esialgset arrayd ka
    // mutates  
  }

  const sorteeriZA = () => {
    poed.sort((a, b) => b.nimi.localeCompare(a.nimi)); 
    // poed.sort((first, second) => second.localeCompare(first)); 
    uuendaPoed(poed.slice()); 
  }

  const sorteeriTahedKasvavalt = () => {
    poed.sort((a, b) => a.nimi.length - b.nimi.length);
    uuendaPoed(poed.slice()); 
  }

  const sorteeriTahedKahanevalt = () => {
    // poed.sort((a, b) => -1 * (a.length - b.length));
    poed.sort((a, b) => b.nimi.length - a.nimi.length);
    uuendaPoed(poed.slice()); 
  }

  const sorteeriKolmasTahtAZ = () => {
    poed.sort((a, b) => a.nimi.charAt(2).localeCompare(b.nimi.charAt(2)));
    uuendaPoed(poed.slice()); 
  }

  const filtreeriEgaLoppevad = () => {
    const tulem = poed.filter(yksPood => yksPood.nimi.endsWith("e"));
    uuendaPoed(tulem);
  }

  const filtreeriRohkemTahtiKui7 = () => {
    const tulem = poed.filter(yksPood => yksPood.nimi.length > 7);
    uuendaPoed(tulem);
  }

  const filtreeriSisaldabTahtiIs = () => {
    const tulem = poed.filter(yksPood => yksPood.nimi.includes("is"));
    uuendaPoed(tulem);
  }

  const filtreeriKolmasTahtI = () => {
    const tulem = poed.filter(yksPood => yksPood.nimi.charAt(2) === "i");
    uuendaPoed(tulem);
  }

  const filtreeriTahti9 = () => {
    const tulem = poed.filter(yksPood => yksPood.nimi.length === 9);
    uuendaPoed(tulem);
  }

  // -------------------------------------------------------------
  const asendaSuurteks = () => {
        //             "Kristiine"  ---> "KRISTIINE"
        // {"nimi": "Kristiine", "tel": ""} ---> "KRISTIINE"   xxxxxxxxxxxxxxxx
        // {"nimi": "Kristiine", "tel": ""} ---> {"nimi": "KRISTIINE", "tel": ""}
    const tulem = poed.map(yksPood => {return{"nimi": yksPood.nimi.toUpperCase(), "tel": yksPood.tel}});
    uuendaPoed(tulem);
  }

  const asendaVaikesteks = () => {
    const tulem = poed.map(yksPood => {return{"nimi": yksPood.nimi.toLowerCase(), "tel": yksPood.tel}});
    uuendaPoed(tulem);
  }

  const asendaKriipsudEtte = () => {
    const tulem = poed.map(yksPood => {return{"nimi": "--" + yksPood.nimi, "tel": yksPood.tel}});
    uuendaPoed(tulem);
  }

  const asendaTagurpidi = () => {
    const tulem = poed.map(yksPood => {return{"nimi": yksPood.nimi.split("").reverse().join(""), "tel": yksPood.tel}});
    uuendaPoed(tulem);
  }

  const asendaITahtOga = () => {
    const tulem = poed.map(yksPood => {return{"nimi": yksPood.nimi.replaceAll("i", "o"), "tel": yksPood.tel}});
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

      {poed.map(yksPood => <div key={yksPood.nimi}>{yksPood.nimi} --- {yksPood.tel}</div> )}
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