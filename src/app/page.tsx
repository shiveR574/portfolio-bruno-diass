import Image from "next/image";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Aboutsection from "../components/Aboutsection";
import Skillsection from "../components/Skillsection";
import Skillsectiontailwind from "../components/Skillsectiontailwind";
import Skillsectiontailwind2 from "../components/Skillsectiontailwind2";
import Projectsection from "../components/Projectsection";
import Footer from "../components/Footer";
import "./page.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Aboutsection />
      <Skillsection />
      <Skillsectiontailwind/>
      <Skillsectiontailwind2/>
      <Projectsection />
      <Footer />
    </>
  );
}
