import styles from "./Skillsection.module.scss";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiSass, SiTailwindcss, SiBootstrap } from "react-icons/si";


export default function Skillsection() {
    return (
        <section className={styles["skillsection-container"]}>
            <h2 className={styles["skillsection-title"]}>Skills</h2>
            <div className={styles["skillsection-content"]}>
                <ul className={styles["skills-list"]}>
                    <li className={styles["skill-item"]}><FaReact size={40} style={{ display: "flex", alignItems: "center", color: "#7a94dd" }} />React</li>
                    <li className={styles["skill-item"]}><SiNextdotjs size={40} style={{ display: "flex", alignItems: "center", color: "#7a94dd" }} />Next.js</li>
                    <li className={styles["skill-item"]}><SiTypescript size={40} style={{  display: "flex", alignItems: "center", color: "#7a94dd" }} />TypeScript</li>
                    <li className={styles["skill-item"]}><SiJavascript size={40} style={{  display: "flex", alignItems: "center", justifySelf:"center", color: "#7a94dd" }} />JavaScript</li>
                    <li className={styles["skill-item"]}><SiHtml5 size={40} style={{  display: "flex", alignItems: "center", color: "#7a94dd" }} />HTML5</li>
                    <li className={styles["skill-item"]}><SiSass size={40} style={{ display: "flex", alignItems: "center", color: "#7a94dd" }} />Sass</li>
                    <li className={styles["skill-item"]}><SiTailwindcss size={40} style={{ display: "flex", alignItems: "center", color: "#7a94dd" }} />Tailwind CSS</li>
                    <li className={styles["skill-item"]}><SiBootstrap size={40} style={{ display: "flex", alignItems: "center", color: "#7a94dd" }} />Bootstrap</li>
                </ul>
            </div>
        </section>
    );
}