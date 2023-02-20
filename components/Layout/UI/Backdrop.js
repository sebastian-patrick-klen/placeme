import { motion as m } from 'framer-motion';

export default function Backdrop({ children, onClick }) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='absolute top-0 left-0 w-full h-full bg-black/20 z-30'
      onClick={onClick}
    >
      {children}
    </m.div>
  );
}
