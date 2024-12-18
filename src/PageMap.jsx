import React from 'react'
import { Route, Routes} from "react-router-dom";
import Home from './components/Home';
import { InternShip } from './components/InternShip';
import {About} from './components/About';
import { Projects } from './components/Projects';
import { Project1 } from './components/Project1';
import { Project2 } from './components/Project2';
import { Project3 } from './components/Project3';
import { Contact } from './components/Contact';

const PageMap = () => {
  return (
    <Routes location={location}>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/> } />
        <Route path="/internship" element={<InternShip/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/1" element={<Project1/>} />
        <Route path="/projects/2" element={ <Project2/> } />
        <Route path="/projects/3" element={ <Project3/> } />
        <Route path="*" element={<Home />} />
      </Routes>
  )
}

export default PageMap;