import { getSession } from 'next-auth/react';
import PlaceUpdate from '@/components/Editor/PlaceUpdate';
import Loading from '@/components/Layout/Loading';
import { motion } from 'framer-motion';

export default function NewPlace({ place }) {
  return (
    <motion.div
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ y: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      {!place.message ? (
        <PlaceUpdate placeData={place.place} />
      ) : (
        <Loading>{place.message}</Loading>
      )}
    </motion.div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  const id = context.params.pid;
  const fetchString = `https://placeme-backend.onrender.com/api/places/${id}`;
  const res = await fetch(fetchString);
  const place = await res.json();

  if (session.user.id !== place.place.creator) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: { place },
  };
}
