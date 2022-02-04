import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";




export default function Map({ locations }) {
  // UseState hook
  const [selectedLocation, setSelectedLocation] = useState({})
  const [viewport, setViewport] = useState({
      width: "100%",
      height: "100%",
      // The latitude and longitude of the center of London
      latitude:37.979423,
      longitude: -1.131000,
      zoom: 12.5
    });
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken="pk.eyJ1IjoiYWxmb25zbzAwOCIsImEiOiJja3o2dDJ0ZTYxMjYzMnByeGp5a3VvZDlrIn0.BOTqXNZZl1oOKYm7Z-RbcA"
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {locations.map((location) => (
         <div key={location.id}>
            <Marker
              latitude={location.center[1]}
              longitude={location.center[0]}
              offsetLeft={-20}
              offsetTop={-10}
            >
          <a 
            onClick={() => {
            setSelectedLocation(location);
            }}
          >
            <span role="img" aria-label="push-pin">
              📌
            </span>
          </a>
           </Marker>
      </div>
      ))}
      </ReactMapGL>
    );
}


