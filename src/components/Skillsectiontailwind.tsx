import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiTailwindcss } from "react-icons/si";

export default function Skillsectiontailwind() {
    const skillItem =
        "flex flex-col items-center justify-center text-center text-[22px] gap-[10px] px-[50px] py-[20px] box-border rounded-[20px] bg-[rgba(126,125,125,0.144)] hover:bg-[rgba(88,88,88,0.151)] hover:cursor-pointer";

    return (
        <section className="flex flex-col w-full h-[290px] border-b border-[#cccccc2d]">
            <h2 className="w-full text-[40px] text-[#f7f7f7] font-bold px-[5%] py-[30px]">
                Skills TailWind Correct
            </h2>
            <div className="flex flex-row px-[5%]">
                <ul className="flex flex-row flex-wrap gap-x-6 gap-y-0">
                    <li className={skillItem}>
                        <FaReact size={40} style={{ display: "flex", alignItems: "center", color: "#7a94dd" }} />
                        React
                    </li>
                    <li className={skillItem}>
                        <SiNextdotjs size={40} style={{ display: "flex", alignItems: "center", color: "#7a94dd" }} />
                        Next.js
                    </li>
                    <li className={skillItem}>
                        <SiTypescript size={40} style={{ display: "flex", alignItems: "center", color: "#7a94dd" }} />
                        TypeScript
                    </li>
                    <li className={skillItem}>
                        <SiJavascript size={40} style={{ display: "flex", alignItems: "center", justifySelf: "center", color: "#7a94dd" }} />
                        JavaScript
                    </li>
                    <li className={skillItem}>
                        <SiHtml5 size={40} style={{ display: "flex", alignItems: "center", color: "#7a94dd" }} />
                        HTML5
                    </li>
                    <li className={skillItem}>
                        <SiTailwindcss size={40} style={{ display: "flex", alignItems: "center", color: "#7a94dd" }} />
                        Tailwind CSS
                    </li>
                </ul>
            </div>
        </section>
    );
}