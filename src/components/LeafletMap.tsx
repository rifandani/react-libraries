import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { useState } from 'react';
// files
import cities from '../../data/indo-cities.json';

cities.length = 200;

// url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
// attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttribution =
  '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

const LeafletMap = () => {
  const [viewport, setViewport] = useState({
    lat: -1.237927,
    lng: 116.852852,
    zoom: 10,
  });

  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <MapContainer
      className="w-full min-h-screen"
      center={[viewport.lat, viewport.lng]}
      zoom={viewport.zoom}
      scrollWheelZoom
    >
      <TileLayer opacity={20} url={osmUrl} attribution={osmAttribution} />

      {cities.map((el, i) => (
        <Marker key={i} position={[Number(el.lat), Number(el.lng)]}>
          <Popup closeOnEscapeKey>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold">{el.city}</h3>

              <p className="text-sm italic">{el.admin_name}</p>

              <button className="px-4 py-2 text-white bg-purple-500 rounded-md">
                Choose
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
