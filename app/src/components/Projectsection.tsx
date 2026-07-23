import styles from "./Projectsection.module.scss";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import project1 from "../assets/previewproject1.png"
import Image from "next/image";
import { SquareArrowOutUpRight } from 'lucide-react';


export default function Projectsection () {
    return (
        <div className={styles["projectsection-container"]}>
            <div className={styles["projectsection-row"]}>
                <h2 className={styles["projectsection-title"]}>
                    Projects
                </h2>
                <Link href="/projects/" className={styles["projectsection-link"]}>
                    View All Projects <ArrowRight size={23} style={{marginLeft: "5px", alignItems: "center", color: "#7a94dd"}}/>
                </Link>
            </div>
            <div className={styles["projectbox-container"]}>
                <div className={styles["project-box"]}>
                    <div className={styles["project-background"]}>
                        <Image src={project1} alt="IMDB" className={styles["project-preview"]}></Image>
                    </div>
                    <div className={styles["projectdescription-container"]}>
                        <div className={styles["project-title"]}>
                            IMDB
                        </div>
                        <p className={styles["project-description"]}>
                            Project that consisted in trying to be a clone of TMDB/IMDB.
                        </p>
                        <ul className={styles["project-utilities"]}>
                            <li className={styles["project-utility"]}>React</li>
                            <li className={styles["project-utility"]}>TypeScript</li>
                            <li className={styles["project-utility"]}>CSS</li>
                            <li className={styles["project-utility"]}>TMDB API</li>
                        </ul>
                    </div>
                    <ul className={styles["project-links"]}>
                        <Link href="/projects" className={styles["project-link"]}>See More<SquareArrowOutUpRight size={20} style={{color:"#7a94dd", marginLeft: "7px"}} /> </Link>
                        <Link href="https://github.com/shiveR574" className={styles["project-link"]}>GitHub<SquareArrowOutUpRight size={20} style={{color:"#7a94dd", marginLeft: "7px"}}/> </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}