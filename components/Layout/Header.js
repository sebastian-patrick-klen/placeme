import Nav from './Nav';

export default function Header(props) {
  return (
    <header className='w-full px-12 bg-gray-50/90 z-10'>
      <div className='mx-auto flex items-center justify-between'>
        <h2 className='text-2xl font-semibold'>
          Place<span className='text-green-500'>Me</span>
        </h2>
        <Nav />
      </div>
    </header>
  );
}
