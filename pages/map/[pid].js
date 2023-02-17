import Map from '@/components/Map/index';
import { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';
import places from '@/placeData';
import { useRouter } from 'next/router';

export default function MapPage(props) {
  const router = useRouter();
  const { pid } = router.query;
  const [coords, setCoords] = useState([]);

  // const getRandPlace = (inp) => {
  //   const randNum = Math.floor(Math.random() * (inp.length - 0) + 0);
  //   return inp[randNum].coords;
  // };

  if (pid === 'all') {
    useEffect(() => {
      (() => {
        navigator.geolocation.getCurrentPosition((position) => {
          setCoords([position.coords.latitude, position.coords.longitude]);
        });
      })();
    }, []);
  }

  useEffect(() => {
    const [findedPlace] = props.data.filter((place) => place.id === pid);
    if (findedPlace) {
      setCoords([findedPlace.coords[0], findedPlace.coords[1]]);
    }
  }, [pid]);

  // if (!coords[0]) {
  //   setCoords(getRandPlace(props.data));
  // }

  return (
    <m.div
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ y: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      {/* <Map coords={[0, 0]} placesData={props.data} /> */}
      {coords[0] && <Map coords={coords} placesData={props.data} />}
    </m.div>
  );
}

export async function getServerSideProps(context) {
  const data = places;
  return {
    props: { data },
  };
}
