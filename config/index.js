const dev = process.env.NODE_ENv !== "production";

export const server = dev ? "http://localhost:3000" : "https://www.site.com";
