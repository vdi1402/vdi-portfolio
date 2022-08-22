import webLogo from "../../images/responsivelogo.png";

import face from "../../assets/face.png";

import project1 from "../../assets/illustration/falfruits.png";
import project2 from "../../assets/illustration/project2.png";
import project3 from "../../assets/illustration/project3.png";

import grey from "../../assets/illustration/grey.png";
import book from "../../assets/illustration/book.png";
const Illustration = () => {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log(e.target);
  };

  return (
    <>
      <div
        className="px-2 pb-4 pt-10 mb-3  bg-bgcolor4 md:px-8 lg:px-16 xl:px-20"
        onClick={handleClick}
      >
        <div className="text-center text-white space-y-4 mb-4">
          <img src={webLogo} alt="figma logo" className="mx-auto" />
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text  md:font-extrabold  bg-gradient-to-r from-color2 to-color3 ">
            Web Projects
          </h2>
          <p>A collection of illustrations made 100% in Figma</p>
        </div>
        <section class="py-20 px-8">
       
           
            <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
              <div class="bg-white rounded-md shadow-md lg:col-span-2">
                <img src={project1} alt="" class="object-cover w-full h-80" />
                <div class="p-8">
                  <h3 class="font-bold text-2xl bg-gradient-to-r from-color3 to-color2 text-transparent bg-clip-text">A Customized bootstrap website for fruits!</h3>
                  <p class="pt-3">
                Full responsive bootstrap website named 'Falfruit" It has 4 sections i.e home,about,contact,product'
                  </p>
                  <a
                    href="https://falf-ruits-by-vdi.netlify.app/"
                    class="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                  >
                  View live
                  </a>
                </div>
              </div>
              <div class="bg-white rounded-md shadow-md">
                <img src={face} alt="" class="object-cover w-full h-80" />
                <div class="p-8">
                  <h3 class="font-bold text-2xl bg-gradient-to-r from-color3 to-color2 text-transparent bg-clip-text">Portfolio website</h3>
                  <p class="pt-3">
                A react-tailwind portfolio site with use of hooks, props and routes!
                  </p>
                  <a
                    href="https://meghalinain.netlify.app/"
                    class="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                  >
                    View Live
                  </a>
                </div>
              </div>
              <div class="bg-white rounded-md shadow-md">
                <img src={project2} alt="" class="object-cover w-full h-80" />
                <div class="p-8">
                  <h3 class="font-bold text-2xl bg-gradient-to-r from-color3 to-color2 text-transparent bg-clip-text">Jewels</h3>
                  <p class="pt-3">
                   Jewels website is e-com platform for jewelleries build with HTML,CSS & JAVASCRIPT!
                  </p>
                  <a
                    href="https://jewels09vdi.netlify.app"
                    class="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                  >
                    View Live
                  </a>
                </div>
              </div>
              <div class="bg-white rounded-md shadow-md lg:col-span-2">
                <img src={book} alt="" class="object-cover w-full h-80" />
                <div class="p-8">
                  <h3 class="font-bold text-2xl bg-gradient-to-r from-color3 to-color2 text-transparent bg-clip-text">A Customized bootstrap website for fruits!</h3>
                  <p class="pt-3">
                 A react Library app where i have shown the latest collection of books with use of API!
                  </p>
                  <a
                    href="https://boook-react.netlify.app"
                    class="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                  >
                    View Live
                  </a>
                </div>
              </div>
              <div class="bg-white rounded-md shadow-md lg:col-span-2">
                <img src={project3} alt="" class="object-cover w-full h-80" />
                <div class="p-8">
                  <h3 class="font-bold text-2xl bg-gradient-to-r from-color3 to-color2 text-transparent bg-clip-text">Netflix Clone</h3>
                  <p class="pt-3">
                  This is a clone of Netflix website built using React.JS as a Front-end.It's not a replica, and it doesn't have all the features of Netflix website. it's a similar version of Netflix with my own design touch, showing my abilities in React.JS to build something advanced like Netflix.
                  </p>
                  <a
                    href="https://netfix-clone-react.netlify.app"
                    class="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                  >
                    View Live
                  </a>
                </div>
              </div>
              <div class="bg-white rounded-md shadow-md">
                <img src={grey} alt="" class="object-cover w-full h-80" />
                <div class="p-8">
                  <h3 class="font-bold text-2xl bg-gradient-to-r from-color3 to-color2 text-transparent bg-clip-text">My own Portfolio Website!</h3>
                  <p class="pt-3">
                  My own portfolio that is build with ReactJS and TailwindCss!
                  </p>
                  <a
                    href="https://vidhitomar.netlify.app"
                    class="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
         
        </section>
     </div>
    </>
  );
};

export default Illustration;
