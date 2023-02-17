import Map from '@/components/Map/index';
import { useEffect, useState } from 'react';
import places from '@/placeData';
import Loading from '@/components/Layout/Loading';

export default function MapPage(props) {
  console.log(props);
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    (() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords([position.coords.latitude, position.coords.longitude]);
      });
    })();
  }, []);

  return (
    <>
      {coords[0] ? (
        <Map coords={coords} />
      ) : (
        <Loading
          title={
            'Pro správné fungování povolte přístup k údajům o vaší poloze.'
          }
        />
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const data = places;
  return {
    props: { data },
  };
}
