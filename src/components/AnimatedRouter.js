import React from 'react'
import { Routes, Route , useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Work from "../pages/Work";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Error from "../pages/Error";

import CssArt from "../pages/works/CssArt";
import CaseStudy from "../pages/works/CaseStudy";
import Illustration from "../pages/works/Illustration";
import UiDesign from "../pages/works/UiDesign";
import Connecting from "../pages/caseStudy/Connecting";
import Thoughts from "../pages/caseStudy/Thoughts";
import SupperClub from "../pages/caseStudy/SupperClub";
import { AnimatePresence } from 'framer-motion';

const AnimatedRouter = () => {
    const location = useLocation()
  return (
   <>
   <AnimatePresence>
   <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path='work' element={<Work />} />
        <Route path='work/cssarts' element={<CssArt />} />
        <Route path='work/illustration' element={<Illustration />} />
        <Route path='work/designs' element={<UiDesign />} />
        <Route path='work/case-study' element={<CaseStudy />} />
        <Route path='work/case-study/connecting' element={<Connecting />} />
        <Route path='work/case-study/thoughts' element={<Thoughts />} />
        <Route path='work/case-study/supper-club' element={<SupperClub />} />
        <Route path='skills' element={<Skills />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      </AnimatePresence>
   
   </>
  )
}

export default AnimatedRouter