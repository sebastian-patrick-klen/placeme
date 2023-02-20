import PlaceEditor from '@/components/Editor/PlaceEditor';
import { motion as m } from 'framer-motion';

export default function NewPlace() {
  return (
    <m.div
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ y: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <PlaceEditor />
    </m.div>
  );
}
