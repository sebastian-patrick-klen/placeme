import Loading from '@/components/Layout/Loading';
import PlaceDetail from '@/components/Places/PlaceDetail';
import { motion as m } from 'framer-motion';

export default function HomePage({ place }) {
  return (
    <m.div
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ y: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      {!place.message ? (
        <PlaceDetail placesData={place.place} />
      ) : (
        <Loading>{place.message}</Loading>
      )}
    </m.div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.pid;
  const fetchString = `http://localhost:5000/api/places/${id}`;
  const res = await fetch(fetchString);
  const place = await res.json();

  return {
    props: { place },
  };
}
