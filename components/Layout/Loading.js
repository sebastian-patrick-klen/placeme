export default function Loading({ children }) {
  return (
    <div className='w-full calc-height flex items-center justify-center'>
      <p className='text-xl'>{children}</p>
    </div>
  );
}
