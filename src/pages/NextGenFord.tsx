import Header from "./components/Header";
import Footer from "./components/Footer";
import Playlist from "./components/Playlist";
import bannerImage from "../assets/images/nextgenfordbanner.jpg";
import everestImage from "../assets/images/surf.jpg";

export default function NextGenFord() {
    // Next-Gen Ranger videos
    // TODO: add the rest of the old playlist (At A Glance, 10 Things, Designing, Next-Generation Capability)
    const RANGER_VIDEOS = [
        {
            link: "https://www.youtube.com/watch?v=NzZY_llytK8",
            title: "Next-Generation Capability | Ford Philippines",
            duration: "0:31",
        },
        {
            link: "https://www.youtube.com/watch?v=Q9O0V27eL8I",
            title: "#NextGenRanger At A Glance",
            duration: "1:01",
        },
        {
            link: "https://www.youtube.com/watch?v=Xvs6V50jIYU",
            title: "10 Things you need to know about Next-Gen Ranger",
            duration: "3:00",
        },
        {
            link: "https://www.youtube.com/watch?v=yoKAX-ipFSY",
            title: "#NextGenRanger - Designing a ‘Truly Global Truck’",
            duration: "1:41",
        },
        {
            link: "https://www.youtube.com/watch?v=uhRQtnaqWZ0",
            title: "Most Versatile Ranger Ever #NextGenRanger",
            duration: "1:01",
        },
    ];

    // TODO: replace with the real inquiry page path
    const INQUIRY_HREF = "/contact";

    return (
        <>
            <Header />
            <main className="w-full max-w-full">
                {/* Banner with the heading on top of the image */}
                <section className="relative bg-white">
                    {/* The banner has its own "Coming soon" text at the bottom, so the
                        heading goes at the top. Phones crop the sides (16:9), from md up
                        the full picture shows. */}
                    <img
                        src={bannerImage}
                        alt="Coming soon: the Next-Gen Ford Ranger and Ford Everest"
                        width={2000}
                        height={550}
                        decoding="async"
                        draggable={false}
                        className="block aspect-[16/9] w-full object-cover md:aspect-auto md:h-auto"
                    />

                    {/* Dark fade at the top keeps the white heading readable */}
                    <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-[#001A3D]/85 via-[#001A3D]/50 to-transparent px-4 pb-12 pt-5 text-center sm:pb-16 sm:pt-8 lg:pb-24 lg:pt-12">
                        <h1 className="mx-auto max-w-4xl text-xl font-bold leading-tight tracking-tight text-white drop-shadow-md sm:text-3xl lg:text-5xl">
                            Introducing the Next-Gen Ford Vehicles
                        </h1>
                    </div>
                </section>

                {/* Next-Gen Ranger videos */}
                <section className="bg-[#F2F2F2] py-12 sm:py-16 lg:py-20">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#003478] sm:text-4xl lg:text-5xl">
                                Our Next-Gen Ford Ranger
                            </h2>
                            <p className="mt-4 text-base text-[#102B4E]/80 sm:text-lg">
                                A truly global truck #NextGenRanger
                            </p>
                        </div>

                        <div className="mt-10 lg:mt-12">
                            <Playlist videos={RANGER_VIDEOS} />
                        </div>
                    </div>
                </section>

                {/* Next-Gen Everest */}
                <section className="bg-white py-12 sm:py-16 lg:py-20">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
                            {/* TODO: add the Everest picture at this path */}
                            <img
                                src={everestImage}
                                alt="A family enjoying the beach next to the Next-Gen Ford Everest"
                                loading="lazy"
                                decoding="async"
                                draggable={false}
                                className="aspect-[4/3] w-full rounded-2xl bg-[#003478]/10 object-cover shadow-md"
                            />

                            <div>
                                <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#003478] sm:text-3xl lg:text-4xl">
                                    The Next-Gen Ford Everest
                                </h2>
                                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#066FEF]">
                                    Are you ready for the Next-Gen Ford Everest?
                                </p>
                                <p className="mt-4 text-base leading-relaxed text-[#102B4E]/80 sm:text-lg">
                                    Wearing its &ldquo;mountain peak&rdquo;
                                    inspired camouflage, the next-generation
                                    Ford Everest is entering its final phase of
                                    testing.
                                </p>
                                <p className="mt-4 text-base leading-relaxed text-[#102B4E]/80 sm:text-lg">
                                    If you wish to receive updates, you may
                                    leave your details by clicking below:
                                </p>

                                <a
                                    href={INQUIRY_HREF}
                                    className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#003478] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2"
                                >
                                    Send us an Inquiry
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                                        aria-hidden="true"
                                    >
                                        <path d="M5 12h14M13 6l6 6-6 6" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Disclosures */}
                <section className="bg-[#F2F2F2] py-12 sm:py-16">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl rounded-2xl border border-[#003478]/10 border-l-4 border-l-[#003478] bg-white p-6 shadow-sm sm:p-8">
                            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#003478]">
                                Disclosures
                            </h2>
                            <p className="mt-3 text-sm italic leading-relaxed text-[#102B4E]/70 sm:text-base">
                                Not all vehicle features or services depicted
                                will be available in all markets, or on all
                                variants. Precise specifications for each market
                                and variant will be confirmed prior to launch.
                            </p>

                            <a
                                href={INQUIRY_HREF}
                                className="group mt-6 inline-flex items-center gap-2 rounded-full border border-[#003478] px-6 py-3 text-sm font-semibold text-[#003478] transition-colors hover:bg-[#003478] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2"
                            >
                                Send us an Inquiry
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                                    aria-hidden="true"
                                >
                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
