import "./page.scss";
import Navbar from "@/src/components/Navbar";

export default function About(){
    return (
        <>
            <Navbar/>
            <div className="about-container">
                <h1 className="about-title">About Page</h1>
            </div>
        </>
    )
}