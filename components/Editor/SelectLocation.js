import { useEffect, useState } from 'react';
import Map from '../Map/index';

export default function SelectLocation({ getPlaceLocation }) {
  const [myPosition, setMyPosition] = useState([]);

  useEffect(() => {
    (() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyPosition([position.coords.latitude, position.coords.longitude]);
      });
    })();
  }, []);

  console.log(myPosition);

  return (
    <Map
      location={[0, 0]}
      placesData={[]}
      className='w-full h-screen'
      isEdit={true}
      getPlaceLocation={getPlaceLocation}
    />
  );
}
