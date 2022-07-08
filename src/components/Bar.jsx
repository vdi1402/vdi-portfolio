const Bar = ({ skill }) => {
  return (
    <div className='mb-8'>
      <div className='font-semibold text-md mb-2'>{skill.name}</div>
      <div className='h-4 bg-white'>
        <div className={`h-4 bg-orange-500 ${skill.value}`}></div>
      </div>
    </div>
  );
};

export default Bar;
