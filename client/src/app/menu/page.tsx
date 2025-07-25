import "./menu.css";
import Image from "next/image";

export default function MenuPage(){
    return (
        <div className="overflow-auto m-auto container">
            <div className="heading-menu">
                <Image src="/web-style/patterns_01.png" alt="menu left patterns" width="64" height="50" />
                <h2>Menu</h2>
                <Image src="/web-style/patterns_01.png" alt="menu right patterns" width="64" height="50" />
            </div>
        </div>
    )
}