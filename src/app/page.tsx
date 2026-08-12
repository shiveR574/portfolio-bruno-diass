import Image from "next/image";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Herosectiontailwind from "../components/Herosectiontailwind";
import Aboutsection from "../components/Aboutsection";
import Aboutsectiontailwind from "../components/Aboutsectiontailwind";
import Skillsection from "../components/Skillsection";
import Skillsectiontailwindresponsive from "../components/Skilltailwindresponsive";
import Projectsection from "../components/Projectsection";
import Projectsectiontailwind from "../components/Projectsectiontailwind";
import Experiencesection from "../components/Experiencesection";
import Footer from "../components/Footer";
import Footertailwind from "../components/Footertailwind";
import "./page.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Herosectiontailwind />
      {/* <Aboutsection /> */}
      <Aboutsectiontailwind />
      {/* <Skillsection /> */}
      <Skillsectiontailwindresponsive/>
      {/* <Projectsection /> */}
      <Projectsectiontailwind />
      <Experiencesection/>
      <Footertailwind/>
      {/* <Footer /> */}
    </>
  );
}
