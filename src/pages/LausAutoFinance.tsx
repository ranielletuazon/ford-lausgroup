import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import bannerImage from "../assets/images/financeheader2.jpg";

export default function LausAutoFinance() {
    // Same form page that the Contact page uses
    // TODO: change this to the real address of the form when it goes online
    const FORM_URL = "http://localhost/contactus-ford/index.php";

    const COVERAGE = [
        {
            title: "Own Damage & Theft Cover",
            tag: "",
            text: "Provides protection for loss (carnap) of the insured vehicle, loss of declared accessories (built-in & add-ons) and damage to the insured vehicle due to accident.",
        },
        {
            title: "Compulsory Third Party Liability Cover",
            tag: "CTPL",
            text: "Provides protection for death and bodily injury to third party (pedestrians) that got hit by the insured vehicle, which serves also a primary requirement for vehicle registration at the Land Transportation Office (LTO).",
        },
        {
            title: "Voluntary Third Party Liability – Bodily Injury Cover",
            tag: "VTPL-BI",
            text: "Provides protection for death and bodily injury to third party (pedestrians) that got hit by the insured vehicle in excess of the limits provided under the CTPL Cover.",
        },
        {
            title: "Voluntary Third Party Liability – Property Damage Cover",
            tag: "VTPL-PD",
            text: "Provides protection for damage to properties owned by third party that got hit by the insured vehicle.",
        },
        {
            title: "Unnamed Passenger Personal Accident Cover",
            tag: "UPPA",
            text: "Provides protection for death, bodily injury and medical reimbursement to any persons riding in the insured vehicle due to accident.",
        },
        {
            title: "Acts of Nature Cover",
            tag: "AON",
            text: "Provides protection for damage to the insured vehicle due to natural calamities.",
        },
    ];

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
                {/* Banner */}
                <section className="bg-white">
                    {/* The logos are on the left, so phones keep the left side */}
                    <img
                        src={bannerImage}
                        alt="Corporate Guarantee and Laus Auto Finance"
                        width={2000}
                        height={750}
                        decoding="async"
                        draggable={false}
                        className="block aspect-[16/9] w-full object-cover object-left md:aspect-auto md:h-auto"
                    />
                </section>

                {/* Motor insurance */}
                <section className="container mx-auto px-4 py-12 lg:py-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-[#066FEF]">
                        Laus Auto Finance
                    </p>
                    <h1 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-[#003478] sm:text-4xl">
                        Motor Insurance
                    </h1>

                    <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-[#102B4E]/80 lg:text-lg">
                        <p>
                            Named as one of the highly ascribed non-life
                            insurance companies in the Philippines,{" "}
                            <strong className="font-semibold text-[#003478]">
                                Corporate Guarantee &amp; Insurance Company
                                (CGIC)
                            </strong>{" "}
                            was officially launched on 16th August 1997.
                        </p>
                        <p>
                            Offering various non-life insurance products
                            catering to Motor, Fire, Personal Accident,
                            Casualty, Marine and Bonds requirements, CGIC was
                            registered with the Securities and Exchange
                            Commission on 19th June 1997 and the Insurance
                            Commission on 25th July 1997.
                        </p>
                        <p>
                            CGIC is among the top 25 out of more than 60
                            non-life insurance players in the country today.
                        </p>
                        <p>
                            The company takes pride in its ISO 9001:2000
                            certification for maintaining Quality Management
                            System, given on 23rd April 2004.
                        </p>
                        <p>
                            The slogan “We Value our Commitment” is again backed
                            by an ISO 9001:2008 certification, a testament to
                            CGIC's commitment in providing quality non-life
                            insurance products and services, through efficient
                            and effective systems and procedures.
                        </p>
                    </div>

                    {/* Coverage */}
                    <h2 className="mt-14 border-l-4 border-[#066FEF] pl-3 text-2xl font-bold uppercase text-[#003478] lg:text-3xl">
                        Motor Insurance Coverage
                    </h2>
                    <p className="mt-3 max-w-3xl text-[#102B4E]/80 lg:text-lg">
                        Our CGIC offers the following Motor Insurance Coverage:
                    </p>

                    <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                        {COVERAGE.map((item) => (
                            <li key={item.title} className="flex">
                                <div className="flex w-full flex-col rounded-2xl border border-gray-200 border-t-4 border-t-[#003478] bg-white p-6 shadow-sm transition-shadow hover:shadow-lg motion-reduce:transition-none">
                                    {/* Cards without a tag keep the same space so the titles line up */}
                                    {item.tag ? (
                                        <span className="mb-3 inline-block h-6 self-start rounded-full bg-[#066FEF]/10 px-3 text-xs font-bold leading-6 tracking-wide text-[#003478]">
                                            {item.tag}
                                        </span>
                                    ) : (
                                        <span
                                            aria-hidden="true"
                                            className="mb-3 block h-6"
                                        />
                                    )}
                                    <h3 className="text-lg font-bold leading-snug text-[#102B4E]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 leading-relaxed text-[#102B4E]/80">
                                        {item.text}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Inquiry form (the form itself is a separate PHP page) */}
                <section className="bg-[#F2F2F2] py-12 lg:py-16">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold uppercase leading-tight text-[#003478] sm:text-4xl">
                                Inquire about Motor Insurance
                            </h2>
                            <p className="mt-4 text-base text-[#102B4E]/80 sm:text-lg">
                                Complete all of the fields below, type and send
                                us your inquiry and we will aim to get back to
                                you within the next working day.
                            </p>
                        </div>

                        <div className="mx-auto mt-8 max-w-4xl">
                            <iframe
                                ref={frameRef}
                                src={FORM_URL}
                                title="Inquiry form"
                                style={{ height: frameHeight }}
                                className="w-full border-0"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
