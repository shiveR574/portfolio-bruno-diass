"use client";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import logo2 from "@/app/src/assets/logo2.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();

  return (
    <nav className={styles["nav-container"]}>
        <Image src={logo2} className={styles["nav-logo"]} alt="Logo"></Image>
        <div className={styles["nav-links"]}>
            <Link href="/" className={styles[pathname === "/" ? "active" : ""]}>Home</Link>
            <Link href="/about" className={styles[pathname === "/about" ? "active" : ""]}>About</Link>
            <Link href="/projects" className={styles[pathname === "/projects" ? "active" : ""]}>Projects</Link>
            <Link href="/contact" className={styles[pathname === "/contact" ? "active" : ""]}>Contact</Link>
        </div>
    </nav>
    );
}


