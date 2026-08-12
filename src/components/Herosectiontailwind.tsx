import styles from "./Herosection.module.scss";
import { ArrowRight } from 'lucide-react';
import { Mail } from 'lucide-react';
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Herosectiontailwind() {
  return (
    <div className="bg-[url(/herobackground.png)] bg-cover bg-[50%_58%] h-[800px] w-full border-b border-[#cccccc2d]">
        <section className="flex flex-col items-start px-[80px] py-[90px] gap-5">
            <p className="text-3xl font-medium text-[#7a94dd]">Hi, I'm</p>
            <h1 className="text-6xl font-bold text-[#ffffff]">Bruno Dias</h1>
            <h2 className="text-[45px] font-bold text-[#7a94dd]">Passionate React Developer</h2>
            <p className="text-2xl font-medium text-[#ffffff] w-[600px] mt-2">
                I am a dedicated React developer with a strong passion for creating dynamic and user-friendly web applications. 
            </p>
        </section>
        <div className="flex flex-row w-full px-[95px] gap-10">
            <Link href="/projects" className="flex flex-row items-center text-2xl font-bold bg-[#7a94dd] rounded-md px-[40px] py-[20px] hover:bg-[#7a94ddb9] hover:cursor-pointer">View My Work <ArrowRight size={24} style={{ marginLeft: "8px" }} /></Link>
            <Link href="/contact" className="flex flex-row items-center text-2xl font-bold bg-[#0505053f] rounded-md border-solid border-[1px] border-[#cccccc70] px-[50px] py-[18px] hover:bg-[rgba(5,5,5,0.459)] hover:cursor-pointer"><Mail size={23} style={{ marginRight: "12px" }}/>Contact Me</Link>
        </div>
        <div className="herosection-links">
            <Link href="https://github.com/shiveR574" target="_blank" rel="noopener noreferrer">
                <FaGithub className="herosection-link-github" style={{ fontSize: "40px" }} />
            </Link>
            <Link href="https://www.linkedin.com/in/bruno-filipe-dias/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="herosection-link-linkedin" style={{ fontSize: "40px" }} />
            </Link>
            <Link href="https://www.instagram.com/brunodiasss_/?hl=pt" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="herosection-link-instagram" style={{ fontSize: "40px" }} />
            </Link>
            <Link href="contact" target="_blank" rel="noopener noreferrer">
                <Mail className="herosection-link-email" />
            </Link>
        </div>
    </div>
  );
}