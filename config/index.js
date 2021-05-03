const dev =
  process.env.NODE_ENV !== "production" ||
  process.env.NODE_ENV !== "Production";

export const server = dev
  ? "http://localhost:3000"
  : "https://web-portal-chi.vercel.app";
