const dev = process.env.NODE_ENv !== "production";

export const server = dev
  ? "https://jsonplaceholder.typicode.com/todos"
  : "https://www.site.com";
