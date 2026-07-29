import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiTailwindcss } from "react-icons/si";

export default function Skillsectiontailwindresponsive() {
    const skillItem =
        "flex flex-col items-center justify-center text-center text-base sm:text-lg md:text-[22px] gap-2 sm:gap-[10px] px-6 sm:px-8 md:px-[50px] py-4 sm:py-[20px] box-border rounded-2xl bg-[rgba(126,125,125,0.144)] hover:bg-[rgba(88,88,88,0.151)] hover:cursor-pointer w-full sm:w-auto";

    return (
        <section className="flex flex-col w-full min-h-[290px] h-auto border-b border-[#cccccc2d]">
            <h2 className="w-full text-2xl sm:text-3xl md:text-[40px] text-[#f7f7f7] font-bold px-[5%] py-6 sm:py-[30px]">
                Skills TailWind Responsive
            </h2>
            <div className="flex flex-row px-[5%] pb-6">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row md:flex-wrap gap-4 md:gap-x-6 md:gap-y-0 w-full">
                    <li className={skillItem}>
                        <FaReact className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: "#7a94dd" }} />
                        React
                    </li>
                    <li className={skillItem}>
                        <SiNextdotjs className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: "#7a94dd" }} />
                        Next.js
                    </li>
                    <li className={skillItem}>
                        <SiTypescript className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: "#7a94dd" }} />
                        TypeScript
                    </li>
                    <li className={skillItem}>
                        <SiJavascript className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: "#7a94dd" }} />
                        JavaScript
                    </li>
                    <li className={skillItem}>
                        <SiHtml5 className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: "#7a94dd" }} />
                        HTML5
                    </li>
                    <li className={skillItem}>
                        <SiTailwindcss className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: "#7a94dd" }} />
                        Tailwind CSS
                    </li>
                </ul>
            </div>
        </section>
    );
}