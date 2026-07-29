import Image from "next/image";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Aboutsection from "../components/Aboutsection";
import Skillsection from "../components/Skillsection";
import Skillsectiontailwindresponsive from "../components/Skilltailwindresponsive";
import Projectsection from "../components/Projectsection";
import Experiencesection from "../components/Experiencesection";
import Footer from "../components/Footer";
import "./page.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Aboutsection />
      {/* <Skillsection /> */}
      <Skillsectiontailwindresponsive/>
      <Projectsection />
      <Experiencesection/>
      <Footer />
    </>
  );
}
