import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import bannerImage from "../assets/images/era.jpg";
import helpImage from "../assets/images/roadside-help.png";
import towingImage from "../assets/images/roadside-towing.png";
import repairsImage from "../assets/images/roadside-repairs.png";

export default function EmergencyRoadside() {
    // TODO: replace with the real inquiry page path
    const INQUIRY_HREF = "/contact";

    const HOTLINE = "+63-2-8866-9408";
    const HOTLINE_HREF = "tel:+63288669408";

    const HIGHLIGHTS = [
        {
            image: helpImage,
            alt: "24/7 help available",
            label: "24/7 Help available",
        },
        {
            image: towingImage,
            alt: "Minor onsite repairs",
            label: "Minor on-site repairs",
        },
        {
            image: repairsImage,
            alt: "Nationwide towing",
            label: "Nationwide towing coverage",
        },
    ];

    const PLANS = [
        {
            name: "Basic Emergency Roadside Assistance",
            tag: "Free for the first three years",
            text: "Available for free for the first three years, and may be repurchased upon expiry.",
            coverage: [
                "24/7 hotline",
                "Towing services",
                "Minor on-site repairs",
                "Usage of crane",
                "Continuation of journey* for up to three events in a year",
            ],
            premium: false,
        },
        {
            name: "Premium Emergency Roadside Assistance",
            tag: "More benefits",
            text: "Additional benefits on top of your basic plan.",
            coverage: [
                "Basic benefits plus",
                "Assistance for spare key delivery",
                "Reimbursement of up to PHP 4,000 in the event of misfuelling",
                "Arrangement of hospital admission in the event of emergency*",
            ],
            premium: true,
        },
    ];

    const COVERAGE = [
        {
            title: "Towing",
            description: "",
            details: [
                "Nationwide coverage delivery to the nearest Ford dealership. Good for three availments in a year",
                "Vehicle extraction using crane in case of accident",
            ],
        },
        {
            title: "Minor On-Site Repair",
            description: "",
            details: [
                "Change of tires, battery boosting, and fuel delivery. Service only, cost of parts or fuel shall be shouldered by the customer",
            ],
        },
        {
            title: "Continuation of journey",
            description: "",
            details: [
                "Arrangement for taxi/rental services to transport beneficiary to their destination or residence.",
                "Reimbursement of up to PHP 2,000 for overnight accomodation, maximum of 2 nights, and must be 25km. away from residence or office.",
            ],
        },
        {
            title: "24/7 Hotline",
            description: "",
            details: [
                "Customer may call the hotline to know of traffic information/road conditions, emergency numbers, nearest gasoline stations, nearby accomodations, and other general information.",
                "Inclusive of directional assitance for specific destinations, best routes, key sites, etc.",
                "Hospital and medical facilities information.",
            ],
        },
        {
            title: "Medical Emergencies",
            description: "",
            details: [
                "Assistance in arrangement of transport service to nearest medical facility. All costs incurred shall be shouldered by the customer",
            ],
        },
        {
            title: "Spare Key Delivery",
            description: "",
            details: [
                "In the event of spare key requirement, it can be picked-up and delivered to the customer's destination.",
            ],
        },
        {
            title: "Misfueling",
            description: "",
            details: [
                "Coverage for misfuelling costs - restarting and cleaning or draining of fuel tank.",
            ],
        },
        {
            title: "24/7 Nationwide Assistance",
            description: "",
            details: [
                "With Ford, emergency assistance is just one call away. Our roadside assistance hotlines are open 24 hours a day, seven days a week and will be ready to service your vehicle and bring it to the nearest Ford dealership.",
                "The hotline may also be used to relay any urgent messages, arrange alternative means of transportation, inquire about nearby medical facilities, and any other related services that can be of help to you during these times.",
            ],
            extra: {
                title: "Our towing services cover the following areas:",
                text: "Excluded areas, subject to reimbursed fees upon initial call to the hotline and submission of required documents, are as follows:",
                tags: [
                    "Lanao del Norte (except Iligan City)",
                    "Lanao del Sur",
                    "North Cotabato",
                    "South Cotabato",
                    "Maguindanao",
                    "Sultan Kudarat",
                    "Sulu",
                    "Tawi Tawi",
                    "Basilan",
                    "Zamboanga del Norte",
                    "Zamboanga del Sur",
                    "Zamboanga Sibugay",
                    "Compostela Valley",
                    "Catanduanes",
                    "Masbate",
                    "Sarangani",
                    "Batanes",
                    "Romblon",
                    "Marinduque",
                    "Guimaras",
                    "Camiguin",
                ],
            },
        },
        {
            title: "Exclusions",
            description:
                "The following items are not covered by the ERA program:",
            details: [
                "Cost of parts, storage fees, fuel costs, tire costs, or any labor performed at the dealership.",
                "Any form of impounding or towing unless done by FGP's ERA provider.",
                "Breakdowns/incidents caused by participation in recreational sports and commercial purposes (racing, off-roading events, for-hire vehicles, etc.)",
            ],
        },
    ];

    // Which accordion item is open (one at a time). Towing starts open.
    const [openItem, setOpenItem] = useState<string | null>("Towing");

    return (
        <>
            <Header />
            <main className="w-full max-w-full">
                {/* Banner */}
                <section className="bg-white">
                    <img
                        src={bannerImage}
                        alt="Ford Emergency Roadside Assistance"
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
                        24/7 help on the road
                    </p>
                    <h1 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-[#003478] sm:text-4xl">
                        Ford Emergency Roadside Assistance
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#102B4E]/80 lg:text-lg">
                        A 24-Hour Emergency Roadside Assistance Program that
                        provides quick and reliable help on the road that is
                        exclusive to Ford Customers. Help is one call away with
                        our Emergency Roadside Assistance available 24/7
                        nationwide.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href={INQUIRY_HREF}
                            className="inline-block rounded-full bg-[#003478] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2"
                        >
                            Make an inquiry
                        </a>
                        <a
                            href={HOTLINE_HREF}
                            className="inline-block rounded-full border-2 border-[#003478] px-6 py-2 text-sm font-semibold text-[#003478] transition-colors hover:border-[#066FEF] hover:text-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2"
                        >
                            Call {HOTLINE}
                        </a>
                    </div>
                </section>

                {/* Highlights */}
                <section className="container mx-auto px-4 py-8 lg:py-10">
                    <ul className="grid gap-4 sm:grid-cols-3 lg:gap-6">
                        {HIGHLIGHTS.map((item) => (
                            <li
                                key={item.label}
                                className="rounded-2xl border border-gray-200 border-t-4 border-t-[#003478] bg-white p-6 text-center shadow-sm"
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    loading="lazy"
                                    draggable={false}
                                    className="mx-auto h-24 w-full object-contain"
                                />
                                <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-[#102B4E]/80">
                                    {item.label}
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Plans */}
                <section className="bg-[#F2F2F2] py-12 lg:py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="border-l-4 border-[#066FEF] pl-3 text-2xl font-bold uppercase text-[#003478] lg:text-3xl">
                            Features
                        </h2>
                        <ul className="mt-8 grid gap-6 lg:grid-cols-2">
                            {PLANS.map((plan) => (
                                <li key={plan.name} className="flex">
                                    <div
                                        className={`flex w-full flex-col rounded-2xl p-6 shadow-sm sm:p-8 ${
                                            plan.premium
                                                ? "bg-[#003478] text-white"
                                                : "bg-white text-[#102B4E]"
                                        }`}
                                    >
                                        <p
                                            className={`text-xs font-semibold uppercase tracking-widest ${
                                                plan.premium
                                                    ? "text-white/70"
                                                    : "text-[#066FEF]"
                                            }`}
                                        >
                                            {plan.tag}
                                        </p>
                                        <h3
                                            className={`mt-2 text-xl font-bold uppercase leading-snug ${
                                                plan.premium
                                                    ? "text-white"
                                                    : "text-[#003478]"
                                            }`}
                                        >
                                            {plan.name}
                                        </h3>
                                        <p
                                            className={`mt-3 leading-relaxed ${
                                                plan.premium
                                                    ? "text-white/80"
                                                    : "text-[#102B4E]/80"
                                            }`}
                                        >
                                            {plan.text}
                                        </p>

                                        <p
                                            className={`mt-6 border-t pt-6 text-sm font-semibold uppercase tracking-wide ${
                                                plan.premium
                                                    ? "border-white/20 text-white"
                                                    : "border-gray-200 text-[#003478]"
                                            }`}
                                        >
                                            Coverage
                                        </p>
                                        <ul className="mt-3 grid gap-2">
                                            {plan.coverage.map((item) => (
                                                <li
                                                    key={item}
                                                    className="flex items-start gap-2"
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className={`font-bold ${
                                                            plan.premium
                                                                ? "text-white"
                                                                : "text-[#066FEF]"
                                                        }`}
                                                    >
                                                        ✓
                                                    </span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <p
                                            className={`mt-6 text-xs ${
                                                plan.premium
                                                    ? "text-white/70"
                                                    : "text-[#102B4E]/60"
                                            }`}
                                        >
                                            *Terms and conditions apply.
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Coverage accordion */}
                <section className="container mx-auto px-4 py-12 lg:py-16">
                    <h2 className="text-2xl font-bold uppercase text-[#003478] lg:text-3xl">
                        Premium Emergency Roadside Assistance
                    </h2>
                    <p className="mt-3 text-[#102B4E]/80">
                        Select a service to see what is covered:
                    </p>

                    <ul className="mt-5 flex flex-col gap-3">
                        {COVERAGE.map((item) => {
                            const open = openItem === item.title;
                            return (
                                <li
                                    key={item.title}
                                    className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenItem(
                                                open ? null : item.title,
                                            )
                                        }
                                        aria-expanded={open}
                                        className={`flex w-full items-center gap-4 px-5 py-4 text-left text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#066FEF] ${
                                            open
                                                ? "bg-[#003478] text-white"
                                                : "bg-[#F2F2F2] text-[#102B4E] hover:bg-[#003478]/10"
                                        }`}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="w-4 text-center text-xl font-bold leading-none"
                                        >
                                            {open ? "−" : "+"}
                                        </span>
                                        <span className="flex-1">
                                            {item.title}
                                        </span>
                                    </button>

                                    {/* Slides open. Hidden content can't be tabbed into. */}
                                    <div
                                        className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out motion-reduce:transition-none ${
                                            open
                                                ? "visible grid-rows-[1fr]"
                                                : "invisible grid-rows-[0fr]"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-5 py-6 sm:px-8">
                                                {item.description && (
                                                    <p className="font-semibold uppercase text-[#003478]">
                                                        {item.description}
                                                    </p>
                                                )}
                                                {item.details.length > 0 ? (
                                                    <ul className="mt-4 max-w-3xl space-y-3">
                                                        {item.details.map(
                                                            (detail) => (
                                                                <li
                                                                    key={detail}
                                                                    className="flex items-start gap-3 leading-relaxed text-[#102B4E]"
                                                                >
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#066FEF]"
                                                                    />
                                                                    <span>
                                                                        {detail}
                                                                    </span>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                ) : (
                                                    <p className="text-[#102B4E]/60">
                                                        Coverage details coming
                                                        soon.
                                                    </p>
                                                )}

                                                {/* Optional extra block: a heading, a note and a list of tags */}
                                                {item.extra && (
                                                    <div className="mt-6 border-t border-gray-200 pt-6">
                                                        <h4 className="text-sm font-bold uppercase tracking-wide text-[#003478]">
                                                            {item.extra.title}
                                                        </h4>
                                                        <p className="mt-2 max-w-3xl leading-relaxed text-[#102B4E]/80">
                                                            {item.extra.text}
                                                        </p>
                                                        <ul className="mt-4 flex flex-wrap gap-2">
                                                            {item.extra.tags.map(
                                                                (tag) => (
                                                                    <li
                                                                        key={
                                                                            tag
                                                                        }
                                                                        className="rounded-full bg-[#F2F2F2] px-3 py-1.5 text-sm text-[#102B4E]"
                                                                    >
                                                                        {tag}
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    <p className="mt-8 max-w-4xl text-sm leading-relaxed text-[#102B4E]/70">
                        * The information contained on the following pages is of
                        a general nature and does not replace the policy terms
                        and conditions of each product. You should refer to each
                        policy booklet at your participating Ford Dealer for
                        specific details, terms and conditions and exclusions.
                    </p>
                </section>

                {/* Hotline */}
                <section className="bg-gradient-to-br from-[#001A3D] via-[#003478] to-[#066FEF]">
                    <div className="container mx-auto flex flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                                24-hour hotline number
                            </p>
                            <h2 className="mt-1 text-2xl font-bold uppercase text-white lg:text-3xl">
                                Emergency hotline number
                            </h2>
                        </div>
                        <a
                            href={HOTLINE_HREF}
                            className="inline-block shrink-0 rounded-full bg-white px-8 py-3 text-lg font-bold text-[#003478] transition-colors hover:bg-[#F2F2F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#003478]"
                        >
                            {HOTLINE}
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
