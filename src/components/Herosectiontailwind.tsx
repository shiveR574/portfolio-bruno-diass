import styles from "./Herosection.module.scss";
import { ArrowRight } from 'lucide-react';
import { Mail } from 'lucide-react';
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Herosectiontailwind() {
  return (
    <div className="bg-[url(/herobackground.png)] bg-cover bg-[30%] md:bg-[50%_58%] h-auto h-min-[600px] md:h-[800px] w-full border-b border-[#cccccc2d]">
        <section className="flex flex-col items-start px-6 py-12 md:px-[80px] md:py-[90px] gap-4 md:gap-5">
            <p className="text-2xl md:text-3xl font-medium text-[#7a94dd]">Hi, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-[#ffffff]">Bruno Dias</h1>
            <h2 className="text-2xl md:text-[45px] font-bold text-[#7a94dd]">Passionate React Developer</h2>
            <p className="text-xl md:text-2xl font-medium text-[#ffffff] w-auto md:w-[600px] mt-2">
                I am a dedicated React developer with a strong passion for creating dynamic and user-friendly web applications. 
            </p>
        </section>
        <div className="flex flex-col sm:w-auto items-center md:flex md:flex-row w-full md:px-[85px] gap-4 md:gap-10">
            <Link href="/projects" className="flex flex-row items-center justify-center text-lg md:text-2xl font-bold bg-[#7a94dd] rounded-md px-9.5 py-4 md:px-[40px] md:py-[20px] gap-2 hover:bg-[#7a94ddb9] hover:cursor-pointer">View My Work <ArrowRight className="w-7 h-7" /></Link>
            <Link href="/contact" className="flex flex-row items-center justify-center text-lg md:text-2xl font-bold bg-[#0505053f] rounded-md px-12 py-4 border-solid border-[1px] border-[#cccccc70] md:px-[50px] md:py-[18px] gap-3 hover:bg-[rgba(5,5,5,0.459)] hover:cursor-pointer"><Mail className="w-7 h-7"/>Contact Me</Link>
        </div>
        <div className="flex flex-row justify-center md:justify-start py-10 md:px-[250px] md:py-[70px] gap-7 items-center">
            <Link href="https://github.com/shiveR574" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-8 h-8 md:w-10 md:h-10 text-[white] hover:text-[rgb(62,123,255)]" />
            </Link>
            <Link href="https://www.linkedin.com/in/bruno-filipe-dias/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-8 h-8 md:w-10 md:h-10 text-[white] hover:text-[rgb(62,123,255)]" />
            </Link>
            <Link href="https://www.instagram.com/brunodiasss_/?hl=pt" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-8 h-8 md:w-10 md:h-10 text-[white] hover:text-[rgb(62,123,255)]" />
            </Link>
            <Link href="contact" target="_blank" rel="noopener noreferrer">
                <Mail className="w-8 h-8 md:w-10 md:h-10 text-[white] hover:text-[rgb(62,123,255)]" />
            </Link>
        </div>
    </div>
  );
}