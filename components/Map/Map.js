import { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import Markers from './Markers';

export default function Map({
  location,
  placesData,
  className,
  isEdit,
  getPlaceLocation,
}) {
  // Get coords, render place marker
  const [placePosition, setPlacePosition] = useState(null);
  function LocationMarker() {
    const map = useMapEvents({
      dblclick(e) {
        setPlacePosition(e.latlng);
        getPlaceLocation(placePosition);
      },
    });
  }

  return (
    <MapContainer
      className={className}
      center={[location[0], location[1]]}
      zoom={20}
      doubleClickZoom={false}
      scrollWheelZoom={true}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <Marker position={location}>
        <Popup>
          <p>Tady se nacházíte</p>
        </Popup>
      </Marker>

      {/* Adding new place */}
      {isEdit && placePosition && (
        <Marker position={placePosition}>
          <Popup>You are here</Popup>
        </Marker>
      )}
      {isEdit && <LocationMarker />}
      <Markers placesData={placesData} />
    </MapContainer>
  );
}
