import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json";

function YksikToode() {
  // localhost:3000/toode/:jrkNr
  // localhost:3000/toode <--- ei satuta
  // localhost:3000/toode/.
  // localhost:3000/toode/1
  // localhost:3000/toode/coca
  // localhost:3000/toode/samsung
  // localhost:3000/toode/31312312312312

  // localhost:3000/toode/0
  // localhost:3000/toode/1
  // localhost:3000/toode/2
  const { jrkNr } = useParams(); // useState, useRef, useParams
  const leitud = tootedFailist[jrkNr];

  return (
    <div>
      {/* {jrkNr} */}
      {leitud === undefined && <div>Toodet ei leitud</div>}
      {leitud !== undefined && 
        <div>
            <div>{leitud.nimi} </div>
            <div>{leitud.hind} 000 € </div>
            <img src={leitud.pilt} alt="" />
        </div>}
    </div>
  )
}

export default YksikToode