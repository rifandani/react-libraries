import { useState, useEffect, KeyboardEvent } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
// files
import cities from '../../../data/indo-cities.json';

cities.length = 100;

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: -1.237927,
    longitude: 116.852852,
    zoom: 10,
  });

  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const listener = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') {
        setSelectedCity(null);
      }
    };

    // @ts-ignore
    window.addEventListener('keydown', listener);

    // @ts-ignore
    return () => window.removeEventListener('keydown', listener);
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/rifandani/ckjhd14inp0pj19s30lpfc3hr"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {cities.map((el, i) => (
        <Marker key={i} latitude={Number(el.lat)} longitude={Number(el.lng)}>
          <button
            className="border-none outline-none cursor-pointer"
            onClick={(e) => {
              e.preventDefault();

              setSelectedCity(el);
            }}
          >
            <img src="/favicon.ico" alt="roompy logo" width={30} height={30} />
          </button>
        </Marker>
      ))}

      {selectedCity && (
        <Popup
          longitude={Number(selectedCity.lng)}
          latitude={Number(selectedCity.lat)}
          onClose={() => setSelectedCity(null)}
        >
          <div>
            <h3>{selectedCity.city}</h3>
            <p>{selectedCity.admin_name}</p>
          </div>
        </Popup>
      )}
    </ReactMapGL>
  );
};

const ReactMapboxGlPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center relative">
      <div className="min-h-screen w-full">
        <Map />
      </div>
    </div>
  );
};

export default ReactMapboxGlPage;
