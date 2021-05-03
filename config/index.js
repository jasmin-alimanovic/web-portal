const dev = process.env.NODE_ENv !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://web-portal-chi.vercel.app";
