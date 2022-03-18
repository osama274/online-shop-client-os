import React from "react";
/* eslint import/no-webpack-loader-syntax: off */
import Map, { Marker } from "react-map-gl";

// added the following 6 lines.
import mapboxgl from "mapbox-gl";

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const MapBox = () => {
  const viewport ={
    zoom: 5.5,
  };

  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_ACCESS_TOKEN}
      initialViewState={{
        longitude: 14.5252505403024489,
        latitude: 53.436670414866406,
        setViewport:{zoom:14},
      }}
      style={{ width: "100vw", height: "50vh" }}
      mapStyle="mapbox://styles/denizy2/ckzqqti7j000x15pgxy4hdqch"
    >
      <Marker
        latitude={53.436670414866406}
        longitude={14.5271515413024489}
        offsetTop={(-viewport.zoom * 7) / 2}
      >
        <img
          src={"images/symbols/390px-Map_marker.png"}
          alt="fef"
          width={viewport.zoom * 7}
          height={viewport.zoom * 9}
        />
      </Marker>
    </Map>
  );
};

export default MapBox;
// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
//  import './map.css';

// mapboxgl.accessToken =
//   'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

// const MapBox = () => {
//   const mapContainerRef = useRef(null);

//   const [lng, setLng] = useState(14.5252505403024489);
//   const [lat, setLat] = useState(53.436670414866406);
//   const [zoom, setZoom] = useState(14);

//   // Initialize map when component mounts
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom: zoom
//     });

//     // Add navigation control (the +/- zoom buttons)
//     map.addControl(new mapboxgl.NavigationControl(), 'top-right');

//     map.on('move', () => {
//       setLng(map.getCenter().lng.toFixed(4));
//       setLat(map.getCenter().lat.toFixed(4));
//       setZoom(map.getZoom().toFixed(2));
//     });

//     // Clean up on unmount
//     return () => map.remove();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <div className="map">
      
//       <div className='map-container' ref={mapContainerRef} />
//     </div>
//   );
// };

// export default MapBox;