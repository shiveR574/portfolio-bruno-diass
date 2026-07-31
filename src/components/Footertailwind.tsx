import Image from "next/image";
import logo2 from "../assets/logo2.svg"
import Link  from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";


export default function Footertailwind() {
    return (
        <footer className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 px-[5%] sm:px-[25px] py-4 sm:py-0 h-auto sm:h-[63px] bg-[#05050557]">
            <div className="flex items-center flex-1">
                <Image src={logo2} className="w-10 h-10 sm:w-13 sm:h-13" alt="Logo" />
            </div>
            <div className="flex items-center justify-center flex-1 text-center order-3 sm:order-none">
                <p className="text-sm sm:text-base">© 2026 Bruno Dias.</p>
            </div>
            <div className="flex flex-row items-center justify-end gap-5 sm:gap-7 flex-1">
                <Link href="https://github.com/shiveR574" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 hover:text-[rgb(62,123,255)] hover:cursor-pointer" />
                </Link>
                <Link href="https://www.linkedin.com/in/bruno-filipe-dias/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 hover:text-[rgb(62,123,255)] hover:cursor-pointer" />
                </Link>
                <Link href="https://www.instagram.com/brunodiasss_/?hl=pt" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8 hover:text-[rgb(62,123,255)] hover:cursor-pointer" />
                </Link>
                <Link href="/contact" target="_blank" rel="noopener noreferrer">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 hover:text-[rgb(62,123,255)] hover:cursor-pointer" />
                </Link>
            </div>
        </footer>
    );
}
