import { Link } from "react-router-dom";

const Links = ({ handleActive, active }) => {
  return (
    <>
      <Link
        to='/'
        onClick={handleActive}
        id='home'
        className={
          active === "home" ? "px-8 py-8  pb-4  bg-gradient-to-r from-color2 to-color3" : "px-2"
        }
      >
        Home
      </Link>
      <Link
        to='work'
        onClick={handleActive}
        id='work'
        className={
          active === "work" ? "px-8 py-8  pb-4  bg-gradient-to-r from-color2 to-color3" : "px-2"
        }
      >
        Work
      </Link>
      <Link
        to='skills'
        onClick={handleActive}
        id='skills'
        className={
          active === "skills"
            ? "px-8 py-8  pb-4  bg-gradient-to-r from-color2 to-color3"
            : "px-2"
        }
      >
        Skills
      </Link>
      <Link
        to='contact'
        onClick={handleActive}
        id='contact'
        className={
          active === "contact"
            ? "px-8 py-8  pb-4  bg-gradient-to-r from-color2 to-color3"
            : "px-2"
        }
      >
        Contact Me
      </Link>
    </>
  );
};

export default Links;
