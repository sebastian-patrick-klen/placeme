import Image from 'next/image';
import Link from 'next/link';
import { AiFillLike } from 'react-icons/ai';

export default function PlaceDetail({ placesData }) {
  return (
    <div className='w-full calc-height flex items-center justify-center overflow-hidden rounded-lg'>
      <div className='max-w-2xl mx-auto flex flex-col bg-gray-100 rounded-lg overflow-hidden'>
        <Image
          src={placesData.image}
          alt={placesData.title}
          width={700}
          height={250}
        ></Image>

        <div className='mt-10 mb-8 px-5'>
          <h3 className='text-xl text-center font-bold'>{placesData.title}</h3>
          <Link href={`/user/${placesData.creator}`}>
            <h4 className='py-1 text-sm text-gray-800 text-center'>
              {placesData.creatorName}
            </h4>
          </Link>

          <p className='py-3 text-gray-600 text-center'>
            {placesData.description}
          </p>
          <div className='pt-3 flex items-center justify-center gap-4'>
            <Link href={`/map/${placesData.id}`}>
              <p className='px-5 py-3 bg-green-500 hover:bg-green-600 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
                Ukázat na mapě
              </p>
            </Link>
            <Link href={'/auth'}>
              <p className='px-5 py-3 bg-gray-200 hover:bg-gray-300 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
                <AiFillLike size='21px' color='#94a3b8' />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
