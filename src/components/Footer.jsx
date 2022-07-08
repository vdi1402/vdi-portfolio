const Footer = () => {
  return (
    <div
      className="text-center py-2 px-4
     bg-white font-semibold"
    >
      <div>
        Copyright <span className="text-transparent bg-clip-text bg-gradient-to-r from-color2 to-color3">&copy;</span> 2022
      </div>
      <div>
        Designed & Developed with ❤ by{" "}
        <a
          href="https://twitter.com/MeghaliNain"
          className="text-transparent bg-clip-text bg-gradient-to-r from-color2 to-color3 no-underline"
        >
          Meghali Nain
        </a>{" "}
        &{" "}
        <a
          href="https://twitter.com/vdi0914"
          className="text-transparent bg-clip-text bg-gradient-to-r from-color2 to-color3 no-underline"
        >
          Vidhi Tomar
        </a>{" "}
      </div>
    </div>
  );
};

export default Footer;
