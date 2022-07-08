import cssLogo from "../../assets/css-logo.png";
import cssart1 from "../../assets/cssarts/cssArt1.png";
import cssart2 from "../../assets/cssarts/cssArt2.png";
import cssart3 from "../../assets/cssarts/cssArt3.png";
import cssart4 from "../../assets/cssarts/cssArt4.png";
import cssart5 from "../../assets/cssarts/cssArt5.png";

const CssArt = () => {
  return (
    <div className='bg-slate-900 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
      <div className='text-center mb-6 pt-4'>
        <img src={cssLogo} alt='logo of css3' className='mx-auto' />
        <h2 className='text-3xl font-semibold'>Css Arts</h2>
        <p>
          Checkout the code for every art at{"  "}
          <a
            href='https://github.com/nainmeghali09'
            className='text-orange-500 underline'
          >
            my github
          </a>
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-3'>
        <figure className='w-36  md:w-44 lg:w-52'>
          <img src={cssart1} alt='css art' />
        </figure>
        <figure className='w-36 md:w-44 lg:w-52'>
          <img src={cssart2} alt='css art' />
        </figure>
        <figure className='w-36 md:w-44 lg:w-52'>
          <img src={cssart3} alt='css art' />
        </figure>
        <figure className='w-36 md:w-44 lg:w-52'>
          <img src={cssart4} alt='css art' />
        </figure>
        <figure className='w-36 md:w-44 lg:w-52'>
          <img src={cssart5} alt='css art' />
        </figure>
      </div>
    </div>
  );
};

export default CssArt;
