import PlaceDetail from '@/components/Places/PlaceDetail';
import { motion as m } from 'framer-motion';

export default function HomePage(props) {
  // const router = useRouter();
  // const { pid } = router.query;
  // const [place, setPlace] = useState({});

  // useEffect(() => {
  //   const [findedPlace] = props.data.filter((pl) => pl.id === pid);
  //   if (findedPlace) {
  //     setPlace(findedPlace);
  //   }
  // }, [pid]);

  return (
    <m.div
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ y: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <PlaceDetail placesData={props.place} />
    </m.div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.pid;
  const fetchString = `http://localhost:5000/api/places/${id}`;
  const res = await fetch(fetchString);
  const { place } = await res.json();

  if (!place) {
    return {
      notFound: true,
    };
  }

  return {
    props: { place },
  };
}
