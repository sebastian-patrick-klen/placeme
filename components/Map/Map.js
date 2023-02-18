import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import Markers from './Markers';

export default function Map({ coords, placesData }) {
  return (
    <MapContainer
      className='w-full calc-height'
      center={[coords[0], coords[1]]}
      zoom={20}
      scrollWheelZoom={true}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <Markers placesData={placesData} />
    </MapContainer>
  );
}
