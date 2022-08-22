const Card = ({ work }) => {
  return (
    <div >
      <div className='flex flex-col text-justify border-l-color2 border-b-color3 border-r-color2 border-t-color3 items-center w-56 border-2 bg-desktopcolor2 rounded-md mx-auto px-4 py-4 md:w-80 md:p-10 lg:px-2 '>
        <img src={work.img} alt={work.title} />
        <div className='font-bold  text-lg my-2 text-transparent bg-clip-text bg-gradient-to-r from-color2 to-color3'>{work.title}</div>
        <div className="mx-3 font-light">{work.desc}</div>
      </div>
    </div>
  );
};

export default Card;
