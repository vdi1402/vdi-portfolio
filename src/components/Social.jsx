import linkedIn from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import github from "../images/github.svg";

const Social = () => {
  return (
    <div className='flex space-x-6 justify-center my-4'>
      <a href="https://twitter.com/vdi0914"><img className='w-auto h-10' src={twitter} alt='Twitter Link' /></a>
      <a href="https://www.linkedin.com/in/vidhi-tomar-10a439208/"> <img className='w-auto h-10' src={linkedIn} alt='Linkedin Link' /></a>
     <a href="https://github.com/vdi1402"><img className='w-auto h-10' src={github} alt='Github Link' /></a>
 
    </div>
  );
};

export default Social;
