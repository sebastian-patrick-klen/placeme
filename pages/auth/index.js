import Input from '@/components/Forms/Input';
import { useEffect, useState } from 'react';

export default function () {
  // isMode = true => Login
  // isMode = false => Signup
  const [isMode, setMode] = useState(true);

  const changeModeHandler = () => {
    setMode(!isMode);
  };

  return (
    <div className='max-w-lg mx-auto calc-height flex flex-col content-center justify-center'>
      <h3 className='mb-6 text-xl font-semibold '>
        {isMode ? 'Přihlásit se' : 'Zaregistrovat se'}
      </h3>
      <form className='flex flex-col gap-6'>
        {!isMode && <Input type='text' placeholder='Jméno' />}
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Heslo' />

        <button className='px-5 py-4 bg-green-500 hover:bg-green-600 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
          {isMode ? 'Přihlásit se' : 'Zaregistrovat se'}
        </button>
      </form>

      <p className=' my-6 text-base text-gray-700'>
        {isMode ? 'Nemáte účet ' : 'Už máte účet '}
        <span onClick={changeModeHandler} className='underline cursor-pointer'>
          {!isMode ? 'přihlšte se' : 'zaregistrujte se'}
        </span>
      </p>
    </div>
  );
}
