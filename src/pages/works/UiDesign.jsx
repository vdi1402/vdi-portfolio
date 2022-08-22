import uiDesignLogo from "../../images/responsivelogo.png";
import design1 from "../../assets/designss/uiDesign1.png";

import design2 from "../../assets/designss/uiDesign2.png";
import design3 from "../../assets/designss/uiDesign3.png";
import design4 from "../../assets/designss/uiDesign4.png";
import design5 from "../../assets/designss/uiDesign5.png";
import design6 from "../../assets/designss/uiDesign6.png";
import design7 from "../../assets/designss/uiDesign7.png";
import design8 from "../../assets/designss/uiDesign8.png";
import design9 from "../../assets/designss/uiDesign9.png";
import design10 from "../../assets/designss/uiDesign10.png";
import design11 from "../../assets/designss/uiDesign11.png";
import design12 from "../../assets/designss/uiDesign12.png";

const UiDesign = () => {
  return (
    <div className="px-2 pb-4 pt-10 mb-3 bg-bgcolor4 md:px-8 lg:px-16">
      <div className="text-center text-white mb-4">
        <img src={uiDesignLogo} alt="ui design logo" className="mx-auto" />
        <h2 className="text-3xl font-bold">UI Design</h2>
        <p>
          A collection of UI Designs made in{"  "}
          <a
            href=""
            className="text-color2 underline"
          >
        Figma
          </a>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 p-12 flex-wrap justify-center gap-5  ">
        <figure className="px-4  py-2 bg-gradient-to-bl from-white to-slate-500 flex-grow flex justify-center items-center md:transform md:transition md:duration-500 md:hover:scale-150  md:hover:z-10 md:active:z-10 ">
          <img
            src={design1}
            alt="design templates"
            className="w-auto  md:h-[250px]"
          />
        </figure>
        <figure className="px-4 py-2 bg-gradient-to-bl from-white to-slate-500  flex-grow flex justify-center items-center md:transform md:transition md:duration-500 md:hover:scale-150  md:hover:z-10 md:active:z-10">
          <img
            src={design2}
            alt="design templates"
            className="w-auto md:h-[250px]"
          />
        </figure>
        <figure className="px-4 bg-gradient-to-bl from-white to-slate-500  flex-grow flex justify-center items-center md:transform md:transition md:duration-500 md:hover:scale-150  md:hover:z-10 md:active:z-10">
          <img
            src={design3}
            alt="design templates"
            className="w-auto md:h-[250px]"
          />
        </figure>
        <figure className="px-4py-2 bg-gradient-to-bl from-white to-slate-500 flex-grow flex justify-center items-center md:transform md:transition md:duration-500 md:hover:scale-150  md:hover:z-10 md:active:z-10">
          <img
            src={design4}
            alt="design templates"
            className="w-auto md:h-[250px]"
          />
        </figure>
        <figure className="px-4 py-2 bg-gradient-to-bl from-white to-slate-500  flex-grow flex justify-center items-center md:transform md:transition md:duration-500 md:hover:scale-150  md:hover:z-10 md:active:z-10">
          <img
            src={design5}
            alt="design templates"
            className="w-auto h-[250px]"
          />
        </figure>
        <figure className="px-4  py-2 bg-gradient-to-bl from-white to-slate-500  flex-grow flex justify-center items-center md:transform md:transition md:duration-500 md:hover:scale-150  md:hover:z-10 md:active:z-10">
          <img
            src={design6}
            alt="design templates"
            className="w-auto h-[250px]"
          />
        </figure>

        <figure className="px-4 py-2 bg-gradient-to-bl from-white to-slate-500  flex-grow flex justify-center items-center md:transform md:transition md:duration-500 md:hover:scale-150  md:hover:z-10 md:active:z-10">
          <img
            src={design7}
            alt="design templates"
            className="w-auto h-[250px]"
          />
        </figure>
        <figure className="px-4  py-2 bg-gradient-to-bl from-white to-slate-500  flex-grow flex justify-center items-center md:transform md:transition md:duration-500 md:hover:scale-150  md:hover:z-10 md:active:z-10">
          <img
            src={design8}
            alt="design templates"
            className="w-auto h-[250px]"
          />
        </figure>
        <figure className="px-4 py-2 bg-gradient-to-bl from-white to-slate-500  flex-grow flex justify-center items-center md:transform md:transition md:duration-500 md:hover:scale-150  md:hover:z-10 md:active:z-10">
          <img
            src={design9}
            alt="design templates"
            className="w-auto h-[250px]"
          />
        </figure>
        <figure className="px-4  py-2 bg-gradient-to-bl from-white to-slate-500  flex-grow flex justify-center items-center md:transform md:transition md:duration-500 md:hover:scale-150  md:hover:z-10 md:active:z-10">
          <img
            src={design10}
            alt="design templates"
            className="w-full h-[250px]"
          />
        </figure>
        <figure className="px-4  py-2 bg-gradient-to-bl from-white to-slate-500 flex-grow flex justify-center items-center md:transform md:transition md:duration-500 md:hover:scale-150  md:hover:z-10 md:active:z-10">
          <img
            src={design11}
            alt="design templates"
            className="w-auto h-[250px]"
          />
        </figure>
        <figure className="px-4  py-2 bg-gradient-to-bl from-white to-slate-500  flex-grow flex justify-center items-center md:transform md:transition md:duration-500 md:hover:scale-150  md:hover:z-10 md:active:z-10">
          <img
            src={design12}
            alt="design templates"
            className="w-auto h-[250px]"
          />
        </figure>
      </div>
    </div>
  );
};

export default UiDesign;
