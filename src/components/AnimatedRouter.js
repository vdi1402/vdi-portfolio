import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Work from "../pages/Work";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Error from "../pages/Error";



import Illustration from "../pages/works/webProjects";
import UiDesign from "../pages/works/UiDesign";

import { AnimatePresence } from "framer-motion";

const AnimatedRouter = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
 
          <Route path="work/illustration" element={<Illustration />} />
          <Route path="work/designs" element={<UiDesign />} />

          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRouter;
