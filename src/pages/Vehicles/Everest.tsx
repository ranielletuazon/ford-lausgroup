import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ColorPicker from "../components/ColorPicker";
import { getPosts } from "../../assets/data/post";

// TODO: add the photos in src/assets/vehicles/everest/, import each one here
// and use it where you see "" below. Anything that is "" shows "Photo coming soon".
// For example:
import heroBanner from "../../assets/vehicles/everest/hero_banner.jpg";
import brochure from "../../assets/vehicles/everest/ford-everest-brochure-jan-26.pdf";
import everestImage1 from "../../assets/vehicles/everest/everest1.jpg";
import everestImage2 from "../../assets/vehicles/everest/everest2.jpg";
import everestImage3 from "../../assets/vehicles/everest/everest3.jpg";
import everestImage4 from "../../assets/vehicles/everest/everest4.jpg";
import everestImage5 from "../../assets/vehicles/everest/everest5.jpg";
import everestImage6 from "../../assets/vehicles/everest/everest6.jpg";
import everestImage7 from "../../assets/vehicles/everest/everest7.jpg";
import everestImage8 from "../../assets/vehicles/everest/everest8.jpg";
import everestImage9 from "../../assets/vehicles/everest/everest9.jpg";
import everestImage10 from "../../assets/vehicles/everest/everest10.jpg";
import everestImage11 from "../../assets/vehicles/everest/everest11.jpg";
import everestImage12 from "../../assets/vehicles/everest/everest12.jpg";
import everestImage13 from "../../assets/vehicles/everest/everest13.jpg";
import everestImage14 from "../../assets/vehicles/everest/everest14.jpg";
import everestImage15 from "../../assets/vehicles/everest/everest15.jpg";
import everestImage16 from "../../assets/vehicles/everest/everest16.jpg";
import everestImage17 from "../../assets/vehicles/everest/everest17.jpg";
import everestImage18 from "../../assets/vehicles/everest/everest18.jpg";
import everestImage19 from "../../assets/vehicles/everest/everest19.jpg";
import everestImage20 from "../../assets/vehicles/everest/everest20.jpg";
import everestImage21 from "../../assets/vehicles/everest/everest21.jpg";
import everestImage22 from "../../assets/vehicles/everest/everest22.jpg";

import titaniumBiTurbo4x4Image from "../../assets/vehicles/everest/titanium-4x4.png";
import titaniumBiTurbo4x2Image from "../../assets/vehicles/everest/titanium-4x2.png";
import turboSport4x2Image from "../../assets/vehicles/everest/sport-4x2.png";
import limitedTurbo4x2Image from "../../assets/vehicles/everest/limited-4x2.png";
import turboTrend4x2Image from "../../assets/vehicles/everest/turbotrend4x2.png";

// Color
import absoluteBlack from "../../assets/vehicles/everest/absoluteBlack.png";
import arcticWhite from "../../assets/vehicles/everest/arcticWhite.png";
import meteorGrey from "../../assets/vehicles/everest/meteorGrey.png";
import sedonaOrange from "../../assets/vehicles/everest/sedonaOrange.png";
import lightningBlue from "../../assets/vehicles/everest/lightningBlue.png";
import equinoxBronze from "../../assets/vehicles/everest/equinoxBronze.png";
import aluminumMetallic from "../../assets/vehicles/everest/aluminumMetallic.png";

// One model in the model section.
// specs: the section key (see SPEC_TITLES) -> one entry per bullet line.
// An entry is a string, or { title, items } for a bullet with sub bullets.
// A section with no lines is not shown. Everything with a ? can be left out.
type SpecLine = string | { title: string; items: string[] };

type Model = {
    id: string;
    name: string;
    image: string;
    trim?: string;
    engine?: string;
    drive?: string;
    transmission?: string;
    price?: number;
    views?: { label: string; image: string }[];
    specs: Record<string, SpecLine[]>;
};

