import Skills from "./Skills";
import Contact from "./Contact";
import WorkComp from "../components/WorkComp";
import SectionNumber from "../components/SectionNumber";
import { motion } from "framer-motion";
import Typed from "react-typed";
const Home = () => {
  return (
    <div className="bg-desktopcolor1 text-white ">
      <div className="h-screen bg-home bg-center bg-no-repeat bg-contain">
        <motion.div
          className="py-24   h-screen relative  justify-center px-9  flex bg-color1 lg:px-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className=" md:w-2/3 relative top-1/4 lg:px-12 xl:px-24">
            <div className="text-center  text-transparent bg-clip-text font-medium  md:font-extrabold text-5xl bg-gradient-to-r from-color2 to-color3  md:text-8xl lg:mt-4">
              Vidhi Tomar
            </div>
            <div className="mt-4 text-2xl leading-20  md:leading-10 text-center md:text-center lg:mt-8">
            A non-tech girl who loves to play around UI/UX and implement it with  
            
             <span className="bg-gradient-to-r from-color3 to-color2 text-transparent bg-clip-text"> CODE!</span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="relative">
        <SectionNumber number="01" />
        <WorkComp link={"home"} />
      </div>

      <div className="relative">
        <SectionNumber number="02" />
        <Skills />
      </div>
      <div className="relative">
        <SectionNumber number="03" />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
