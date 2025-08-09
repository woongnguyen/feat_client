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
            name: 'Signature Ribeye',
            description: '28-day aged ribeye with truffle butter and roasted vegetables',
            price: 45,
            image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
            category: 'Mains'
        },
        {
            id: 2,
            name: 'Beaver Burger',
            description: 'Double wagyu patty with caramelized onions and special sauce',
            price: 28,
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
            category: 'Mains'
        },
        {
            id: 3,
            name: 'Grilled Caesar',
            description: 'Charred romaine with house-made dressing and parmesan crisps',
            price: 18,
            image: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?w=400&h=300&fit=crop',
            category: 'Starters'
        },
        {
            id: 4,
            name: 'BBQ Ribs',
            description: 'Slow-smoked ribs with our signature bourbon glaze',
            price: 32,
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
            category: 'Mains'
        },
        {
            id: 5,
            name: 'Grilled Prawns',
            description: 'Jumbo prawns with garlic butter and fresh herbs',
            price: 26,
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
            category: 'Starters'
        },
        {
            id: 6,
            name: 'Smoked Chocolate Tart',
            description: 'Dark chocolate tart with a hint of smoke and vanilla ice cream',
            price: 12,
            image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop',
            category: 'Desserts'
        }
    ];

    const galleryItems: GalleryItem[] = [
        {
            id: 1,
            title: 'Prime Night Experience',
            subtitle: 'Only 10 tables left this Friday!',
            image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop',
            tag: 'BESTSELLER',
            tagType: 'hot',
            size: 'large'
        },
        {
            id: 2,
            title: "Chef's Special",
            subtitle: 'Limited time only',
            image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=400&h=300&fit=crop',
            tag: 'NEW',
            tagType: 'new'
        },
        {
            id: 3,
            title: 'Live Music',
            subtitle: "8PM - Don't miss out!",
            image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop',
            tag: 'TONIGHT',
            tagType: 'event'
        },
        {
            id: 4,
            title: 'Wine Wednesday',
            subtitle: 'Today only!',
            image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop',
            tag: '50% OFF',
            tagType: 'promo'
        },
        {
            id: 5,
            title: 'Full House',
            subtitle: 'Reserve now!',
            image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop',
            tag: 'PACKED',
            tagType: 'hot'
        },
        {
            id: 6,
            title: 'VIP Experience',
            subtitle: '2 tables left this month',
            image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&h=600&fit=crop',
            tag: 'EXCLUSIVE',
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
                    <h2 className="section-title">Our Menu</h2>
                    <div className="menu-categories">
                        {['All', 'Starters', 'Mains', 'Desserts'].map((category) => (
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
            <section className="gallery" id="gallery">
                <div className="container">
                    <h2 className="section-title">Moments You&#39;re Missing</h2>
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
                            <a href="#" className="btn btn-urgent">Reserve Now - Skip the Wait</a>
                            <p className="availability-notice">⏰ Only 3 tables left for this weekend!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}