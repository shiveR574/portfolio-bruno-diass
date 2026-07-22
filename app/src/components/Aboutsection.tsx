import styles from "./Aboutsection.module.scss";
import { Laugh } from "lucide-react";
import Image from "next/image";
import ranimage from "@/app/src/assets/handcoding.png";
import ranimage2 from "@/app/src/assets/programming.png";


export default function Aboutsection() {
    return (
        <section className={styles["aboutsection-container"]}>
            <Image src={ranimage} className={styles["aboutsection-logo"]} alt="Logo"></Image>
            <div className={styles["aboutsection-content"]}>
                <h2 className={styles["aboutsection-title"]}>About Me</h2>
                <p className={styles["aboutsection-description"]}>Hi, I'm Bruno! I'm a passionate developer with experience in creating engaging web applications.</p>
                    <div className={styles["aboutsection-skills"]}>
                        <ul className={styles["skills-list"]}>
                            <li className={styles["skill-item"]} ><Laugh size={30} style={{ marginRight: "15px", display: "flex", alignItems: "center", color: "#7a94dd" }} />Commitment</li>
                            <li className={styles["skill-item"]} ><Laugh size={30} style={{ marginRight: "15px", display: "flex", alignItems: "center", color: "#7a94dd" }} /> Communication</li>
                            <li className={styles["skill-item"]} ><Laugh size={30} style={{ marginRight: "15px", display: "flex", alignItems: "center", color: "#7a94dd" }} /> Team Collaboration</li>
                            <li className={styles["skill-item"]} ><Laugh size={30} style={{ marginRight: "15px", display: "flex", alignItems: "center", color: "#7a94dd" }} />Adaptability</li>
                            <li className={styles["skill-item"]} ><Laugh size={30} style={{ marginRight: "15px", display: "flex", alignItems: "center", color: "#7a94dd" }} />Problem Solving</li>
                            <li className={styles["skill-item"]} ><Laugh size={30} style={{ marginRight: "15px", display: "flex", alignItems: "center", color: "#7a94dd" }} />Always Learning</li>
                        </ul>
                    </div>
            </div>
        </section>
    );
}
