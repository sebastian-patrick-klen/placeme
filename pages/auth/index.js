import { motion as m } from 'framer-motion';
import AtuhIndex from '@/components/Auth/authIndex';

export default function () {
  return (
    <m.div
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ y: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <AtuhIndex />
    </m.div>
  );
}