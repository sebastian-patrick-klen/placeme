export default function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-6'>
      {children}
    </form>
  );
}
