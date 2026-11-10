import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";

// Colors Mustang
import oxfordWhiteImage from "../assets/images/vehicles/mustang/oxfordwhite.jpg";
import raceRedImage from "../assets/images/vehicles/mustang/racered.jpg";
import blackShadowImage from "../assets/images/vehicles/mustang/shadowblack.jpg";
import iconicSilverImage from "../assets/images/vehicles/mustang/iconicsilvermetallic.jpg";
import magneticImage from "../assets/images/vehicles/mustang/carbonizedgraymetallic.jpg";
import konaBlueImage from "../assets/images/vehicles/mustang/velocitybluemetallic.jpg";
import antimatterBlueImage from "../assets/images/vehicles/mustang/antimatterbluemetallic.jpg";
import tripleYellowImage from "../assets/images/vehicles/mustang/grabberyellow.jpg";
import rapidRedImage from "../assets/images/vehicles/mustang/rapidredmetallic.jpg";
import orangeFuryImage from "../assets/images/vehicles/mustang/twisterorangemettalictri-coat.jpg";

import rangerImage from "../assets/images/vehicles/ranger.jpg";
import rangerRaptorImage from "../assets/images/vehicles/raptor-ranger.jpg";
import territoryImage from "../assets/images/vehicles/territory.jpg";
import everestImage from "../assets/images/vehicles/everest.jpg";
import explorerImage from "../assets/images/vehicles/explorer.jpg";
import broncoImage from "../assets/images/vehicles/bronco.jpg";
import territoryHybridImage from "../assets/images/vehicles/territory-hybrid.jpg";
import machEImage from "../assets/images/vehicles/mustang-mach-e.webp";

