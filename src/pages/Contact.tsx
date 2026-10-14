import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// TODO: save the dealership collage from the old site with this name
import contactBanner from "../assets/images/contact-banner.jpg";

export default function Contact() {
    // TODO: change this to the real address of the form when it goes online
    const FORM_URL = "http://localhost/contactus-ford/index.php";

    // Google My Maps with the dealership icons
    const MAP_URL =
        "https://www.google.com/maps/d/embed?mid=168D6Fo20kfi9ZCE4O8DFRoyeYXpVh8U&ehbc=2E312F";

    const frameRef = useRef<HTMLIFrameElement>(null);
    const [frameHeight, setFrameHeight] = useState(1000);

    // The form page tells us how tall it is, so the iframe has no scrollbar
    useEffect(() => {
        const onMessage = (e: MessageEvent) => {
            if (e.source !== frameRef.current?.contentWindow) return;
            if (e.data?.type === "contact-form-height") {
                setFrameHeight(e.data.height);
            }
        };
        window.addEventListener("message", onMessage);
        return () => window.removeEventListener("message", onMessage);
    }, []);

    return (
        <>
            <Header />
            <main className="w-full max-w-full">
                {/* Banner + heading */}
                <section className="bg-white">
                    {/* The collage is wide, so phones crop the sides */}
                    <img
                        src={contactBanner}
                        alt="Laus Ford Group dealerships: Ford Tarlac, Pampanga, Clark, Subic, Dagupan, Ilocos Norte, Isabela and Cabanatuan"
                        decoding="async"
                        draggable={false}
                        className="block aspect-[16/9] w-full object-cover sm:aspect-[2/1] md:aspect-auto md:h-auto"
                    />

                    <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-14">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#003478] sm:text-4xl lg:text-5xl">
                                Contact Laus Ford Group
                            </h1>
                            <p className="mt-4 text-base text-[#102B4E]/80 sm:text-lg">
                                Choose your preferred dealership and tell us how
                                we can help.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact form (the form itself is a separate PHP page) */}
                <section className="bg-[#F2F2F2] py-10 sm:py-14 lg:py-16">
                    <div className="container mx-auto max-w-4xl px-4">
                        <iframe
                            ref={frameRef}
                            src={FORM_URL}
                            title="Contact form"
                            style={{ height: frameHeight }}
                            className="w-full border-0"
                        />
                    </div>
                </section>

                {/* Dealership map */}
                <section className="bg-white py-10 sm:py-14 lg:py-16">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#003478] sm:text-4xl lg:text-5xl">
                                Find a Dealership
                            </h2>
                            <p className="mt-4 text-base text-[#102B4E]/80 sm:text-lg">
                                Our Ford dealerships across Northern and Central
                                Luzon.
                            </p>
                        </div>

                        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-[#003478]/10 shadow-md lg:mt-12">
                            <iframe
                                src={MAP_URL}
                                title="Map of Laus Ford Group dealerships"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="block h-[22rem] w-full border-0 sm:h-[28rem] lg:h-[34rem]"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
