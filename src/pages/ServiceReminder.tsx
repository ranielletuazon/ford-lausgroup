import Header from "./components/Header";
import Footer from "./components/Footer";
import bannerImage from "../assets/images/fordservice.jpg";

export default function ServiceReminder() {
    // TODO: replace with the real page paths
    const BOOK_SERVICE_HREF = "/book-a-service";
    const ROADSIDE_HREF = "/emergency-roadside-assistance";
    const WARRANTY_HREF = "/premium-extended-warranty";
    const REMINDERS_HREF = "/service-reminders";

    const SERVICES = [
        "Same Day Quick Service",
        "Certified Factory Trained Technicians",
        "Free Multi-point inspection",
        "Preventive Maintenance Service",
        "Tire Check and Replacement",
        "Body and Paint Jobs",
        "Wheel Alignment",
        "Battery Health check",
    ];

    const PERKS = [
        "Genuine Ford Parts and Accessories with warranty",
        "Computerizes Diagnostics",
        "Premium Extended Warranty",
        "Emergency Roadside Assistance",
        "Complimentary Wifi and Gourmet Coffee",
        "On-line Service Appointments",
    ];

    const PROTECT = [
        {
            title: "Ford Service Reminders",
            text: "A long trip is a serious test for your vehicle and even a small problem such as mis-aligned tires or a faulty battery can cause a lot of troubles.",
            button: "Learn more",
            href: REMINDERS_HREF,
        },
        {
            title: "ERA - Emergency Roadside Assistance",
            text: "A 24-Hour Emergency Roadside Assistance Program that provides a quick and reliable help on the road that is exclusive to Ford Customers.",
            button: "More information",
            href: ROADSIDE_HREF,
        },
        {
            title: "Ford Extended Warranty",
            text: "The Premium Extended Warranty is the most comprehensive service protection plan fully backed by Ford Group Philippines covering parts and labour for up to 5 years or 150,000 kilometers.",
            button: "Learn more",
            href: WARRANTY_HREF,
        },
    ];

    return (
        <>
            <Header />
            <main className="w-full max-w-full">
                {/* Banner */}
                <section className="bg-white">
                    <img
                        src={bannerImage}
                        alt="Ford service advisor talking with customers at the service center"
                        width={2000}
                        height={550}
                        decoding="async"
                        draggable={false}
                        className="block aspect-[16/9] w-full object-cover md:aspect-auto md:h-auto"
                    />
                </section>

                {/* Intro */}
                <section className="container mx-auto px-4 pb-4 pt-12 lg:pt-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-[#066FEF]">
                        Take control
                    </p>
                    <h1 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-[#003478] sm:text-4xl">
                        Ford Aftersales and Customer Service at Laus Ford Group
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#102B4E]/80 lg:text-lg">
                        Find everything you need from basic safety mandatories
                        and services to accessories at a practical price!
                    </p>
                </section>

                {/* Service cards */}
                <section className="container mx-auto px-4 py-8 lg:py-10">
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="flex flex-col rounded-2xl border border-gray-200 border-t-4 border-t-[#003478] bg-white p-6 shadow-sm sm:p-8">
                            <h2 className="text-xl font-bold uppercase text-[#003478]">
                                Fully Comprehensive Service
                            </h2>
                            <ul className="mb-8 mt-5 grid gap-3 sm:grid-cols-2">
                                {SERVICES.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2 text-[#102B4E]"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="font-bold text-[#066FEF]"
                                        >
                                            ✓
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={BOOK_SERVICE_HREF}
                                className="mt-auto inline-block self-start rounded-full bg-[#003478] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2"
                            >
                                Book a service
                            </a>
                        </div>

                        <div className="flex flex-col rounded-2xl border border-gray-200 border-t-4 border-t-[#003478] bg-white p-6 shadow-sm sm:p-8">
                            <h2 className="text-xl font-bold uppercase text-[#003478]">
                                Quality Service, Genuine Accessories, Practical
                                Prices
                            </h2>
                            <ul className="mb-8 mt-5 grid gap-3">
                                {PERKS.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2 text-[#102B4E]"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="font-bold text-[#066FEF]"
                                        >
                                            ✓
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto flex flex-wrap gap-3">
                                <a
                                    href={ROADSIDE_HREF}
                                    className="inline-block rounded-full bg-[#003478] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2"
                                >
                                    Roadside Assistance
                                </a>
                                <a
                                    href={WARRANTY_HREF}
                                    className="inline-block rounded-full border-2 border-[#003478] px-6 py-2 text-sm font-semibold text-[#003478] transition-colors hover:border-[#066FEF] hover:text-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2"
                                >
                                    Extended Warranty
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ford Protect */}
                <section className="mt-8 bg-[#F2F2F2] py-12 lg:mt-10 lg:py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="border-l-4 border-[#066FEF] pl-3 text-2xl font-bold text-[#003478] lg:text-3xl">
                            Ford Protect
                        </h2>
                        <p className="mt-3 max-w-2xl text-[#102B4E]/80">
                            Keep your Ford road-ready and covered, wherever the
                            road takes you.
                        </p>

                        <ul className="mt-8 grid gap-6 md:grid-cols-3">
                            {PROTECT.map((item) => (
                                <li key={item.title} className="flex">
                                    <div className="flex w-full flex-col rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-lg motion-reduce:transition-none">
                                        <h3 className="text-lg font-bold uppercase leading-snug text-[#102B4E]">
                                            {item.title}
                                        </h3>
                                        <p className="mb-6 mt-3 leading-relaxed text-[#102B4E]/80">
                                            {item.text}
                                        </p>
                                        <a
                                            href={item.href}
                                            className="mt-auto inline-block self-start rounded-full bg-[#003478] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2"
                                        >
                                            {item.button}
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Closing call to action */}
                <section className="bg-gradient-to-br from-[#001A3D] via-[#003478] to-[#066FEF]">
                    <div className="container mx-auto flex flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-white lg:text-3xl">
                                Ready for your next service?
                            </h2>
                            <p className="mt-2 text-white/80">
                                Book an appointment online and we will take it
                                from there.
                            </p>
                        </div>
                        <a
                            href={BOOK_SERVICE_HREF}
                            className="inline-block shrink-0 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#003478] transition-colors hover:bg-[#F2F2F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#003478]"
                        >
                            Book a service
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
