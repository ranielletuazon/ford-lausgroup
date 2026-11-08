import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";

// TODO: add these images to src/assets/images (the people, truck and globe are transparent PNGs)
import bannerImage from "../assets/images/fleet-banner.jpg";
import aboutImage from "../assets/images/fleet-about.jpg";
import choicesImage from "../assets/images/fleet-choices.jpg";
import localImage from "../assets/images/vehicles/raptor-ranger.jpg";
import globalImage from "../assets/images/vehicles/explorer.jpg";
import businessImage from "../assets/images/fleet-business.jpg";
import governmentImage from "../assets/images/fleet-government.jpg";

export default function Fleet() {
    // The three sections after "About". "reverse" puts the image on the left.
    const SECTIONS = [
        {
            title: "Smart Vehicle Choices",
            image: choicesImage,
            alt: "Two Ford business consultants",
            reverse: false,
            paragraphs: [
                "Ford has one of the strongest product offerings available, with a vehicle to suit every type of business – regardless of industry. No other automaker can deliver so completely on the criteria most important to your company.",
            ],
        },
        {
            title: "Meeting Your Needs Locally",
            image: localImage,
            alt: "A Ford Ranger pickup truck",
            reverse: true,
            paragraphs: [
                "Getting to know your fleet requirements is critical to making sure we provide the best solutions to fit your business needs.",
                "Our Ford Business Centre's Dealer Network has numerous locations around the country, with extensive coverage of city and provincial areas.",
                "This means we can quickly and efficiently handle all your business inquiries, while ensuring that vehicle transactions and deliveries are as smooth and hassle-free as possible.",
            ],
        },
        {
            title: "Meeting Your Needs Globally",
            image: globalImage,
            alt: "A Ford Ranger pickup truck in front of the globe",
            reverse: false,
            paragraphs: [
                "The Ford Business Centre works closely with Ford Motor Company's Global Fleet Solutions, allowing us to provide you with fleet arrangements that are at once extensive and personalised.",
                "The Global Fleet Solutions team is made up of representatives from every Ford Motor Company worldwide, and is uniquely specialised to manage complex fleet requirements from clients spanning multiple countries.",
                "To top things off, Ford's uniquely diversified global product portfolio not only delivers vehicles to match any fleet requirement, but gives you room to pick and choose.",
            ],
        },
    ];

    // TODO: replace the "#" links with the real registration pages
    const REGISTER = [
        {
            title: "Register for Business Fleet",
            image: businessImage,
            alt: "Signing a document with a pen",
            href: "#",
            text: "Commercial fleets include both large and small business fleets. We are aware of your needs, regardless of how many vehicles make up your company fleet.",
        },
        {
            title: "Register for Government Fleet",
            image: governmentImage,
            alt: "A handshake between a Ford sales consultant and a client",
            href: "#",
            text: "Due to our considerable expertise working with government bids, we are able to provide you with tailored cost-saving choices while still adhering to your bid specifications' submission dates. We look forward to providing your transportation needs as painlessly as possible and are always willing to join in pre-bid or open forum discussion meetings.",
        },
    ];

    return (
        <>
            <SEO
                title="Ford Fleet"
                description="Ford Fleet solutions from Ford Laus Group for businesses and government agencies. Get the right Ford vehicles and support for your fleet."
                image={bannerImage}
            />
            <Header />
            <main className="w-full max-w-full">
                {/* Banner */}
                <section className="bg-white">
                    <img
                        src={bannerImage}
                        alt="A lineup of Ford SUVs and trucks at sunset"
                        width={2000}
                        height={500}
                        decoding="async"
                        draggable={false}
                        className="block aspect-[16/9] w-full object-cover md:aspect-[4/1]"
                    />
                </section>

                {/* About */}
                <section className="container mx-auto px-4 py-12 lg:py-16">
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-[#066FEF]">
                                Ford Business Centre
                            </p>
                            <h1 className="mt-2 text-3xl font-bold uppercase leading-tight text-[#003478] sm:text-4xl lg:text-5xl">
                                About Ford Fleet
                            </h1>
                            <p className="mt-5 text-base leading-relaxed text-[#102B4E]/80 lg:text-lg">
                                The Fleet Business Centre is a business unit
                                dedicated to providing a high level of
                                customised service to all our clients, whether
                                your business is Corporate or Government. Ford's
                                position as a world leader in the automotive
                                industry allows us to leverage our extensive
                                experience, technology, and resources to exceed
                                all your fleet expectations.
                            </p>
                        </div>
                        <img
                            src={aboutImage}
                            alt="A blue Ford Everest in the mountains"
                            loading="lazy"
                            draggable={false}
                            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
                        />
                    </div>
                </section>

                {/* Smart choices, local and global */}
                {SECTIONS.map((section) => (
                    <section
                        key={section.title}
                        className={`py-12 lg:py-16 bg-white`}
                    >
                        <div className="container mx-auto grid items-center gap-8 px-4 lg:grid-cols-2 lg:gap-14">
                            <div>
                                <h2 className="border-l-4 border-[#066FEF] pl-3 text-2xl font-bold uppercase leading-tight text-[#003478] lg:text-3xl">
                                    {section.title}
                                </h2>
                                <div className="mt-5 space-y-4 text-base leading-relaxed text-[#102B4E]/80 lg:text-lg">
                                    {section.paragraphs.map((text) => (
                                        <p key={text}>{text}</p>
                                    ))}
                                </div>
                            </div>
                            <img
                                src={section.image}
                                alt={section.alt}
                                loading="lazy"
                                draggable={false}
                                className={`mx-auto aspect-[4/3] w-full max-w-lg object-contain ${
                                    section.reverse ? "lg:order-first" : ""
                                }`}
                            />
                        </div>
                    </section>
                ))}

                {/* Register */}
                <section className="bg-gradient-to-br from-[#001A3D] via-[#003478] to-[#066FEF] py-12 lg:py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold uppercase text-white lg:text-4xl">
                            Register Now
                        </h2>
                        <p className="mt-2 text-white/80 lg:text-lg">
                            Tell us about your fleet and we will be in touch.
                        </p>

                        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
                            {REGISTER.map((item) => (
                                <li key={item.title} className="flex">
                                    <div className="flex w-full flex-col overflow-hidden rounded-3xl bg-white shadow-xl">
                                        <img
                                            src={item.image}
                                            alt={item.alt}
                                            loading="lazy"
                                            draggable={false}
                                            className="aspect-[16/9] w-full object-cover"
                                        />
                                        <div className="flex flex-1 flex-col p-6 sm:p-8">
                                            <h3 className="text-xl font-bold uppercase text-[#003478]">
                                                {item.title}
                                            </h3>
                                            <p className="mt-3 leading-relaxed text-[#102B4E]/80">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
