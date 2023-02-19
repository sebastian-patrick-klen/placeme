import { Router } from 'next/router';
import { useEffect } from 'react';

export default function () {
  const router = Router();

  const { state } = router.params;
  useEffect(() => {});

  return (
    <div className='w-full calc-height flex items-center justify-center'>
      <p className='text-xl text-gray-700'>Login</p>
    </div>
  );
}
