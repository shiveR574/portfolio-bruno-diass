import styles from "./Skillsectiontailwind.module.scss";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiTailwindcss } from "react-icons/si";

export default function Skillsectiontailwind2() {
    return (
        <section className="w-full flex flex-column h-[290px] border-b border-[#cccccc2d]">
            <h2 className={`${styles["skillsection-title"]} w-full text-[40px] text-[#f7f7f7] font-bold`}>Skills Tailwind Trying</h2>
            <div className={`${styles["skillsection-content"]} flex flex-row`}>
                <ul className={`${styles["skills-list"]} flex flex-row`}>
                    <li className={`${styles["skill-item"]} flex flex-col items-center text-[22px] content-center justify-center bg-[rgba(126, 125, 125,0.144)] rounded-[20px] g-[10px]`}><FaReact size={40} style={{ display: "flex", alignItems: "center", color: "#7a94dd" }} />React</li>
                    <li className={`${styles["skill-item"]} flex flex-col items-center text-[22px] content-center justify-center bg-[rgba(126, 125, 125,0.144)] rounded-[20px] g-[10px]`}><SiNextdotjs size={40} style={{ display: "flex", alignItems: "center", color: "#7a94dd" }} />Next.js</li>
                    <li className={`${styles["skill-item"]} flex flex-col items-center text-[22px] content-center justify-center bg-[rgba(126, 125, 125,0.144)] rounded-[20px] g-[10px]`}><SiTypescript size={40} style={{  display: "flex", alignItems: "center", color: "#7a94dd" }} />TypeScript</li>
                    <li className={`${styles["skill-item"]} flex flex-col items-center text-[22px] content-center justify-center bg-[rgba(126, 125, 125,0.144)] rounded-[20px] g-[10px]`}><SiJavascript size={40} style={{  display: "flex", alignItems: "center", justifySelf:"center", color: "#7a94dd" }} />JavaScript</li>
                    <li className={`${styles["skill-item"]} flex flex-col items-center text-[22px] content-center justify-center bg-[rgba(126, 125, 125,0.144)] rounded-[20px] g-[10px]`}><SiHtml5 size={40} style={{  display: "flex", alignItems: "center", color: "#7a94dd" }} />HTML5</li>
                    <li className={`${styles["skill-item"]} flex flex-col items-center text-[22px] content-center justify-center bg-[rgba(126, 125, 125,0.144)] rounded-[20px] g-[10px]`}><SiTailwindcss size={40} style={{ display: "flex", alignItems: "center", color: "#7a94dd" }} />Tailwind CSS</li>
                </ul>
            </div>
        </section>
    );
}