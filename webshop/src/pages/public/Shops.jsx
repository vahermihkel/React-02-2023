import { useState } from 'react';
import Map from '../../components/Map';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
  // useState : shops, setShops

  // uef

  return (<div>
    {/* {shops.map((element, index) => (
        <div key={index}>
          <div><b>{element.name}</b><button onClick={() => deleteShop(index)}>Delete</button></div>
          <div>{element.openTime}</div>
          <div>{element.latitude}</div>
          <div>{element.longitude}</div>
        </div>
      ))} */}

    <button onClick={() => setCoordinates({lngLat: [58.9562, 25.5995], zoom: 7})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button>

    {/* <button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
    <button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</button>
    <button onClick={() => setCoordinates({lngLat: [58.3779, 26.7309], zoom: 13})}>Tasku</button> */}
    
    {/* shops.map(element => 
        <button onClick={() => setCoordinates({lngLat: [element.longitude, element.latitude], zoom: 13})}>
          {element.name}
        </button>) */}
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;