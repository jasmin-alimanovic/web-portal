import { data } from "../../../data";

export default function handler({ query: { id } }, res) {
  const posts = data.filter((p) => p.id == id);
  if (posts.length > 0) {
    res.status(200).json(posts[0]);
  } else {
    res.status(404).json({ message: "Not found" });
  }
}
