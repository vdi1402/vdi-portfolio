import linkedIn from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import github from "../images/github.svg";

const Social = () => {
  return (
    <div className='flex space-x-6 justify-center my-4'>
      <img className='w-auto h-10' src={twitter} alt='Twitter Link' />
      <img className='w-auto h-10' src={linkedIn} alt='Linkedin Link' />
      <img className='w-auto h-10' src={github} alt='Github Link' />
    </div>
  );
};

export default Social;