export default function NewVehicles() {
    // Colors of the Mustang, each with its own photo and a color for the button
    const MUSTANG_COLORS = [
        { name: "Oxford White", hex: "#F7F5F8", image: oxfordWhiteImage },
        { name: "Race Red", hex: "#C20000", image: raceRedImage },
        { name: "Black Shadow", hex: "#17171C", image: blackShadowImage },
        { name: "Iconic Silver", hex: "#A8A9AA", image: iconicSilverImage },
        { name: "Magnetic", hex: "#5A5A5A", image: magneticImage },
        { name: "Kona Blue", hex: "#0B53C9", image: konaBlueImage },
        { name: "Antimatter Blue", hex: "#0F3A5F", image: antimatterBlueImage },
        {
            name: "Triple Yellow Tricoat",
            hex: "#E2C400",
            image: tripleYellowImage,
        },
        { name: "Rapid Red", hex: "#A82B30", image: rapidRedImage },
        { name: "Orange Fury", hex: "#D9700F", image: orangeFuryImage },
    ];

    // TODO: replace the paths with the real model pages, and add the missing prices
    const CATEGORIES = [
        {
            name: "Performance",
            models: [
                {
                    name: "Ford Mustang",
                    price: 3048000,
                    image: oxfordWhiteImage,
                    href: "/new-vehicles/mustang",
                    colors: MUSTANG_COLORS,
                },
            ],
        },
        {
            name: "Trucks",
            models: [
                {
                    name: "Ranger",
                    price: 1249000,
                    image: rangerImage,
                    href: "/new-vehicles/ranger",
                    colors: undefined,
                },
                {
                    name: "Ranger Raptor",
                    price: 2339000,
                    image: rangerRaptorImage,
                    href: "/new-vehicles/ranger-raptor",
                    colors: undefined,
                },
            ],
        },
        {
            name: "SUV",
            models: [
                {
                    name: "Territory",
                    price: 1335000,
                    image: territoryImage,
                    href: "/new-vehicles/territory",
                    colors: undefined,
                },
                {
                    name: "Everest",
                    price: 1799000,
                    image: everestImage,
                    href: "/new-vehicles/everest",
                    colors: undefined,
                },
                {
                    name: "Explorer",
                    price: 3298000,
                    image: explorerImage,
                    href: "/new-vehicles/explorer",
                    colors: undefined,
                },
                {
                    name: "Bronco",
                    price: 4998000,
                    image: broncoImage,
                    href: "/new-vehicles/bronco",
                    colors: undefined,
                },
            ],
        },
        {
            name: "Electric & Hybrid",
            models: [
                {
                    name: "Territory Hybrid",
                    price: 1399000,
                    image: territoryHybridImage,
                    href: "/new-vehicles/territory-hybrid",
                    colors: undefined,
                },
                {
                    name: "Mustang Mach-E",
                    price: 3499000,
                    image: machEImage,
                    href: "/new-vehicles/mustang-mach-e",
                    colors: undefined,
                },
            ],
        },
    ];

    const [chosenColors, setChosenColors] = useState<Record<string, number>>(
        {},
    );

    // 3048000 -> "₱3,048,000"
    const formatPrice = (price: number) =>
        price.toLocaleString("en-PH", {
            style: "currency",
            currency: "PHP",
            maximumFractionDigits: 0,
        });

    return (
        <>
            <SEO
                title="New Ford Vehicles"
                description="Explore new Ford vehicles at Ford Laus Group: Ranger, Ranger Raptor, Everest, Territory, Territory Hybrid, Explorer, Bronco, Mustang and Mustang Mach-E."
            />
            <Header />
            <main className="w-full max-w-full">
                {/* Heading */}
                <section className="bg-gradient-to-br from-[#001A3D] via-[#003478] to-[#066FEF]">
                    <div className="container mx-auto px-4 py-14 lg:py-20">
                        <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                            Lausford Group
                        </p>
                        <h1 className="mt-2 text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
                            Explore Vehicles
                        </h1>
                        <p className="mt-4 max-w-2xl text-base text-white/80 lg:text-lg">
                            Find the Ford that fits your drive, from performance
                            and trucks to SUVs and electric and hybrid.
                        </p>
                    </div>
                </section>

                {/* One section per category, from top to bottom */}
                {CATEGORIES.map((category, index) => (
                    <section
                        key={category.name}
                        className={`py-12 lg:py-16 ${
                            index % 2 === 0 ? "bg-white" : "bg-[#F2F2F2]"
                        }`}
                    >
                        <div className="container mx-auto px-4">
                            <div className="flex items-center gap-4">
                                <h2 className="text-2xl font-bold uppercase tracking-wide text-[#003478] lg:text-3xl">
                                    {category.name}
                                </h2>
                                <div className="h-px flex-1 bg-[#003478]/15" />
                                <p className="text-sm font-semibold uppercase tracking-widest text-[#102B4E]/60">
                                    {category.models.length}{" "}
                                    {category.models.length === 1
                                        ? "model"
                                        : "models"}
                                </p>
                            </div>

                            <ul className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
                                {category.models.map((model) => {
                                    const chosen =
                                        chosenColors[model.name] ?? 0;

                                    // A model with colors gets its own showcase card:
                                    // a dark info panel and a stage that glows in the chosen color
                                    if (model.colors) {
                                        const color = model.colors[chosen];

                                        return (
                                            <li
                                                key={model.name}
                                                className="lg:col-span-2"
                                            >
                                                {/* The whole card is clickable through the link, the color buttons stay on top of it */}
                                                <div className="group relative grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:grid-cols-[2fr_3fr]">
                                                    {/* Info and colors */}
                                                    <div className="flex flex-col justify-center bg-gradient-to-br from-[#001A3D] via-[#003478] to-[#003478] p-6 text-white sm:p-8 lg:p-12">
                                                        <h3 className="text-3xl font-bold uppercase leading-tight sm:text-4xl">
                                                            {model.name}
                                                        </h3>
                                                        {model.price && (
                                                            <p className="mt-3">
                                                                <span className="block text-xs font-semibold uppercase tracking-widest text-white/60">
                                                                    Starting
                                                                    price
                                                                </span>
                                                                <span className="text-2xl font-semibold">
                                                                    {formatPrice(
                                                                        model.price,
                                                                    )}
                                                                </span>
                                                            </p>
                                                        )}

                                                        <div className="relative z-30 mt-8 border-t border-white/15 pt-6">
                                                            <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                                                                Choose your
                                                                color
                                                            </p>
                                                            <p className="mt-1 text-lg font-semibold">
                                                                {color.name}
                                                            </p>
                                                            <ul className="mt-4 grid w-max grid-cols-5 md:grid-cols-10 gap-3">
                                                                {model.colors.map(
                                                                    (
                                                                        item,
                                                                        itemIndex,
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                item.name
                                                                            }
                                                                        >
                                                                            <button
                                                                                type="button"
                                                                                title={
                                                                                    item.name
                                                                                }
                                                                                aria-label={
                                                                                    item.name
                                                                                }
                                                                                aria-pressed={
                                                                                    itemIndex ===
                                                                                    chosen
                                                                                }
                                                                                onClick={() =>
                                                                                    setChosenColors(
                                                                                        {
                                                                                            ...chosenColors,
                                                                                            [model.name]:
                                                                                                itemIndex,
                                                                                        },
                                                                                    )
                                                                                }
                                                                                style={{
                                                                                    backgroundColor:
                                                                                        item.hex,
                                                                                }}
                                                                                className={`block h-9 w-9 cursor-pointer rounded-full border border-white/30 ring-offset-2 ring-offset-[#003478] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] motion-reduce:transition-none ${
                                                                                    itemIndex ===
                                                                                    chosen
                                                                                        ? "scale-110 ring-2 ring-white"
                                                                                        : "hover:scale-110 hover:ring-2 hover:ring-white/50"
                                                                                }`}
                                                                            />
                                                                        </li>
                                                                    ),
                                                                )}
                                                            </ul>
                                                        </div>

                                                        <div className="mt-8">
                                                            <a
                                                                href={
                                                                    model.href
                                                                }
                                                                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#003478] transition-colors group-hover:bg-[#F2F2F2] focus:outline-none after:absolute after:inset-0 after:z-20 after:rounded-3xl focus-visible:after:ring-4 focus-visible:after:ring-inset focus-visible:after:ring-[#066FEF]"
                                                            >
                                                                Explore{" "}
                                                                {model.name}
                                                            </a>
                                                        </div>
                                                    </div>

                                                    {/* Stage, every color photo is stacked and the chosen one fades in */}
                                                    <div className="relative aspect-[16/9] overflow-hidden bg-[radial-gradient(ellipse_at_center,#F2F2F2_0%,#FFFFFF_75%)] lg:aspect-auto lg:min-h-[26rem]">
                                                        {model.colors.map(
                                                            (
                                                                item,
                                                                itemIndex,
                                                            ) => (
                                                                <img
                                                                    key={
                                                                        item.name
                                                                    }
                                                                    src={
                                                                        item.image
                                                                    }
                                                                    alt={
                                                                        itemIndex ===
                                                                        chosen
                                                                            ? `${model.name} in ${item.name}`
                                                                            : ""
                                                                    }
                                                                    loading="lazy"
                                                                    draggable={
                                                                        false
                                                                    }
                                                                    className={`absolute inset-0 h-full w-full scale-[1.05] object-contain mix-blend-multiply transition-all duration-500 group-hover:scale-[1.1] motion-reduce:transition-none ${
                                                                        itemIndex ===
                                                                        chosen
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    }`}
                                                                />
                                                            ),
                                                        )}
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    }

                                    return (
                                        <li key={model.name}>
                                            {/* The whole card is clickable through the link below */}
                                            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                                                {/* Name and price */}
                                                <div className="p-6 sm:p-8">
                                                    <h3 className="text-2xl font-bold uppercase leading-tight text-[#003478] sm:text-3xl">
                                                        {model.name}
                                                    </h3>
                                                    {model.price ? (
                                                        <p className="mt-3">
                                                            <span className="block text-xs font-semibold uppercase tracking-widest text-[#102B4E]/60">
                                                                Starting price
                                                            </span>
                                                            <span className="text-xl font-semibold text-[#102B4E]">
                                                                {formatPrice(
                                                                    model.price,
                                                                )}
                                                            </span>
                                                        </p>
                                                    ) : (
                                                        <p className="mt-3 text-sm text-[#102B4E]/60">
                                                            Contact your dealer
                                                            for pricing
                                                        </p>
                                                    )}
                                                </div>

                                                {/* The photos have a lot of white around the car, so they are zoomed in and blended into the spotlight */}
                                                <div className="relative aspect-[16/9] overflow-hidden bg-[radial-gradient(ellipse_at_center,#F2F2F2_0%,#FFFFFF_75%)]">
                                                    <img
                                                        src={model.image}
                                                        alt={model.name}
                                                        loading="lazy"
                                                        draggable={false}
                                                        className="absolute inset-0 h-full w-full scale-[1.3] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.38] motion-reduce:transition-none"
                                                    />
                                                </div>

                                                <div className="p-6 pt-4 sm:px-8 sm:pb-8">
                                                    <a
                                                        href={model.href}
                                                        className="inline-flex items-center gap-2 rounded-full bg-[#003478] px-6 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-[#066FEF] focus:outline-none after:absolute after:inset-0 after:z-20 after:rounded-3xl focus-visible:after:ring-4 focus-visible:after:ring-inset focus-visible:after:ring-[#066FEF]"
                                                    >
                                                        Explore {model.name}
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </section>
                ))}

                {/* Not sure which one? */}
                <section className="bg-[#001A3D]">
                    <div className="container mx-auto flex flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center">
                        <div>
                            <h2 className="text-2xl font-bold uppercase text-white lg:text-3xl">
                                Not sure which Ford is right for you?
                            </h2>
                            <p className="mt-2 text-white/80">
                                Try one on the road, or let us walk you through
                                the lineup on a video call.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="/test-drive"
                                className="inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#003478] transition-colors hover:bg-[#F2F2F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#001A3D]"
                            >
                                Book a Test Drive
                            </a>
                            <a
                                href="/virtual-showroom"
                                className="inline-block rounded-full border-2 border-white px-7 py-[10px] text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#003478] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#001A3D]"
                            >
                                Virtual Showroom
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
