import Image from "next/image";


export default function Home() {
    return (
        <main>
            <div className="home-gallery-wrap overflow-x-hidden relative w-full mt-4">
                <div className="gallery-item pr-0 md:pr-2 w-full md:w-1/2 xl:w-1/2">
                    <div className="w-full h-[500px] xl:h-[737px] bg-[#FBEDD5]">
                        <span className="font-sacramento text-[60px] md:text-[99px] leading-[4rem] md:leading-[6rem] text-center text-[#C65F19] inline-block text-wrap mt-10 xl:mt-20">Welcome to the Beaver Grill Express!</span>
                        <span className="block mt-10 md:mt-16 max-w-[400px] text-center mx-auto text-[#6E0D0D] font-playfair text-[35px]">North Battleford's #1 Asian Restaurant on Tripadvisor</span>
                    </div>
                    <div className="flex content-around gap-4">
                        <div className="group w-full xl:w-1/3 relative mt-4 overflow-hidden h-[250px] xl:h-[471px]">
                            <Image src="/products/top-thai-seafood-and-chicken-curry-bottom-nasi-goreng.jpg" fill
                                   className="object-cover" sizes="(max-width: 270px) 100vw, 50vw"
                                   alt="top-thai-seafood-and-chicken-curry-bottom-nasi-goreng"/>
                            <span className="font-sacramento absolute opacity-0 group-hover:opacity-100 text-white text-[21px] xl:text-[40px] p-[30px] flex flex-wrap items-center content-center flex-col h-full text-center">Top: Thai Seafood & Chicken Curry. Bottom: Nasi Goreng</span>
                        </div>
                        <div className="group w-full xl:w-2/3 relative mt-4 overflow-hidden xl:h-[471px]">
                            <Image src="/products/salmon-teriyaki.jpg" alt="salmon-teriyaki" fill
                                   className="object-cover" sizes="(max-width: 453px) 100vw, 50vw"/>
                            <span className="font-sacramento absolute opacity-0 group-hover:opacity-100 text-white text-[21px] xl:text-[40px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Salmon Teriyaki </span>
                        </div>
                    </div>
                </div>
                <div className="gallery-item pl-0 md:pl-2 w-full md:w-1/2 xl:w-1/2 mb-4 mt-4 md:mt-0">
                    <div className="flex content-around gap-4">
                        <div className="group w-full xl:w-1/2 relative md:mt-4 xl:mt-0 overflow-hidden h-[250px] xl:h-[440px]">
                            <Image src="/products/thai-food.jpg" fill className="object-cover"
                                   sizes="(max-width: 416px) 100vw, 50vw" alt="Thai Food"/>
                        </div>
                        <div className="group w-full xl:w-1/2 relative md:mt-4 xl:mt-0 overflow-hidden xl:h-[440px]">
                            <Image src="/products/top-asian-chicken-cutlet-bottom-kanpoong-combo-box.jpg"
                                   alt="Top: Asian Chicken Cutlet. Bottom: Kanpoong Combo Box" fill
                                   className="object-cover" sizes="(max-width: 416px) 100vw, 50vw"/>
                            <div className="font-sacramento absolute opacity-0 group-hover:opacity-100 text-white
                            text-[21px] xl:text-[45px] p-[30px] flex flex-wrap items-center justify-center text-center">
                                <span>Top: Asian Chicken Cutlet. Bottom: Kanpoong Combo Box</span></div>
                        </div>
                    </div>
                    <div className="group w-full relative mt-4 xl:mt-4 overflow-hidden h-[350px] sm:h-[400px] xl:h-[768px]">
                        <Image src="/products/hours.png" alt="Hours" fill className="object-cover"
                               sizes="(max-width: 770px) 100vw, 50vw"/>
                    </div>
                </div>
                <div className="gallery-item w-full flex flex-row">
                    <div className="group w-1/2 h-[calc(100vw/2)] relative md:mt-4 xl:mt-0 overflow-hidden pr-2 md:pr-0">
                        <Image src="/products/shrimp-teriyaki.jpg" className="object-cover w-full h-full" width="735" height="981" alt="Shrimp Teriyaki"/>
                        <div className="font-sacramento absolute opacity-0 group-hover:opacity-100 text-white
                        text-[21px] xl:text-[45px] p-[30px] flex flex-wrap items-center justify-center w-full h-full left-0 top-0">
                            <span>Shrimp Teriyaki</span></div>
                    </div>
                    <div className="group w-1/2 h-[calc(100vw/2)] relative md:mt-4 xl:mt-0 overflow-hidden pl-2 md:pl-4">
                        <Image src="/products/classic-chicken-burger.jpg" width="736" height="981"
                               alt="Classic Chicken Burger" className="object-cover w-full h-full" />
                        <div className="font-sacramento absolute opacity-0 group-hover:opacity-100 text-white text-[21px]
                         xl:text-[45px] p-[30px] flex flex-wrap items-center justify-center w-full h-full left-0 top-0 text-center">
                            <span>Classic Chicken Burger</span></div>
                    </div>
                </div>
                <div className="gallery-item w-full flex flex-row mt-4">
                    <div className="group w-1/2 md:w-3/5 h-[calc(100vw/2)] relative overflow-hidden pr-2">
                        <Image src="/products/chicken-vermicelli.jpg" className="object-cover w-full h-full" width="1920" height="1981" alt="Chicken Vermicelli"/>
                        <div className="font-sacramento absolute opacity-0 group-hover:opacity-100 text-white
                        text-[21px] xl:text-[45px] p-[30px] flex flex-wrap items-center justify-center w-full h-full left-0 top-0">
                            <span>Chicken Vermicelli</span></div>
                    </div>
                    <div className="group w-1/2 md:w-2/5 h-[calc(100vw/2)] relative overflow-hidden pl-2">
                        <Image src="/products/hotline_02.png" width="483" height="619"
                               alt="beaver grill Hotline 3064419040" className="object-cover w-full h-full" />
                    </div>
                </div>
                <div className="gallery-item w-full md:w-3/5 xl:w-3/5 pr-0 md:pr-2 mt-4">
                    <div className="float-left group relative overflow-hidden w-2/6 h-[261px] md:h-[401px] 2xl:h-[310px] pr-2">
                        <Image src="/products/top-pork-chop-bottom-chicken-teriyaki-combo-box.jpg"
                               className="object-cover w-full h-full" width="1920" height="1981"
                               alt="Top: Pork Chop. Bottom: Chicken Teriyaki Combo Box."/>
                        <div className="font-sacramento absolute opacity-0 group-hover:opacity-100 text-white
                        text-[21px] xl:text-[45px] p-[30px] flex flex-wrap items-center justify-center w-full h-full left-0 top-0">
                            <span>Top: Pork Chop. Bottom: Chicken Teriyaki Combo Box.</span></div>
                    </div>
                    <div className="float-left group relative overflow-hidden w-4/6 h-[261px] md:h-[401px] 2xl:h-[310px] pl-2">
                        <Image src="/products/6pc-wing-and-caesar-salad.jpg"
                               className="object-cover w-full h-full" width="1920" height="1981"
                               alt="Thai Seafood & Chicken Curry"/>
                        <div className="font-sacramento absolute opacity-0 group-hover:opacity-100 text-white
                        text-[21px] xl:text-[45px] p-[30px] flex flex-wrap items-center justify-center w-full h-full left-0 top-0">
                            <span>Thai Seafood & Chicken Curry</span></div>
                    </div>
                    <div className="float-none clear-both group relative overflow-hidden w-full h-full md:h-[434px] xl:h-[784px] pt-4">
                        <Image src="/products/thai-curry.jpg"
                               className="object-cover w-full h-full" width="1920" height="1981"
                               alt="Honey Garlic Chicken Wings with Caesar Salad"/>
                        <div className="font-sacramento absolute opacity-0 group-hover:opacity-100 text-white
                        text-[21px] xl:text-[45px] p-[30px] flex flex-wrap items-center justify-center w-full h-full left-0 top-0">
                            <span>Honey Garlic Chicken Wings with Caesar Salad</span></div>
                    </div>
                </div>
                <div className="gallery-item w-full md:w-2/5 xl:w-2/5 md:pl-2 mt-4">
                    <div className="group relative overflow-hidden">
                        <Image src="/products/top-and-bottom-veal-cutlet-with-fries.jpg"
                               className="object-cover w-full h-full" width="1920" height="1981"
                               alt="Top & Bottom: Veal Cutlet with Fries"/>
                        <div className="font-sacramento absolute opacity-0 group-hover:opacity-100 text-white
                        text-[21px] xl:text-[45px] p-[30px] flex flex-wrap items-center justify-center w-full h-full left-0 top-0">
                            <span>Top & Bottom: Veal Cutlet with Fries</span></div>
                    </div>
                    <div className="h-[470px]">
                        <div className="w-full h-full bg-triple-black text-center flex justify-center items-center flex-col">
                            <span className="font-playfair md:text-[61px] shadow-style-txt_02 text-[#E5C282]">LOCATED:</span>
                            <span className="mt-1 md:mt-2 mx-auto text-[#ffffff] p-4 font-roboto text-[35px] font-bold">2-623 Carlton Trail North Battleford, SK, CA. S9A3K2</span>
                            <span className="mt-1 md:mt-2 mx-auto text-[#ffffff] p-4 font-roboto text-[35px] font-bold">Second Floor of the Northland Power Curling Centre</span>
                        </div>
                    </div>
                </div>
                <div className="gallery-item w-full mt-4">
                    <div className="group w-full h-[calc(100vw/2)] relative overflow-hidden">
                        <Image src="/products/banner.jpg" className="object-cover w-full h-full" width="1920" height="1981" alt="Japchae Bap Korean Glass Noodle With Rice"/>
                        <div className="font-sacramento absolute opacity-0 group-hover:opacity-100 text-white
                        text-[21px] xl:text-[45px] p-[30px] flex flex-wrap items-center justify-center w-full h-full left-0 top-0">
                            <span>Japchae Bap Korean Glass Noodle With Rice</span></div>
                    </div>
                </div>
            </div>
        </main>
    );
}
