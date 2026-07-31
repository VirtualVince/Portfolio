import "../app/globals.css";
import { ThemeProvider } from "../../components/ThemeProvider";
import Navbar from "../../components/Navbar";

// Pages Router routes (currently /resume) do not receive the App Router layout in
// src/app/layout.tsx, so without this they render with no ThemeProvider and no Navbar.
// That left /resume permanently light with no theme toggle, and every dark: class on
// it dead.
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
