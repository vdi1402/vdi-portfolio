import figmaLogo from "../../assets/figma-logo.svg";
import ill1 from "../../assets/illustration/ill1.png";
import ill2 from "../../assets/illustration/ill2.png";
import ill3 from "../../assets/illustration/ill3.png";
import ill4 from "../../assets/illustration/ill4.png";
import ill5 from "../../assets/illustration/ill5.png";
import ill6 from "../../assets/illustration/ill6.png";
import ill7 from "../../assets/illustration/ill7.png";
import ill8 from "../../assets/illustration/ill8.png";
import ill9 from "../../assets/illustration/ill9.png";
import ill10 from "../../assets/illustration/ill10.png";
import ill11 from "../../assets/illustration/ill11.png";
import ill12 from "../../assets/illustration/ill12.png";
import ill13 from "../../assets/illustration/ill13.png";

const Illustration = () => {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log(e.target);
  };

  return (
    <div
      className='px-2 pb-4 pt-10 mb-3 bg-slate-900 md:px-8 lg:px-16 xl:px-20'
      onClick={handleClick}
    >
      <div className='text-center text-white mb-4'>
        <img src={figmaLogo} alt='figma logo' className='mx-auto' />
        <h2 className='text-3xl font-semibold'>ILLUSTRATIONS</h2>
        <p>A collection of illustrations made 100% in Figma</p>
      </div>
      <div className='grid grid-cols-4 grid-rows-11 gap-2 md:gap-4'>
        <figure className='row-start-1 row-end-4'>
          <img
            className='w-full h-full object-cover'
            src={ill1}
            alt='illustration 1'
          />
        </figure>
        <figure className='row-start-1 row-end-4'>
          <img
            className='w-full h-full object-cover'
            src={ill2}
            alt='illustration 1'
          />
        </figure>
        <figure className='row-start-1 row-end-3'>
          <img
            className='w-full h-full object-cover'
            src={ill3}
            alt='illustration 1'
          />
        </figure>
        <figure className='row-start-1 row-end-4'>
          <img
            className='w-full h-full object-cover'
            src={ill4}
            alt='illustration 1'
          />
        </figure>
        <figure className='row-start-4 row-end-6 col-start-1 col-end-3'>
          <img
            className='w-full h-full object-cover'
            src={ill5}
            alt='illustration 1'
          />
        </figure>
        <figure className='row-start-3 row-end-6 col-start-3 col-end-4'>
          <img
            className='w-full h-full object-cover'
            src={ill6}
            alt='illustration 1'
          />
        </figure>
        <figure className='row-start-4 row-end-6 col-start-4 col-end-5'>
          <img
            className='w-full h-full object-cover'
            src={ill7}
            alt='illustration 1'
          />
        </figure>
        <figure className='row-start-6 row-end-9 col-start-1 col-end-3'>
          <img
            className='w-full h-full object-cover'
            src={ill8}
            alt='illustration 1'
          />
        </figure>
        <figure className='row-start-6 row-end-9 col-start-3 col-end-5'>
          <img
            className='w-full h-full object-cover'
            src={ill9}
            alt='illustration 1'
          />
        </figure>
        <figure className='row-start-9 row-end-12'>
          <img
            className='w-full h-full object-cover'
            src={ill10}
            alt='illustration 1'
          />
        </figure>
        <figure className='row-start-9 row-end-12'>
          <img
            className='w-full h-full object-cover'
            src={ill11}
            alt='illustration 1'
          />
        </figure>
        <figure className='row-start-9 row-end-12'>
          <img
            className='w-full h-full object-cover'
            src={ill12}
            alt='illustration 1'
          />
        </figure>
        <figure className='row-start-9 row-end-12'>
          <img
            className='w-full h-full object-cover'
            src={ill13}
            alt='illustration 1'
          />
        </figure>
      </div>
    </div>
  );
};

export default Illustration;
