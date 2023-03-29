import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) { 
  // võtta kõik poed shops,setShops useState sisse

  // uef

  return (
  <div>

    <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
      <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[59.4269, 24.7241]}>
        <Popup>
          Kristiine keskus. <br /> Avatud 10-21
        </Popup>
      </Marker>
      <Marker position={[59.4218, 24.7934]}>
        <Popup>
          Ülemiste keskus. <br /> Avatud 9-20
        </Popup>
      </Marker>
      <Marker position={[58.3779, 26.7309]}>
        <Popup>
          Tasku keskus. <br /> Avatud 9-21
        </Popup>
      </Marker> */}

      {/* KODUS: */}
      {/* shops.map(element => <Marker position={[element.longitute, element.latitude]}>
        <Popup>
          {element.name}. <br /> {element.openTime}
        </Popup>
      </Marker>) */}
    </MapContainer>
  </div>)
}

export default Map; 