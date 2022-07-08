const Alert = ({ handleAlert, msg }) => {
  return (
    <div className='w-fit px-8 py-4 shadow-md flex justify-between items-center absolute top-4 right-0 border-b-4 border-orange-500 bg-black text-white space-x-4'>
      <h2 className='text-xl font-semibold'>{msg}</h2>
      <h4 className='text-xl font-bold cursor-pointer' onClick={handleAlert}>
        X
      </h4>
    </div>
  );
};

export default Alert;
