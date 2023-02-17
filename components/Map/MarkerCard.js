import Image from 'next/image';
import Link from 'next/link';

export default function MarkerCard({ place }) {
  const isAuth = true;
  return (
    <div className='px-6'>
      {/* <Image src={place.image} alt={place.title} width={600} height={250} /> */}
      <div>
        <h3 className='m-0 p-0 text-xl leading-none font-bold text-center'>
          {place.title}
        </h3>
        <p className='m-0 text-gray-600 leading-none text-center'>
          {place.author}
        </p>
        <Link href={isAuth ? `/place/${place.id}` : '/auth'}>
          <p className='px-3 py-3 bg-green-500 leading-none hover:bg-green-600/90 text-sm text-center uppercase text-white font-bold rounded-lg transition-colors'>
            Více o místě
          </p>
        </Link>
      </div>
    </div>
  );
}
