import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

export default function Map() {
  return (
    <MapContainer
      className='w-full calc-height'
      style={{ width: 300, height: 300 }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </MapContainer>
  );
}
