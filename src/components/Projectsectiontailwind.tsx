import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import project1 from "../assets/previewproject1.png"
import Image from "next/image";
import { SquareArrowOutUpRight } from 'lucide-react';


export default function Projectsection () {
    return (
        <div className="w-full flex flex-col min-h-[290px] h-auto border-b border-[#cccccc2d]">
            <div className="w-full flex flex-row justify-between items-center px-[5%] py-6 sm:py-[30px]">
                <h2 className="text-2xl sm:text-3xl md:text-[40px] text-[#f7f7f7] font-bold">
                    Projects
                </h2>
                <Link href="/projects/" className="flex flex-row items-center justify-center text-sm md:text-lg text-[#7a94dd] gap-2 hover:text-[#7a94ddb4] hover:cursor-pointer font-bold gap-2">
                    View All Projects <ArrowRight className="w-7 h-7 text-[#7a94dd]"/>
                </Link>
            </div>
            <div className="w-full flex flex-row px-[5%] py-[10px] mb-3">
                <div className="w-[400px] h-[435px] rounded-lg bg-[#e8e5e505]">
                    <div className="w-full overflow-hidden">
                        <Image src={project1} alt="IMDB" className="w-full h-[185px] rounded-t-lg object-cover object-top"></Image>
                    </div>
                    <div className="flex flex-col w-full py-[20px] px-[20px]">
                        <div className="text-lg font-bold">
                            IMDB
                        </div>
                        <p className="w-[350px] py-[20px] text-md font-normal">
                            Project that consisted in trying to be a clone of TMDB/IMDB.
                        </p>
                        <ul className="flex flex-row gap-4">
                            <li className="text-sm font-normal rounded-lg bg-[rgba(126,125,125,0.144)] py-[4px] px-[8px] hover:bg-[rgba(88,88,88,0.151)] hover:cursor-pointer">React</li>
                            <li className="text-sm font-normal rounded-lg bg-[rgba(126,125,125,0.144)] py-[4px] px-[8px] hover:bg-[rgba(88,88,88,0.151)] hover:cursor-pointer">TypeScript</li>
                            <li className="text-sm font-normal rounded-lg bg-[rgba(126,125,125,0.144)] py-[4px] px-[8px] hover:bg-[rgba(88,88,88,0.151)] hover:cursor-pointer">CSS</li>
                            <li className="text-sm font-normal rounded-lg bg-[rgba(126,125,125,0.144)] py-[4px] px-[8px] hover:bg-[rgba(88,88,88,0.151)] hover:cursor-pointer">TMDB API</li>
                        </ul>
                    </div>
                    <ul className="w-full flex flex-row justify-between py-[10px] px-[20px] mt-4">
                        <Link href="/projects" className="flex flex-row items-center text-lg text-[#7a94dd] gap-2 hover:text-[#7a94ddb4] hover:cursor-pointer">See More <SquareArrowOutUpRight className="w-5 h-5 text-[#7a94dd]" /> </Link>
                        <Link href="https://github.com/shiveR574" className="flex flex-row items-center text-lg text-[#7a94dd] hover:text-[#7a94ddb4] hover:cursor-pointer">GitHub<SquareArrowOutUpRight className="w-5 h-5 text-[#7a94dd]" style={{color:"#7a94dd", marginLeft: "7px"}}/> </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}