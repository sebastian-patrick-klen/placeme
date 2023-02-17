import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

export default function Map({ coords }) {
  return (
    <MapContainer
      className='w-full calc-height'
      center={[coords[0], coords[1]]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <Marker position={[49.959373, 12.66853]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
