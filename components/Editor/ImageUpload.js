export default function ImageUpload({
  placeholder,
  onChange,
  onBlur,
  isError,
  errMessage,
}) {
  return (
    <div className=''>
      <input
        type='file'
        name='image'
        id='image'
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        accept='.jpg,.png,.jpeg'
        className='block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-green-50 file:text-green-700
            hover:file:bg-green-100'
      />
      {isError && <p className='mt-2 text-red-600 text-sm'>{errMessage}</p>}
    </div>
  );
}
