import { useState } from "react";

// One video in the playlist. "link" can be any YouTube link (or just the video ID).
type Video = {
    link: string;
    title: string;
    duration: string;
};

type PlaylistProps = {
    videos: Video[];
};

export default function Playlist({ videos }: PlaylistProps) {
    // Which video is playing, and whether the player should start automatically
    // (only after the visitor picks a video, never on page load)
    const [activeVideo, setActiveVideo] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    // Pulls the video ID out of a YouTube link (or returns the text as-is if it is already an ID)
    function getYouTubeId(input: string) {
        const match = input.match(
            /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/,
        );
        return match ? match[1] : input.trim();
    }

    const VIDEO_LIST = videos.map((video) => ({
        ...video,
        id: getYouTubeId(video.link),
    }));

    // Falls back to the first video if the list changed and the old position no longer exists
    const currentVideo = VIDEO_LIST[activeVideo] ?? VIDEO_LIST[0];

    if (!currentVideo) return null;

    return (
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {/* Player (on top for phones, on the right from lg up) */}
            <div className="order-1 lg:order-2 lg:col-span-2">
                <div className="overflow-hidden rounded-2xl bg-black shadow-lg ring-1 ring-black/5">
                    <div className="aspect-video">
                        <iframe
                            key={currentVideo.id}
                            src={`https://www.youtube-nocookie.com/embed/${currentVideo.id}?rel=0&playsinline=1${autoplay ? "&autoplay=1" : ""}`}
                            title={currentVideo.title}
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                            className="h-full w-full"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#066FEF]">
                        Now playing · {VIDEO_LIST.indexOf(currentVideo) + 1} of{" "}
                        {VIDEO_LIST.length}
                    </p>
                    <h3 className="mt-1 text-lg font-bold leading-snug text-[#003478] sm:text-xl">
                        {currentVideo.title}
                    </h3>
                </div>
            </div>

            {/* Playlist (below the player on phones, on the left from lg up).
                From lg up it matches the player's height and scrolls. */}
            <div className="order-2 lg:relative lg:order-1">
                <div className="max-h-[26rem] overflow-y-auto rounded-2xl border border-[#003478]/10 bg-white shadow-sm lg:absolute lg:inset-0 lg:max-h-none">
                    <p className="sticky top-0 z-10 border-b border-[#003478]/10 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#102B4E]/70">
                        Playlist · {VIDEO_LIST.length}{" "}
                        {VIDEO_LIST.length === 1 ? "video" : "videos"}
                    </p>

                    <ul className="divide-y divide-[#003478]/10">
                        {VIDEO_LIST.map((video, i) => {
                            const active = video === currentVideo;
                            return (
                                <li key={`${video.id}-${i}`}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setActiveVideo(i);
                                            setAutoplay(true);
                                        }}
                                        aria-current={
                                            active ? "true" : undefined
                                        }
                                        className={`group flex w-full items-start gap-3 px-3 py-3 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#066FEF] sm:px-4 cursor-pointer ${
                                            active
                                                ? "bg-[#003478]/5"
                                                : "hover:bg-[#F2F2F2]"
                                        }`}
                                    >
                                        {/* Thumbnail + duration */}
                                        <span className="relative block aspect-video w-28 shrink-0 overflow-hidden rounded-lg bg-[#003478]/10 sm:w-36">
                                            <img
                                                src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                                                alt=""
                                                loading="lazy"
                                                decoding="async"
                                                draggable={false}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                                            />
                                            <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1.5 py-0.5 text-[11px] font-semibold leading-none tabular-nums text-white">
                                                {video.duration}
                                            </span>
                                        </span>

                                        {/* Title + now playing label */}
                                        <span className="min-w-0 flex-1">
                                            <span
                                                className={`line-clamp-3 text-sm font-semibold leading-snug ${
                                                    active
                                                        ? "text-[#003478]"
                                                        : "text-[#102B4E]"
                                                }`}
                                            >
                                                {video.title}
                                            </span>
                                            {active && (
                                                <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-[#066FEF]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="h-3 w-3"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M7 4.5v15l13-7.5z" />
                                                    </svg>
                                                    Now playing
                                                </span>
                                            )}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
