import { data } from "../../data";

export default function handler(req, res) {
  const posts = data.filter((post) => post.kategorija.id === 1);
  res.status(200).json(posts);
}
