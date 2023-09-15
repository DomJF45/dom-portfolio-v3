import Intro from "./Intro";
import About from "./About";
import Projects from "../projects/Projects";
import Technologies from "../tech";
import Links from "./Links";

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Technologies />
      <Links />
    </>
  );
};

export default Home;
