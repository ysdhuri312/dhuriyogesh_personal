/** @format */

import Home from '../sections/Home';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Project from '../sections/Project';
import Contact from '../sections/Contact';

import { useMetadata } from '../utils/hooks/useMetadata';

const Landing = () => {
  useMetadata({});

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
};
export default Landing;
