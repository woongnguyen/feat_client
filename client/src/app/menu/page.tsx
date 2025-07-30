import "./menu.css";
import Image from "next/image";

export default function MenuPage(){
    return (
        <div className="overflow-auto m-auto max-w-[980px] bg-white pb-20">
            <div className="heading-menu flex justify-center items-center flex-wrap px-4 py-6">
                <Image src="/web-style/patterns_01.png" alt="menu left patterns" width="64" height="50" className="rotate-180"/>
                <h2 className="font-playfair text-4xl p-3">MENU</h2>
                <Image src="/web-style/patterns_01.png" alt="menu right patterns" width="64" height="50"/>
                <hr className="block h-2 basis-full mt-2"/>
            </div>
            <Image src="/web-style/patterns_02.png" alt="menu right patterns" width="415" height="28" className="m-auto"/>
            <div className="content sm:pt-3 md:pt-12">
                <center className="font-playfair md:mb-8">
                    <p className="mb-3">Beaver Grill Express</p>
                    <p className="text-[#C65F19]">The menu that made us the #1 Asian restaurant in North Battleford!</p>
                </center>
                <div className="block-menu">
                    <div className="block-header">
                        <center>
                            <h3 className="text-4xl mt-8 lg:mt-12 lg color-orange-2 shadow-style-txt_01 mb-6">Lunch Specials $14.99</h3>
                            <span className="line_style_01 md:mb-5"></span>
                            <p className="color-orange">Only available from 11am to 2pm / Monday - Friday</p>
                        </center>
                    </div>
                    <div className="block-prod mt-10 flex flex-wrap content-center items-start max-w-[884px] mx-auto">
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/kanpoong-korean-style-chicken.jpg" alt="&quot;Kanpoong&quot; Korean Style Chicken" width="232" height="232"/>
                            <div className="item_title">"Kanpoong" Korean Style Chicken</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Deep-fried chicken breast mixed in Korean sweet & spicy sauce with rice. Choice of spicy or non-spicy.</p>
                            <p className="price">$14.99</p>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/pad-thai.jpg" alt="&quot;Pad Thai&quot;" width="232" height="232"/>
                            <div className="item_title">"Pad Thai"</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">A Thai dish of stir-fried rice noodles with beansprouts and other vegetables, topped with scrambled eggs, crushed *peanuts*, and fresh *cilantro*. Choice of spicy or non-spicy.</p>
                            <p className="price">$14.99</p>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/indian-butter-chicken.jpg" alt="Indian Butter Chicken" width="232" height="232"/>
                            <div className="item_title">Indian Butter Chicken</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Chicken breast in creamy Indian curry sauce with rice & naan.</p>
                            <p className="price">$14.99</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Extra Naan</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">2$</p>
                            </div>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/dry-ribs-&-caesar-salad.jpg" alt="Dry Ribs & Caesar Salad" width="232" height="232"/>
                            <div className="item_title">Dry Ribs & Caesar Salad</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Dry Ribs & Caesar Salad</p>
                            <p className="price">$14.99</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/veal-cutlet.jpg" alt="Veal Cutlet" width="232" height="232"/>
                            <div className="item_title">Veal Cutlet</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Veal with fries topped with gravy and salad with honey lemon dressing.</p>
                            <p className="price">$14.99</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Add Poutine</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">2$</p>
                            </div>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/chicken-burger-with-fries-&-gravy.jpg" alt="Chicken Burger with Fries & Gravy" width="232" height="232"/>
                            <div className="item_title">Chicken Burger with Fries & Gravy</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Crispy fried chicken with lettuce, mayonnaise, served with fries and gravy.</p>
                            <p className="price">$14.99</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Add Poutine</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">2$</p>
                            </div>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/korean-veggie-glass-noodle-japchae.jpg" alt="Korean Veggie Glass Noodle &quot;Japchae&quot;" width="232" height="232"/>
                            <div className="item_title">Korean Veggie Glass Noodle "Japchae"</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Potato starch noodles with stir-fried vegetable. One of the best beloved Korean dishes. Flavored with sesame oil and served with rice.</p>
                            <p className="price">$14.99</p>
                        </div>
                    </div>
                </div>
                <div className="block-menu">
                    <div className="block-header">
                        <center>
                            <h3 className="text-4xl mt-8 md:mt-12 color-orange-2 shadow-style-txt_01 mb-6">Appetizers</h3>
                            <span className="line_style_01 md:mb-5"></span>
                            <p className="color-orange">*Food Allergy Notice* Please be advised that food prepared here may contain: milk, eggs, wheat, soybean, peanuts, tree nuts, fish and shellfish.</p>
                        </center>
                    </div>
                    <div className="block-prod mt-10 flex flex-wrap content-center items-start max-w-[884px] mx-auto">
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/dumplings.jpg" alt="Dumplings" width="232" height="232"/>
                            <div className="item_title">Dumplings</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">(5 pcs) with Spicy Mayo Sauce</p>
                            <p className="price">$6.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/chicken-nuggets.jpg" alt="Chicken Nuggets" width="232" height="232"/>
                            <div className="item_title">Chicken Nuggets</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">(7pcs) with Plum Sauce</p>
                            <p className="price">$6.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/spring-rolls.jpg" alt="Spring Rolls" width="232" height="232"/>
                            <div className="item_title">Spring Rolls</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">(2pcs) with Sweet Chili *contains nuts*</p>
                            <p className="price">$7.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/french-fries.jpg" alt="French Fries" width="232" height="232"/>
                            <div className="item_title">French Fries</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">with Gravy</p>
                            <p className="price">$6.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/onion-rings.jpg" alt="Onion Rings" width="232" height="232"/>
                            <div className="item_title">Onion Rings</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark"></p>
                            <p className="price">$7.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/poutine.jpg" alt="Poutine" width="232" height="232"/>
                            <div className="item_title">Poutine</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Large $13.50</p>
                            <p className="price">$10.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/battered-pickles.jpg" alt="Battered Pickles" width="232" height="232"/>
                            <div className="item_title">Battered Pickles</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Battered Pickles</p>
                            <p className="price">$8.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/dry-ribs.jpg" alt="Dry Ribs" width="232" height="232"/>
                            <div className="item_title">Dry Ribs</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">with Ranch</p>
                            <p className="price">$9.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/cod-bites.jpg" alt="Cod Bites" width="232" height="232"/>
                            <div className="item_title">Cod Bites</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">with Tartar Sauce</p>
                            <p className="price">$9.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/deep-fried-prawns.jpg" alt="Deep Fried Prawns" width="232" height="232"/>
                            <div className="item_title">Deep Fried Prawns</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">(5pcs) with Spicy Mayo Sauce</p>
                            <p className="price">$14.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/calamari.jpg" alt="Calamari" width="232" height="232"/>
                            <div className="item_title">Calamari</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">with Sweet Chili Sauce</p>
                            <p className="price">$12.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/wings.jpg" alt="Wings" width="232" height="232"/>
                            <div className="item_title">Wings</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">(1lbs/8pcs) with a choice of Lemon Pepper, Buffalo, Honey Garlic, Salt & Pepper Seasoning/Sauce (Honey Garlic in Photo)</p>
                            <p className="price">$15.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/no-photo.jpg" alt="House Green Salad" width="232" height="232"/>
                            <div className="item_title">House Green Salad</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">With honey lemon dressing</p>
                            <p className="price">$8.50</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Add Chicken</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">5$</p>
                            </div>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/no-photo.jpg" alt="Caesar Salad" width="232" height="232"/>
                            <div className="item_title">Caesar Salad</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">With bacon bits and parmesan cheese</p>
                            <p className="price">$10.50</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Add Chicken</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">5$</p>
                            </div>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/no-photo.jpg" alt="Mini Wonton Soup" width="232" height="232"/>
                            <div className="item_title">Mini Wonton Soup</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark"></p>
                            <p className="price">$7</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/salad-rolls.jpg" alt="Salad Rolls" width="232" height="232"/>
                            <div className="item_title">Salad Rolls</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">(2 pcs) with a choice of chicken or shrimp inside and a side of peanut sauce.</p>
                            <p className="price">$8.50</p>
                        </div>
                    </div>
                </div>
                <div className="block-menu">
                    <div className="block-header">
                        <center>
                            <h3 className="text-4xl mt-8 md:mt-12 color-orange-2 shadow-style-txt_01 mb-6">Combo Boxes</h3>
                            <span className="line_style_01 md:mb-5"></span>
                            <p className="color-orange">*Food Allergy Notice* Please be advised that food prepared here may contain: milk, eggs, wheat, soybean, peanuts, tree nuts, fish and shellfish.</p>
                        </center>
                    </div>
                    <div className="block-prod mt-10 flex flex-wrap content-center items-start max-w-[884px] mx-auto">
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/kan-poong-chicken-box.jpg" alt="&quot;Kan Poong&quot; Chicken Box" width="232" height="232"/>
                            <div className="item_title">"Kan Poong" Chicken Box</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Deep-fried chicken breast in Korean sweet & spicy sauce with deep-fried pork dumplings, spicy mayo dipping sauce, rice and green salad drizzled with honey lemon dressing.</p>
                            <p className="price">$23.50</p>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/beef-teriyaki-box.jpg" alt="Beef &quot;Teriyaki&quot; Box" width="232" height="232"/>
                            <div className="item_title">Beef "Teriyaki" Box</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Sautéed beef on a bed of stir-fried vegetables with teriyaki sauce, with deep-fried prawn, pork dumpling, rice and green salad drizzled with honey lemon dressing.</p>
                            <p className="price">$24.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/chicken-teriyaki-box.jpg" alt="Chicken &quot;Teriyaki&quot; Box" width="232" height="232"/>
                            <div className="item_title">Chicken "Teriyaki" Box</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Grilled chicken on a bed of stir-fried vegetables with teriyaki sauce, with deep-fried prawn, pork dumpling, rice and green salad drizzled with honey lemon dressing.</p>
                            <p className="price">$23.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/spicy-pork-box.jpg" alt="Spicy Pork Box" width="232" height="232"/>
                            <div className="item_title">Spicy Pork Box</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Spicy pork stir-fried with vegetables, with deep-fried pork dumplings, spicy mayo dip, rice and green salad drizzled with honey lemon dressing.</p>
                            <p className="price">$24.50</p>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/korean-bbq-beef-short-ribs-box.jpg" alt="Korean BBQ Beef Short Ribs Box" width="232" height="232"/>
                            <div className="item_title">Korean BBQ Beef Short Ribs Box</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Tender short ribs marinated in a sugary soy sauce and rice wine sauce with deep-fried prawn and pork dumplings, spicy mayo dipping sauce, rice and green salad drizzled with honey lemon dressing.</p>
                            <p className="price">$28.50</p>
                        </div>
                    </div>
                </div>
                <div className="block-menu">
                    <div className="block-header">
                        <center>
                            <h3 className="text-4xl mt-8 md:mt-12 color-orange-2 shadow-style-txt_01 mb-6">Western</h3>
                            <span className="line_style_01 md:mb-5"></span>
                            <p className="color-orange">*Food Allergy Notice* Please be advised that food prepared here may contain: milk, eggs, wheat, soybean, peanuts, tree nuts, fish and shellfish.</p>
                        </center>
                    </div>
                    <div className="block-prod mt-10 flex flex-wrap content-center items-start max-w-[884px] mx-auto">
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/fish-and-chips.jpg" alt="Fish & Chips" width="232" height="232"/>
                            <div className="item_title">Fish & Chips</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Homemade battered Basa fish with French fries.</p>
                            <p className="price">$15.50</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Add Poutine</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$2</p>
                            </div>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/quarter-pounder-with-fries.png" alt="Quarter Pounder with Fries" width="232" height="232"/>
                            <div className="item_title">Quarter Pounder with Fries</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Beef patty, cheese, mushrooms, onions, lettuce, tomato, and pickles.</p>
                            <p className="price">$17.50</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Add Poutine</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$2</p>
                            </div>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/8-oz-steak.jpg" alt="8 oz Steak" width="232" height="232"/>
                            <div className="item_title">8 oz Steak</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">8oz steak with a choice of two sides. Mashed potato or fries and green salad with honey lemon dressing or caesar salad.</p>
                            <p className="price">$28.50</p>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Add Poutine</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$2</p>
                            </div>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Add Shrimp Skewer</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$6</p>
                            </div>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/roast-beef.jpg" alt="Roast Beef" width="232" height="232"/>
                            <div className="item_title">Roast Beef</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Homemade roast beef with mashed potato or fries with gravy, and salad with honey lemon dressing.</p>
                            <p className="price">$18.50</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Add Poutine</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$2</p>
                            </div>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/veal-cutlet.jpg" alt="Veal Cutlet" width="232" height="232"/>
                            <div className="item_title">Veal Cutlet</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Veal with mashed potato or fries with gravy and salad with honey lemon dressing.</p>
                            <p className="price">$17.50</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Add Poutine</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$2</p>
                            </div>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/dry-ribs-&-caesar-salad.jpg" alt="Dry Ribs & Caesar Salad" width="232" height="232"/>
                            <div className="item_title">Dry Ribs & Caesar Salad</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Dry ribs with caesar salad and garlic toast.</p>
                            <p className="price">$16.50 - $17.50</p>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Dry Ribs & Fries with Gravy</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate min-w-[20px]">....................................................</p>
                                <p className="price !m-0">$16.50</p>
                            </div>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Dry Ribs & Caesar Salad with Garlic Toast</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate min-w-[20px]">....................................................</p>
                                <p className="price !m-0">$17.50</p>
                            </div>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/6pc-wing-and-caesar-salad.jpg" alt="6pc Wing & Caesar Salad" width="232" height="232"/>
                            <div className="item_title">6pc Wing & Caesar Salad</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Homemade wings with a side of caesar salad. Choice of honey garlic, lemon pepper, salt and pepper flavours.</p>
                            <p className="price">$18.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/classic-chicken-burger.jpg" alt="Classic Chicken Burger" width="232" height="232"/>
                            <div className="item_title">Classic Chicken Burger</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Crispy fried chicken with lettuce, mayonnaise & tomato, served with fries and gravy.</p>
                            <p className="price">$17.50</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Add Poutine</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate min-w-[20px]">....................................................</p>
                                <p className="price !m-0">$2</p>
                            </div>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/chicken-strips-and-fries.jpg" alt="Chicken Strips & Fries" width="232" height="232"/>
                            <div className="item_title">Chicken Strips & Fries</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">With gravy</p>
                            <p className="price">$15.50</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Add Poutine</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate min-w-[20px]">....................................................</p>
                                <p className="price !m-0">$2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-menu">
                    <div className="block-header">
                        <center>
                            <h3 className="text-4xl mt-8 md:mt-12 color-orange-2 shadow-style-txt_01 mb-6">Rice Dishes</h3>
                            <span className="line_style_01 md:mb-5"></span>
                            <p className="color-orange">*Food Allergy Notice* Please be advised that food prepared here may contain: milk, eggs, wheat, soybean, peanuts, tree nuts, fish and shellfish.</p>
                        </center>
                    </div>
                    <div className="block-prod mt-10 flex flex-wrap content-center items-start max-w-[884px] mx-auto">
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/bibimbap-korean-mixed-rice.jpg" alt="&quot;Bibimbap&quot; Korean Mixed Rice" width="232" height="232"/>
                            <div className="item_title">"Bibimbap" Korean Mixed Rice</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Rice topped with chopped lettuce, stir-fried vegetables, sautéed beef, sesame seeds, sesame oil, sweet & spicy or teriyaki sauce with a sunny side fried egg on top.</p>
                            <p className="price">$19.50</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Extra Egg</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$1</p>
                            </div>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/teriyaki-japanese-style-meat-with-rice.jpg" alt="&quot;Teriyaki&quot; Japanese Style Meat with Rice" width="232" height="232"/>
                            <div className="item_title">"Teriyaki" Japanese Style Meat with Rice</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Choice of meat with stir-fried vegetables in teriyaki sauce served with rice.</p>
                            <p className="price">$16.50 - $18.50</p>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Chicken</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$16.50</p>
                            </div>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Beef</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$18.50</p>
                            </div>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/kanpoong-korean-style-chicken.jpg" alt="&quot;Kanpoong&quot; Korean Style Chicken" width="232" height="232"/>
                            <div className="item_title">"Kanpoong" Korean Style Chicken</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Deep-fried chicken breast mixed in Korean sweet & spicy sauce with rice. Choice of spicy or non-spicy.</p>
                            <p className="price">$18.50</p>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                            
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/jeayuk-dupbap-korean-spicy-pork.jpg" alt="&quot;Jeayuk Dupbap&quot; Korean Spicy Pork" width="232" height="232"/>
                            <div className="item_title">"Jeayuk Dupbap" Korean Spicy Pork</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Korean spicy stir-fried pork with vegetables and rice.</p>
                            <p className="price">$18.50</p>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/thai-curry.jpg" alt="Thai Curry" width="232" height="232"/>
                            <div className="item_title">Thai Curry</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Variety of vegetables with rice in Thai red curry sauce.</p>
                            <p className="price">$17.50 - $20.50</p>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Chicken</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$17.50</p>
                            </div>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Shrimp</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$18.50</p>
                            </div>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Chicken & Shrimp</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$20.50</p>
                            </div>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/indian-butter-chicken.jpg" alt="Indian Butter Chicken" width="232" height="232"/>
                            <div className="item_title">Indian Butter Chicken</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Chicken breast in creamy Indian curry sauce with rice & naan.</p>
                            <p className="price">$17.50</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Extra Naan</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate min-w-[20px]">....................................................</p>
                                <p className="price !m-0">$2</p>
                            </div>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/asian-chicken-cutlet.jpg" alt="Asian Chicken Cutlet" width="232" height="232"/>
                            <div className="item_title">Asian Chicken Cutlet</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Deep-fried handmade battered chicken breast with teriyaki-mayo sauce on top served with rice & salad.</p>
                            <p className="price">$20.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/indonesian-nasi-goreng.jpg" alt="Indonesian &quot;Nasi Goreng&quot;" width="232" height="232"/>
                            <div className="item_title">Indonesian "Nasi Goreng"</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Indonesian style spicy stir-fried rice with vegetables, chicken and *shrimp*, topped with fresh *cilantro*, crushed *peanuts* and scrambled egg.</p>
                            <p className="price">$22.50</p>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/shrimp-fried-rice.jpg" alt="Shrimp Fried Rice" width="232" height="232"/>
                            <div className="item_title">Shrimp Fried Rice</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Stir-fried rice with chopped *shrimp*, mushroom, bell pepper, corn, onion, green beans, and oil, topped with sesame seeds.</p>
                            <p className="price">$17.50</p>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/no-photo.jpg" alt="Stir-fried Vegetables with Rice" width="232" height="232"/>
                            <div className="item_title">Stir-fried Vegetables with Rice</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark"></p>
                            <p className="price">$14.50</p>
                        </div>
                    </div>
                </div>
                <div className="block-menu">
                    <div className="block-header">
                        <center>
                            <h3 className="text-4xl mt-8 md:mt-12 color-orange-2 shadow-style-txt_01 mb-6">Noodle Dishes</h3>
                            <span className="line_style_01 md:mb-5"></span>
                            <p className="color-orange">*Food Allergy Notice* Please be advised that food prepared here may contain: milk, eggs, wheat, soybean, peanuts, tree nuts, fish and shellfish.</p>
                        </center>
                    </div>
                    <div className="block-prod mt-10 flex flex-wrap content-center items-start max-w-[884px] mx-auto">
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/pad-thai.jpg" alt="&quot;Pad Thai&quot;" width="232" height="232"/>
                            <div className="item_title">&quot;Pad Thai&quot;</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">A Thai dish of stir-fried rice noodles with beansprouts and other vegetables, topped with scrambled eggs, crushed *peanuts*, and fresh *cilantro*. Choice of spicy or non-spicy.</p>
                            <p className="price">$15.50 - $19.50</p>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Chicken</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$16.50</p>
                            </div>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Shrimp</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$18.50</p>
                            </div>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Chicken & Shrimp</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$19.50</p>
                            </div>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Veggie</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$15.50</p>
                            </div>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/korean-glass-noodle-jap-chae.jpg" alt="Korean Glass Noodle &quot;Jap Chae&quot;" width="232" height="232"/>
                            <div className="item_title">Korean Glass Noodle &quot;Jap Chae&quot;</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Potato starch noodles with stir-fried vegetables and choice of protein. One of the best beloved Korean dishes. Flavored with sesame oil and served with rice.</p>
                            <p className="price">$15.50 - $18.50</p>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Veggie</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$15.50</p>
                            </div>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Chicken</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$16.50</p>
                            </div>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Beef</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$17.50</p>
                            </div>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Shrimp</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$18.50</p>
                            </div>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/vietnamese-vermicelli-noodle-bowl-bun-bo-xao.jpg" alt="Vietnamese Vermicelli Noodle Bowl &quot;Bun Bo Xao&quot;" width="232" height="232"/>
                            <div className="item_title">Vietnamese Vermicelli Noodle Bowl "Bun Bo Xao"</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Vermicelli noodles with lettuce. beansprouts, cilantro, mushrooms, fish sauce, and spring rolls, topped with crushed *peanuts* and fresh *cilantro*.</p>
                            <p className="price">$15.50 - $17.50</p>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Veggie</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$15.50</p>
                            </div>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Chicken</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$16.50</p>
                            </div>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Shrimp</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$17.50</p>
                            </div>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Pork</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$17.50</p>
                            </div>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Beef</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$17.50</p>
                            </div>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                        </div>
                    </div>
                </div>
                <div className="block-menu">
                    <div className="block-header">
                        <center>
                            <h3 className="text-4xl mt-8 md:mt-12 color-orange-2 shadow-style-txt_01 mb-6">Soup</h3>
                            <span className="line_style_01 md:mb-5"></span>
                            <p className="color-orange">*Food Allergy Notice* Please be advised that food prepared here may contain: milk, eggs, wheat, soybean, peanuts, tree nuts, fish and shellfish.</p>
                        </center>
                    </div>
                    <div className="block-prod mt-10 flex flex-wrap content-center items-start max-w-[884px] mx-auto">
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/vietnamese-rice-noodle-soup-pho.jpg" alt="Vietnamese Rice Noodle Soup &quot;Pho&quot;" width="232" height="232"/>
                            <div className="item_title">Vietnamese Rice Noodle Soup "Pho"</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Homemade beef broth with beef and pork, bean sprouts and onions, topped with fresh *cilantro* and a lemon slice.</p>
                            <p className="price">$16.50 - $18.50</p>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Beef</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$17.50</p>
                            </div>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Chicken</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$16.50</p>
                            </div>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Beef & Pork</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$18.50</p>
                            </div>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Shrimp</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$17.50</p>
                            </div>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/thai-tom-yum-hot-and-sour-noodle-soup.jpg" alt="Thai &quot;Tom Yum&quot; Hot & Sour Noodle Soup" width="232" height="232"/>
                            <div className="item_title">Thai "Tom Yum" Hot & Sour Noodle Soup</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Variety of vegetables with rice noodles in spicy and sour soup.</p>
                            <p className="price">$15.50 - $17.50</p>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Shrimp</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$17.50</p>
                            </div>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Chicken</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$16.50</p>
                            </div>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Veggie</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$15.50</p>
                            </div>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/mandoo-gook-korean-wonton-soup.jpg" alt="&quot;Mandoo Gook&quot; Korean Wonton Soup" width="232" height="232"/>
                            <div className="item_title">"Mandoo Gook" Korean Wonton Soup</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">*Shrimp*, chicken, pork and vegetable mixed dumplings in a homemade beef broth.</p>
                            <p className="price">$15.50</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Add Rice Noodles</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$1</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-menu">
                    <div className="block-header">
                        <center>
                            <h3 className="text-4xl mt-8 md:mt-12 color-orange-2 shadow-style-txt_01 mb-6">Gluten Free Options</h3>
                            <span className="line_style_01 md:mb-5"></span>
                            <p className="color-orange">*Food Allergy Notice* Please be advised that food prepared here may contain: milk, eggs, wheat, soybean, peanuts, tree nuts, fish and shellfish.</p>
                        </center>
                    </div>
                    <div className="block-prod mt-10 flex flex-wrap content-center items-start max-w-[884px] mx-auto">
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/japchae-bap-korean-glass-noodle-with-rice.jpg" alt="&quot;Japchae Bap&quot; Korean Glass Noodle with Rice" width="232" height="232"/>
                            <div className="item_title">"Japchae Bap" Korean Glass Noodle with Rice</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Potato starch noodles with stir-fried vegetables. One of the best beloved Korean dishes. Flavored with sesame oil and served with rice.</p>
                            <p className="price">$15.50 - $18.50</p>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Veggie</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$15.50</p>
                            </div>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Beef</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$15.50</p>
                            </div>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Chicken</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$16.50</p>
                            </div>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Shrimp</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$18.50</p>
                            </div>
                            <svg role="img" aria-labelledby="fullimgGF" width="15" height="27" viewBox="0 0 15 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-gluten-free"><title id="fullimgGF">Gluten Free</title><path d="M14.3435614 7.794l.001 2.668c.003.085.006.237 0 .449v.1c0 .01-.005.017-.006.027-.044 1.002-.3 2.937-1.574 4.184-1.535 1.503-4.038 1.511-4.7 1.485-.089.004-.218.005-.368.004l3.154-5.755c.761-.333 1.552-.476 2.193-.538l-.001-2.624c0-.359.291-.65.651-.65.359 0 .65.291.65.65zm-4.8711 10.5674c1.78-1.743 4.868-1.476 4.868-1.476s.204 3.094-1.576 4.837c-1.212 1.186-3.013 1.438-4.049 1.48v1.992c0 .359-.291.65-.65.65-.36 0-.651-.291-.651-.65v-1.993c-.741-.033-1.871-.176-2.9-.687l2.224-4.055c.757.791 1.141 1.825 1.326 2.73.192-.94.59-2.026 1.408-2.828zm4.9736-17.6074c.328.164.455.552.284.867l-13.465 24.714c-.12.219-.352.346-.595.346-.104 0-.209-.025-.31-.073-.328-.165-.455-.553-.284-.868l2.641-4.845c-1.073-1.746-.928-4.01-.928-4.01s1.435-.111 2.914.364l.516-.95c-.656-.22-1.313-.547-1.854-1.077-1.277-1.251-1.532-3.193-1.574-4.193-.001-.006-.004-.011-.004-.018v-.069c-.009-.256-.004-.44 0-.516l-.001-2.632c0-.359.291-.65.65-.65.36 0 .651.291.651.65l.001 2.619c1.055.101 2.532.433 3.569 1.448.229.224.416.474.581.733l.607-1.114c-.536-.524-2.149-2.272-2.132-4.354.012-1.61 1-3.005 1.702-3.797l-.001-2.679c0-.359.291-.65.65-.65.36 0 .651.291.651.65l.001 2.622c.641.734 1.548 2.038 1.666 3.553l3.159-5.799c.171-.313.573-.435.905-.272z" fill="#fbb446"></path></svg>
                            
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/thai-tom-yum-hot-and-sour-noodle-soup.jpg" alt="Thai &quot;Tom Yum&quot; Hot & Sour Noodle Soup" width="232" height="232"/>
                            <div className="item_title">Thai "Tom Yum" Hot & Sour Noodle Soup</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Variety of vegetables with rice noodles in spicy and sour soup.</p>
                            <p className="price">$15.50 - $17.50</p>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Chicken</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$16.50</p>
                            </div>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Shrimp</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$17.50</p>
                            </div>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Veggie</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$15.50</p>
                            </div>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                            <svg role="img" aria-labelledby="fullimgGF" width="15" height="27" viewBox="0 0 15 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-gluten-free"><title id="fullimgGF">Gluten Free</title><path d="M14.3435614 7.794l.001 2.668c.003.085.006.237 0 .449v.1c0 .01-.005.017-.006.027-.044 1.002-.3 2.937-1.574 4.184-1.535 1.503-4.038 1.511-4.7 1.485-.089.004-.218.005-.368.004l3.154-5.755c.761-.333 1.552-.476 2.193-.538l-.001-2.624c0-.359.291-.65.651-.65.359 0 .65.291.65.65zm-4.8711 10.5674c1.78-1.743 4.868-1.476 4.868-1.476s.204 3.094-1.576 4.837c-1.212 1.186-3.013 1.438-4.049 1.48v1.992c0 .359-.291.65-.65.65-.36 0-.651-.291-.651-.65v-1.993c-.741-.033-1.871-.176-2.9-.687l2.224-4.055c.757.791 1.141 1.825 1.326 2.73.192-.94.59-2.026 1.408-2.828zm4.9736-17.6074c.328.164.455.552.284.867l-13.465 24.714c-.12.219-.352.346-.595.346-.104 0-.209-.025-.31-.073-.328-.165-.455-.553-.284-.868l2.641-4.845c-1.073-1.746-.928-4.01-.928-4.01s1.435-.111 2.914.364l.516-.95c-.656-.22-1.313-.547-1.854-1.077-1.277-1.251-1.532-3.193-1.574-4.193-.001-.006-.004-.011-.004-.018v-.069c-.009-.256-.004-.44 0-.516l-.001-2.632c0-.359.291-.65.65-.65.36 0 .651.291.651.65l.001 2.619c1.055.101 2.532.433 3.569 1.448.229.224.416.474.581.733l.607-1.114c-.536-.524-2.149-2.272-2.132-4.354.012-1.61 1-3.005 1.702-3.797l-.001-2.679c0-.359.291-.65.65-.65.36 0 .651.291.651.65l.001 2.622c.641.734 1.548 2.038 1.666 3.553l3.159-5.799c.171-.313.573-.435.905-.272z" fill="#fbb446"></path></svg>
                            
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/pad-thai-noodle-dish.jpg" alt="&quot;Pad Thai&quot; Noodle Dish" width="232" height="232"/>
                            <div className="item_title">"Pad Thai" Noodle Dish</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">A Thai dish of stir-fried rice noodles with beansprouts and other vegetables, topped with scrambled eggs, crushed *peanuts*, and fresh *cilantro*</p>
                            <p className="price">$15.50 - $19.50</p>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Chicken</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$16.50</p>
                            </div>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Shrimp</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$18.50</p>
                            </div>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Chicken & Shrimp</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$19.50</p>
                            </div>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Veggie</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$15.50</p>
                            </div>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                            <svg role="img" aria-labelledby="fullimgGF" width="15" height="27" viewBox="0 0 15 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-gluten-free"><title id="fullimgGF">Gluten Free</title><path d="M14.3435614 7.794l.001 2.668c.003.085.006.237 0 .449v.1c0 .01-.005.017-.006.027-.044 1.002-.3 2.937-1.574 4.184-1.535 1.503-4.038 1.511-4.7 1.485-.089.004-.218.005-.368.004l3.154-5.755c.761-.333 1.552-.476 2.193-.538l-.001-2.624c0-.359.291-.65.651-.65.359 0 .65.291.65.65zm-4.8711 10.5674c1.78-1.743 4.868-1.476 4.868-1.476s.204 3.094-1.576 4.837c-1.212 1.186-3.013 1.438-4.049 1.48v1.992c0 .359-.291.65-.65.65-.36 0-.651-.291-.651-.65v-1.993c-.741-.033-1.871-.176-2.9-.687l2.224-4.055c.757.791 1.141 1.825 1.326 2.73.192-.94.59-2.026 1.408-2.828zm4.9736-17.6074c.328.164.455.552.284.867l-13.465 24.714c-.12.219-.352.346-.595.346-.104 0-.209-.025-.31-.073-.328-.165-.455-.553-.284-.868l2.641-4.845c-1.073-1.746-.928-4.01-.928-4.01s1.435-.111 2.914.364l.516-.95c-.656-.22-1.313-.547-1.854-1.077-1.277-1.251-1.532-3.193-1.574-4.193-.001-.006-.004-.011-.004-.018v-.069c-.009-.256-.004-.44 0-.516l-.001-2.632c0-.359.291-.65.65-.65.36 0 .651.291.651.65l.001 2.619c1.055.101 2.532.433 3.569 1.448.229.224.416.474.581.733l.607-1.114c-.536-.524-2.149-2.272-2.132-4.354.012-1.61 1-3.005 1.702-3.797l-.001-2.679c0-.359.291-.65.65-.65.36 0 .651.291.651.65l.001 2.622c.641.734 1.548 2.038 1.666 3.553l3.159-5.799c.171-.313.573-.435.905-.272z" fill="#fbb446"></path></svg>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/thai-curry.jpg" alt="Thai Curry" width="232" height="232"/>
                            <div className="item_title">Thai Curry</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Variety of vegetables with rice in Thai red curry sauce.</p>
                            <p className="price">$17.50 - $18.50</p>
                            <div className="flex content-around items-end p-2">
                                <p className="color-orange text-left">Chicken</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$17.50</p>
                            </div>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Shrimp</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$18.50</p>
                            </div>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                            <svg role="img" aria-labelledby="fullimgGF" width="15" height="27" viewBox="0 0 15 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-gluten-free"><title id="fullimgGF">Gluten Free</title><path d="M14.3435614 7.794l.001 2.668c.003.085.006.237 0 .449v.1c0 .01-.005.017-.006.027-.044 1.002-.3 2.937-1.574 4.184-1.535 1.503-4.038 1.511-4.7 1.485-.089.004-.218.005-.368.004l3.154-5.755c.761-.333 1.552-.476 2.193-.538l-.001-2.624c0-.359.291-.65.651-.65.359 0 .65.291.65.65zm-4.8711 10.5674c1.78-1.743 4.868-1.476 4.868-1.476s.204 3.094-1.576 4.837c-1.212 1.186-3.013 1.438-4.049 1.48v1.992c0 .359-.291.65-.65.65-.36 0-.651-.291-.651-.65v-1.993c-.741-.033-1.871-.176-2.9-.687l2.224-4.055c.757.791 1.141 1.825 1.326 2.73.192-.94.59-2.026 1.408-2.828zm4.9736-17.6074c.328.164.455.552.284.867l-13.465 24.714c-.12.219-.352.346-.595.346-.104 0-.209-.025-.31-.073-.328-.165-.455-.553-.284-.868l2.641-4.845c-1.073-1.746-.928-4.01-.928-4.01s1.435-.111 2.914.364l.516-.95c-.656-.22-1.313-.547-1.854-1.077-1.277-1.251-1.532-3.193-1.574-4.193-.001-.006-.004-.011-.004-.018v-.069c-.009-.256-.004-.44 0-.516l-.001-2.632c0-.359.291-.65.65-.65.36 0 .651.291.651.65l.001 2.619c1.055.101 2.532.433 3.569 1.448.229.224.416.474.581.733l.607-1.114c-.536-.524-2.149-2.272-2.132-4.354.012-1.61 1-3.005 1.702-3.797l-.001-2.679c0-.359.291-.65.65-.65.36 0 .651.291.651.65l.001 2.622c.641.734 1.548 2.038 1.666 3.553l3.159-5.799c.171-.313.573-.435.905-.272z" fill="#fbb446"></path></svg>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/indian-butter-chicken.jpg" alt="Indian Butter Chicken" width="232" height="232"/>
                            <div className="item_title">Indian Butter Chicken</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Chicken breast in creamy Indian curry sauce with rice.</p>
                            <p className="price">$16.50</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Extra Naan</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$2</p>
                            </div>
                            <svg role="img" aria-labelledby="fullimgSpicy" width="13" height="27" viewBox="0 0 13 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-spicy"><title id="fullimgSpicy">Spicy</title><path d="M9.037 4.48c-.668.642-.855 1.81-.907 2.575-1.286.023-2.04.505-2.453.946-.77.823-1.016 2.092-.732 3.776.034.205.076.42.12.643.175.87.372 1.858.18 2.917-.468 2.568-2.168 3.402-3.532 4.072-.932.456-1.985.972-1.65 2.097.078.263.33.723 1.122.835.49.072 1.143-.003 1.877-.2 2.207-.592 5.153-2.294 6.615-4.558 2.175-3.364 2.938-6.68 1.995-8.653-.312-.647-.946-1.433-2.213-1.742.04-.67.195-1.45.505-1.75.086-.083.168-.11.295-.103.363.03.687-.25.714-.615.028-.368-.25-.688-.618-.715-.505-.038-.96.127-1.32.474m1.217 4.85c.247-.083.578.07.666.348.032.106.785 2.6-1.123 5.486-.075.113-.187.188-.31.22-.14.038-.3.02-.43-.07-.248-.162-.315-.494-.153-.74 1.614-2.442 1.02-4.492.995-4.578-.088-.282.07-.58.353-.666" fill="#c4270e"></path></svg>
                            <svg role="img" aria-labelledby="fullimgGF" width="15" height="27" viewBox="0 0 15 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-gluten-free"><title id="fullimgGF">Gluten Free</title><path d="M14.3435614 7.794l.001 2.668c.003.085.006.237 0 .449v.1c0 .01-.005.017-.006.027-.044 1.002-.3 2.937-1.574 4.184-1.535 1.503-4.038 1.511-4.7 1.485-.089.004-.218.005-.368.004l3.154-5.755c.761-.333 1.552-.476 2.193-.538l-.001-2.624c0-.359.291-.65.651-.65.359 0 .65.291.65.65zm-4.8711 10.5674c1.78-1.743 4.868-1.476 4.868-1.476s.204 3.094-1.576 4.837c-1.212 1.186-3.013 1.438-4.049 1.48v1.992c0 .359-.291.65-.65.65-.36 0-.651-.291-.651-.65v-1.993c-.741-.033-1.871-.176-2.9-.687l2.224-4.055c.757.791 1.141 1.825 1.326 2.73.192-.94.59-2.026 1.408-2.828zm4.9736-17.6074c.328.164.455.552.284.867l-13.465 24.714c-.12.219-.352.346-.595.346-.104 0-.209-.025-.31-.073-.328-.165-.455-.553-.284-.868l2.641-4.845c-1.073-1.746-.928-4.01-.928-4.01s1.435-.111 2.914.364l.516-.95c-.656-.22-1.313-.547-1.854-1.077-1.277-1.251-1.532-3.193-1.574-4.193-.001-.006-.004-.011-.004-.018v-.069c-.009-.256-.004-.44 0-.516l-.001-2.632c0-.359.291-.65.65-.65.36 0 .651.291.651.65l.001 2.619c1.055.101 2.532.433 3.569 1.448.229.224.416.474.581.733l.607-1.114c-.536-.524-2.149-2.272-2.132-4.354.012-1.61 1-3.005 1.702-3.797l-.001-2.679c0-.359.291-.65.65-.65.36 0 .651.291.651.65l.001 2.622c.641.734 1.548 2.038 1.666 3.553l3.159-5.799c.171-.313.573-.435.905-.272z" fill="#fbb446"></path></svg>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/shrimp-fried-rice.jpg" alt="Shrimp Fried Rice" width="232" height="232"/>
                            <div className="item_title">Shrimp Fried Rice</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">Stir-fried rice with chopped *shrimp*, mushroom, bell pepper, corn, onion, green beans, and oil, topped with sesame seeds.</p>
                            <p className="price">$17.50</p>
                            <svg role="img" aria-labelledby="fullimgGF" width="15" height="27" viewBox="0 0 15 27" xmlns="http://www.w3.org/2000/svg" data-hook="wixrest-menus-icon-full-gluten-free"><title id="fullimgGF">Gluten Free</title><path d="M14.3435614 7.794l.001 2.668c.003.085.006.237 0 .449v.1c0 .01-.005.017-.006.027-.044 1.002-.3 2.937-1.574 4.184-1.535 1.503-4.038 1.511-4.7 1.485-.089.004-.218.005-.368.004l3.154-5.755c.761-.333 1.552-.476 2.193-.538l-.001-2.624c0-.359.291-.65.651-.65.359 0 .65.291.65.65zm-4.8711 10.5674c1.78-1.743 4.868-1.476 4.868-1.476s.204 3.094-1.576 4.837c-1.212 1.186-3.013 1.438-4.049 1.48v1.992c0 .359-.291.65-.65.65-.36 0-.651-.291-.651-.65v-1.993c-.741-.033-1.871-.176-2.9-.687l2.224-4.055c.757.791 1.141 1.825 1.326 2.73.192-.94.59-2.026 1.408-2.828zm4.9736-17.6074c.328.164.455.552.284.867l-13.465 24.714c-.12.219-.352.346-.595.346-.104 0-.209-.025-.31-.073-.328-.165-.455-.553-.284-.868l2.641-4.845c-1.073-1.746-.928-4.01-.928-4.01s1.435-.111 2.914.364l.516-.95c-.656-.22-1.313-.547-1.854-1.077-1.277-1.251-1.532-3.193-1.574-4.193-.001-.006-.004-.011-.004-.018v-.069c-.009-.256-.004-.44 0-.516l-.001-2.632c0-.359.291-.65.65-.65.36 0 .651.291.651.65l.001 2.619c1.055.101 2.532.433 3.569 1.448.229.224.416.474.581.733l.607-1.114c-.536-.524-2.149-2.272-2.132-4.354.012-1.61 1-3.005 1.702-3.797l-.001-2.679c0-.359.291-.65.65-.65.36 0 .651.291.651.65l.001 2.622c.641.734 1.548 2.038 1.666 3.553l3.159-5.799c.171-.313.573-.435.905-.272z" fill="#fbb446"></path></svg>
                        </div>
                    </div>
                </div>
                <div className="block-menu">
                    <div className="block-header">
                        <center>
                            <h3 className="text-4xl mt-8 md:mt-12 color-orange-2 shadow-style-txt_01 mb-6">Kid's Menu</h3>
                            <span className="line_style_01 md:mb-5"></span>
                            <p className="color-orange">*Food Allergy Notice* Please be advised that food prepared here may contain: milk, eggs, wheat, soybean, peanuts, tree nuts, fish and shellfish.</p>
                        </center>
                    </div>
                    <div className="block-prod mt-10 flex flex-wrap content-center items-start max-w-[884px] mx-auto">
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/chicken-nuggets-fries-gravy.jpg" alt="Chicken Nuggets, Fries, Gravy" width="232" height="232"/>
                            <div className="item_title">Chicken Nuggets, Fries, Gravy</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark"></p>
                            <p className="price">$8.50</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Add Poutine</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$2</p>
                            </div>
                        </div>
                        <div className="item w-1/2 lg:w-1/3">
                            <Image src="/products/chicken-strips-and-fries.jpg" alt="Chicken Strips & Fries" width="232" height="232"/>
                            <div className="item_title">Chicken Strips & Fries</div>
                            <span className="line_style_02"></span>
                            <p className="item_remark">With gravy</p>
                            <p className="price">$10.50</p>
                            <div className="flex content-around items-end p-2 mb-3">
                                <p className="color-orange text-left">Add Poutine</p>
                                <p className="color-orange flex-1 tracking-[.5em] overflow-hidden truncate">....................................................</p>
                                <p className="price !m-0">$2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}