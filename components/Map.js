import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import { getCenter } from "geolib";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  // console.log(searchResults);
  console.log(selectedLocation);
  //Transform the search results object into the
  //{long:-0.0022275,lat:51.5421655} object

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  //   The latitude and longitude of the center of locations coordinates
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: 500,
    height: 700,
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  // console.log(center);
  return (
    <div>
      <ReactMapGL
        mapStyle="mapbox://styles/kieuhuy123/ckyctlg023f8615p0ynrazb9b"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {searchResults.map((result) => (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                role="img"
                onClick={() => setSelectedLocation(result)}
                className="cursor-pointer text-2xl animate-bounce"
                aria-label="push-pin"
              >
                📌
              </p>
            </Marker>

            {/* The popup that should show if we click on a Marker */}

            {selectedLocation.long === result.long ? (
              <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={true}
                latitude={result.lat}
                longitude={result.long}
              >
                {result.title}
              </Popup>
            ) : (
              false
            )}
          </div>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Map;
