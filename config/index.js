const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "https://web-portal1.vercel.app"
  : "https://web-portal1.vercel.app";
