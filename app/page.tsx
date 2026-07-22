import Image from "next/image";
import Navbar from "./src/components/Navbar";
import Herosection from "./src/components/Herosection";
import "./page.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
    </>
  );
}
