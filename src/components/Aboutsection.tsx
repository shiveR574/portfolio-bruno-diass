import styles from "./Aboutsection.module.scss";
import { Laugh } from "lucide-react";
import Image from "next/image";
import ranimage from "../assets/handcoding.png";
import ranimage2 from "../assets/programming.png";
import { GiBrain } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";
import { MdFactCheck } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa6";



export default function Aboutsection() {
    return (
        <section className={styles["aboutsection-container"]}>
            <Image src={ranimage} className={styles["aboutsection-logo"]} alt="Logo"></Image>
            <div className={styles["aboutsection-content"]}>
                <h2 className={styles["aboutsection-title"]}>About Me</h2>
                <p className={styles["aboutsection-description"]}>Hi, I'm Bruno! I'm a passionate developer with experience in creating engaging web applications.</p>
                    <div className={styles["aboutsection-skills"]}>
                        <ul className={styles["skills-list"]}>
                            <li className={styles["skill-item"]} ><MdFactCheck size={30} style={{ marginRight: "15px", display: "flex", alignItems: "center", color: "#7a94dd" }} />Commitment</li>
                            <li className={styles["skill-item"]} ><Laugh size={30} style={{ marginRight: "15px", display: "flex", alignItems: "center", color: "#7a94dd" }} /> Communication</li>
                            <li className={styles["skill-item"]} ><FaHandshake size={30} style={{ marginRight: "15px", display: "flex", alignItems: "center", color: "#7a94dd" }} /> Team Collaboration</li>
                            <li className={styles["skill-item"]} ><FaPuzzlePiece size={30} style={{ marginRight: "15px", marginLeft: "2px", display: "flex", alignItems: "center", color: "#7a94dd" }} />Adaptability</li>
                            <li className={styles["skill-item"]} ><GiBrain size={30} style={{ marginRight: "15px", display: "flex", alignItems: "center", color: "#7a94dd" }} />Problem Solving</li>
                            <li className={styles["skill-item"]} ><SiFuturelearn size={30} style={{ marginRight: "15px", display: "flex", alignItems: "center", color: "#7a94dd" }} />Always Learning</li>
                        </ul>
                    </div>
            </div>
        </section>
    );
}
