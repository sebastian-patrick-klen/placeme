export default function Form({ children, onSubmit, enctype }) {
  return (
    <form
      onSubmit={onSubmit}
      encType='multipart/form-data'
      className='flex flex-col gap-6'
    >
      {children}
    </form>
  );
}
