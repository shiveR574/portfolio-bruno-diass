import { FaGraduationCap, FaCode, FaBullseye } from "react-icons/fa";
import styles from "./Experiencesection.module.scss";

export default function Experiencesection (){
    const milestones = [
  {
    icon: <FaGraduationCap />,
    label: "Completed",
    title: "Bachelor's Degree",
    text: "Graduated in IT, in 2024.",
    active: false,
  },
  {
    icon: <FaCode />,
    label: "In progress",
    title: "Building personal projects",
    text: "Developing my skills through hands-on projects, including this portfolio.",
    active: false,
  },
  {
    icon: <FaBullseye />,
    label: "Goal",
    title: "Land a role in programming",
    text: "Looking to join a team where I can grow and keep learning.",
    active: true,
  },
];
    return (
        <section className="flex flex-col w-full min-h-[290px] h-auto border-b border-[#cccccc2d]">
            <h1 className="w-full text-2xl sm:text-3xl md:text-[40px] text-[#f7f7f7] font-bold px-[5%] py-6 sm:py-[30px]">
                Experience
            </h1>
            <h2 className="w-full text-2xl sm:text-3xl md:text-[30px] text-[#f7f7f7] py-2 font-bold text-center ">
                My Journey
            </h2>
            <p className="w-full text-2xl sm:text-3xl md:text-[15px] text-[#f7f7f7] text-center">
                From graduating to building my first projects
            </p>
            <div className="w-full px-[30%] py-[20px]">
                <div className={styles.timeline}>
                    {milestones.map((item, index) => (
                        <div className={styles.item} key={index}>
                            <div
                            className={`${styles.iconWrapper} ${
                                item.active ? styles.active : ""
                            }`}
                            >
                            {item.icon}
                            </div>
                            <p className={styles.label}>{item.label}</p>
                            <p className={styles.title}>{item.title}</p>
                            <p className={styles.text}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}