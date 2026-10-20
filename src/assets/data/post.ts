import posts from "./post.json";

// The shape of one post (same fields as post.json)
export type Post = {
    id: number;
    title: string;
    excerpt: string;
    date: string; // YYYY-MM-DD
    image: string;
    href: string; // link to the post page, e.g. /dealer-news/rainy-day-blowout
    description?: string;
    createdAt?: string; // YYYY-MM-DD
    gallery?: string;
    status?: string;
};

// All posts, newest first. Add new posts to post.json and they show up here.
export const getPosts: Post[] = [...posts].sort((a, b) =>
    b.date.localeCompare(a.date),
);
