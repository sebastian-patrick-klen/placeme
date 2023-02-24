import PlaceEditor from '@/components/Editor/PlaceEditor';
import { motion as m } from 'framer-motion';
import { getSession } from 'next-auth/react';

export default function NewPlace({ session }) {
  console.log(session);
  return (
    <m.div
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ y: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <PlaceEditor />
    </m.div>
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

  return {
    props: { session },
  };
}
