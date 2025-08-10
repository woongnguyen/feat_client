'use client'

import Image from "next/image";
import {useState} from "react";

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

interface GalleryItem {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    tag: string;
    tagType: 'hot' | 'new' | 'event' | 'promo' | 'exclusive';
    size?: 'large';
}

export default function MenuSection() {
    const [activeCategory, setActiveCategory] = useState('All');

    const menuItems: MenuItem[] = [
        {
            id: 1,
            name: '"Kanpoong" Korean Style Chicken',
            description: 'Deep-fried chicken breast mixed in Korean sweet & spicy sauce with rice. Choice of spicy or non-spicy.',
            price: 14.99,
            image: '/products/kanpoong-korean-style-chicken.jpg',
            category: 'Lunch Specials'
        },
        {
            id: 2,
            name: '"Pad Thai"',
            description: 'A Thai dish of stir-fried rice noodles with beansprouts and other vegetables, topped with scrambled eggs, crushed *peanuts*, and fresh *cilantro*. Choice of spicy or non-spicy.',
            price: 14.99,
            image: '/products/pad-thai.jpg',
            category: 'Lunch Specials'
        },
        {
            id: 3,
            name: 'Vietnamese Rice Noodle Soup "Pho"',
            description: 'Homemade beef broth with beef and pork, bean sprouts and onions, topped with fresh *cilantro* and a lemon slice.',
            price: 17.50,
            image: '/products/vietnamese-rice-noodle-soup-pho.jpg',
            category: 'Soup'
        },
        {
            id: 4,
            name: 'Indian Butter Chicken',
            description: 'Chicken breast in creamy Indian curry sauce with rice & naan.',
            price: 14.99,
            image: '/products/indian-butter-chicken.jpg',
            category: 'Lunch Specials'
        },
        {
            id: 5,
            name: 'Thai "Tom Yum" Hot & Sour Noodle Soup',
            description: 'Variety of vegetables with rice noodles in spicy and sour soup.',
            price: 15.50,
            image: '/products/thai-tom-yum-hot-and-sour-noodle-soup.jpg',
            category: 'Soup'
        },
        {
            id: 6,
            name: 'Chicken Nuggets, Fries, Gravy',
            description: '',
            price: 8.50,
            image: '/products/chicken-nuggets-fries-gravy.jpg',
            category: 'Kids Menu'
        },
        {
            id: 7,
            name: 'Chicken Strips & Fries',
            description: 'With gravy',
            price: 10.50,
            image: '/products/chicken-strips-and-fries.jpg',
            category: 'Kids Menu'
        }
    ];

    const galleryItems: GalleryItem[] = [
        {
            id: 1,
            title: '"Kan Poong" Chicken Box',
            subtitle: 'Deep-fried chicken breast in Korean sweet & spicy sauce with deep-fried pork dumplings, spicy mayo dipping sauce, rice and green salad drizzled with honey lemon dressing.',
            image: '/products/kan-poong-chicken-box.jpg',
            tag: 'BESTSELLER',
            tagType: 'hot'
        },
        {
            id: 2,
            title: "Dry Ribs & Caesar Salad",
            subtitle: 'Dry Ribs & Caesar Salad',
            image: '/products/dry-ribs-&-caesar-salad.jpg',
            tag: 'NEW',
            tagType: 'new'
        },
        {
            id: 3,
            title: 'Dumplings',
            subtitle: "(5 pcs) with Spicy Mayo Sauce",
            image: '/products/dumplings.jpg',
            tag: 'SPICY',
            tagType: 'event'
        },
        {
            id: 4,
            title: 'Spring Rolls',
            subtitle: '(2pcs) with Sweet Chili *contains nuts*',
            image: '/products/spring-rolls.jpg',
            tag: 'PACKED',
            tagType: 'promo'
        },
        {
            id: 5,
            title: 'Fish & Chips',
            subtitle: 'Homemade battered Basa fish with French fries.',
            image: '/products/fish-and-chips.jpg',
            tag: 'PACKED',
            tagType: 'hot'
        },
        {
            id: 6,
            title: 'Chicken "Teriyaki" Box',
            subtitle: 'Grilled chicken on a bed of stir-fried vegetables with teriyaki sauce, with deep-fried prawn, pork dumpling, rice and green salad drizzled with honey lemon dressing.',
            image: '/products/chicken-teriyaki-box.jpg',
            tag: 'EXCLUSIVE',
            tagType: 'exclusive',
        },
        {
            id: 7,
            title: '"Com Tam" Vietnamese Broken R𝗥ice',
            subtitle: 'Served on a generous plate, this dish begins with soft, fragrant broken rice - tender yet slightly chewy, soaking up every drop of flavour. Beside it rests a juicy 𝙜𝙧𝙞𝙡𝙡𝙚𝙙 𝙥𝙤𝙧𝙠 𝙘𝙝𝙤𝙥, charred to perfection, alongside a golden slice of Vietnamese 𝙚𝙜𝙜 𝙢𝙚𝙖𝙩𝙡𝙤𝙖𝙛, and a 𝙨𝙪𝙣𝙣𝙮-𝙨𝙞𝙙𝙚-𝙪𝙥 𝙚𝙜𝙜 with its yolk glistening. Add a handful of crisp cucumber and tomato, tangy pickled vegetables, and a small bowl of sweet-savory fish sauce, and you’ve got a meal that captures the soul of Vietnam.',
            image: '/products/com-tam.jpg',
            tag: 'RICE DISHES',
            tagType: 'exclusive',
            size: 'large'
        }
    ];

    const filteredMenuItems = activeCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="wrap-menu_and_gallery">
            <section className="menu" id="menu">
                <div className="container">
                    <h2 className="section-title font-sacramento">Our Menu</h2>
                    <div className="menu-categories">
                        {['All', 'Lunch Specials', 'Soup', 'Kids Menu'].map((category) => (
                            <button
                                key={category}
                                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="menu-grid">
                        {filteredMenuItems.map((item) => (
                            <div key={item.id} className="menu-item">
                                <div className="menu-item-image">
                                    <Image src={item.image} alt={item.name} fill className="object-cover"/>
                                </div>
                                <div className="menu-item-content">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <div className="menu-item-price">${item.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="gallery bg-neutral-900" id="gallery">
                <div className="container">
                    <h2 className="section-title font-sacramento !mb-6">Moments You&#39;re Missing</h2>
                    <p className="gallery-subtitle">Join the experience everyone&#39;s talking about</p>

                    {/* Limited Time Banner */}
                    <div className="urgency-banner">
                        <span className="fire-icon">🔥</span>
                        <span className="urgency-text">LIMITED TABLES AVAILABLE THIS WEEK</span>
                        <span className="fire-icon">🔥</span>
                    </div>

                    <div className="gallery-grid">
                        {galleryItems.map((item) => (
                            <div key={item.id} className={`gallery-item ${item.size || ''}`}>
                                <div className="gallery-image">
                                    <Image src={item.image} alt={item.title} fill className="object-cover"/>
                                    <div className="overlay">
                                        <span className={`tag ${item.tagType}`}>{item.tag}</span>
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Social Proof */}
                    <div className="social-proof">
                        <div className="review-ticker">
                            <span className="review">&#34;Best meal of my life!&#34; - Sarah M. (2 hours ago)</span>
                            <span className="review">&#34;Can&#39;t believe I almost missed this!&#34; - John D. (4 hours ago)</span>
                            <span className="review">&#34;Booked again for tomorrow!&#34; - Lisa K. (Today)</span>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="gallery-cta">
                        <h3 className="cta-title">Don&#39;t Miss Your Chance!</h3>
                        <p className="cta-subtitle">Tables filling up fast - Average wait time: 2 weeks</p>
                        <div className="cta-buttons">
                            <a href="https://www.instagram.com/beavergrillnb/" className="btn btn-urgent" target="_blank">Find Us in Instagram</a>
                            <p className="availability-notice">⏰ Follow us for sneak peeks and the full reveal.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}