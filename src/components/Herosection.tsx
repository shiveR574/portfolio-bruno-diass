import styles from "./Herosection.module.scss";
import { ArrowRight } from 'lucide-react';
import { Mail } from 'lucide-react';
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Herosection() {
  return (
    <div className={styles["herosection-container"]}>
        <section className={styles["herosection-content"]}>
            <p className={styles["herosection-greeting"]}>Hi, I'm</p>
            <h1 className={styles["herosection-name"]}>Bruno Dias</h1>
            <h2 className={styles["herosection-role"]}>Passionate React Developer</h2>
            <p className={styles["herosection-description"]}>
                I am a dedicated React developer with a strong passion for creating dynamic and user-friendly web applications. 
            </p>
        </section>
        <div className={styles["herosection-buttons"]}>
            <Link href="/projects" className={styles["button-projects"]}>View My Work <ArrowRight size={24} style={{ marginLeft: "8px" }} /></Link>
            <Link href="/contact" className={styles["button-contact"]}><Mail size={23} style={{ marginRight: "12px" }}/>Contact Me</Link>
        </div>
        <div className={styles["herosection-links"]}>
            <Link href="https://github.com/shiveR574" target="_blank" rel="noopener noreferrer">
                <FaGithub className={styles["herosection-link-github"]} style={{ fontSize: "40px" }} />
            </Link>
            <Link href="https://www.linkedin.com/in/bruno-filipe-dias/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles["herosection-link-linkedin"]} style={{ fontSize: "40px" }} />
            </Link>
            <Link href="https://www.instagram.com/brunodiasss_/?hl=pt" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles["herosection-link-instagram"]} style={{ fontSize: "40px" }} />
            </Link>
            <Link href="contact" target="_blank" rel="noopener noreferrer">
                <Mail className={styles["herosection-link-email"]} />
            </Link>
        </div>
    </div>
  );
}