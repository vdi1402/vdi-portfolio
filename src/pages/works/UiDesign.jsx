import uiDesignLogo from "../../assets/comp-logo.png";
import design1 from "../../assets/designs/design1.png";
import design2 from "../../assets/designs/design2.png";
import design3 from "../../assets/designs/design3.png";
import design4 from "../../assets/designs/design4.png";
import design5 from "../../assets/designs/design5.png";
import design6 from "../../assets/designs/design6.png";
import design7 from "../../assets/designs/design7.png";
import design8 from "../../assets/designs/design8.png";
import design9 from "../../assets/designs/design9.png";
import design10 from "../../assets/designs/design10.png";
import design11 from "../../assets/designs/design11.png";
import design12 from "../../assets/designs/design12.png";
import design13 from "../../assets/designs/design13.png";
import design14 from "../../assets/designs/design14.png";

const UiDesign = () => {
  return (
    <div className='px-2 pb-4 pt-10 mb-3 bg-slate-900 md:px-8 lg:px-16'>
      <div className='text-center text-white mb-4'>
        <img src={uiDesignLogo} alt='ui design logo' className='mx-auto' />
        <h2 className='text-3xl font-bold'>UI Design</h2>
        <p>
          A collection of illustration made 100% in Figma{"  "}
          <a
            href='https://www.figma.com/file/e6dnfozqlt1ZPBiXW5kYjl/meghali-nain?node-id=0%3A1'
            className='text-orange-500 underline'
          >
            Checkout Figma
          </a>
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-3'>
        <figure className='px-4 py-2 bg-slate-400 flex-grow flex justify-center items-center'>
          <img
            src={design1}
            alt='design templates'
            className='w-auto h-[200px]'
          />
        </figure>
        <figure className='px-4 py-2 bg-slate-400 flex-grow flex justify-center items-center'>
          <img
            src={design2}
            alt='design templates'
            className='w-auto h-[200px]'
          />
        </figure>
        <figure className='px-4 py-2 bg-slate-400 flex-grow flex justify-center items-center'>
          <img
            src={design3}
            alt='design templates'
            className='w-auto h-[200px]'
          />
        </figure>
        <figure className='px-4 py-2 bg-slate-400 flex-grow flex justify-center items-center'>
          <img
            src={design4}
            alt='design templates'
            className='w-auto h-[200px]'
          />
        </figure>
        <figure className='px-4 py-2 bg-slate-400 flex-grow flex justify-center items-center'>
          <img
            src={design5}
            alt='design templates'
            className='w-auto h-[200px]'
          />
        </figure>
        <figure className='px-4 py-2 bg-slate-400 flex-grow flex justify-center items-center'>
          <img
            src={design6}
            alt='design templates'
            className='w-auto h-[200px]'
          />
        </figure>

        <figure className='px-4 py-2 bg-slate-400 flex-grow flex justify-center items-center'>
          <img
            src={design7}
            alt='design templates'
            className='w-auto h-[200px]'
          />
        </figure>
        <figure className='px-4 py-2 bg-slate-400 flex-grow flex justify-center items-center'>
          <img
            src={design8}
            alt='design templates'
            className='w-auto h-[200px]'
          />
        </figure>
        <figure className='px-4 py-2 bg-slate-400 flex-grow flex justify-center items-center'>
          <img
            src={design9}
            alt='design templates'
            className='w-auto h-[200px]'
          />
        </figure>
        <figure className='px-4 py-2 bg-slate-400 flex-grow flex justify-center items-center'>
          <img
            src={design10}
            alt='design templates'
            className='w-auto h-[200px]'
          />
        </figure>
        <figure className='px-4 py-2 bg-slate-400 flex-grow flex justify-center items-center'>
          <img
            src={design11}
            alt='design templates'
            className='w-auto h-[200px]'
          />
        </figure>
        <figure className='px-4 py-2 bg-slate-400 flex-grow flex justify-center items-center'>
          <img
            src={design12}
            alt='design templates'
            className='w-auto h-[200px]'
          />
        </figure>
        <figure className='px-4 py-2 bg-slate-400 flex-grow flex justify-center items-center'>
          <img
            src={design13}
            alt='design templates'
            className='w-auto h-[200px]'
          />
        </figure>
        <figure className='px-4 py-2 bg-slate-400 flex-grow flex justify-center items-center'>
          <img
            src={design14}
            alt='design templates'
            className='w-auto h-[200px]'
          />
        </figure>
      </div>
    </div>
  );
};

export default UiDesign;
