import { useEffect, useState } from "react";

/**
 * Ford-inspired palette (move these into your Tailwind theme / CSS variables later):
 *   Ford Blue (primary)  #003478
 *   Accent Blue          #066FEF
 *   Ink (text)           #102B4E
 *   Light Gray (surface) #F2F2F2
 */

const NAV_ITEMS = [
    { label: "New Vehicles", to: "/new-vehicles" },
    { label: "Next-Gen Ford", to: "/next-gen-ford" },
    { label: "Ford Service", to: "/service" },
    { label: "Finance", to: "/finance" },
    { label: "Virtual Showroom", to: "/virtual-showroom" },
    { label: "Dealer News", to: "/dealer-news" },
    { label: "Contact Us", to: "/contact-us" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Plain <a> tags reload the page, so the current path is read once per load
    const pathname =
        typeof window !== "undefined" ? window.location.pathname : "/";

    const isActive = (to: string) =>
        pathname === to || pathname.startsWith(`${to}/`);

    // Close on Escape
    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [menuOpen]);

    // Lock page scroll behind the open menu
    useEffect(() => {
        if (!menuOpen) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previous;
        };
    }, [menuOpen]);

    // Close the menu if the screen grows to the desktop layout
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const onChange = () => {
            if (mq.matches) setMenuOpen(false);
        };
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    // Add a soft shadow once the page is scrolled
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full max-w-full bg-white transition-shadow duration-200 ${
                scrolled && !menuOpen ? "shadow-md" : "border-b border-gray-200"
            }`}
        >
            {/* Main bar */}
            <div className="container mx-auto flex h-16 items-center justify-between gap-6 px-4 lg:h-20">
                {/* Logo */}
                <a
                    href="/"
                    aria-label="Lausford Group, Ford dealer. Go to home page"
                    className="shrink-0"
                >
                    <img
                        alt="Ford"
                        src="/ford-logo.png"
                        className="h-auto w-24 lg:w-28"
                    />
                </a>

                {/* Desktop nav */}
                <nav aria-label="Primary" className="hidden flex-1 lg:block">
                    <ul className="flex items-center justify-center gap-1 xl:gap-2">
                        {NAV_ITEMS.map((item) => {
                            const active = isActive(item.to);
                            return (
                                <li key={item.to}>
                                    <a
                                        href={item.to}
                                        aria-current={
                                            active ? "page" : undefined
                                        }
                                        className={`relative block px-3 py-2 text-sm font-medium transition-colors xl:px-4 ${
                                            active
                                                ? "text-[#066FEF]"
                                                : "text-[#102B4E] hover:text-[#066FEF]"
                                        } after:absolute after:inset-x-3 after:-bottom-1 after:h-0.5 after:origin-left after:bg-[#066FEF] after:transition-transform after:duration-200 xl:after:inset-x-4 ${
                                            active
                                                ? "after:scale-x-100"
                                                : "after:scale-x-0 hover:after:scale-x-100"
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Desktop CTA */}
                <a
                    href="/test-drive"
                    className="hidden shrink-0 rounded-full bg-[#003478] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2 lg:inline-block"
                >
                    Book a Test Drive
                </a>

                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#003478] transition-colors hover:bg-[#F2F2F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] lg:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        className="h-6 w-6"
                        aria-hidden="true"
                    >
                        {menuOpen ? (
                            <path d="M6 6l12 12M18 6L6 18" />
                        ) : (
                            <path d="M4 7h16M4 12h16M4 17h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu: dimmed backdrop (tap to close) */}
            <div
                aria-hidden="true"
                onClick={() => setMenuOpen(false)}
                className={`absolute inset-x-0 top-full h-screen bg-black/40 transition-opacity duration-200 lg:hidden ${
                    menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
            />

            {/* Mobile menu: overlay panel that floats over the page */}
            <div
                id="mobile-menu"
                className={`absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-gray-200 bg-white shadow-xl transition-[opacity,transform,visibility] duration-200 ease-out lg:hidden ${
                    menuOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                }`}
            >
                <nav
                    aria-label="Mobile"
                    className="container mx-auto px-4 py-4"
                >
                    <ul className="flex flex-col">
                        {NAV_ITEMS.map((item) => {
                            const active = isActive(item.to);
                            return (
                                <li
                                    key={item.to}
                                    className="border-b border-gray-100 last:border-b-0"
                                >
                                    <a
                                        href={item.to}
                                        aria-current={
                                            active ? "page" : undefined
                                        }
                                        className={`block py-3 text-base font-medium transition-colors ${
                                            active
                                                ? "text-[#066FEF]"
                                                : "text-[#102B4E] hover:text-[#066FEF]"
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <a
                        href="/test-drive"
                        className="mt-4 block rounded-full bg-[#003478] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#066FEF]"
                    >
                        Book a Test Drive
                    </a>

                    <div className="mt-4 flex items-center justify-between text-sm text-[#102B4E]">
                        <a href="tel:+630000000000">(+63) 000 000 0000</a>
                        <a href="/dealers">Find a Dealer</a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