export default function Everest() {
    // A photo, or a "coming soon" box while the image is "".
    const photo = (src: string, alt: string, className: string) =>
        src ? (
            <img
                src={src}
                alt={alt}
                loading="lazy"
                draggable={false}
                className={className}
            />
        ) : (
            <div
                className={`flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-[#E4E9F0] to-[#F2F2F2] p-4 text-center text-xs font-semibold uppercase tracking-widest text-[#102B4E]/40 ${className}`}
            >
                <span>Photo coming soon</span>
            </div>
        );

    // 2339000 -> "₱2,339,000"
    const formatPrice = (price: number) =>
        price.toLocaleString("en-PH", {
            style: "currency",
            currency: "PHP",
            maximumFractionDigits: 0,
        });

    // The big photo at the top ("" hides it)
    const HERO_IMAGE = heroBanner;

    // The buttons under the title. A button with no link is not shown.
    // TODO: add the brochure file and the real links
    const BROCHURE_HREF = brochure;
    const HERO_BUTTONS = [
        { label: "Brochure", href: BROCHURE_HREF },
        { label: "Price List", href: "#" },
    ].filter((button) => button.href);

    // The strip under the hero
    const HIGHLIGHTS = [
        { label: "Engine", text: "2.0L Turbo/Bi-Turbo Diesel Engine" },
        { label: "Seating for", text: "7" },
        { label: "Transmission", text: "10-Speed AT/6-Speed AT Transmission" },
    ];

    // The sections of the specification list, in order
    const SPEC_TITLES = [
        { key: "powertrain", title: "Powertrain" },
        { key: "chassis", title: "Chassis & Suspension" },
        { key: "wheels", title: "Wheels & Tires" },
        { key: "exterior", title: "Exterior" },
        { key: "interior", title: "Interior and Convenience" },
        { key: "audio", title: "Audio and Connectivity" },
        { key: "safety", title: "Safety and Security" },
        { key: "adas", title: "Advanced Driver Assist Technology" },
    ];

    // Color Picker
    const COLORS = [
        { name: "Arctic White", hex: "#F9F9FB", image: arcticWhite },
        { name: "Sedona Orange", hex: "#8F310F", image: sedonaOrange },
        { name: "Meteor Grey", hex: "#585C62", image: meteorGrey },
        { name: "Blue Lightning", hex: "#1D5DA7", image: lightningBlue },
        { name: "Bronze Equinox", hex: "#4D4747", image: equinoxBronze },
        { name: "Aluminium Metallic", hex: "#A3A5A6", image: aluminumMetallic },
        { name: "Absolute Black", hex: "#26282A", image: absoluteBlack },
    ];

    // TODO: add the specification lines of each model (a section with no lines is not shown)
    const MODELS: Model[] = [
        {
            id: "titanium-biturbo-4x4",
            name: "Everest 2.0L Bi-Turbo Titanium+ 4x4 10AT",
            image: titaniumBiTurbo4x4Image,
            trim: "Titanium+",
            engine: "2.0L Bi-Turbo",
            drive: "4x4",
            transmission: "10AT",
            price: 2495000,
            specs: {
                powertrain: [
                    "2.0L Bi-Turbo Diesel",
                    "Maximum Power 210 PS @ 3750 rpm",
                    "Maximum Torque 500Nm @ 1,750-2,000rpm",
                    "10-Speed Automatic Transmission",
                    "4x4 drivetrain",
                    "Electronic Rear Locking Differential",
                ],
                chassis: ["Front / Rear Ventilated Discs"],
                wheels: ['20" Alloy Wheels', "255/55 R20 Tires"],
                exterior: [
                    "Matrix LED Headlights with Adaptive Front Lighting System, Adaptive Glare-Free and Auto On/Off functions",
                    "C-Clamp LED Daytime Running Lamps",
                    "LED Taillights",
                    "LED Fog Lamps",
                    "Puddle Lamps",
                    "Power Folding, Power Adjustable Exterior Mirrors with Side Turn Indicators",
                    "Side Steps",
                    "Rain Sensing Wipers",
                    "Roof Rails and Rear Spoiler",
                    "Hands-Free Liftgate",
                    "Panoramic Moonroof",
                ],
                interior: [
                    "Wireless Charger",
                    "8-Way Power Adjust Driver and Front Passenger Seats",
                    "Leather and Synthetic Leather Seats",
                    '12" Digital Instrument Cluster',
                    "Smart Keyless Entry with Push Button Start",
                    "Dual-Zone Electronic Automatic Temperature Control",
                    "230V Inverter in Rear Center Console",
                    "Windscreen-Mounted USB Port",
                    "Auto-dimming Rearview Mirror",
                    "Ambient Lighting",
                    "Terrain Management System",
                ],
                audio: [
                    '12" Colored Portrait Touchscreen',
                    "SYNC® 4A with Voice Activated Controls with Wireless Apple CarPlay® and Android Auto™ Compatibility",
                    "8 Speakers",
                    "Steering Wheel Audio/Function Control",
                ],
                safety: [
                    "7 Airbags: Driver / Front Passenger / Side / Curtain / Knee Airbags",
                    "ABS with EBD",
                    "ESP with Traction Control System and Electric Brake Booster",
                    "Hill Launch Assist & Roll Over Mitigation",
                    "Hill Descent Control",
                    "Electric Parking Brake",
                    "Security Alarm System",
                    "Front and Rear Parking Sensors",
                    "360 Degree Camera",
                ],
                adas: [
                    "Adaptive Cruise Control with Stop-and-Go and Lane Centering",
                    "Adjustable Speed Limiter",
                    "Pre-Collision Assist",
                    "Dynamic Brake Support",
                    "Automatic Emergency Braking with Pedestrian Detection",
                    "Evasive Steer Assist",
                    "Post Impact Braking",
                    "Blind Spot Monitoring System with Cross Traffic Alert",
                    "Lane Keeping Aid",
                    "Lane Departure Warning",
                    "Driver Alert System",
                    "Reverse Brake Assist",
                    "Active Park Assist 2.0",
                ],
            },
        },
        {
            id: "titanium-turbo-4x2",
            name: "Everest 2.0L Turbo Titanium+ 4x2 6AT",
            image: titaniumBiTurbo4x2Image,
            trim: "Titanium+",
            engine: "2.0L Turbo",
            drive: "4x2",
            transmission: "6AT",
            price: 2179000,
            specs: {
                powertrain: [
                    "2.0L Turbo Diesel",
                    "Maximum Power 170 PS @ 3500 rpm",
                    "Maximum Torque 405Nm @ 1,750-2,500rpm",
                    "6-Speed Automatic Transmission",
                    "4x2 drivetrain",
                ],
                chassis: ["Front / Rear Ventilated Discs"],
                wheels: ['20" Alloy Wheels', "255/55 R20 Tires"],
                exterior: [
                    "LED Headlights with Auto On/Off function",
                    "C-Clamp LED Daytime Running Lamps",
                    "LED Taillights",
                    "LED Fog Lamps",
                    "Puddle Lamps",
                    "Power Folding, Power Adjustable Exterior Mirrors with Side Turn Indicators",
                    "Side Steps",
                    "Rain Sensing Wipers",
                    "Roof Rails and Rear Spoiler",
                    "Hands-Free Liftgate",
                    "Panoramic Moonroof",
                ],
                interior: [
                    "Wireless Charger",
                    "8-Way Power Adjust Driver and Front Passenger Seats",
                    "Leather and Synthetic Leather Seats",
                    '8" Digital Instrument Cluster',
                    "Smart Keyless Entry with Push Button Start",
                    "Dual-Zone Electronic Automatic Temperature Control",
                    "230V Inverter in Rear Center Console",
                    "Windscreen-Mounted USB Port",
                    "Auto-dimming Rearview Mirror",
                    "Ambient Lighting",
                ],
                audio: [
                    '12" Colored Portrait Touchscreen',
                    "SYNC® 4A with Voice Activated Controls with Wireless Apple CarPlay® and Android Auto™ Compatibility",
                    "8 Speakers",
                    "Steering Wheel Audio/Function Control",
                ],
                safety: [
                    "7 Airbags: Driver / Front Passenger / Side / Curtain / Knee Airbags",
                    "ABS with EBD",
                    "ESP with Traction Control System",
                    "Hill Launch Assist & Roll Over Mitigation",
                    "Electric Parking Brake",
                    "Security Alarm System",
                    "Front and Rear Parking Sensors",
                    "Rear View Camera",
                    "Cruise Control",
                    "Adjustable Speed Limiter",
                ],
            },
        },
        {
            id: "sport-turbo-4x2",
            name: "Everest 2.0L Turbo Sport 4x2 6AT",
            image: turboSport4x2Image,
            trim: "Sport",
            engine: "2.0L Turbo",
            drive: "4x2",
            transmission: "6AT",
            price: 2089000,
            specs: {
                powertrain: [
                    "2.0L Turbo Diesel",
                    "Maximum Power 170 PS @ 3500 rpm",
                    "Maximum Torque 405Nm @ 1,750-2,500rpm",
                    "6-Speed Automatic Transmission",
                    "4x2 drivetrain",
                ],
                chassis: ["Front / Rear Ventilated Discs"],
                wheels: ['20" Alloy Wheels', "255/55 R20 Tires"],
                exterior: [
                    "LED Headlights with Auto On/Off function",
                    "C-Clamp LED Daytime Running Lamps",
                    "LED Taillights",
                    "LED Fog Lamps",
                    "Power Folding, Power Adjustable Exterior Mirrors with Side Turn Indicators",
                    "Side Steps",
                    "Rain Sensing Wipers",
                    "Roof Rails and Rear Spoiler",
                    "Hands-Free Liftgate",
                ],
                interior: [
                    "Wireless Charger",
                    "8-Way Power Adjust Driver and Front Passenger Seats",
                    "Leather and Synthetic Leather Seats with Sport Styling",
                    '8" Digital Instrument Cluster',
                    "Smart Keyless Entry with Push Button Start",
                    "Dual-Zone Electronic Automatic Temperature Control",
                    "Windscreen-Mounted USB Port",
                    "Auto-dimming Rearview Mirror",
                ],
                audio: [
                    '10" Colored Portrait Touchscreen',
                    "SYNC® 4A with Wireless Apple CarPlay® and Android Auto™ Compatibility",
                    "8 Speakers",
                    "Steering Wheel Audio/Function Control",
                ],
                safety: [
                    "7 Airbags: Driver / Front Passenger / Side / Curtain / Knee Airbags",
                    "ABS with EBD",
                    "ESP with Traction Control System",
                    "Electric Parking Brake",
                    "Security Alarm System",
                    "Front and Rear Parking Sensors",
                    "Rear View Camera",
                    "Cruise Control",
                    "Adjustable Speed Limiter",
                ],
            },
        },
        {
            id: "limited-turbo-4x2",
            name: "Everest 2.0L Turbo Limited 4x2 6AT",
            image: limitedTurbo4x2Image,
            trim: "Limited",
            engine: "2.0L Turbo",
            drive: "4x2",
            transmission: "6AT",
            price: 1999000,
            specs: {
                powertrain: [
                    "2.0L Turbo Diesel",
                    "Maximum Power 170 PS @ 3,500 rpm",
                    "Maximum Torque 405Nm @ 1,750-2,250rpm",
                    "6-Speed Automatic Transmission",
                    "4x2 drivetrain",
                ],
                chassis: ["Front / Rear Ventilated Discs"],
                wheels: ['18" Alloy Wheels', "255/65 R18 Tires"],
                exterior: [
                    "LED Headlights with Auto On/Off function",
                    "C-Clamp LED Daytime Running Lamps",
                    "LED Taillights",
                    "LED Fog Lamps",
                    "Power Folding, Power Adjustable Exterior Mirrors with Side Turn Indicators",
                    "Side Steps",
                    "Roof Rails",
                ],
                interior: [
                    "8-Way Power Adjust Driver and Front Passenger Seats",
                    "Leather and Synthetic Leather Seats",
                    '8" Digital Instrument Cluster',
                    "Smart Keyless Entry with Push Button Start",
                    "Dual-Zone Electronic Automatic Temperature Control",
                    "Windscreen-Mounted USB Port",
                ],
                audio: [
                    '10" Colored Portrait Touchscreen',
                    "SYNC® 4A with Wireless Apple CarPlay® and Android Auto™ Compatibility",
                    "8 Speakers",
                    "Steering Wheel Audio/Function Control",
                ],
                safety: [
                    "Hill Launch Assist & Roll Over Mitigation",
                    "Security Alarm System",
                    "Front and Rear Parking Sensors",
                    "Rear View Camera",
                    "Cruise Control",
                    "Adjustable Speed Limiter",
                ],
            },
        },
        {
            id: "trend-turbo-4x2",
            name: "Everest 2.0L Turbo Trend 4x2 6AT",
            image: turboTrend4x2Image,
            trim: "Trend",
            engine: "2.0L Turbo",
            drive: "4x2",
            transmission: "6AT",
            price: 1799000,
            specs: {
                powertrain: [
                    "2.0L Turbo Diesel",
                    "Maximum Power 170 PS @ 3500 rpm",
                    "Maximum Torque 405Nm @ 1,750-2,500rpm",
                    "6-Speed Automatic Transmission",
                    "4x2 drivetrain",
                ],
                chassis: ["Front / Rear Ventilated Discs"],
                wheels: ['20" Alloy Wheels', "255/55 R20 Tires"],
                exterior: [
                    "LED Headlights with Auto On/Off function",
                    "C-Clamp LED Daytime Running Lamps",
                    "LED Taillights",
                    "LED Fog Lamps",
                    "Power Folding, Power Adjustable Exterior Mirrors with Side Turn Indicators",
                    "Side Steps",
                    "Rain Sensing Wipers",
                    "Roof Rails and Rear Spoiler",
                    "Hands-Free Liftgate",
                ],
                interior: [
                    "Wireless Charger",
                    "8-Way Power Adjust Driver and Front Passenger Seats",
                    "Leather and Synthetic Leather Seats with Sport Styling",
                    '8" Digital Instrument Cluster',
                    "Smart Keyless Entry with Push Button Start",
                    "Single Zone Manual Temperature Control",
                ],
                audio: [
                    '10" Colored Portrait Touchscreen',
                    "SYNC® 4A with Wireless Apple CarPlay® and Android Auto™ Compatibility",
                    "8 Speakers",
                    "Steering Wheel Audio/Function Control",
                ],
                safety: [
                    "7 Airbags: Driver / Front Passenger / Side / Curtain / Knee Airbags",
                    "ABS with EBD",
                    "ESP with Traction Control System",
                    "Electric Parking Brake",
                    "Security Alarm System",
                    "Front and Rear Parking Sensors",
                    "Rear View Camera",
                    "Cruise Control",
                    "Adjustable Speed Limiter",
                ],
            },
        },
    ];

    // The text and two photos under the models
    // TODO: replace the links with the real reservation and promotions pages
    const INTRO = {
        eyebrow: "Reserve your Next-Gen Ford Everest",
        title: "The Next-Gen Ford Everest",
        text: "We do have special promos regularly. Why not visit our promo page to check out what they are! Find the Next-Gen Ford Everest offers.",
        photos: [
            {
                image: everestImage1,
                alt: "The digital instrument cluster of the Ford Everest",
            },
            {
                image: everestImage2,
                alt: "A Ford Everest towing a boat along a lake",
            },
        ],
    };

    // TODO: put the gallery photos here. Only the items with an image are shown,
    // and the whole gallery is hidden when there is none.
    const GALLERY = [
        { image: "", alt: "Ford Everest interior", category: "Interior" },
        { image: "", alt: "Ford Everest exterior", category: "Exterior" },
    ];

    const GALLERY_PHOTOS = GALLERY.filter((item) => item.image);
    const GALLERY_FILTERS = ["All", "Interior", "Exterior"].filter(
        (filter) =>
            filter === "All" ||
            GALLERY_PHOTOS.some((item) => item.category === filter),
    );

    // The YouTube link of the video (any kind of link works). Empty hides the video.
    const VIDEO_URL = "https://www.youtube.com/watch?v=r11pSS9ZdR0";

    // Any YouTube link -> the embed address the iframe needs ("" if it is not a link)
    const getEmbedUrl = (link: string) => {
        try {
            const url = new URL(link);
            const parts = url.pathname.split("/");
            const id = url.hostname.includes("youtu.be")
                ? parts[1]
                : url.searchParams.get("v") ||
                  (parts[1] === "embed" || parts[1] === "shorts"
                      ? parts[2]
                      : "");
            return id ? `https://www.youtube.com/embed/${id}` : "";
        } catch {
            return "";
        }
    };
    const VIDEO_EMBED_URL = getEmbedUrl(VIDEO_URL);

    // video: true shows the video under that group
    const FEATURE_GROUPS = [
        {
            title: "Interior",
            video: true,
            features: [
                {
                    title: "Premium Hi-Tech Dashboard",
                    image: everestImage4,
                    text: "The new monolithic dashboard enhances the sense of space and width in the cabin. The fully digital instrument cluster and integrated central 12-inch LCD touchscreen are surrounded by premium materials and finishes.",
                },
                {
                    title: "Signature Interior Finish",
                    image: everestImage5,
                    text: "Optional Ebony and Praline interiors include leather seats with custom inserts, quilted design and perforations. Soft brushed metal finishes enhance the feeling of luxury, while the standard panoramic roof enhances the wide-open space experience.",
                },
                {
                    title: "SYNC®4A",
                    image: everestImage8,
                    text: 'SYNC®4A* is a cloud-connected in-vehicle communication and entertainment system. There is a wide range of features, supported by a system that shows your 5 most recent actions. The dashboard is easy to navigate with intuitive gestures. With wireless smartphone integration and the best-in-class 10.1" or 12" touchscreen, you\'ll discover a whole new world of connectivity in your vehicle.',
                },
                {
                    title: "360 Degree Camera",
                    image: everestImage9,
                    text: "From the large center display, choose from multiple camera views to see more than ever. This includes a bird's-eye 360-degree top-down view, a 180-degree front and rear split view, and a front off-road view.",
                },
                {
                    title: "Wireless Charging Pad",
                    image: everestImage10,
                    text: "Skip the hassle of having to plug in your phone. Place it on Everest's wireless charging dock and you're good to go.",
                },
                {
                    title: "Power Where You Need It",
                    image: everestImage11,
                    text: "Designed for the modern, busy family, with USB access in the first and second rows. There is also a 12V outlet for the third row of seats and the luggage compartment. A 400-watt inverter at the back of the center console gives you extra comfort for your adventures.",
                },
                {
                    title: "Wireless Connection",
                    image: everestImage12,
                    text: "Connect to Apple CarPlay®* and Android Auto™* without a cord in sight. So, say goodbye to tangled cables and hello to the sleek interior you've always wanted.",
                },
                {
                    title: "Off-Road Screens",
                    image: everestImage13,
                    text: "Turn Everest's touchscreen into an all-terrain command center! See front-facing camera views, path overlays, pitch and roll information, and access features like differential locking all in one place.",
                },
                {
                    title: "7 Seats. Space for Family Comfort",
                    image: everestImage14,
                    text: "Everyone should be comfortable, no matter where they are sitting. Next-Gen Everest is more spacious than ever, with every passenger getting more room. The Panoramic Roof* adds to the sense of openness and adventure.",
                },
                {
                    title: "A PROPER THIRD ROW",
                    image: everestImage21,
                    text: "The Everest's third row of seats is wider, has more legroom, improves seating and is easier to get in and out of. Ceiling vents keep air circulating and rear passengers cool and comfortable. Side curtain airbags are of course standard.",
                },
                {
                    title: "SELECTABLE DRIVE MODES",
                    image: everestImage22,
                    text: "Everest gives you command of six on- and off-road drive modes to help master every terrain.",
                },
            ],
        },
        {
            title: "Exterior",
            video: false,
            features: [
                {
                    title: "Machine Face Alloys",
                    image: everestImage3,
                    text: "Large 20-inch machine-finished alloys stand tall at every angle, highlighting the Titanium+'s width and muscular yet agile silhouette. Chrome accents on the fenders help connect the wheel finish to the upper body.",
                },
                {
                    title: "Gloss Black Alloys - Sport Variants",
                    image: everestImage6,
                    text: "The 20-inch gloss black alloy wheels add a sporty and agile look and are in perfect sync with the black accents front and rear.",
                },
                {
                    // TODO: the old page says "track rise" and "places the bike on the wheels", please check the wording
                    title: "LED Tail Lights",
                    image: everestImage7,
                    text: "The LED taillights are housed in a full-width design that emphasizes Everest's track width. The extra 50mm distance places the wheels at the corners, creating a strong and muscular stance.",
                },
                {
                    title: "STRONGER AND WIDER",
                    image: everestImage15,
                    text: "More where it counts. The increased width plants Everest firmly in its corners. The updated chassis and refined suspension are more robust and capable, and the bold, rugged exterior reflects that.",
                },
                {
                    title: "BOLD IN BLACK - SPORT VARIANTS",
                    image: everestImage16,
                    text: "The black painted grille, sliders and side skirts give the Sport a bold road presence and a solid sporty look. The black 'EVEREST' lettering on the hood contrasts with the body color in a signature statement.",
                },
                {
                    title: "C-CLAMP HEADLAMPS",
                    image: everestImage17,
                    text: "Instantly recognizable, Ford's signature design DNA is reflected in the C-Clamp headlights flanked by Everest's towering grille. Here's what the capacity looks like.",
                },
                {
                    title: "800-METER WATER WADING",
                    image: everestImage18,
                    text: "Ready to deal with anything, the Everest has unsurpassed drivability throughout the range.",
                },
                {
                    title: "HANDS-FREE POWER LIFTGATE",
                    image: everestImage19,
                    text: "Hands full? Open the liftgate by kicking your foot under the sensor. Everest's liftgate is wider for easier loading, opens and closes faster.",
                },
                {
                    title: "INTELLIGENT ADAPTIVE CONTROL (IACC) WITH LANE CENTERING",
                    image: everestImage20,
                    text: "iACC helps maintain your speed while you are on the road and, together with Stop & Go, can slow your Everest if the vehicle ahead of you has stopped or slowed down. Lane Center analyzes lane markings to help you stay on track.",
                },
            ],
        },
    ];

    // TODO: the colors of the Everest, each with its own photo. Leave the list empty to hide the colors.
    // For example: { name: "Arctic White", hex: "#F4F4F4", image: arcticWhite },

    // The disclosure under the page, one line per paragraph. An empty list hides it.
    const DISCLOSURE = [
        "VEHICLE SPECIFICATIONS MAY VARY. FORD GROUP PHILIPPINES RESERVES THE RIGHT TO CHANGE OR MODIFY EQUIPMENT AND SPECIFICATIONS AT ANY TIME WITHOUT PRIOR NOTICE.",
        "*Driver-assist features are supplemental and do not replace the driver’s attention, judgment and need to control the vehicle. May not operate at certain speeds, or in certain driving, road or weather conditions.",
        "^iACC with Lane Centering has a minimum operating speed of 20km/hr. Detection of lower speed limit will result in system entering standby. The Stop & Go functionality of this system operates as low as 0km/hr in traffic jam situations.",
        "#If vehicle is stopped for more than three seconds, driver must intervene and press “RES” button or accelerator pedal to resume the system operation.",
        "x Intersection Assist does not detect all vehicles in intersection, pedestrians or cyclists. It does not replace safe driving. See Owner’s Manual for Limitations.",
        "+Designed for use on rural roads at speeds of 65 – 110km/h. The feature does not detect every edge and does require a level of contrast between the road surface and the edge.",
        "-Reverse Brake Assist functions when in Reverse and travelling at a speed of 2-12 km/h (1-7 mph). Please see the Owner’s Manual for precautions and limitations.",
        "|Active Park Assist 2.0 is only available on vehicles that are fitted with an e-shifter.",
        "Indicative pre-production vehicle specifications and images shown. Specifications and features on production model may vary.",
        "*Owners shall be responsible for installation of towing wiring and accessories.",
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

    // The model that is shown, its photo, and the open specification sections.
    // The open sections stay open when another model is picked, so models are easy to compare.
    const [selectedId, setSelectedId] = useState(MODELS[0].id);
    const [viewIndex, setViewIndex] = useState(0);
    const [openSpecs, setOpenSpecs] = useState<string[]>(["power"]);
    const [galleryFilter, setGalleryFilter] = useState("All");

    const model = MODELS.find((item) => item.id === selectedId) ?? MODELS[0];

    // The main photo, then the other views (side, top...) when the model has them
    const views = [
        { label: "3/4 view", image: model.image },
        ...(model.views ?? []),
    ];
    const view = views[viewIndex] ?? views[0];

    // Only the sections this model has lines for
    const sections = SPEC_TITLES.filter(
        (spec) => model.specs[spec.key]?.length,
    );

    // Only the chips this model has
    const chips = [model.engine, model.drive, model.transmission].filter(
        (chip) => chip,
    );

    const toggleSpec = (key: string) =>
        setOpenSpecs(
            openSpecs.includes(key)
                ? openSpecs.filter((item) => item !== key)
                : [...openSpecs, key],
        );

    return (
        <>
            <Header />
            <main className="w-full max-w-full">
                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-[#001A3D] via-[#003478] to-[#066FEF]">
                    {HERO_IMAGE && (
                        <img
                            src={HERO_IMAGE}
                            alt="Ford Everest"
                            decoding="async"
                            draggable={false}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#001A3D]/90 via-[#001A3D]/50 to-transparent" />

                    <div className="container relative mx-auto px-4 py-16 lg:py-28">
                        <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                            SUV
                        </p>
                        <h1 className="mt-2 max-w-2xl text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
                            Next-Gen Ford Everest
                        </h1>
                        {HERO_BUTTONS.length > 0 && (
                            <div className="mt-8 flex flex-wrap gap-3">
                                {HERO_BUTTONS.map((button, index) => (
                                    <a
                                        key={button.label}
                                        href={button.href}
                                        className={`inline-block rounded-full px-7 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#001A3D] ${
                                            index === 0
                                                ? "bg-white text-[#003478] hover:bg-[#F2F2F2]"
                                                : "border-2 border-white py-[10px] text-white hover:bg-white hover:text-[#003478]"
                                        }`}
                                    >
                                        {button.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Engine, transmission and seating */}
                {HIGHLIGHTS.length > 0 && (
                    <section className="bg-[#001A3D]">
                        <ul className="container mx-auto grid divide-y divide-white/15 px-4 sm:auto-cols-fr sm:grid-flow-col sm:divide-x sm:divide-y-0">
                            {HIGHLIGHTS.map((item) => (
                                <li
                                    key={item.label}
                                    className="py-6 sm:px-8 sm:first:pl-0"
                                >
                                    <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                                        {item.label}
                                    </p>
                                    <p className="mt-1 text-lg font-semibold text-white lg:text-xl">
                                        {item.text}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* The model: the truck on the left, the details on the right */}
                <section className="bg-[#F2F2F2] py-12 lg:py-16">
                    <div className="container mx-auto px-4">
                        {/* Model picker, only when there is more than one model */}
                        {MODELS.length > 1 && (
                            <>
                                <h2 className="border-l-4 border-[#066FEF] pl-3 text-2xl font-bold uppercase text-[#003478] lg:text-3xl">
                                    Compare the next-gen Ford Everest models
                                </h2>
                                <ul className="mt-6 flex gap-2 overflow-x-auto px-1 pb-2 pt-1 lg:flex-wrap lg:overflow-visible">
                                    {MODELS.map((item) => (
                                        <li key={item.id} className="shrink-0">
                                            <button
                                                type="button"
                                                aria-pressed={
                                                    item.id === model.id
                                                }
                                                onClick={() => {
                                                    setSelectedId(item.id);
                                                    setViewIndex(0);
                                                }}
                                                className={`cursor-pointer whitespace-nowrap rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2 ${
                                                    item.id === model.id
                                                        ? "border-[#003478] bg-[#003478] text-white"
                                                        : "border-gray-200 bg-white text-[#102B4E] hover:border-[#066FEF] hover:text-[#066FEF]"
                                                }`}
                                            >
                                                {[item.trim, item.drive]
                                                    .filter((part) => part)
                                                    .join(" ")}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <div className="mt-4 grid overflow-clip rounded-3xl border border-gray-200 bg-white shadow-sm lg:grid-cols-5">
                            {/* Left: the truck */}
                            <div className="bg-[radial-gradient(ellipse_at_center,#F2F2F2_0%,#FFFFFF_75%)] p-6 sm:p-8 lg:col-span-3">
                                {/* Stays in place when the specifications open, and follows the scroll on desktop */}
                                <div className="flex flex-col lg:sticky lg:top-24">
                                    {model.trim && (
                                        <span className="self-start rounded-full bg-[#066FEF]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#003478]">
                                            {model.trim}
                                        </span>
                                    )}
                                    <h3 className="mt-3 text-2xl font-bold uppercase leading-snug text-[#003478] sm:text-3xl">
                                        {model.name}
                                    </h3>
                                    {chips.length > 0 && (
                                        <ul className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-[#102B4E]">
                                            {chips.map((chip) => (
                                                <li
                                                    key={chip}
                                                    className="rounded-full bg-white px-3 py-1 shadow-sm"
                                                >
                                                    {chip}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* The photo is never made bigger than 600x400, so it stays sharp */}
                                    <div className="mt-6 flex justify-center">
                                        {photo(
                                            view.image,
                                            `${model.name}, ${view.label}`,
                                            "aspect-[3/2] w-full max-w-[600px] object-contain mix-blend-multiply",
                                        )}
                                    </div>

                                    {/* Other views of the truck, only when the model has them */}
                                    {views.length > 1 && (
                                        <ul className="mt-4 flex justify-center gap-2">
                                            {views.map((item, index) => (
                                                <li key={item.label}>
                                                    <button
                                                        type="button"
                                                        aria-pressed={
                                                            index === viewIndex
                                                        }
                                                        onClick={() =>
                                                            setViewIndex(index)
                                                        }
                                                        className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2 ${
                                                            index === viewIndex
                                                                ? "bg-[#003478] text-white"
                                                                : "bg-white text-[#102B4E] shadow-sm hover:bg-[#003478] hover:text-white"
                                                        }`}
                                                    >
                                                        {item.label}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            {/* Right: price and details */}
                            <div className="border-t border-gray-200 p-6 sm:p-8 lg:col-span-2 lg:border-l lg:border-t-0">
                                {model.price && (
                                    <p
                                        className={
                                            sections.length > 0
                                                ? "mb-6 border-b border-gray-200 pb-6"
                                                : ""
                                        }
                                    >
                                        <span className="block text-xs font-semibold uppercase tracking-widest text-[#102B4E]/60">
                                            Starting price
                                        </span>
                                        <span className="text-2xl font-semibold text-[#003478]">
                                            {formatPrice(model.price)}
                                        </span>
                                    </p>
                                )}

                                {sections.length > 0 && (
                                    <>
                                        <h3 className="text-sm font-semibold uppercase tracking-widest text-[#102B4E]/60">
                                            Vehicle specifications
                                        </h3>

                                        <ul className="mt-2">
                                            {sections.map((spec) => {
                                                const open = openSpecs.includes(
                                                    spec.key,
                                                );

                                                return (
                                                    <li
                                                        key={spec.key}
                                                        className="border-b border-gray-200 last:border-b-0"
                                                    >
                                                        <button
                                                            type="button"
                                                            aria-expanded={open}
                                                            onClick={() =>
                                                                toggleSpec(
                                                                    spec.key,
                                                                )
                                                            }
                                                            className="flex w-full cursor-pointer items-center justify-between gap-4 py-3.5 text-left text-sm font-semibold text-[#102B4E] transition-colors hover:text-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF]"
                                                        >
                                                            {spec.title}
                                                            <span
                                                                aria-hidden="true"
                                                                className={`h-2 w-2 shrink-0 border-b-2 border-r-2 border-[#003478] transition-transform duration-300 motion-reduce:transition-none ${
                                                                    open
                                                                        ? "translate-y-0.5 -rotate-[135deg]"
                                                                        : "-translate-y-0.5 rotate-45"
                                                                }`}
                                                            />
                                                        </button>

                                                        {/* Opens and closes smoothly */}
                                                        <div
                                                            className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                                                                open
                                                                    ? "grid-rows-[1fr]"
                                                                    : "grid-rows-[0fr]"
                                                            }`}
                                                        >
                                                            <div className="overflow-hidden">
                                                                <ul className="list-disc space-y-1.5 pb-4 pl-5 text-sm leading-relaxed text-[#102B4E]/80 marker:text-[#066FEF]">
                                                                    {model.specs[
                                                                        spec.key
                                                                    ].map(
                                                                        (
                                                                            line,
                                                                            index,
                                                                        ) =>
                                                                            typeof line ===
                                                                            "string" ? (
                                                                                <li
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        line
                                                                                    }
                                                                                </li>
                                                                            ) : (
                                                                                <li
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                >
                                                                                    <span className="font-semibold text-[#102B4E]">
                                                                                        {
                                                                                            line.title
                                                                                        }
                                                                                    </span>
                                                                                    <ul className="mt-1 list-[circle] space-y-1 pl-5">
                                                                                        {line.items.map(
                                                                                            (
                                                                                                item,
                                                                                            ) => (
                                                                                                <li
                                                                                                    key={
                                                                                                        item
                                                                                                    }
                                                                                                >
                                                                                                    {
                                                                                                        item
                                                                                                    }
                                                                                                </li>
                                                                                            ),
                                                                                        )}
                                                                                    </ul>
                                                                                </li>
                                                                            ),
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Colors, hidden when there are none */}
                {COLORS.length > 0 && (
                    <section className="bg-[#F2F2F2] pb-12 lg:pb-16">
                        <div className="container mx-auto px-4">
                            <ColorPicker
                                name="Ford Everest"
                                colors={COLORS}
                                as="h2"
                            />
                        </div>
                    </section>
                )}

                {/* Reserve text and two photos */}
                <section className="container mx-auto px-4 py-12 lg:py-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-[#066FEF]">
                            {INTRO.eyebrow}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold uppercase leading-tight text-[#003478] sm:text-4xl">
                            {INTRO.title}
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-[#102B4E]/80 lg:text-lg">
                            {INTRO.text}
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:gap-6">
                        {INTRO.photos.map((item) => (
                            <div key={item.alt}>
                                {photo(
                                    item.image,
                                    item.alt,
                                    "aspect-[16/10] w-full rounded-2xl object-cover shadow-md",
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Gallery */}
                {GALLERY_PHOTOS.length > 0 && (
                    <section className="bg-[#F2F2F2] py-12 lg:py-16">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap items-end justify-between gap-4">
                                <h2 className="border-l-4 border-[#066FEF] pl-3 text-2xl font-bold uppercase text-[#003478] lg:text-3xl">
                                    Gallery
                                </h2>
                                <ul className="flex gap-2">
                                    {GALLERY_FILTERS.map((filter) => (
                                        <li key={filter}>
                                            <button
                                                type="button"
                                                aria-pressed={
                                                    galleryFilter === filter
                                                }
                                                onClick={() =>
                                                    setGalleryFilter(filter)
                                                }
                                                className={`cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2 ${
                                                    galleryFilter === filter
                                                        ? "bg-[#003478] text-white"
                                                        : "bg-white text-[#102B4E] hover:bg-[#003478] hover:text-white"
                                                }`}
                                            >
                                                {filter}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
                                {GALLERY_PHOTOS.filter(
                                    (item) =>
                                        galleryFilter === "All" ||
                                        item.category === galleryFilter,
                                ).map((item, index) => (
                                    <li key={index}>
                                        {photo(
                                            item.image,
                                            item.alt,
                                            "aspect-[4/3] w-full rounded-xl object-cover",
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                )}

                {/* Interior and exterior features */}
                {FEATURE_GROUPS.map((group, groupIndex) => (
                    <section
                        key={group.title}
                        className={`py-12 lg:py-16 ${
                            groupIndex % 2 === 0 ? "bg-white" : "bg-[#F2F2F2]"
                        }`}
                    >
                        <div className="container mx-auto px-4">
                            <h2 className="border-b-4 border-[#003478] pb-3 text-3xl font-bold uppercase text-[#003478] lg:text-4xl">
                                {group.title}
                            </h2>

                            <ul className="mt-8 space-y-6 lg:space-y-8">
                                {group.features.map((feature, index) => (
                                    <li
                                        key={feature.title}
                                        className="grid items-center gap-6 overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-sm md:grid-cols-5 md:gap-10 md:p-6"
                                    >
                                        {photo(
                                            feature.image,
                                            feature.title,
                                            `aspect-[4/3] w-full rounded-2xl object-contain md:col-span-2 ${
                                                index % 2 === 1
                                                    ? "md:order-last"
                                                    : ""
                                            }`,
                                        )}
                                        <div className="md:col-span-3">
                                            <h3 className="text-xl font-bold uppercase text-[#003478] lg:text-2xl">
                                                {feature.title}
                                            </h3>
                                            <p className="mt-3 leading-relaxed text-[#102B4E]/80 lg:text-lg">
                                                {feature.text}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* Video, hidden when there is no link */}
                            {group.video && VIDEO_EMBED_URL && (
                                <div className="mt-8 aspect-video overflow-hidden rounded-3xl bg-[#001A3D] shadow-lg">
                                    <iframe
                                        src={VIDEO_EMBED_URL}
                                        title="Ford Everest video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="h-full w-full border-0"
                                    />
                                </div>
                            )}
                        </div>
                    </section>
                ))}

                {/* Disclosure */}
                {DISCLOSURE.length > 0 && (
                    <section className="bg-[#F2F2F2]">
                        <div className="container mx-auto space-y-2 px-4 py-6">
                            {DISCLOSURE.map((line) => (
                                <p
                                    key={line}
                                    className="text-xs leading-relaxed text-[#102B4E]/70"
                                >
                                    {line}
                                </p>
                            ))}
                        </div>
                    </section>
                )}

                {/* Dealer promotions */}
                {PROMOTIONS.length > 0 && (
                    <section className="bg-white py-12 lg:py-16">
                        <div className="container mx-auto px-4">
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
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </>
    );
}
