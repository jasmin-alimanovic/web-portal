import { data } from "../../../data";

export default function handler(req, res) {
  const posts = data.sort((p1, p2) => (p1.istop < p2.istop ? 1 : -1));
  res.status(200).json(posts);
}
