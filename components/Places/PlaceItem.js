import Image from 'next/image';
import Link from 'next/link';
import { AiFillSetting, AiFillDelete } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import DeleteContext from '@/store/delete-context';
import ModalContext from '@/store/modal-context';

const cardVariants = {
  offscreen: { opacity: 0, scale: 1 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function PlaceItem(props) {
  const delCtx = useContext(DeleteContext);
  const modCtx = useContext(ModalContext);
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      // exit='offscreen'
      viewport={{ once: true, amount: 0.81 }}
      variants={cardVariants}
    >
      <div className='max-w-xl mx-auto flex flex-col bg-gray-100 rounded-lg overflow-hidden'>
        <Image
          className=' h-80'
          src={`http://localhost:5000/${props.image}`}
          alt={props.title}
          width={600}
          height={250}
        ></Image>

        <div className='mt-10 mb-8 px-5'>
          <h3 className='text-xl text-center font-bold'>{props.title}</h3>

          <h4 className='py-1 text-sm text-gray-800 text-center'>
            {props.creatorName}
          </h4>
          <p className='py-3 text-gray-600 text-center'>{props.description}</p>
          <div className='pt-3 flex items-center justify-center gap-4'>
            <Link href={`/map/${props.id}`}>
              <p className='px-5 py-3 bg-green-500 hover:bg-green-600 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
                Ukázat na mapě
              </p>
            </Link>
            <Link href={`/places/new-place/${props.id}`}>
              <p className='px-5 py-3 bg-gray-200 hover:bg-gray-300 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
                <AiFillSetting size='21px' color='#94a3b8' />
              </p>
            </Link>{' '}
            <button
              onClick={() => {
                delCtx.setNewId(props.id);
                modCtx.setOpen();
              }}
              className='px-5 py-3 bg-gray-200 hover:bg-red-300 text-sm uppercase text-white font-bold rounded-lg transition-colors'
            >
              <AiFillDelete size='21px' color='#94a3b8' />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
