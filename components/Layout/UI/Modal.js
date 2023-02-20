import { motion as m } from 'framer-motion';
import Backdrop from './Backdrop';
import { IoClose } from 'react-icons/io';

export default function Modal({ handleClose, children }) {
  return (
    <Backdrop onClick={handleClose}>
      <m.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500,
          },
        }}
        exit={{ opacity: 0, scale: 0 }}
        onClick={(e) => e.stopPropagation()}
        className='z-40'
      >
        {children}
      </m.div>
    </Backdrop>
  );
}
