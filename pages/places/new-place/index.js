import PlaceEditor from '@/components/Editor/PlaceEditor';
import { motion as m } from 'framer-motion';
import { getSession } from 'next-auth/react';

export default function NewPlace() {
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
  console.log(process.env.NEXTAUTH_SECRET);
  const session = await getSession({ req: context.req });
  console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
