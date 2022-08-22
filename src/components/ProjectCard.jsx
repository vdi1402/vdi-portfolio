import React from "react";

const ProjectCard = ({ image, title, description }) => {
  return (
    <>
      <div class="  overflow-hidden bg-white rounded-md hover:bg-desktopcolor  hover:text-white w-5/6     shadow-lg">
      <a
          href="#"
          class="float-right text-right flex place-items-end justify-end absolute left-74 m-auto mt-4 px-6 py-2 bg-gradient-to-r  from-color2 to-color3  rounded-md shadow-md text-sm font-bold text-white"
        >
          View More
        </a>
        <img class="w-full  object-cover" src={image} alt={image} />
       
        <div class="px-6 py-4 text-center text-gray-700 hover:text-white">
          <div class="font-bold text-xl mb-2 bg-gradient-to-r from-color2 to-color3 text-transparent bg-clip-text">{title}</div>
          <p class="text-gray-700 hover:text-white text-base">{description} </p>
        </div>
        <div class=" pt-4 pb-2 block m-auto space-x-2 text-center">
   
        
      </div>
      </div>
     
    </>
  );
};

export default ProjectCard;
