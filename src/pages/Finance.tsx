import Header from "./components/Header";
import Footer from "./components/Footer";
import bannerImage from "../assets/images/financeheaderbanner.jpg";

export default function Finance() {
    // TODO: replace with the real page paths
    const SALES_HREF = "/contact";
    const DEALS_HREF = "/promotions";
    const INQUIRY_HREF = "/contact";

    return (
        <>
            <Header />
            <main className="w-full max-w-full">
                {/* Banner */}
                <section className="bg-white">
                    <img
                        src={bannerImage}
                        alt="A Ford sales consultant shaking hands with a customer"
                        width={2000}
                        height={500}
                        decoding="async"
                        draggable={false}
                        className="block aspect-[16/9] w-full object-cover md:aspect-[4/1]"
                    />
                </section>

                {/* Other Ford Finance Deals */}
                <section className="container mx-auto px-4 pb-6 pt-12 lg:pt-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-[#066FEF]">
                        Ford Finance
                    </p>
                    <h1 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-[#003478] sm:text-4xl">
                        Other Ford Finance Deals
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#102B4E]/80 lg:text-lg">
                        With our irresistible Ford Finance offers, you can drive
                        home in your new Ford throughout the year!{" "}
                        <a
                            href={SALES_HREF}
                            className="font-semibold text-[#003478] underline decoration-[#066FEF] decoration-2 underline-offset-4 transition-colors hover:text-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF]"
                        >
                            Speak to one of our Sales Consultants
                        </a>{" "}
                        to discuss your finance requirements.
                    </p>
                </section>

                {/* Current Finance Offers */}
                <section className="container mx-auto px-4 pb-14 pt-6 lg:pb-20">
                    <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-gradient-to-br from-[#001A3D] via-[#003478] to-[#066FEF] p-8 shadow-lg md:flex-row md:items-center lg:p-12">
                        <div className="max-w-xl">
                            <h2 className="text-2xl font-bold uppercase text-white lg:text-3xl">
                                Current Finance Offers
                            </h2>
                            <p className="mt-3 leading-relaxed text-white/80 lg:text-lg">
                                You may find our current deals via this link
                                below. Or you may request a return call from one
                                of our representatives.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 md:flex-col">
                            <a
                                href={DEALS_HREF}
                                className="inline-block rounded-full bg-white px-7 py-3 text-center text-sm font-semibold text-[#003478] transition-colors hover:bg-[#F2F2F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#003478]"
                            >
                                Check out current deals
                            </a>
                            <a
                                href={INQUIRY_HREF}
                                className="inline-block rounded-full border-2 border-white px-7 py-[10px] text-center text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#003478] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#003478]"
                            >
                                Make an inquiry
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
