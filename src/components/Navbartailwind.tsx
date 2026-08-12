"use client";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import logo2 from "../assets/logo2.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowDownToLine } from 'lucide-react';

export default function Navbartailwind() {
    const pathname = usePathname();

  return (
    <nav className="">
        <Image src={logo2} className=""alt="Logo"></Image>
        <div className="">
            <Link href="/" className={pathname === "/" ? styles.active : undefined}>Home</Link>
            <Link href="/about" className={pathname === "/about" ? styles.active : undefined}>About</Link>
            <Link href="/skills" className={pathname === "/skills" ? styles.active : undefined}>Skills</Link>
            <Link href="/projects" className={pathname === "/projects" ? styles.active : undefined}>Projects</Link>
            <Link href="/experience" className={pathname === "/experience" ? styles.active : undefined}>Experience</Link>
            <Link href="/contact" className={pathname === "/contact" ? styles.active : undefined}>Contact</Link>
            <button className=""
            onClick={() => {
                const link = document.createElement("a");
                link.href = "/CVGBrunoDias.pdf";
                link.download = "CVGBrunoDias.pdf";
                link.click();
            }}
            >Resume <ArrowDownToLine size={16} style={{ marginLeft: "8px", color: "lightblue" }} />
            </button>
        </div>
    </nav>
    );
}