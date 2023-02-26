import Map from '@/components/Map/index';
import { useContext, useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';
import { useRouter } from 'next/router';
import Loading from '@/components/Layout/Loading';
import PositionContext from '@/store/position-context';

export default function MapPage(props) {
  const router = useRouter();
  const { pid } = router.query;
  const posCtx = useContext(PositionContext);
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    const [findedPlace] = props.places.filter((place) => place._id === pid);
    if (findedPlace) {
      posCtx.setPosition(findedPlace.coords);
    } else {
      posCtx.setPosition(null);
    }
  }, [pid]);

  return (
    <m.div
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ y: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <Map
        placesData={props.places}
        className='w-full calc-height'
        isEdit={false}
      />
    </m.div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://placeme-backend.onrender.com/api/places`);

  const { places } = await res.json();

  return {
    props: { places },
  };
}
