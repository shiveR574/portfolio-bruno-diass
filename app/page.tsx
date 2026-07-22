import Image from "next/image";
import Navbar from "./src/components/Navbar";
import Herosection from "./src/components/Herosection";
import Aboutsection from "./src/components/Aboutsection";
import Footer from "./src/components/Footer";
import "./page.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Aboutsection />
      <Footer />
    </>
  );
}
