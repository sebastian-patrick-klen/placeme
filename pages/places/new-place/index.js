import PlaceEditor from '@/components/Editor/PlaceEditor';
import PositionContext from '@/store/position-context';
import { motion as m } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';

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
