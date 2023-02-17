import { Marker, Popup } from 'react-leaflet';
import MarkerCard from './MarkerCard';

export default function Markers(props) {
  return props.placesData.map((place) => (
    <Marker position={place.coords} key={place.id}>
      <Popup>
        <MarkerCard place={place} />
      </Popup>
    </Marker>
  ));
}
