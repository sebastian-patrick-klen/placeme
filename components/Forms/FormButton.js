export default function FormButton({ children, type }) {
  return (
    <button
      type={type}
      className='px-5 py-4 bg-green-500 hover:bg-green-600 text-sm uppercase text-white font-bold rounded-lg transition-colors'
    >
      {children}
    </button>
  );
}
