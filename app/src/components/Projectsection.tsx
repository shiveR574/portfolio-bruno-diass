import styles from "./Projectsection.module.scss";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";


export default function Projectsection () {
    return (
        <div className={styles["projectsection-container"]}>
            <div className={styles["projectsection-row"]}>
                <h2 className={styles["projectsection-title"]}>
                    Projects
                </h2>
                <Link href="/projects/" className={styles["projectsection-link"]}>
                    View my projects <ArrowRight size={20} style={{marginLeft: "5px", alignItems: "center", color: "#7a94dd"}}/>
                </Link>
            </div>
        </div>
    )
}