import Image from "next/image"
import Link from "next/link";

export default function ContactPage(){
    return (
        <div className="overflow-auto m-auto max-w-[980px] bg-white">
            <div className="heading-menu flex justify-center items-center flex-wrap px-4 pt-6 pb-20">
                <Image src="/web-style/patterns_01.png" alt="menu left patterns" width="64" height="50" className="rotate-180" />
                <h2 className="font-playfair text-4xl p-3">CONTACT</h2>
                <Image src="/web-style/patterns_01.png" alt="menu right patterns" width="64" height="50" />
                <hr className="block h-2 basis-full mt-2" />
                <center className="w-full mt-6 font-playfair text-[#7A674E] text-[20px]">
                    <h4 className="font-bold block w-full">Address:</h4>
                    <p className="text-[]">#2 - 623 Carlton Trail, North Battleford, SK, CA, S9A3K2</p>
                    <h4 className="mt-8 font-bold block w-full">Telephone:</h4>
                    <p>306-441-9040</p>
                    <h4 className="mt-8 font-bold block w-full">Facebook: </h4>
                    <p><Link href="https://www.facebook.com/profile.php?id=61577973737222" target="_blank">Beaver&#39;s Grill Restaurant</Link></p>
                </center>
                <Image src="/web-style/patterns_02.png" alt="menu right patterns" width="415" height="28" className="mx-auto mt-4"/>
            </div>
        </div>
    )
}