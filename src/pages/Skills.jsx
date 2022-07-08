

import skill1 from "../images/skill1.png";
import skill2 from "../images/skill2.png";
import skill3 from "../images/skill3.png";
import skill4 from "../images/skill4.png";
import skill5 from "../images/skill5.png";
import skill6 from "../images/skill6.png";
import skill7 from "../images/skill7.png";
import skill8 from "../images/skill8.png";
import "../App.css";



const Skills = () => {
  return (
    <>
      <div className="py-16 px-8 bg-desktopcolor text-white lg:px-20">
      <div className="font-bold text-2xl mb-12 lg:text-4xl">
        <span className="border-b-4 transition-all ease-out duration-1000 border-color2">
          Sk
        </span>
        ills
      </div>
        <div className="py-16 gap-8  px-8 place-items-center md:gap-y-24 grid grid-cols-2 md:grid-cols-4 bg-desktopcolor text-white md:px-14 lg:px-20">
      
            
            <img  src={skill1} alt={skill1} />
            <img src={skill2} alt={skill1} />
            <img src={skill3} alt={skill1} />
            <img src={skill4} alt={skill1} />
            <img src={skill5} alt={skill1} />
            <img src={skill6} alt={skill1} />
            <img src={skill7} alt={skill1} />
            <img src={skill8} alt={skill1} />
         
        </div>
      </div>
    </>
  );
};

export default Skills;
