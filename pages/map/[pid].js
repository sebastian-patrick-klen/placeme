import Map from '@/components/Map/index';
import { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';
import { useRouter } from 'next/router';
import Loading from '@/components/Layout/Loading';

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
  } else {
    useEffect(() => {
      const [findedPlace] = props.data.filter((place) => place._id === pid);
      if (findedPlace) {
        setCoords([findedPlace.coords.lat, findedPlace.coords.lng]);
      }
    }, [pid]);
  }

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
      {coords[0] ? (
        <Map coords={coords} placesData={props.data} />
      ) : (
        <Loading title={'Loading map...'} />
      )}
    </m.div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:5000/api/places');
  const { places } = await res.json();

  return {
    props: { data: places },
  };
}
