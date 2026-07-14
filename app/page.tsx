import Image from "next/image";
import Navbar from "./src/components/Navbar";
import "./page.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="header">
        Hero Section
      </div>
    </>
  );
}
