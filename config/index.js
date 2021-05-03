const dev = process.env.NODE_ENv !== "production";

export const server = dev
  ? "https://web-portal-chi.vercel.app/api/posts"
  : "https://www.site.com";
