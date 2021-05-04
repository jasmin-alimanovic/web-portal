const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "https://jsonplaceholder.typicode.com/todos"
  : "https://web-portal1.vercel.app/";
