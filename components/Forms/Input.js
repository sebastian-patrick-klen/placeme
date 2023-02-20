export default function ({ type, placeholder, onChange, value, name }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className='px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-600 focus:ring-green-600'
    ></input>
  );
}
