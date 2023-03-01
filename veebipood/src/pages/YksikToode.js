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
  const { jrkNr } = useParams();
  const leitud = tootedFailist[jrkNr];

  return (
    <div>
      {jrkNr}
      {leitud}
    </div>
  )
}

export default YksikToode