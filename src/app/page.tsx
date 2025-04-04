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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="./favicon_io/site.webmanifest" />
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
