// import Image from "next/image";
import Link from "next/link";
import Image from "next/image";
import MenuSection from "@/components/menu-section";


export default function Home() {
    return (
        <main>
            <section className="hero" id="home">
                <div className="hero-content">
                    <h1>Welcome to BeaverGrill</h1>
                    <p>Where Modern Dining Meets Exceptional Flavor<br></br>A Taste of Home, A World of Flavor</p>
                    <div className="hero-buttons">
                        <Link href="/menu">Menu</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </section>
            <section className="about bg-white" id="about">
                <div className="container">
                    <h2 className="section-title">Our Story</h2>
                    <div className="about-grid">
                        <div className="about-text">
                            <h3>Modern Grilling Excellence</h3>
                            <p>
                                At BeaverGrill, we&#39;ve reimagined the traditional grill experience with a modern twist.
                                Our expert chefs combine time-honored grilling techniques with innovative flavors to
                                create unforgettable dishes.
                            </p>
                            <p>
                                From perfectly seared steaks to creative vegetarian options, every plate tells a story
                                of passion and precision. Join us for an elevated dining experience in a trendy,
                                welcoming atmosphere.
                            </p>
                            <Link href="/menu">Explore Our Menu</Link>
                        </div>
                        <div className="about-image h-[450px]">
                            <Image src="/web-style/hours.png" alt="Chef at BeaverGrill" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>
            <MenuSection/>
            <section className="contact" id="contact">
                <div className="container">
                    <h2 className="section-title" style={{ color: 'white' }}>Visit Us</h2>
                    <div className="contact-grid">
                        <div className="contact-item">
                            <h3>Location</h3>
                            <p>
                                123 Grill Street<br />
                                Downtown District<br />
                                Your City, YC 12345
                            </p>
                        </div>
                        <div className="contact-item">
                            <h3>Hours</h3>
                            <p>
                                Monday - Thursday: 5pm - 10pm<br />
                                Friday - Saturday: 5pm - 11pm<br />
                                Sunday: 4pm - 9pm
                            </p>
                        </div>
                        <div className="contact-item">
                            <h3>Contact</h3>
                            <p>
                                Phone: (555) 123-4567<br />
                                Email: hello@beavergrill.com<br />
                                Reservations recommended
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
