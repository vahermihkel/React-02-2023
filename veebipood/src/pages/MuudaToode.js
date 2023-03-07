import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json";

function MuudaToode() {
  const nimiRef = useRef();
  const { index } = useParams(); // import ka. Reacti Hook (tegemist on imporditava koodiga, mida ei eksisteeri
    // tavalises JavaScriptis. imporditakse mingisugune funktsionaalsus node_modulest)
    // useSuperpower
  const leitud = tootedFailist[index];
  // let x = cars[1];
  const navigate = useNavigate(); // import ka

  const muuda = () => {
    tootedFailist[index] = nimiRef.current.value;
    navigate("/halda-tooted"); // tegemist on täpselt sama asjaga nagu <Link>
      // mõlemad vahetavad URLi.
      // kui URLi vahetusega teen ka mingi koodilõigu (praegusel juhul muudan toodet)
      // siis võiks teha URLi vahetuse koodilõigu järel (selleks on seda vaja teha JavaScriptis)
  }

  // onClick={() => f()}  1. kui otse kasutame useState paremat funktsiooni
  // 2. kui on onClick nupp .map() tsükli sees

  // millisel juhul mida saata?
  // 3. järjekorranumber kui muudan/kustutan
  // 4. element ise kui lisan
  return (
    <div>
      {leitud !== undefined && <div>
        <label>Toote nimi</label> <br />
        <input ref={nimiRef} type="text" autoFocus defaultValue={leitud} /> <br />
        <button onClick={muuda}>Sisesta</button> <br />
      </div>}

      {leitud === undefined && <div>Toodet ei leitud</div>}
    </div>
  )
}

export default MuudaToode