import styles from "./Footer.module.scss";
import Image from "next/image";
import logo2 from "@/app/src/assets/logo2.svg";
import Link  from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";


export default function Footer() {
    return (
        <footer className={styles["footer-container"]}>
            <div className={styles["footer-logo"]}>
                <Image src={logo2} className={styles["footer-icon"]} alt="Logo"></Image>
            </div>
            <div className={styles["footer-text"]}>
                <p className={styles["footer-text"]}>© 2026 Bruno Dias.</p>
            </div>
            <div className={styles["footer-links"]}>
                <Link href="https://github.com/shiveR574" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={styles["footer-link-github"]} style={{ fontSize: "30px" }} />
                </Link>
                <Link href="https://www.linkedin.com/in/bruno-filipe-dias/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className={styles["footer-link-linkedin"]} style={{ fontSize: "30px" }} />
                </Link>
                <Link href="https://www.instagram.com/brunodiasss_/?hl=pt" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className={styles["footer-link-instagram"]} style={{ fontSize: "30px" }} />
                </Link>
                <Link href="contact" target="_blank" rel="noopener noreferrer">
                    <Mail className={styles["footer-link-email"]} />
                </Link>
            </div>
        </footer>
    );
}