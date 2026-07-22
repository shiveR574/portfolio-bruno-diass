import Image from "next/image";
import Navbar from "./src/components/Navbar";
import Herosection from "./src/components/Herosection";
import Aboutsection from "./src/components/Aboutsection";
import Skillsection from "./src/components/Skillsection";
import Projectsection from "./src/components/Projectsection";
import Footer from "./src/components/Footer";
import "./page.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Aboutsection />
      <Skillsection />
      <Projectsection />
      <Footer />
    </>
  );
}
