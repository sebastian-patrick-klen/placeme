import Link from 'next/link';
import { AiFillSetting } from 'react-icons/ai';

export default function Nav() {
  const isAuth = true;
  return (
    <ul className='flex items-center  gap-12 py-6'>
      <li>
        <Link href={'/'}>
          <p className='text-sm hover:text-green-500 font-bold transition-colors'>
            Uživatelé
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
        <div className='flex items-center justify-center gap-4'>
          <Link href={isAuth ? '/places/new-place' : '/auth'}>
            <p className='px-5 py-3 bg-green-500 hover:bg-green-600 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
              {isAuth ? 'Přidat nové místo' : 'Přihlásit se'}
            </p>
          </Link>

          {isAuth && (
            <Link href={'/auth'}>
              <p className='px-5 py-3 bg-gray-200 hover:bg-gray-300 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
                <AiFillSetting size='21px' color='#94a3b8' />
              </p>
            </Link>
          )}
        </div>
      </li>
    </ul>
  );
}
