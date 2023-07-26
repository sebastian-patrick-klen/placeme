import Loading from '@/components/Layout/Loading';
import AllUsers from '@/components/User/AllUsers';

import { motion as m } from 'framer-motion';
import Error from 'next/error';

export default function HomePage({ errorCode, users }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <m.div
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ y: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      {users[0] ? (
        //<AllUsers users={users} />
        <div>Test</div>
      ) : (
        <Loading>Zatím tu nejsou žádní uživatelé. </Loading>
      )}
    </m.div>
  );
}

export async function getServerSideProps() {
  // const res = await fetch(`https://placeme-backend.onrender.com/api/users`);
  // const errorCode = res.ok ? false : res.status;
  // const { users } = await res.json();

  const errorCode = 200;
  const users = ['test'];

  return {
    props: { errorCode, users },
  };
}
