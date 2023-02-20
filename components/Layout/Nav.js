import Link from 'next/link';

export default function Nav() {
  const isLogin = true;
  return (
    <ul className='flex items-center gap-12 py-6'>
      <li>
        <Link href={'/'}>
          <p className='text-sm hover:text-green-500 font-bold transition-colors'>
            Místa
          </p>
        </Link>
      </li>{' '}
      <li>
        <Link href={'/map/all'}>
          <p className='text-sm hover:text-green-500 font-bold transition-colors'>
            Mapa
          </p>
        </Link>
      </li>{' '}
      <li>
        <Link href={isLogin ? '/user/new-place' : '/auth'}>
          <p className='px-5 py-3 bg-green-500 hover:bg-green-600 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
            {isLogin ? 'Přidat nové místo' : 'Přihlásit se'}
          </p>
        </Link>
      </li>
    </ul>
  );
}
