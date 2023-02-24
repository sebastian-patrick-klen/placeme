import PlaceEditor from '@/components/Editor/PlaceEditor';
import Loading from '@/components/Layout/Loading';
import { motion } from 'framer-motion';

export default function NewPlace({ place }) {
  console.log(place);
  return (
    <motion.div
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ y: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      {!place.message ? (
        <PlaceEditor isEdit={true} placeData={place.place} />
      ) : (
        <Loading>{place.message}</Loading>
      )}
    </motion.div>
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
