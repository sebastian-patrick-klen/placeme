import { motion as m } from 'framer-motion';
import AllPlaces from '@/components/Places/AllPlaces';
import Loading from '@/components/Layout/Loading';

export default function Profile({ places }) {
  return (
    <m.div
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ y: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      {!places.message ? (
        <AllPlaces placesData={places.places} />
      ) : (
        <Loading>Tentu uživatel zatím nepřidal žádné příspěvky.</Loading>
      )}
    </m.div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.uid;
  const res = await fetch(`http://localhost:5000/api/places/user/${id}`);
  const places = await res.json();

  return {
    props: { errorCode: false, places },
  };
}
