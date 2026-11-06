import Header from "./components/Header";
import Footer from "./components/Footer";
import { getPosts } from "../assets/data/post";

import bannerImage from "../assets/images/virtual-room-banner.jpg";
import step1Image from "../assets/images/choose-a-car-min.jpg";
import step2Image from "../assets/images/virtual-appointment-min.png";
import step3Image from "../assets/images/video-call-min.jpg";
import step4Image from "../assets/images/agree-purchase-min.jpg";

export default function VirtualShowroom() {
    // TODO: replace the "#" links with each dealer's Messenger link and email
    const DEALERS = [
        {
            name: "Ford Pampanga",
            messageHref: "https://wa.me/+639188542169",
            emailHref: "mailto: gadungca@lausgroup.com.ph",
        },
        {
            name: "Ford Dagupan",
            messageHref: "https://wa.me/+639188542948",
            emailHref: "mailto: bdvelasco@lausgroup.com.ph",
        },
        {
            name: "Ford Ilocos Norte",
            messageHref: "https://wa.me/+639188542300",
            emailHref: "mailto: jvdomingo@lausgroup.com.ph",
        },
        {
            name: "Ford Isabela",
            messageHref: "https://wa.me/ +639285500803",
            emailHref: "mailto: cocornel@lausgroup.com.ph",
        },
        {
            name: "Ford Libis",
            messageHref: "https://wa.me/+639989542814",
            emailHref: "mailto: mdyambao@lausgroup.com.ph",
        },
        {
            name: "Ford Metro Baguio",
            messageHref: "https://wa.me/+639188542453",
            emailHref: "mailto: iddelacruz@lausgroup.com.ph",
        },
        {
            name: "Ford Clark",
            messageHref: "https://wa.me/+639985900383",
            emailHref: "mailto: mdpaule@lausgroup.com.ph",
        },
        {
            name: "Ford Tarlac",
            messageHref: "https://wa.me/+639188542322",
            emailHref: "mailto: ipvillarosa@lausgroup.com.ph",
        },
        {
            name: "Ford Subic",
            messageHref: "https://wa.me/+639188542797",
            emailHref: "mailto: gcverinio@lausgroup.com.ph",
        },
        {
            name: "Ford Cabanatuan",
            messageHref: "https://wa.me/+639188542222",
            emailHref: "mailto: jmsantos@lausgroup.com.ph",
        },
    ];

    const STEPS = [
        {
            title: "Choose a car",
            image: step1Image,
            alt: "Three Ford models side by side to compare",
            text: "Choose your favourite model from our dealer showrooms. Can't find exactly what you're looking for? View our new vehicle model pages. Still undecided? We can take you through our showroom live on a video call.",
        },
        {
            title: "Virtual appointment",
            image: step2Image,
            alt: "A phone call and a calendar",
            text: "Leave a message or call us to schedule an appointment and agree a video call using your preferred channel, such as Viber, Zoom or Skype.",
        },
        {
            title: "Video call",
            image: step3Image,
            alt: "A video call between a customer and a Ford sales consultant",
            text: "We will take you on a live walk around your chosen vehicles – demonstrating all their features. We are happy to give you a “sneak peek” of the latest passenger and commercial vehicles.",
        },
        {
            title: "Agree purchase",
            image: step4Image,
            alt: "A handshake and a map of Ford dealers",
            text: "During, or after the video call make your decision to purchase. Enter your postcode and contact your Ford dealer to finalise the paperwork. The dealer will prepare your brand new car for pickup or home drop-off.",
        },
    ];

    // The 3 newest posts for the Dealer Promotions section
    const PROMOTIONS = getPosts.slice(0, 3);

    // "2024-11-08" -> "November 8, 2024"
    const formatDate = (date: string) =>
        new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

    // Share links use the address of this page
    const SHARE = [
        {
            label: "Facebook",
            href: `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.lausfordgroup.com.ph%2FPage%2F126%2Fvirtual-showroom-contactless-service&title=Ford%20Laus%20Virtual%20Showroom`,
        },
        {
            label: "Twitter",
            href: `https://twitter.com/intent/tweet?status=Ford%20Laus%20Virtual%20Showroom+https://www.lausfordgroup.com.ph/Page/126/virtual-showroom-contactless-service`,
        },
        {
            label: "LinkedIn",
            href: `https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fwww.lausfordgroup.com.ph%2FPage%2F126%2Fvirtual-showroom-contactless-service6%26title%3DFord%2520Laus%2520Virtual%2520Showroom`,
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
                        alt="Ford Virtual Showroom"
                        width={2000}
                        height={500}
                        decoding="async"
                        draggable={false}
                        className="block aspect-[16/9] w-full object-cover md:aspect-[4/1]"
                    />
                </section>

                {/* Welcome */}
                <section className="container mx-auto px-4 pb-6 pt-12 lg:pt-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-3xl font-bold uppercase leading-tight text-[#003478] sm:text-4xl lg:text-5xl">
                            Welcome to Our Virtual Showroom
                        </h1>
                        <p className="mt-4 text-base text-[#102B4E]/80 sm:text-lg">
                            Browse from the comfort of your home, we are here to
                            help you make your next vehicle purchase.
                        </p>
                    </div>
                </section>

                {/* How it works */}
                <section className="container mx-auto px-4 py-6">
                    <div className="rounded-2xl border border-gray-200 border-l-4 border-l-[#066FEF] bg-[#F2F2F2] p-6 sm:p-8">
                        <h2 className="text-2xl font-bold uppercase text-[#003478]">
                            How it works
                        </h2>
                        <div className="mt-4 max-w-4xl space-y-4 leading-relaxed text-[#102B4E]/80">
                            <p>
                                On every new or used vehicle page you will find
                                a section detailing our virtual showroom, simply
                                click the button to book your virtual session
                                and one of our sales team will be in touch with
                                you to arrange your virtual session.
                            </p>
                            <p>
                                If you are unsure which model you are interested
                                in you can either view our New &amp; Used Cars
                                online, or we can even schedule a video call to
                                take you live along all our vehicles in the
                                showroom.
                            </p>
                            <p>
                                For a “sneak peek” of the latest passenger cars
                                and commercial vehicles, simply click the below
                                button.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Book with a dealer */}
                <section className="container mx-auto px-4 py-8 lg:py-10">
                    <h2 className="text-2xl font-bold uppercase text-[#003478] lg:text-3xl">
                        Book your virtual session
                    </h2>
                    <p className="mt-2 text-[#102B4E]/80">
                        Choose your dealership and message or email them to
                        book.
                    </p>

                    <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {DEALERS.map((dealer) => (
                            <li key={dealer.name} className="flex">
                                <div className="flex w-full flex-col rounded-2xl border border-gray-200 border-t-4 border-t-[#003478] bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-lg motion-reduce:transition-none">
                                    <h3 className="text-lg font-bold uppercase leading-snug text-[#003478]">
                                        {dealer.name}
                                    </h3>
                                    <div className="mt-auto flex flex-col gap-2 pt-5">
                                        <a
                                            href={dealer.messageHref}
                                            className="rounded-full bg-[#003478] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2"
                                        >
                                            Message to Book
                                        </a>
                                        <a
                                            href={dealer.emailHref}
                                            className="rounded-full border-2 border-[#003478] px-4 py-2 text-sm font-semibold text-[#003478] transition-colors hover:border-[#066FEF] hover:text-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2"
                                        >
                                            Email to Book
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Share */}
                    <div className="mt-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center">
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#003478]">
                            Share on social media
                        </p>
                        <ul className="flex flex-wrap justify-center gap-2">
                            {SHARE.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block rounded-full bg-[#F2F2F2] px-4 py-2 text-sm font-semibold text-[#102B4E] transition-colors hover:bg-[#003478] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF]"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* 4 easy steps */}
                <section className="bg-[#F2F2F2] py-12 lg:py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="max-w-3xl border-l-4 border-[#066FEF] pl-3 text-2xl font-bold uppercase leading-snug text-[#003478] lg:text-3xl">
                            Make your next vehicle purchase from the comfort of
                            your own home in 4 easy steps
                        </h2>

                        <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                            {STEPS.map((step, index) => (
                                <li key={step.title} className="flex">
                                    <div className="w-full rounded-2xl bg-white p-6 shadow-sm">
                                        <img
                                            src={step.image}
                                            alt={step.alt}
                                            loading="lazy"
                                            draggable={false}
                                            className="aspect-[2/1] w-full object-contain"
                                        />
                                        <h3 className="mt-4 text-lg font-bold uppercase text-[#102B4E]">
                                            {index + 1}. {step.title}
                                        </h3>
                                        <p className="mt-2 leading-relaxed text-[#102B4E]/80">
                                            {step.text}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Dealer promotions */}
                {PROMOTIONS.length > 0 && (
                    <section className="container mx-auto px-4 py-12 lg:py-16">
                        <div className="flex flex-wrap items-end justify-between gap-3">
                            <h2 className="border-l-4 border-[#066FEF] pl-3 text-2xl font-bold uppercase text-[#003478] lg:text-3xl">
                                Dealer Promotions
                            </h2>
                            <a
                                href="/dealer-news"
                                className="text-sm font-semibold text-[#003478] transition-colors hover:text-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF]"
                            >
                                View all dealer news →
                            </a>
                        </div>

                        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {PROMOTIONS.map((post) => (
                                <li key={post.id} className="flex">
                                    <a
                                        href={post.href}
                                        className="group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                                    >
                                        <div className="aspect-[16/10] overflow-hidden bg-[#F2F2F2]">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <time
                                                dateTime={post.date}
                                                className="text-sm text-[#102B4E]/70"
                                            >
                                                {formatDate(post.date)}
                                            </time>
                                            <h3 className="mt-2 text-lg font-bold uppercase leading-snug text-[#102B4E] transition-colors group-hover:text-[#066FEF]">
                                                {post.title}
                                            </h3>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </main>
            <Footer />
        </>
    );
}
