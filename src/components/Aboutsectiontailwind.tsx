import { Laugh } from "lucide-react";
import Image from "next/image";
import ranimage from "../assets/handcoding.png";
import { GiBrain } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";
import { MdFactCheck } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa6";



export default function Aboutsectiontailwind() {
    return (
        <section className="w-full flex flex-col md:flex-row items-center min-h-[200px] md:min-h-[450px] h-auto bg-[#05050511] border-b border-[#cccccc2d] px-[5%] py-[20px]">
            <Image src={ranimage} className="w-30 h-40 md:w-100 md:h-90 object-contain" alt="Logo"></Image>
            <div className="flex flex-col ml-0 mt-[20px] md:ml-[180px] md:mt-0 justify-center md:justify-start items-center md:items-start">
                <h2 className="text-sm md:text-4xl font-bold text-[#f7f7f7] mt-[10px]">About Me</h2>
                <p className="text-sm md:text-2xl font-normal text-[#f7f7f7] w-auto md:max-w-[800px] mt-[15px] md:mt-[35px]">Hi, I'm Bruno! I'm a passionate developer with experience in creating engaging web applications.</p>
                    <div className="mt-[20px] md:mt-[50px]">
                        <ul className="grid grid-cols-2 gap-3 md:grid md:grid-cols-3 md:gap-5">
                            <li className="text-sm md:text-xl font-normal text-[#f7f7f7] flex flex-row items-center gap-3 md:gap-5" ><MdFactCheck className="w-5 h-5 md:w-8 md:h-8 text-[#7a94dd]"/>Commitment</li>
                            <li className="text-sm md:text-xl font-normal text-[#f7f7f7] flex flex-row items-center gap-3 md:gap-5" ><Laugh className="w-5 h-5 md:w-8 md:h-8 text-[#7a94dd]" /> Communication</li>
                            <li className="text-sm md:text-xl font-normal text-[#f7f7f7] flex flex-row items-center gap-3 md:gap-5" ><FaHandshake className="w-5 h-5 md:w-8 md:h-8 text-[#7a94dd]" /> Team Collaboration</li>
                            <li className="text-sm md:text-xl font-normal text-[#f7f7f7] flex flex-row items-center gap-3 md:gap-5" ><FaPuzzlePiece className="w-5 h-5 md:w-8 md:h-8 text-[#7a94dd]" />Adaptability</li>
                            <li className="text-sm md:text-xl font-normal text-[#f7f7f7] flex flex-row items-center gap-3 md:gap-5" ><GiBrain className="w-5 h-5 md:w-8 md:h-8 text-[#7a94dd]" />Problem Solving</li>
                            <li className="text-sm md:text-xl font-normal text-[#f7f7f7] flex flex-row items-center gap-3 md:gap-5" ><SiFuturelearn className="w-5 h-5 md:w-8 md:h-8 text-[#7a94dd]" />Always Learning</li>
                        </ul>
                    </div>
            </div>
        </section>
    );
}
