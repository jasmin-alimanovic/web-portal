const dev = process.env.NODE_ENv !== "production";

export const server = dev
  ? "https://web-portal-chi.vercel.app"
  : "https://web-portal-chi.vercel.app";
