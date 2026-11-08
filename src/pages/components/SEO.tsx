import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    keywords?: string;
    noindex?: boolean;
}

export const BASE_URL = "https://www.lausfordgroup.com.ph";
const DEFAULT_IMAGE = `${BASE_URL}/images/carousel/image1.jpg`;
const SITE_NAME = "Ford Laus Group";
const DEFAULT_DESCRIPTION =
    "Ford Laus Group is your official Ford dealer in Central and Northern Luzon, with branches in Pampanga, Clark, Tarlac, Subic, Dagupan, Cabanatuan, Isabela and Ilocos Norte. Explore new Ford vehicles, financing, service and more.";

// Turns relative paths (e.g. Vite-imported assets like "/assets/hero.jpg") into absolute URLs,
// since social media crawlers require absolute image URLs.
function toAbsoluteUrl(path: string) {
    if (/^https?:\/\//i.test(path)) return path;
    return `${BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export default function SEO({
    title = "Ford Laus Group - Official Ford Dealer in Luzon",
    description = DEFAULT_DESCRIPTION,
    image = DEFAULT_IMAGE,
    url,
    type = "website",
    keywords,
    noindex = false,
}: SEOProps) {
    const location = useLocation();

    const fullTitle = title.includes(SITE_NAME)
        ? title
        : `${title} | ${SITE_NAME}`;

    // Canonical URL: strip trailing slash (except root) so each page has one canonical form
    const pathname =
        location.pathname.length > 1
            ? location.pathname.replace(/\/+$/, "")
            : location.pathname;
    const resolvedUrl = url ? toAbsoluteUrl(url) : `${BASE_URL}${pathname}`;
    const resolvedImage = toAbsoluteUrl(image);

    return (
        <Helmet>
            {/* Primary */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta
                name="robots"
                content={noindex ? "noindex, follow" : "index, follow"}
            />
            {!noindex && <link rel="canonical" href={resolvedUrl} />}

            {/* Open Graph - Facebook, Messenger previews */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={resolvedImage} />
            <meta property="og:url" content={resolvedUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_PH" />

            {/* Twitter / X */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={resolvedImage} />

            {/* Geo tags - helpful for local SEO */}
            <meta name="geo.region" content="PH-PAM" />
            <meta name="geo.placename" content="San Fernando, Pampanga" />
        </Helmet>
    );
}
