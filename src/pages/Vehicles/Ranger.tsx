import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { getPosts } from "../../assets/data/post";

import heroBanner from "../../assets/vehicles/ranger/hero_banner.jpg";
import biturboWildtrakImage from "../../assets/vehicles/ranger/biturbo-wildtrak.png";
import turboWildtrakImage from "../../assets/vehicles/ranger/turbo4x2-wildtrak.png";
import turbo4x4SportImage from "../../assets/vehicles/ranger/turbo4x4-sport.png";
import turbo4x2SportImage from "../../assets/vehicles/ranger/turbo4x2-sport.png";
import turbo4x4XltImage from "../../assets/vehicles/ranger/turbo4x4-xlt.png";
import turbo4x2XltImage from "../../assets/vehicles/ranger/turbo4x2-xlt.png";
import turbo4x4XlsImage from "../../assets/vehicles/ranger/turbo4x4-xls.png";
import turbo4x2XlImage from "../../assets/vehicles/ranger/turbo4x2-xl.png";
import rangerImage1 from "../../assets/vehicles/ranger/ranger1.jpg";
import rangerImage2 from "../../assets/vehicles/ranger/ranger2.jpg";
import rangerImage3 from "../../assets/vehicles/ranger/ranger3.jpg";
import rangerImage4 from "../../assets/vehicles/ranger/ranger4.jpg";
import rangerImage5 from "../../assets/vehicles/ranger/ranger5.jpg";
import rangerImage6 from "../../assets/vehicles/ranger/ranger6.jpg";
import brochure from "../../assets/vehicles/ranger/ranger-brochure.pdf";

// One model in the "Compare the models" section.
// specs: the section key (see SPEC_TITLES) -> one string per bullet line.
type Model = {
    id: string;
    image: string;
    trim: string;
    engine: string;
    drive: string;
    transmission: string;
    specs: Record<string, string[]>;
};

