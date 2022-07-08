const SectionNumber = ({ number }) => {
  return (
    <div className='absolute top-10 right-0 flex items-center space-x-2'>
      <h1 className='text-3xl text-zinc-800  md:text-5xl'>{number}</h1>
      <span className='w-10 h-1.5 px-auto inline-block bg-gradient-to-r from-color2 to-color3'></span>
    </div>
  );
};

export default SectionNumber;
