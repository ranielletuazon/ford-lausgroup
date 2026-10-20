import { useEffect, useRef, useState } from "react";
type NavChild = { label: string; to: string };
type NavItem = { label: string; to: string; children?: NavChild[] };

export default function Header() {
    // TODO: replace the paths with the real pages
    const NAV_ITEMS: NavItem[] = [
        {
            label: "New Vehicles",
            to: "/new-vehicles",
            children: [
                {
                    label: "Fleet",
                    to: "/fleet",
                },
            ],
        },
        { label: "Next-Gen Ford", to: "/next-gen-ford" },
        {
            label: "Ford Service",
            to: "/service-reminders-for-ford-car-owners/",
            children: [
                {
                    label: "Premium Extended Warranty",
                    to: "/premium-extended-warranty",
                },
                {
                    label: "Emergency Roadside Assistance",
                    to: "/emergency-roadside-assistance",
                },
            ],
        },
        {
            label: "Finance",
            to: "/finance",
            children: [
                {
                    label: "Laus Auto Finance",
                    to: "/laus-auto-finance",
                },
            ],
        },
        { label: "Virtual Showroom", to: "/virtual-showroom" },
        { label: "Dealer News", to: "/dealer-news" },
        { label: "Contact Us", to: "/contact-us" },
    ];

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // Which dropdown is open on desktop, and which section is open in the mobile menu
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [openMobile, setOpenMobile] = useState<string | null>(null);
    const navRef = useRef<HTMLUListElement>(null);

    // Plain <a> tags reload the page, so the current path is read once per load
    const pathname =
        typeof window !== "undefined" ? window.location.pathname : "/";

    const isActive = (to: string) =>
        pathname === to || pathname.startsWith(`${to}/`);

    // A menu is active when its own page or one of its dropdown pages is open
    const isItemActive = (item: NavItem) =>
        isActive(item.to) ||
        (item.children?.some((child) => isActive(child.to)) ?? false);

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

    // Close the desktop dropdown with Escape or a click anywhere else
    useEffect(() => {
        if (!openMenu) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return;
            // Put the focus back on the button so keyboard users don't lose their place
            navRef.current
                ?.querySelector<HTMLButtonElement>(
                    'button[aria-expanded="true"]',
                )
                ?.focus();
            setOpenMenu(null);
        };
        const onClickOutside = (e: MouseEvent) => {
            if (!navRef.current?.contains(e.target as Node)) setOpenMenu(null);
        };
        window.addEventListener("keydown", onKey);
        document.addEventListener("mousedown", onClickOutside);
        return () => {
            window.removeEventListener("keydown", onKey);
            document.removeEventListener("mousedown", onClickOutside);
        };
    }, [openMenu]);

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
            <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 lg:h-20 xl:gap-6">
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

                {/* Desktop nav (full height, so each dropdown opens right under the bar) */}
                <nav
                    aria-label="Primary"
                    className="hidden flex-1 self-stretch lg:block"
                >
                    <ul
                        ref={navRef}
                        className="flex h-full items-center justify-center xl:gap-1"
                    >
                        {NAV_ITEMS.map((item) => {
                            const active = isItemActive(item);
                            const children = item.children;
                            const open = openMenu === item.label;
                            return (
                                <li
                                    key={item.label}
                                    className="relative flex h-full items-center"
                                    // Mouse hover opens the dropdown. Touch uses the arrow button instead.
                                    onPointerEnter={(e) => {
                                        if (
                                            children &&
                                            e.pointerType === "mouse"
                                        )
                                            setOpenMenu(item.label);
                                    }}
                                    onPointerLeave={(e) => {
                                        if (
                                            children &&
                                            e.pointerType === "mouse"
                                        )
                                            setOpenMenu(null);
                                    }}
                                    // Tabbing out of the dropdown closes it
                                    onBlur={(e) => {
                                        if (
                                            children &&
                                            !e.currentTarget.contains(
                                                e.relatedTarget as Node | null,
                                            )
                                        )
                                            setOpenMenu((current) =>
                                                current === item.label
                                                    ? null
                                                    : current,
                                            );
                                    }}
                                >
                                    <a
                                        href={item.to}
                                        aria-current={
                                            active && isActive(item.to)
                                                ? "page"
                                                : undefined
                                        }
                                        className={`block whitespace-nowrap py-2 text-sm font-medium transition-colors ${
                                            children
                                                ? "pl-2.5 pr-0.5 xl:pl-4 xl:pr-1"
                                                : "px-2.5 xl:px-4"
                                        } ${
                                            active
                                                ? "text-[#066FEF]"
                                                : "text-[#102B4E] hover:text-[#066FEF]"
                                        } focus:outline-none focus-visible:text-[#066FEF]`}
                                    >
                                        {/* The blue line sits under the words only */}
                                        <span
                                            className={`relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:bg-[#066FEF] after:transition-transform after:duration-200 ${
                                                active
                                                    ? "after:scale-x-100"
                                                    : "after:scale-x-0 hover:after:scale-x-100"
                                            }`}
                                        >
                                            {item.label}
                                        </span>
                                    </a>

                                    {children && (
                                        <>
                                            {/* Arrow button: opens the dropdown for keyboard and touch */}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenMenu(
                                                        open
                                                            ? null
                                                            : item.label,
                                                    )
                                                }
                                                aria-expanded={open}
                                                aria-haspopup="true"
                                                aria-label={`${item.label} submenu`}
                                                className={`mr-0.5 flex h-8 w-5 items-center justify-center rounded-md transition-colors hover:text-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] xl:mr-2 xl:w-6 ${
                                                    active || open
                                                        ? "text-[#066FEF]"
                                                        : "text-[#102B4E]/70"
                                                }`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${
                                                        open ? "rotate-180" : ""
                                                    }`}
                                                    aria-hidden="true"
                                                >
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </button>

                                            {/* Dropdown panel. The padding on top keeps the hover from breaking in the gap. */}
                                            <div
                                                className={`absolute left-0 top-full z-50 w-[22rem] pt-2 transition-[opacity,transform,visibility] duration-150 ease-out motion-reduce:transition-none ${
                                                    open
                                                        ? "visible translate-y-0 opacity-100"
                                                        : "invisible translate-y-1 opacity-0"
                                                }`}
                                            >
                                                <ul className="rounded-xl border border-[#003478]/10 bg-white p-2 shadow-xl ring-1 ring-black/5">
                                                    {children.map((child) => {
                                                        const childActive =
                                                            isActive(child.to);
                                                        return (
                                                            <li key={child.to}>
                                                                <a
                                                                    href={
                                                                        child.to
                                                                    }
                                                                    aria-current={
                                                                        childActive
                                                                            ? "page"
                                                                            : undefined
                                                                    }
                                                                    className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-[#003478]/5 hover:text-[#003478] focus:outline-none focus-visible:bg-[#003478]/5 focus-visible:ring-2 focus-visible:ring-[#066FEF] ${
                                                                        childActive
                                                                            ? "bg-[#003478]/5 text-[#003478]"
                                                                            : "text-[#102B4E]"
                                                                    }`}
                                                                >
                                                                    {
                                                                        child.label
                                                                    }
                                                                </a>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Desktop CTA */}
                <a
                    href="/test-drive"
                    className="hidden shrink-0 whitespace-nowrap rounded-full bg-[#003478] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2 xl:inline-block xl:px-6"
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
                            const active = isItemActive(item);
                            const children = item.children;
                            const open = openMobile === item.label;
                            return (
                                <li
                                    key={item.label}
                                    className="border-b border-gray-100 last:border-b-0"
                                >
                                    <div className="flex items-center">
                                        <a
                                            href={item.to}
                                            aria-current={
                                                active && isActive(item.to)
                                                    ? "page"
                                                    : undefined
                                            }
                                            className={`block flex-1 py-3 text-base font-medium transition-colors ${
                                                active
                                                    ? "text-[#066FEF]"
                                                    : "text-[#102B4E] hover:text-[#066FEF]"
                                            }`}
                                        >
                                            {item.label}
                                        </a>

                                        {children && (
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenMobile(
                                                        open
                                                            ? null
                                                            : item.label,
                                                    )
                                                }
                                                aria-expanded={open}
                                                aria-label={`${item.label} submenu`}
                                                className="flex h-10 w-10 items-center justify-center rounded-md text-[#003478] transition-colors hover:bg-[#F2F2F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF]"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className={`h-5 w-5 transition-transform duration-200 motion-reduce:transition-none ${
                                                        open ? "rotate-180" : ""
                                                    }`}
                                                    aria-hidden="true"
                                                >
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>

                                    {/* Dropdown links slide open under their menu */}
                                    {children && (
                                        <div
                                            className={`grid transition-[grid-template-rows,visibility] duration-200 ease-out motion-reduce:transition-none ${
                                                open
                                                    ? "visible grid-rows-[1fr]"
                                                    : "invisible grid-rows-[0fr]"
                                            }`}
                                        >
                                            <ul className="overflow-hidden">
                                                {children.map((child) => {
                                                    const childActive =
                                                        isActive(child.to);
                                                    return (
                                                        <li key={child.to}>
                                                            <a
                                                                href={child.to}
                                                                aria-current={
                                                                    childActive
                                                                        ? "page"
                                                                        : undefined
                                                                }
                                                                className={`mb-2 block rounded-lg bg-[#F2F2F2] px-3 py-3 text-sm font-semibold transition-colors hover:text-[#066FEF] ${
                                                                    childActive
                                                                        ? "text-[#066FEF]"
                                                                        : "text-[#102B4E]"
                                                                }`}
                                                            >
                                                                {child.label}
                                                            </a>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    )}
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
