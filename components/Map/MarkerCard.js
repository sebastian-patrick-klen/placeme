import Image from 'next/image';
import Link from 'next/link';

export default function MarkerCard({ place }) {
  return (
    <div className='px-6'>
      {/* <Image src={place.image} alt={place.title} width={600} height={250} /> */}
      <div className='pt-2'>
        <h3 className='m-0 p-0  text-xl leading-none font-bold text-center'>
          {place.title}
        </h3>
        <Link href={`/user/${place.creator}`}>
          <p className='m-0 text-gray-600 leading-none text-center'>
            {place.creatorName}
          </p>
        </Link>
        <Link href={`/places/${place._id}`}>
          <p className='px-3 py-3 bg-green-500 leading-none hover:bg-green-600/90 text-sm text-center uppercase text-white font-bold rounded-lg transition-colors'>
            Více o místě
          </p>
        </Link>
      </div>
    </div>
  );
}
