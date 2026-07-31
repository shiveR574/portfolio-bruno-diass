import { FaGraduationCap, FaCode, FaBullseye } from "react-icons/fa";
import styles from "./Experiencesection.module.scss";

export default function Experiencesection (){
    const milestones = [
  {
    icon: <FaGraduationCap />,
    label: "Completed",
    title: "Bachelor's Degree",
    text: "Graduated with a degree in IT, in 2024.",
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
            <h2 className="w-full text-2xl sm:text-3xl md:text-[35px] text-[#f7f7f7] py-2 font-bold text-center ">
                My Journey
            </h2>
            <p className="w-full text-sm sm:text-base text-[#f7f7f7] text-center">
                From graduating to building my first projects
            </p>
            <div className="flex flex-col gap-6 px-[5%] py-8">
                {milestones.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-[#e8e5e505] rounded-lg p-5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2a2a2a] text-[#7a94dd] text-lg shrink-0">
                        {item.icon}
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wide text-[#999]">
                            {item.label}
                        </p>
                        <p className="text-lg font-medium text-[#f7f7f7]">
                            {item.title}
                        </p>
                        <p className="text-sm text-[#999]">{item.text}</p>
                    </div>
                </div>
                ))}
                <span className="w-full border-b border-dashed border-[#cccccc2d]"></span>
                <p className="w-full flex justify-center text-sm sm:text-base text-[#f7f7f7] font-thin italic text-center">"Looking to grow as a developer and keep learning every step of the way"</p>
            </div>
        </section>
    )
}