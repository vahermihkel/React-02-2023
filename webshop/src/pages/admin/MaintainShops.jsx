import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import config from "../../data/config.json";
 
function MaintainShops() {
  const [shops, setShops] = useState([]);
  const [dbShops, setDbShops] = useState([]);
  const nameRef = useRef();
  const openTimeRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();
  const { t } = useTranslation();
 
  useEffect(() => {
    fetch(config.shopsDbUrl)
      .then(res => res.json())
      .then(json => {
        setShops(json || []);
        setDbShops(json || []);
      });
  }, []);
 
  const addShop = () => {
      dbShops.push ({
        "name": nameRef.current.value,
        "openTime": openTimeRef.current.value,
        "latitude": latitudeRef.current.value,
        "longitude": longitudeRef.current.value
      });
      fetch(config.shopsDbUrl, { "method": "PUT", "body": JSON.stringify(dbShops) })
        .then(res => res.json())
        .then(() => {
          setShops(dbShops.slice());
          nameRef.current.value = "";
          openTimeRef.current.value = "";
          latitudeRef.current.value = "";
          longitudeRef.current.value = "";
          toast.success(t("succesfully added"));
        })
  }

  const deleteShop = (index) => {
    dbShops.splice(index, 1);
    fetch(config.shopsDbUrl, { "method": "PUT", "body": JSON.stringify(dbShops)})
        .then(res => res.json())
        .then(() => {
          setShops(dbShops.slice());
          toast.success(t("succesfully deleted"));
        })
  }
 
  return (
    <div className="center">
      < ToastContainer />
      {shops.map((element, index) => (
        <div key={index}>
          <div><b>{element.name}</b><button onClick={() => deleteShop(index)}>Delete</button></div>
          <div>{element.openTime}</div>
          <div>{element.latitude}</div>
          <div>{element.longitude}</div>
        </div>
      ))} <br />
      <label>shop's name:</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>shop's open time:</label> <br />
      <input ref={openTimeRef}  type="text" /> <br />
      <label>shop's latitude:</label> <br />
      <input ref={latitudeRef}  type="text" /> <br />
      <label>shop's longitude:</label> <br />
      <input ref={longitudeRef}  type="text" /> <br />
      <button onClick={addShop}>Add</button>
 
 
    </div>
  )
}

export default MaintainShops
