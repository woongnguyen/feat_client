import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";


export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="home-gallery-wrap overflow-x-hidden relative w-full mt-4">
          <div className="gallery-item p-3 w-full md:w-1/2 xl:w-1/2">
            <div className="w-full xl:w-[737px] h-[500px] xl:h-[737px] bg-[#FBEDD5]">
              <span className="font-sacramento text-[60px] md:text-[99px] leading-[4rem] md:leading-[6rem] text-center text-[#C65F19] inline-block text-wrap mt-10 xl:mt-20">
                Welcome to the Beaver Grill Express!</span>
              <span className="block mt-10 md:mt-16 max-w-[400px] text-center mx-auto text-[#6E0D0D] font-playfair text-[35px]">North Battleford's #1 Asian Restaurant on Tripadvisor</span>
            </div>
            <div className="flex content-around gap-4">
              <div className="group w-full xl:w-1/3 relative mt-4 overflow-hidden xl:h-[471px]">
                <Image src="/products/top-thai-seafood-and-chicken-curry-bottom-nasi-goreng.jpg" fill className="object-cover" sizes="(max-width: 270px) 100vw, 50vw" alt="top-thai-seafood-and-chicken-curry-bottom-nasi-goreng" />
                <span className="font-sacramento absolute opacity-0 group-hover:opacity-100 text-white text-[21px] xl:text-[40px] p-[30px] flex flex-wrap items-center content-center flex-col h-full text-center">Top: Thai Seafood & Chicken Curry. Bottom: Nasi Goreng</span>
              </div>
              <div className="group w-full xl:w-2/3 relative mt-4 overflow-hidden xl:h-[471px]">
                <Image src="/products/salmon-teriyaki.jpg" alt="salmon-teriyaki" fill className="object-cover" sizes="(max-width: 453px) 100vw, 50vw"/>
                <span className="font-sacramento absolute opacity-0 group-hover:opacity-100 text-white text-[21px] xl:text-[40px] p-[30px] flex flex-wrap items-center content-center flex-col h-full text-center">Salmon Teriyaki</span>
              </div>
            </div>
          </div>
          <div className="gallery-item p-3 w-full md:w-1/2 xl:w-1/2">
            <div className="flex content-around gap-4">
                <div className="group w-full xl:w-1/2 relative mt-4 xl:mt-0 overflow-hidden xl:h-[440px]">
                  <Image src="/products/thai-food.jpg" fill className="object-cover" sizes="(max-width: 416px) 100vw, 50vw" alt="Thai Food" />
                </div>
                <div className="group w-full xl:w-1/2 relative mt-4 xl:mt-0 overflow-hidden xl:h-[440px]">
                  <Image src="/products/top-asian-chicken-cutlet-bottom-kanpoong-combo-box.jpg" alt="Top: Asian Chicken Cutlet. Bottom: Kanpoong Combo Box" fill className="object-cover" sizes="(max-width: 416px) 100vw, 50vw"/>
                  <div className="font-sacramento absolute opacity-0 group-hover:opacity-100 text-white text-[21px] xl:text-[45px] p-[30px] flex flex-wrap items-center content-center flex-col h-full text-center">
                    <span>Top: Asian Chicken Cutlet. Bottom: Kanpoong Combo Box</span></div>
                </div>
            </div>
            <div className="group w-full relative mt-1 xl:mt-4 overflow-hidden xl:h-[768px]">
              <Image src="/products/hours.png" alt="Hours" fill className="object-cover" sizes="(max-width: 770px) 100vw, 50vw" />
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
