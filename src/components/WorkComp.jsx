
import responsiveLogo from "../images/responsivelogo.png";
import web from "../images/web.png";
import Card from "./Card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const works = [
 

  {
    title: "UI Designs",
    desc: "Here’s a list of Ui Designs that I have made in Figma.",
    path: "designs",
    img: responsiveLogo,
  },
  {
    title: "web Projects",
    desc: "A list of web projects that i have build with JS & REACT.",
    path: "illustration",
    img: web,
  },
];

const WorkComp = ({ link }) => {
  return (
    <>
      <div className="py-16 px-8 md:h-screen  space-y-16 bg-desktopcolor2 text-white lg:px-20">
        <div className="text-2xl font-bold lg:text-4xl">
          {" "}
          <span className="border-b-4 border-color3">Wo</span>rk
        </div>
        <motion.div
          className="grid grid-cols-1 space-y-4 md:space-y-0 md:px-56 place-items-center lg:py-36   justify-center md:grid-cols-2  "
          initial={{ width: 0 }}
          animate={{ width: "100%"}}
          exit={{ x: window.innerWidth , transition : {duration : 0.2} }}
        >
          {works.map((work, id) => (
            <Link
              key={id}
              to={`${link === "work" ? work.path : "work/" + work.path}`}
            >
              <Card key={id} work={work} />
            </Link>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default WorkComp;