export default function Ranger() {
    // A photo, or a "coming soon" box while the image is "".
    // To add a photo: import it at the top of this file, then use it as the image.
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

    // TODO: replace the "#" with the price list page
    const BROCHURE_HREF = brochure;
    const PRICE_LIST_HREF = "#";

    // The YouTube link of the video (any kind of link works). Empty hides the video.
    const VIDEO_URL = "https://www.youtube.com/watch?v=uhRQtnaqWZ0";

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

    const HIGHLIGHTS = [
        { label: "Engine", text: "2.0L Turbo and Bi-Turbo Diesel Engine" },
        {
            label: "Transmission",
            text: "Six-Speed AT / 10-Speed SelectShift AT",
        },
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
        { key: "adas", title: "Advance Driver Assist Systems" },
    ];

    // The models, in the order they are shown
    const MODELS: Model[] = [
        {
            id: "wildtrak-4x4",
            image: biturboWildtrakImage,
            trim: "Wildtrak",
            engine: "2.0L Bi-Turbo",
            drive: "4x4",
            transmission: "10AT",
            specs: {
                powertrain: [
                    "2.0L Bi-Turbo Diesel",
                    "Maximum Power 210 PS @ 3750 RPM",
                    "Maximum Torque 500 Nm @ 1,750-2,000 RPM",
                    "10-Speed Automatic Transmission",
                    "4x4 drivetrain",
                ],
                chassis: [
                    "Front Suspension Double Wishbone with Coil Springs",
                    "Rear Suspension Leaf Spring",
                    "Front Ventilated Discs/ Rear Ventilated Discs",
                ],
                wheels: ['18" Wildtrak Alloy Wheels', "255/65 R18 Tires"],
                exterior: [
                    "Matrix LED Headlights with Adaptive Front Lighting System",
                    "C-Clamp LED Daytime Running Lamps",
                    "LED Taillights",
                    "LED Fog Lamps",
                    "Puddle Lamps",
                    "Power Folding, Power Adjustable Exterior Mirrors with Side Turn Indicators",
                    "Side Steps and Rear Box Steps",
                    "Roof Rails",
                    "Sports Hoop",
                    "Rain Sensing Wipers",
                    "Bedliner with 12V and 230V (400W) Sockets",
                    "Black Fender Flares",
                    "Tailgate Lift Assist",
                ],
                interior: [
                    "Wireless Charger",
                    "8-Way Power Adjust Driver and 4-way Manual Adjust Passenger Seats",
                    "Leather and Synthetic Leather Seats",
                    '8" Digital Instrument Cluster',
                    "Smart Keyless Entry with Push Button Start",
                    "Dual-Zone Electronic Automatic Temperature Control",
                    "Second Row Air Conditioning",
                    "12V and 230V Inverter in Rear Center Console",
                    "Windscreen-Mounted USB Port",
                    "Auto-dimming Rearview Mirror",
                    "Terrain Management System",
                ],
                audio: [
                    '12" Colored Portrait Touchscreen',
                    "SYNC® 4a with Voice Activated Controls with Wireless Apple CarPlay® and Android Auto™ Compatibility",
                    "4 USB Ports",
                    "6 Speakers",
                    "Steering Wheel with Audio/Function Control",
                ],
                safety: [
                    "7 Airbags: Driver / Front Passenger / Side / Curtain / Knee Airbags",
                    "ABS with EBD",
                    "ESP with Traction Control System and Electric Brake Booster",
                    "Hill Launch Assist & Roll Over Mitigation",
                    "Hill Descent Control",
                    "Electric Parking Brake",
                    "Security Alarm System",
                    "Immobilizer",
                    "Child Seat ISOFIX Anchor Points",
                    "Front and Rear Parking Sensor",
                    "Electronic Locking Rear Differential",
                ],
                adas: [
                    "Adaptive Cruise Control with Stop & Go and Lane Centering",
                    "Adjustable Speed Limiter",
                    "Auto High Beam Headlights",
                    "Autonomous Emergency Braking (AEB) with Pedestrian Detection",
                    "Pre-Collision Assist",
                    "Forward Collision Warning",
                    "Dynamic Brake Support",
                    "Distance Alert / Distance Indication",
                    "Evasive Steer Assist",
                    "Lane Keeping Aid",
                    "Lane Departure Warning",
                    "Post Impact Braking",
                    "Reverse Brake Assist",
                    "360 Degree Camera",
                    "Blind Spot Monitoring System with Cross Traffic Alert",
                ],
            },
        },
        {
            id: "wildtrak-4x2",
            image: turboWildtrakImage,
            trim: "Wildtrak",
            engine: "2.0L Turbo",
            drive: "4x2",
            transmission: "6AT",
            specs: {
                powertrain: [
                    "2.0L Turbo Diesel",
                    "Maximum Power 170 PS @ 3500 RPM",
                    "Maximum Torque 405Nm @ 1,750-2,500 rpm",
                    "6-Speed Automatic Transmission",
                    "4x2 drivetrain",
                ],
                chassis: [
                    "Front Suspension Double Wishbone with Coil Springs",
                    "Rear Suspension Leaf Spring",
                    "Front Ventilated Discs / Rear Ventilated Discs",
                ],
                wheels: ['18" Wildtrak Alloy Wheels', "255/65 R18 Tires"],
                exterior: [
                    "LED Headlights with Auto On/Off Function",
                    "C-Clamp LED Daytime Running Lamps",
                    "LED Taillights",
                    "LED Fog Lamps",
                    "Power Folding, Power Adjustable Exterior Mirrors with Side Turn Indicators",
                    "Side Turn Indicators",
                    "Side Steps and Rear Box Steps",
                    "Rain Sensing Wipers",
                    "Bedliner",
                    "Black Fender Flares",
                    "Tailgate Lift Assist",
                ],
                interior: [
                    "Wireless Charger",
                    "8-Way Power Adjust Driver and 4-way Manual Adjust Passenger Seats",
                    "Leather and Synthetic Leather Seats",
                    '8" Digital Instrument Cluster',
                    "Smart Keyless Entry with Push Button Start",
                    "Dual-Zone Electronic Automatic Temperature Control",
                    "Second Row Air Conditioning",
                    "12V and 230V Inverter in Rear Center Console",
                    "Windscreen-Mounted USB Port",
                    "Auto-dimming Rearview Mirror",
                ],
                audio: [
                    '12" Colored Portrait Touchscreen',
                    "SYNC® 4a with Voice Activated Controls with Wireless Apple CarPlay® and Android Auto™ Compatibility",
                    "6 Speakers",
                    "Steering Wheel Audio/Function Control",
                ],
                safety: [
                    "7 Airbags: Driver / Front Passenger / Side / Curtain / Knee Airbags",
                    "ABS with EBD",
                    "ESP with Traction Control System",
                    "Hill Launch Assist & Roll Over Mitigation",
                    "Electric Parking Brake",
                    "Security Alarm System",
                    "Immobilizer",
                    "Child Seat ISOFIX Anchor Points",
                    "Cruise Control",
                    "Adjustable Speed Limiter",
                    "Rear View Camera",
                    "Rear Parking Sensor",
                ],
            },
        },
        {
            id: "sport-4x4",
            image: turbo4x4SportImage,
            trim: "Sport",
            engine: "2.0L Turbo",
            drive: "4x4",
            transmission: "6AT",
            specs: {
                powertrain: [
                    "2.0L Turbo Diesel",
                    "Maximum Power 170 PS @ 3500 rpm",
                    "Maximum Torque 405 Nm @ 1,750-2,500 RPM",
                    "6-Speed Automatic Transmission",
                    "4x4 drivetrain",
                ],
                chassis: [
                    "Front Suspension Double Wishbone with Coil Springs",
                    "Rear Suspension Leaf Spring",
                    "Front Ventilated Discs / Rear Drum",
                ],
                wheels: ['18" Sport Alloy Wheels', "255/65 R18 Tires"],
                exterior: [
                    "LED Headlights with Auto On/Off Function",
                    "C-Clamp LED Daytime Running Lamps",
                    "LED Taillights",
                    "LED Fog Lamps",
                    "Power Folding, Power Adjustable Exterior Mirrors with Side Turn Indicators",
                    "Side Turn Indicators",
                    "Side Steps and Rear Box Steps",
                    "Rain Sensing Wipers",
                    "Bedliner",
                    "Black Fender Flares",
                    "Tailgate Lift Assist",
                ],
                interior: [
                    "Wireless Charger",
                    "6-Way Manual Adjust Driver Seat and 4-Way Manual Adjust Passenger Seat",
                    "Leather and Synthetic Leather Seats",
                    '8" Digital Instrument Cluster',
                    "Smart Keyless Entry with Push Button Start",
                    "Single-Zone Manual Temperature Control",
                    "Two 12V Sockets",
                    "Windscreen-Mounted USB Port",
                    "Auto-dimming Rearview Mirror",
                ],
                audio: [
                    '10" Colored Portrait Touchscreen',
                    "SYNC® 4A with Wireless Apple CarPlay® & Android Auto™ Compatibility",
                    "2 USB Ports",
                    "6 Speakers",
                    "Steering Wheel with Audio/Function Control",
                ],
                safety: [
                    "6 Airbags (Driver, Front Passenger, Side, Curtain)",
                    "ABS with EBD",
                    "ESP with Traction Control System",
                    "Hill Launch Assist & Roll Over Mitigation",
                    "Hill Descent Control",
                    "Security Alarm System",
                    "Immobilizer",
                    "Child Seat ISOFIX Anchor Points",
                    "Electronic Locking Rear Differential",
                    "Cruise Control",
                    "Adjustable Speed Limiter",
                    "Rear View Camera",
                ],
            },
        },
        {
            id: "sport-4x2",
            image: turbo4x2SportImage,
            trim: "Sport",
            engine: "2.0L Turbo",
            drive: "4x2",
            transmission: "6AT",
            specs: {
                powertrain: [
                    "2.0L Turbo Diesel",
                    "Maximum Power 170 PS @ 3500 rpm",
                    "Maximum Torque 405 Nm @ 1,750-2,500 RPM",
                    "6-Speed Automatic Transmission",
                    "4x2 drivetrain",
                ],
                chassis: [
                    "Front Suspension Double Wishbone with Coil Springs",
                    "Rear Suspension Leaf Spring",
                    "Front Ventilated Discs / Rear Drum",
                ],
                wheels: ['18" Sport Alloy Wheels', "255/65 R18 Tires"],
                exterior: [
                    "LED Headlights with Auto On/Off Function",
                    "C-Clamp LED Daytime Running Lamps",
                    "LED Taillights",
                    "LED Fog Lamps",
                    "Power Folding, Power Adjustable Exterior Mirrors with Side Turn Indicators",
                    "Side Turn Indicators",
                    "Side Steps and Rear Box Steps",
                    "Rain Sensing Wipers",
                    "Bedliner",
                    "Black Fender Flares",
                    "Tailgate Lift Assist",
                ],
                interior: [
                    "Wireless Charger",
                    "6-Way Manual Adjust Driver Seat and 4-Way Manual Adjust Passenger Seat",
                    "Leather and Synthetic Leather Seats",
                    '8" Digital Instrument Cluster',
                    "Smart Keyless Entry with Push Button Start",
                    "Single-Zone Manual Temperature Control",
                    "Two 12V Sockets",
                    "Windscreen-Mounted USB Port",
                    "Auto-dimming Rearview Mirror",
                ],
                audio: [
                    '10" Colored Portrait Touchscreen',
                    "SYNC® 4A with Wireless Apple CarPlay® & Android Auto™ Compatibility",
                    "2 USB Ports",
                    "6 Speakers",
                    "Steering Wheel with Audio/Function Control",
                ],
                safety: [
                    "6 Airbags (Driver, Front Passenger, Side, Curtain)",
                    "ABS with EBD",
                    "ESP with Traction Control System",
                    "Hill Launch Assist & Roll Over Mitigation",
                    "Security Alarm System",
                    "Immobilizer",
                    "Child Seat ISOFIX Anchor Points",
                    "Cruise Control",
                    "Adjustable Speed Limiter",
                    "Rear View Camera",
                ],
            },
        },
        {
            id: "xlt-4x4",
            image: turbo4x4XltImage,
            trim: "XLT",
            engine: "2.0L Turbo",
            drive: "4x4",
            transmission: "6AT",
            specs: {
                powertrain: [
                    "2.0L Turbo Diesel",
                    "Maximum Power 170 PS @ 3500 rpm",
                    "Maximum Torque 405 Nm @ 1,750-2,500 RPM",
                    "6-Speed Automatic Transmission",
                    "4x4 drivetrain",
                ],
                chassis: [
                    "Front Suspension Double Wishbone with Coil Springs",
                    "Rear Suspension Leaf Spring",
                    "Front Ventilated Discs / Rear Drum",
                ],
                wheels: ['17" Alloy Wheels', "255/70 R17 Tires"],
                exterior: [
                    "LED Headlights with Auto On/Off function",
                    "C-Clamp LED Daytime Running Lamps",
                    "LED Taillights",
                    "Front Fog Lamps",
                    "Side Steps and Rear Box Steps",
                    "Power Adjustable, Power Folding Exterior Mirrors with Side Turn Indicators",
                    "Rain Sensing Wipers",
                    "Tailgate Lift Assist",
                    "Bedliner",
                    "Black Fender Flare",
                ],
                interior: [
                    "Wireless Charger",
                    "6-Way Manual Adjust Driver Seat and 4-Way Manual Adjust Passenger Seat",
                    "Fabric Seats",
                    '8" Digital Instrument Cluster',
                    "Remote Key",
                    "Single-Zone Manual Temperature Control",
                    "Two 12V Sockets",
                    "Windscreen-Mounted USB Port",
                    "Day/Night Rearview Mirror",
                ],
                audio: [
                    '10" Colored Portrait Touchscreen',
                    "SYNC® 4A with Wireless Apple CarPlay® and Android Auto™ Compatibility",
                    "2 USB Ports",
                    "6 Speakers",
                    "Steering Wheel Audio/Function Control",
                ],
                safety: [
                    "6 Airbags (Driver, Front Passenger, Side, Curtain)",
                    "ABS with EBD",
                    "ESP with Traction Control System",
                    "Hill Launch Assist & Roll Over Mitigation",
                    "Cruise Control",
                    "Adjustable Speed Limiter",
                    "Rear View Camera",
                ],
            },
        },
        {
            id: "xlt-4x2",
            image: turbo4x2XltImage,
            trim: "XLT",
            engine: "2.0L Turbo",
            drive: "4x2",
            transmission: "6AT",
            specs: {
                powertrain: [
                    "2.0L Turbo Diesel",
                    "Maximum Power 170 PS @ 3500 rpm",
                    "Maximum Torque 405 Nm @ 1,750-2,500 RPM",
                    "6-Speed Automatic Transmission",
                    "4x2 drivetrain",
                ],
                chassis: [
                    "Front Suspension Double Wishbone with Coil Springs",
                    "Rear Suspension Leaf Spring",
                    "Front Ventilated Discs / Rear Drum",
                ],
                wheels: ['16" Alloy Wheels', "255/70 R16 Tires"],
                exterior: [
                    "LED Headlights with Auto On/Off Function",
                    "C-Clamp LED Daytime Running Lamps",
                    "Front Fog Lamps",
                    "Halogen Reflector Tail Lights",
                    "Power Adjustable, Manual Folding Exterior Mirrors",
                    "Side Steps and Rear Box Steps",
                    "Black Fender Flares",
                ],
                interior: [
                    "6-Way Manual Driver and 4-way Manual Adjust Passenger Seats",
                    "Fabric Seats",
                    '8" Digital Instrument Cluster',
                    "Two 12V Sockets",
                    "Single-Zone Manual Temperature Control",
                    "Day/Night Rearview Mirror",
                ],
                audio: [
                    '10" Colored Portrait Touchscreen',
                    "SYNC® 4A with Wireless Apple CarPlay® and Android Auto™ Compatibility",
                    "2 USB Ports",
                    "6 Speakers",
                    "Steering Wheel Audio/Function Control",
                ],
                safety: [
                    "6 Airbags (Driver, Front Passenger, Side, Curtain)",
                    "ABS + EBD",
                    "ESP with Traction Control System",
                    "Hill Launch Assist and Roll Over Mitigation",
                ],
            },
        },
        {
            id: "xls-4x2",
            image: turbo4x4XlsImage,
            trim: "XLS",
            engine: "2.0L Turbo",
            drive: "4x2",
            transmission: "6MT",
            specs: {
                powertrain: [
                    "2.0L Turbo Diesel",
                    "Maximum Power 170 PS @ 3500 rpm",
                    "Maximum Torque 405 Nm @ 1,750-2,500 RPM",
                    "6-Speed Manual Transmission",
                    "4x2 drivetrain",
                ],
                chassis: [
                    "Front Suspension Double Wishbone with Coil Springs",
                    "Rear Suspension Leaf Spring",
                    "Front Ventilated Discs / Rear Drum",
                ],
                wheels: ['16" Alloy Wheels', "255/70 R16 Tires"],
                exterior: [
                    "LED Headlights with Auto On/Off Function",
                    "C-Clamp LED Daytime Running Lamps",
                    "Front Fog Lamps",
                    "Halogen Reflector Tail Lights",
                    "Power Adjustable, Manual Folding Exterior Mirrors",
                    "Side Steps and Rear Box Steps",
                    "Black Fender Flares",
                ],
                interior: [
                    "6-Way Manual Driver and 4-way Manual Adjust Passenger Seats",
                    "Fabric Seats",
                    '8" Digital Instrument Cluster',
                    "Two 12V Sockets",
                    "Single-Zone Manual Temperature Control",
                    "Day/Night Rearview Mirror",
                ],
                audio: [
                    '10" Colored Portrait Touchscreen',
                    "SYNC® 4A with Wireless Apple CarPlay® and Android Auto™ Compatibility",
                    "2 USB Ports",
                    "6 Speakers",
                    "Steering Wheel Audio/Function Control",
                ],
                safety: [
                    "6 Airbags (Driver, Front Passenger, Side, Curtain)",
                    "ABS + EBD",
                    "Hill Launch Assist & Roll Over Mitigation",
                ],
            },
        },
        {
            id: "xl-4x4",
            image: turbo4x2XlImage,
            trim: "XL",
            engine: "2.0L Turbo",
            drive: "4x4",
            transmission: "6MT",
            specs: {
                powertrain: [
                    "2.0L Turbo Diesel",
                    "Maximum Power 170 PS @ 3500 rpm",
                    "Maximum Torque 405 Nm @ 1,750-2,500 RPM",
                    "6-Speed Manual Transmission",
                    "4x4 drivetrain",
                ],
                chassis: [
                    "Front Suspension Double Wishbone with Coil Springs",
                    "Rear Suspension Leaf Spring",
                    "Front Ventilated Discs / Rear Drum",
                ],
                wheels: ['16" Alloy Wheels', "255/70 R16 Tires"],
                exterior: [
                    "Halogen Reflector Headlights with Auto On/Off function",
                    "Power Adjustable, Manual Folding Exterior Mirrors",
                    "Rear Box Steps",
                    "Black Fender Flares",
                ],
                interior: [
                    "4-Way Manual Driver and Front Passenger Seats",
                    "Fabric Seats",
                    '8" Digital Instrument Cluster',
                    "Two 12V Sockets",
                    "Single-Zone Manual Temperature Control",
                    "Day/Night Rearview Mirror",
                ],
                audio: [
                    '10" Colored Portrait Touchscreen',
                    "SYNC® 4A with Wireless Apple CarPlay® and Android Auto™ Compatibility",
                    "2 USB Ports",
                    "6 Speakers",
                    "Steering Wheel Audio/Function Control",
                ],
                safety: [
                    "6 Airbags (Driver, Front Passenger, Side, Curtain)",
                    "ABS + EBD",
                    "Electronic Locking Rear Differential",
                ],
            },
        },
    ];

    // TODO: put the gallery photos here (import them at the top, then use them as image).
    // Only the items with an image are shown, and the whole gallery is hidden when there is none.
    const GALLERY = [
        { image: "", alt: "Ranger interior", category: "Interior" },
        { image: "", alt: "Ranger exterior", category: "Exterior" },
    ];

    const GALLERY_PHOTOS = GALLERY.filter((item) => item.image);
    const GALLERY_FILTERS = ["All", "Interior", "Exterior"].filter(
        (filter) =>
            filter === "All" ||
            GALLERY_PHOTOS.some((item) => item.category === filter),
    );

    const FEATURE_GROUPS = [
        {
            title: "Interior",
            video: true,
            features: [
                {
                    title: "Selectable Drive Modes",
                    image: rangerImage3,
                    text: "In addition to 4×4 modes, new Selectable Drive Modes optimize performance for different surfaces, road conditions and vehicle usage.",
                },
            ],
        },
        {
            title: "Exterior",
            video: false,
            features: [
                {
                    title: "Wider Stance",
                    image: rangerImage4,
                    text: "The ranger's muscular and athletic design is 50mm wider. With new fenders and larger wheel arches, the next-generation ranger has a more dramatic sculptural look.",
                },
                {
                    title: "Rear Box Side Step",
                    image: rangerImage5,
                    text: "This rugged integration step, mounted directly on the frame, makes access to the cargo area easier and safer than ever.",
                },
                {
                    title: "Designed for Your Ranger Life",
                    image: rangerImage6,
                    text: "Our mission is to provide the best trucks in the world for work, leisure and family. So you can live your ranger life your way.",
                },
            ],
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

    // The model that is shown, and the open specification sections.
    // The open sections stay open when another model is picked, so models are easy to compare.
    const [selectedId, setSelectedId] = useState(MODELS[0].id);
    const [openSpecs, setOpenSpecs] = useState<string[]>(["powertrain"]);
    const [galleryFilter, setGalleryFilter] = useState("All");

    const model = MODELS.find((item) => item.id === selectedId) ?? MODELS[0];

    // Only the sections this model has
    const sections = SPEC_TITLES.filter((spec) => model.specs[spec.key]);

    const toggleSpec = (key: string) =>
        setOpenSpecs(
            openSpecs.includes(key)
                ? openSpecs.filter((item) => item !== key)
                : [...openSpecs, key],
        );

    return (
        <>
            <SEO
                title="Next-Gen Ford Ranger"
                description="Discover the Next-Gen Ford Ranger at Ford Laus Group. Explore variants, prices, specs and features, and book a test drive today."
                image={heroBanner}
                type="product"
            />
            <Header />
            <main className="w-full max-w-full">
                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-[#001A3D] via-[#003478] to-[#066FEF]">
                    <img
                        src={heroBanner}
                        alt="Next-Gen Ford Ranger"
                        decoding="async"
                        draggable={false}
                        className="absolute inset-0 h-full w-full object-cover object-right"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#001A3D]/90 via-[#001A3D]/50 to-transparent" />

                    <div className="container relative mx-auto px-4 py-16 lg:py-28">
                        <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                            Trucks
                        </p>
                        <h1 className="mt-2 max-w-2xl text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
                            Next-Gen Ford Ranger
                        </h1>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href={BROCHURE_HREF}
                                className="inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#003478] transition-colors hover:bg-[#F2F2F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#001A3D]"
                            >
                                Brochure
                            </a>
                            <a
                                href={PRICE_LIST_HREF}
                                className="inline-block rounded-full border-2 border-white px-7 py-[10px] text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#003478] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#001A3D]"
                            >
                                Price List
                            </a>
                        </div>
                    </div>
                </section>

                {/* Engine and transmission */}
                <section className="bg-[#001A3D]">
                    <ul className="container mx-auto grid divide-y divide-white/15 px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
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

                {/* Compare the models: pick a model, see it and its details */}
                <section className="bg-[#F2F2F2] py-12 lg:py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="border-l-4 border-[#066FEF] pl-3 text-2xl font-bold uppercase text-[#003478] lg:text-3xl">
                            Compare the Next-Gen Ford Ranger models
                        </h2>

                        {/* Model picker */}
                        <ul className="mt-6 flex gap-2 overflow-x-auto px-1 pb-2 pt-1 lg:flex-wrap lg:overflow-visible">
                            {MODELS.map((item) => (
                                <li key={item.id} className="shrink-0">
                                    <button
                                        type="button"
                                        aria-pressed={item.id === model.id}
                                        onClick={() => setSelectedId(item.id)}
                                        className={`cursor-pointer whitespace-nowrap rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2 ${
                                            item.id === model.id
                                                ? "border-[#003478] bg-[#003478] text-white"
                                                : "border-gray-200 bg-white text-[#102B4E] hover:border-[#066FEF] hover:text-[#066FEF]"
                                        }`}
                                    >
                                        {item.trim} {item.drive}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4 grid overflow-clip rounded-3xl border border-gray-200 bg-white shadow-sm lg:grid-cols-5">
                            {/* Left: the truck */}
                            <div className="bg-[radial-gradient(ellipse_at_center,#F2F2F2_0%,#FFFFFF_75%)] p-6 sm:p-8 lg:col-span-3">
                                <div className="flex flex-col lg:sticky lg:top-24">
                                    <span className="self-start rounded-full bg-[#066FEF]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#003478]">
                                        {model.trim}
                                    </span>
                                    <h3 className="mt-3 text-2xl font-bold uppercase leading-snug text-[#003478] sm:text-3xl">
                                        Ranger Double Cab {model.trim}
                                    </h3>
                                    <ul className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-[#102B4E]">
                                        {[
                                            model.engine,
                                            model.drive,
                                            model.transmission,
                                        ].map((chip) => (
                                            <li
                                                key={chip}
                                                className="rounded-full bg-white px-3 py-1 shadow-sm"
                                            >
                                                {chip}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* The photo is never made bigger than 600x400, so it stays sharp */}
                                    <div className="mt-6 flex justify-center">
                                        {photo(
                                            model.image,
                                            `Ranger Double Cab ${model.trim} ${model.engine} ${model.drive} ${model.transmission}`,
                                            "aspect-[3/2] w-full max-w-[600px] object-contain mix-blend-multiply",
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right: the details */}
                            <div className="border-t border-gray-200 p-6 sm:p-8 lg:col-span-2 lg:border-l lg:border-t-0">
                                <p className="mb-6 border-b border-gray-200 pb-6">
                                    <span className="block text-xs font-semibold uppercase tracking-widest text-[#102B4E]/60">
                                        Starting price
                                    </span>
                                    <span className="text-2xl font-semibold text-[#003478]">
                                        ₱1,249,000
                                    </span>
                                </p>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#102B4E]/60">
                                    Specifications
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
                                                        toggleSpec(spec.key)
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
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        {line}
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
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reserve */}
                <section className="container mx-auto px-4 py-12 lg:py-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-[#066FEF]">
                            Reserve your Next-Gen Ford Ranger
                        </p>
                        <h2 className="mt-2 text-3xl font-bold uppercase leading-tight text-[#003478] sm:text-4xl">
                            The Next-Gen Ford Ranger
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-[#102B4E]/80 lg:text-lg">
                            At this stage, we welcome inquiries from potential
                            buyers. We may or may not have units for test drives
                            just as yet. Please feel free to contact our
                            dealerships for future updates. Reserve a Next-Gen
                            Ford Ranger.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:gap-6">
                        {photo(
                            rangerImage1,
                            "The leather seats of the Ranger Wildtrak",
                            "aspect-[16/10] w-full rounded-2xl object-cover shadow-md",
                        )}
                        {photo(
                            rangerImage2,
                            "A blue Ranger at a work site",
                            "aspect-[16/10] w-full rounded-2xl object-cover shadow-md",
                        )}
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
                                            `aspect-[4/3] w-full rounded-2xl object-cover md:col-span-2 ${
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
                                        title="Next-Gen Ford Ranger video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="h-full w-full border-0"
                                    />
                                </div>
                            )}
                        </div>
                    </section>
                ))}

                {/* Disclosures */}
                <section className="bg-white">
                    <p className="container mx-auto px-4 py-6 text-xs leading-relaxed text-[#102B4E]/60">
                        DISCLOSURES: Overseas model and accessories shown. Some
                        items or photos are optional accessories. Pictures and
                        colors may appear slightly different from actual items.
                        Philippine specification may vary. Precise specification
                        will be confirmed prior to launch.
                    </p>
                </section>

                {/* Dealer promotions */}
                {PROMOTIONS.length > 0 && (
                    <section className="bg-[#F2F2F2] py-12 lg:py-16">
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
