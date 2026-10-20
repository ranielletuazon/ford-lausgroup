import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import bannerImage from "../assets/images/warranty.jpg";
import backedImage from "../assets/images/100-percent.jpg";
import partsImage from "../assets/images/gear.jpg";
import expensesImage from "../assets/images/card.jpg";
import transferableImage from "../assets/images/transferrable-to-next-owner.jpg";

export default function PremiumExtendedWarranty() {
    // TODO: replace with the real page paths
    const INQUIRY_HREF = "/contact";
    const APPOINTMENT_HREF = "/book-a-service";

    // YouTube video id: the part after "watch?v=" in the video link.
    // The iframe needs the /embed/ address, a normal watch link is refused.
    const VIDEO_ID = "zB2fdn9SKZU";

    const FEATURES = [
        {
            image: backedImage,
            alt: "100%",
            label: "Backed by Ford Motor Company",
        },
        { image: partsImage, alt: "", label: "Ford genuine parts" },
        {
            image: expensesImage,
            alt: "",
            label: "Limit out of pocket expenses",
        },
        {
            image: transferableImage,
            alt: "",
            label: "Transferable to the next owner",
        },
    ];

    // Coverage list for the accordion. Each item shows a short description
    // and a bulleted list of covered parts. Add the parts as plain strings.
    const COVERAGE = [
        {
            title: "Engine",
            description:
                "Covers major engine components and internal engine parts",
            parts: [
                "All Internally Lubricated Parts",
                "Cylinder Block",
                "Cylinder Heads",
                "Diesel Fuel Injectors",
                "Diesel Injector Lines",
                "Diesel Injector Pump",
                "Diesel Lift Pump",
                "Flywheel",
                "Engine Mounts",
                "Flywheel Ring Gear",
                "Fuel Tank and Metal Lines",
                "Gas Fuel Injectors",
                "Gas Injector Lines",
                "Harmonic Balancer and Bolt",
                "Manifold and Bolts",
                "Manifold (Exhaust and Intake)",
                "Oil Pan",
                "PCM Module",
                "Thermostat Housing",
                "Timing Chain (Gears or Belt)",
                "Turbocharger/Supercharger Unit (Factory-Installed)",
            ],
        },
        {
            title: "Transmission",
            description: "Covers Transmission, Internal Parts and Linkage",
            parts: [
                "All Internally Lubricated Parts",
                "Release Hubs and Bearings",
                "Torque Converter",
                "Transfer Case (Including All Internal Parts)",
                "Transmission Case",
                "Transmission Linkage",
                "Transmission Module (External)",
            ],
        },
        {
            title: "Rear-Wheel Drive",
            description: "Covers Rear-Wheel Drive Components",
            parts: [
                "Axle Shafts",
                "Drive Axle housing and Front Axle",
                "Driveshaft",
                "House for 4x4 (Including All Internal Parts)",
                "Retainers",
                "Universal and Constant Velocity Joints",
            ],
        },
        {
            title: "Front-Wheel Drive",
            description: "Covers Front-Wheel Drive",
            parts: [
                "Axle Shafts",
                "Final Drive Housing and Rear Axle",
                "Housing for AWD (Including All Internal Parts)",
                "Automatic Front Locking (Four Wheel Drive)",
                "Locking Rings (Four Wheel Drive)",
                "Universal and Constant",
                "Velocity Joints",
            ],
        },
        {
            title: "Front and Rear Suspension",
            description: "Covers Front-Wheel Drive",
            parts: [
                "Load Leveler Suspension System",
                "Roll Stability Control",
                "Spindle and Spindle Support Settings",
            ],
        },
        {
            title: "Air Conditioning and Heating",
            description: "Covers most air conditioning and heating parts",
            parts: [
                "A/C Clutch Bearings",
                "A/C Compressor",
                "A/C Compressor Clutch Switch",
                "A/C Compressor Head",
                "A/C Condenser",
                "Auto Temp Control",
                "Evaporator",
                "Field Coil",
                "Heater Blower Motor",
                "Heater Control Assembly",
                "Heater Core Assembly",
                "Instrument Panel Registers and Air Ducts",
                "Pulley",
            ],
        },
        {
            title: "Emissions",
            description: "Covers all the vehicle's emissions system parts",
            parts: [
                "Barometric Pressure Sensor",
                "DEF System (Excludes Catalyst)",
                "ECC Relay Assembly",
                "EGR Control Valve",
                "EGR Pressure Sensor",
                "EGR Regulatory Assemly",
                "EGR Valve Adapter",
                "Electronic Throttle CNTRL",
                "Knock Sensor",
                "Mass Air Flow/Intake Air Temp Sensor",
                "Oxygen Sensor",
                "PCV Valve",
                "Reductant Urea System",
                "Temperature Sensor (Engine Coolant)",
                "Timing (VCT) Phases",
                "Vacuum Restrictor",
                "VAF Sensor",
                "Variable Camshaft",
            ],
        },
        {
            title: "Steering",
            description: "Covers most steering components",
            parts: [
                "Column Lock (Tilt Wheel)",
                "Control Valve",
                "Cooler and Metal Lines",
                "Electronic Power Assisted Steering",
                "Power Steering Pump/Electric Power",
                "Steering Actuator",
                "Pulley Assembly",
                "Seals and Gaskets",
                "Steering Column",
                "Steering Gear Housing, Manual and Power (Including All Internal Parts)",
                "Steering Shaft",
            ],
        },
        {
            title: "Brakes",
            description:
                "Covers basic brake system parts (except for friction components)",
            parts: [
                "Anti-Lock Brake Module and Sensor",
                "Backing Plates",
                "Brake Booster (Power)",
                "Calipers",
                "Combination Valve",
                "ETA Pump Hose Assembly",
                "Metal Lines and Fittings",
                "Master Cylinder",
                "Parking Brake Linkage and Cables",
                "Self-Adjusters",
                "Shaft (Brake Pedal)",
            ],
        },
        {
            title: "Safety",
            description: "Covers your vehicle's safety parts",
            parts: [
                "Air Bag Module Assembly",
                "Blind Spur Info Sys (Electrical Only – Not Mirror or Glass Damage or Bulbs)",
                "Collision Avoidance",
                "Cross Traffic System",
                "Diagnostic Module Assembly (Airbag)",
                "Door Ajar Warning Switch Assembly",
                "Guides, Bezels, Brackets and Supports (Safety Belts/Shoulder Straps)",
                "Head Restraint Retainers and Sleeves (Safety Belt)",
                "Key, SecuriLock (Microchip – Encoded Key)",
                "Lane Depart Warning",
                "Lock Cylinder (Door)",
                "Lock Lever Assembly (Door)",
                "Lock Lever Assembly (Tailgate)",
                "Lock Lever Retainers, Clips and Brackets",
                "Module (Passive Restraint)",
                "Safety Belt Buckle (Front and Rear)",
                "Safety Belt Motor Drive Assembly",
                "Safety Belt Restraint Carrier",
                "Safety Belt Retractors",
                "Safety Belt Track Assembly",
                "Safety Belt Warning Chime Assembly",
                "Safety Canopy",
                "Sensors (Airbag)",
                "Shoulder Strap Track Assembly",
                "Wring Assembly (Airbag)",
            ],
        },
        {
            title: "Audio",
            description:
                "Covers the vehicle's entertainment system, along with advanced communication systems like ford sync (factory-installed only)",
            parts: [
                "Antenna, Radio (Assembly)",
                "Brackets",
                "Cables and Wiring",
                "Cellular Phone, Receiver, Handset",
                "Speaker Assembly and Antenna (Factory Installed)",
                "Compass and Thermal Readout Displays Controls (Rear Seat)",
                "Radio (AM,AM/FM), Speakers",
                "Cassete Player",
                "Digital CD Player, Graphic Equalizer",
                "Premium Sound Amplifier (Factory Installed)",
                "Rear Entertainment System (Factory Installed)",
            ],
        },
        {
            title: "Electrical",
            description: "Covers electrical parts",
            parts: [
                "Interior/Exterior Lighting – Coverage included only if the Lighting Option is Purchased * (bulb is not included)",
                "Alternator",
                "Audiophile System",
                "Charge and Volt Gauges",
                "Clock (Electric)",
                "Control Track 4WD System",
                "Driver's Seat Position Sensor",
                "Dual Zone Electronic Auto Temp Control",
                "Electronic Ignition Module",
                "Fuel Pump",
                "Heated Back glass (Electrical Only – Not Glass Damage or Breakage)",
                "High Intensity Discharge (HID) Headlamps",
                "Ignition Coil and Lock",
                "Ignition Module (Electric)",
                "Ignition Switch",
                "Incandescent/Halogen Bulbs – Interior and Exterior",
                "Intelligent 4WD Systems",
                "LED Lighting or Lamp Assemblies – Interior and Exterior (Factory Installed)",
                "Power Mirrors (Electrical Only – Not Mirror or Glass Damage or Bulbs)",
                "Power Running Boards",
                "Radiator Fan Relay",
                "Rear Window Power Sunshade",
                "Speedometer/Odometer (Electrical and Mechanical)",
                "Starter Motor",
                "Starter Motor Solenoid",
                "Switches (Manually Operated Electrical)",
                "Temperature Gauge",
                "Voltage Regulatory",
                "Wiper Activated Headlamps",
                "Wiper Motors",
                "Wiring Harnesses (Excluding Spark Plug Wires)",
            ],
        },
        {
            title: "High-Tech",
            description:
                "Covers power seats, windows, locks, electronic instrument panel, compass, and thermometer, factory-installed parts like the anti-theft system, GPS, reverse camera, keyless entry, and hybrid parts (except the battery)",
            parts: [
                "Adaptive Cruise Control",
                "Adaptive Headlamp System (Excluding Lamp housing, Bulbs)",
                "Anti-theft Alarm (Factory installed)",
                "Auto Lock and Auto Unlock System",
                "Automatic Park Assistant",
                "FordLink System",
                "FordWork Solutions Asset Security (if equipped)",
                "Forward Sensing Sys",
                "Fuel Mixer (Alternative)",
                "In Dash Garmin Voice Activated",
                "Navigation System (Factory Installed and Dealer)",
                "Instrument Cluster (Excluding Dash Pad)",
                "Intelligent Oil Life Monitor System",
                "Keyless Entry System (Excluding Door Handles)",
                "Message Center",
                "Parallel Park Assist Sys",
                "Power Antenna",
                "Power Door Locks and Retainer Clips (Excludes Ford Handles)",
                "Power Seat Motors",
                "Power Window Motors/Regulators",
                "Rain Sensing Wipers",
                "Rear Console Refrigeration",
                "Reverse Camera Sys",
                "Reverse Sensing Sys",
                "SecuriCode Keyless Entry",
                "SecuriLock Passive",
                "Anti-theft Ignition System Sensor (Alcohol)",
                "SOS Post Crash Alert System",
                "Speed Control",
                "Stationary Elevated Ride Control",
                "SYNC My Ford Touch (Excludes Software Upgrades)",
                "Components (Excluding High Voltage Battery and Cables)",
            ],
        },
    ];

    // Which accordion item is open (one at a time). Engine starts open.
    const [openItem, setOpenItem] = useState<string | null>("Engine");

    return (
        <>
            <Header />
            <main className="w-full max-w-full">
                {/* Banner */}
                <section className="bg-white">
                    <img
                        src={bannerImage}
                        alt="Ford Protect Premium Extended Warranty: we've got you covered"
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
                        Premium Extended Warranty
                    </p>
                    <h1 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-[#003478] sm:text-4xl">
                        The most comprehensive service plan protection fully
                        backed by Ford
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#102B4E]/80 lg:text-lg">
                        It covers the parts and labor to repair thousands of key
                        components-engine, transmission, steering, brakes, front
                        suspensions, electrical and more – for up to 5 years or
                        150,000 kilometers. In total that is 5 long years of
                        vehicle warranty and peace of mind.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href={INQUIRY_HREF}
                            className="inline-block rounded-full bg-[#003478] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2"
                        >
                            Send us an inquiry
                        </a>
                        <a
                            href={APPOINTMENT_HREF}
                            className="inline-block rounded-full border-2 border-[#003478] px-6 py-2 text-sm font-semibold text-[#003478] transition-colors hover:border-[#066FEF] hover:text-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2"
                        >
                            Book an appointment
                        </a>
                    </div>
                </section>

                {/* Video */}
                <section className="container mx-auto px-4 py-8 lg:py-10">
                    <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-[#001A3D] shadow-lg">
                        <div className="aspect-video">
                            <iframe
                                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                                title="Ford Warranty Has You Covered | Ford Philippines"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="h-full w-full border-0"
                            />
                        </div>
                    </div>
                </section>

                {/* Drive on for miles */}
                <section className="bg-[#F2F2F2] py-12 lg:py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="border-l-4 border-[#066FEF] pl-3 text-2xl font-bold uppercase text-[#003478] lg:text-3xl">
                            Drive on for miles
                        </h2>
                        <p className="mt-4 max-w-3xl leading-relaxed text-[#102B4E]/80">
                            There's nothing like buying a new vehicle. We want
                            you to have that feeling with your Ford vehicle for
                            many miles to come. That's why we've created the
                            Ford Protect Premium Extended Warranty so you can
                            drive on with confidence; for more years to come.
                        </p>

                        <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
                            {FEATURES.map((item) => (
                                <li
                                    key={item.label}
                                    className="rounded-2xl border-t-4 border-t-[#003478] bg-white p-5 text-center shadow-sm sm:p-6"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        loading="lazy"
                                        draggable={false}
                                        className="-my-2 mx-auto h-28 w-full object-contain sm:h-32"
                                    />
                                    <p className="mt-2 text-sm font-semibold uppercase leading-snug tracking-wide text-[#102B4E]/80">
                                        {item.label}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Coverage */}
                <section className="container mx-auto px-4 py-12 lg:py-16">
                    <h2 className="text-2xl font-bold uppercase text-[#003478] lg:text-3xl">
                        Premium Extended Warranty
                    </h2>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#066FEF]">
                        1,000+ covered component parts (partial list)
                    </p>
                    <p className="mt-4 max-w-3xl leading-relaxed text-[#102B4E]/80">
                        Premium Extended Warranty can be purchased at any Ford
                        dealerships within the period of a new car purchase up
                        to 36 months AND traveled less than 100,000 km from the
                        time vehicle warranty starts.
                    </p>

                    <h3 className="mt-10 text-xl font-bold uppercase text-[#102B4E] lg:text-2xl">
                        Select component to see coverage:
                    </h3>

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
                                                {item.parts.length > 0 ? (
                                                    <ul className="mt-4 columns-1 gap-8 sm:columns-2 lg:columns-3">
                                                        {item.parts.map(
                                                            (part) => (
                                                                <li
                                                                    key={part}
                                                                    className="mb-2 break-inside-avoid text-[#102B4E]"
                                                                >
                                                                    <span className="flex items-start gap-2">
                                                                        <span
                                                                            aria-hidden="true"
                                                                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#066FEF]"
                                                                        />
                                                                        {part}
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
            </main>
            <Footer />
        </>
    );
}
