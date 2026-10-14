import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

const CAR_IMAGES: string[] = [
    "car1.jpg",
    "car2.jpg",
    "car3.jpg",
    "car4.jpg",
    "car5.jpg",
];

const IMAGE_DIR = "/images/car_carousel/";
const INTERVAL_MS = 5000;
const TRANSITION_MS = 700;

// Cars visible at once: 1 on phones, 2 on tablets, 3 on desktop
function getVisibleCount() {
    const w = window.innerWidth;
    if (w < 640) return 1;
    if (w < 1024) return 2;
    return 3;
}

function subscribeToResize(onChange: () => void) {
    window.addEventListener("resize", onChange);
    return () => window.removeEventListener("resize", onChange);
}

function useVisibleCount() {
    return useSyncExternalStore(subscribeToResize, getVisibleCount, () => 3);
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
    const mq = window.matchMedia(REDUCED_MOTION_QUERY);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
}

// Respect the "reduce motion" system setting
function useReducedMotion() {
    return useSyncExternalStore(
        subscribeToReducedMotion,
        () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
        () => false,
    );
}

function subscribeToVisibility(onChange: () => void) {
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
}

// True while the browser tab is in the background
function useTabHidden() {
    return useSyncExternalStore(
        subscribeToVisibility,
        () => document.hidden,
        () => false,
    );
}

/* Sliding track                                                       */
type CarouselTrackProps = {
    images: string[];
    visible: number;
};

function CarouselTrack({ images, visible }: CarouselTrackProps) {
    const total = images.length;
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(true);
    const reducedMotion = useReducedMotion();
    const tabHidden = useTabHidden();

    const canSlide = total > visible;
    const autoplay = canSlide && !reducedMotion && !tabHidden;

    // Looping track: the first `visible` images are repeated at the end so the
    // slide from the last image back to the first is seamless.
    const slides = canSlide ? [...images, ...images.slice(0, visible)] : images;

    const next = useCallback(
        () => setIndex((i) => Math.min(i + 1, total)),
        [total],
    );

    // After sliding onto the cloned images, snap back to the real start
    useEffect(() => {
        if (!canSlide || !animate || index !== total) return;
        const t = setTimeout(() => {
            setAnimate(false);
            setIndex(0);
        }, TRANSITION_MS + 50);
        return () => clearTimeout(t);
    }, [canSlide, animate, index, total]);

    // Turn the transition back on two frames after a snap
    useEffect(() => {
        if (animate) return;
        let r2 = 0;
        const r1 = requestAnimationFrame(() => {
            r2 = requestAnimationFrame(() => setAnimate(true));
        });
        return () => {
            cancelAnimationFrame(r1);
            cancelAnimationFrame(r2);
        };
    }, [animate]);

    // Autoplay (see INTERVAL_MS)
    useEffect(() => {
        if (!autoplay) return;
        const id = setInterval(next, INTERVAL_MS);
        return () => clearInterval(id);
    }, [autoplay, next]);

    return (
        <section
            aria-roledescription="carousel"
            aria-label="Ford vehicles"
            className="w-full max-w-full"
        >
            {/* Viewport */}
            <div className="-mx-2 overflow-hidden px-0 py-3 sm:-mx-3">
                <div
                    className={`flex ${canSlide ? "" : "justify-center"}`}
                    style={{
                        transform: canSlide
                            ? `translateX(-${index * (100 / visible)}%)`
                            : undefined,
                        transition:
                            animate && !reducedMotion
                                ? `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1)`
                                : "none",
                    }}
                >
                    {slides.map((file, i) => {
                        const inView = i >= index && i < index + visible;
                        return (
                            <div
                                key={`${file}-${i}`}
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`${(i % total) + 1} of ${total}`}
                                aria-hidden={!inView}
                                className="flex-none px-2 sm:px-3"
                                style={{ width: `${100 / visible}%` }}
                            >
                                {/* Clean card: hairline border, soft shadow, gentle lift on hover */}
                                <div className="group overflow-hidden rounded-2xl border border-[#003478]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#066FEF]/40 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                                    {/* Matches the 980x390 car images so they fill the full width */}
                                    <div className="aspect-[980/390] overflow-hidden">
                                        <img
                                            src={`${IMAGE_DIR}${file}`}
                                            alt={`Ford vehicle ${(i % total) + 1}`}
                                            decoding="async"
                                            draggable={false}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* Public component                                                    */
/* ------------------------------------------------------------------ */

type CarImageCarouselProps = {
    /** File names inside public/images/car_carousel/ (defaults to CAR_IMAGES) */
    images?: string[];
};

export default function CarImageCarousel({
    images = CAR_IMAGES,
}: CarImageCarouselProps) {
    const visible = useVisibleCount();

    if (images.length === 0) return null;

    // The key restarts the track from the first car whenever the screen size
    // (cars per row) or the number of images changes.
    return (
        <CarouselTrack
            key={`${visible}-${images.length}`}
            images={images}
            visible={visible}
        />
    );
}
