import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Main from "../../components/Main";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import '../app/globals.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main /> 
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
