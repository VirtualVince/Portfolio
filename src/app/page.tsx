import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Main from "../../components/Main";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import Projects from "../../components/Projects";
import Head from "next/head";
import "../app/globals.css";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="./favicon.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
