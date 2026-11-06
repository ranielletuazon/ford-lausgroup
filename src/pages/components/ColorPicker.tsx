import { useState } from "react";

// The color card of a car: a dark panel with the name and the color buttons,
// and a stage on the right where the photo of the chosen color fades in.
// It keeps the chosen color by itself, so a page only calls it:
//
// <ColorPicker name="Ford Ranger Raptor" colors={COLORS} />
//
// colors: { name, hex, image } for each color. A color with image "" shows "Photo coming soon".
// price: shown under the name, leave it out to hide it.
// href: makes the whole card a link with an "Explore" button, leave it out for no link.
// as: the heading tag of the name, "h3" by default.
type Props = {
    name: string;
    colors: { name: string; hex: string; image: string }[];
    price?: number;
    href?: string;
    as?: "h2" | "h3";
};

export default function ColorPicker({
    name,
    colors,
    price,
    href,
    as: Heading = "h3",
}: Props) {
    const [selected, setSelected] = useState(0);

    if (colors.length === 0) return null;

    const color = colors[selected] ?? colors[0];

    // 3048000 -> "₱3,048,000"
    const formatPrice = (value: number) =>
        value.toLocaleString("en-PH", {
            style: "currency",
            currency: "PHP",
            maximumFractionDigits: 0,
        });

    return (
        <div
            className={`group relative grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg lg:grid-cols-[2fr_3fr] ${
                href
                    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    : ""
            }`}
        >
            {/* Name, price and colors */}
            <div className="flex flex-col justify-center bg-gradient-to-br from-[#001A3D] via-[#003478] to-[#003478] p-6 text-white sm:p-8 lg:p-12">
                <Heading className="text-3xl font-bold uppercase leading-tight sm:text-4xl">
                    {name}
                </Heading>
                {price && (
                    <p className="mt-3">
                        <span className="block text-xs font-semibold uppercase tracking-widest text-white/60">
                            Starting price
                        </span>
                        <span className="text-2xl font-semibold">
                            {formatPrice(price)}
                        </span>
                    </p>
                )}

                {/* The color buttons stay above the link of the card */}
                <div className="relative z-30 mt-8 border-t border-white/15 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                        Choose your color
                    </p>
                    <p className="mt-1 text-lg font-semibold">{color.name}</p>
                    <ul className="mt-4 grid w-max grid-cols-5 gap-3">
                        {colors.map((item, index) => (
                            <li key={item.name}>
                                <button
                                    type="button"
                                    title={item.name}
                                    aria-label={item.name}
                                    aria-pressed={index === selected}
                                    onClick={() => setSelected(index)}
                                    style={{ backgroundColor: item.hex }}
                                    className={`block h-9 w-9 cursor-pointer rounded-full border border-white/30 ring-offset-2 ring-offset-[#003478] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] motion-reduce:transition-none ${
                                        index === selected
                                            ? "scale-110 ring-2 ring-white"
                                            : "hover:scale-110 hover:ring-2 hover:ring-white/50"
                                    }`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {href && (
                    <div className="mt-8">
                        <a
                            href={href}
                            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#003478] transition-colors group-hover:bg-[#F2F2F2] focus:outline-none after:absolute after:inset-0 after:z-20 after:rounded-3xl focus-visible:after:ring-4 focus-visible:after:ring-inset focus-visible:after:ring-[#066FEF]"
                        >
                            Explore the {name}
                            <span
                                aria-hidden="true"
                                className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                            >
                                →
                            </span>
                        </a>
                    </div>
                )}
            </div>

            {/* Stage, every color photo is stacked and the chosen one fades in */}
            <div className="relative aspect-[16/9] overflow-hidden bg-[radial-gradient(ellipse_at_center,#F2F2F2_0%,#FFFFFF_75%)] lg:aspect-auto lg:min-h-[26rem]">
                {colors.map(
                    (item, index) =>
                        item.image && (
                            <img
                                key={item.name}
                                src={item.image}
                                alt={
                                    index === selected
                                        ? `${name} in ${item.name}`
                                        : ""
                                }
                                loading="lazy"
                                draggable={false}
                                className={`absolute inset-0 h-full w-full scale-[1.05] object-contain mix-blend-multiply transition-all duration-500 motion-reduce:transition-none ${
                                    href ? "group-hover:scale-[1.1]" : ""
                                } ${
                                    index === selected
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            />
                        ),
                )}
                {!color.image && (
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold uppercase tracking-widest text-[#102B4E]/40">
                        Photo coming soon
                    </div>
                )}
            </div>
        </div>
    );
}
