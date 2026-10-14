import { useCallback, useEffect, useRef, useState } from "react";
import type { FocusEvent, KeyboardEvent, TouchEvent } from "react";

/**
 * Ford-inspired palette (same tokens as Header):
 *   Ford Blue (primary)  #003478
 *   Accent Blue          #066FEF
 *   Ink (text)           #102B4E
 *   Light Gray (surface) #F2F2F2
 */

const IMAGE_COUNT = 8;

// Images live in public/images/carousel/image1.jpg ... image8.jpg
// TODO: replace the generic alt text with a short description of each photo
const SLIDES = Array.from({ length: IMAGE_COUNT }, (_, i) => ({
    src: `/images/carousel/image${i + 1}.jpg`,
    alt: `Ford featured image ${i + 1}`,
}));

const INTERVAL_MS = 5000;
const SWIPE_THRESHOLD = 50;

export default function HeroCarousel() {
    const total = SLIDES.length;
    const [current, setCurrent] = useState(0);
    const [userPlaying, setUserPlaying] = useState(true);
    const [focused, setFocused] = useState(false);
    const [tabHidden, setTabHidden] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);
    const touchStartX = useRef<number | null>(null);

    const playing = userPlaying && !reducedMotion;
    const running = playing && !focused && !tabHidden;

    const goTo = useCallback(
        (index: number) => setCurrent(((index % total) + total) % total),
        [total],
    );
    const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
    const prev = useCallback(
        () => setCurrent((c) => (c - 1 + total) % total),
        [total],
    );

    // Respect "reduce motion" system setting
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReducedMotion(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    // Pause while the browser tab is in the background
    useEffect(() => {
        const onVisibility = () => setTabHidden(document.hidden);
        document.addEventListener("visibilitychange", onVisibility);
        return () =>
            document.removeEventListener("visibilitychange", onVisibility);
    }, []);

    const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
        if (e.key === "ArrowLeft") {
            e.preventDefault();
            prev();
        } else if (e.key === "ArrowRight") {
            e.preventDefault();
            next();
        }
    };

    const onTouchStart = (e: TouchEvent<HTMLElement>) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent<HTMLElement>) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(delta) < SWIPE_THRESHOLD) return;
        if (delta < 0) {
            next();
        } else {
            prev();
        }
    };

    const onBlur = (e: FocusEvent<HTMLElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            setFocused(false);
        }
    };

    return (
        <section
            aria-roledescription="carousel"
            aria-label="Featured Ford images"
            className="relative aspect-[4/3] max-h-[760px] w-full max-w-full overflow-hidden bg-[#003478] sm:aspect-[16/9] lg:aspect-[21/9]"
            onFocus={(e) => setFocused(e.target.matches(":focus-visible"))}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <style>{`
                @keyframes hero-progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
            `}</style>

            {/* Slides */}
            <div
                className="absolute inset-0"
                aria-live={running ? "off" : "polite"}
            >
                {SLIDES.map((slide, i) => {
                    const active = i === current;
                    return (
                        <div
                            key={slide.src}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${i + 1} of ${total}`}
                            aria-hidden={!active}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
                                active
                                    ? "z-10 opacity-100"
                                    : "pointer-events-none z-0 opacity-0"
                            }`}
                        >
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                loading={i === 0 ? "eager" : "lazy"}
                                fetchPriority={i === 0 ? "high" : "auto"}
                                decoding="async"
                                draggable={false}
                                className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out motion-reduce:transition-none ${
                                    active ? "scale-100" : "scale-105"
                                }`}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Previous / Next arrows */}
            <button
                type="button"
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-2 top-1/2 z-20 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#003478] shadow transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] sm:left-4 sm:h-12 sm:w-12"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    aria-hidden="true"
                >
                    <path d="M15 5l-7 7 7 7" />
                </svg>
            </button>
            <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="absolute right-2 top-1/2 z-20 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#003478] shadow transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] sm:right-4 sm:h-12 sm:w-12"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    aria-hidden="true"
                >
                    <path d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Progress indicators + play/pause */}
            <div className="absolute inset-x-0 bottom-2 z-20 flex justify-center px-4 sm:bottom-5">
                <div className="flex items-center gap-3 rounded-full bg-[#003478]/50 px-3 py-0.5 backdrop-blur-sm">
                    <div className="flex items-center gap-1 sm:gap-1.5">
                        {SLIDES.map((slide, i) => {
                            const active = i === current;
                            return (
                                <button
                                    key={slide.src}
                                    type="button"
                                    onClick={() => goTo(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                    aria-current={active ? "true" : undefined}
                                    className="group py-3 focus:outline-none"
                                >
                                    <span className="block h-1 w-4 overflow-hidden rounded-full bg-white/40 transition-colors group-hover:bg-white/60 group-focus-visible:ring-2 group-focus-visible:ring-white sm:w-8">
                                        {active && (
                                            <span
                                                key={`${current}-${playing}`}
                                                className="block h-full rounded-full bg-white"
                                                style={
                                                    playing
                                                        ? {
                                                              animation: `hero-progress ${INTERVAL_MS}ms linear forwards`,
                                                              animationPlayState:
                                                                  running
                                                                      ? "running"
                                                                      : "paused",
                                                          }
                                                        : { width: "100%" }
                                                }
                                                onAnimationEnd={next}
                                            />
                                        )}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {!reducedMotion && (
                        <button
                            type="button"
                            onClick={() => setUserPlaying((p) => !p)}
                            aria-label={
                                userPlaying
                                    ? "Pause slide rotation"
                                    : "Start slide rotation"
                            }
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-3.5 w-3.5"
                                aria-hidden="true"
                            >
                                {userPlaying ? (
                                    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                                ) : (
                                    <path d="M7 4.5v15l13-7.5z" />
                                )}
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
