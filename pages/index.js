import AllPosts from '@/components/Places/AllPlaces';
import places from '@/placeData';
import { motion as m } from 'framer-motion';

export default function HomePage(props) {
  return (
    <m.div
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ y: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <AllPosts placesData={props.data} />
    </m.div>
  );
}

export async function getServerSideProps(context) {
  const data = places;
  return {
    props: { data },
  };
}
