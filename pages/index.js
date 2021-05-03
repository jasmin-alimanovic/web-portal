import Reklama from "./Components/Reklama";
import UdarnaVijest from "./Components/UdarnaVijest";
import TopPosts from "./Components/TopPosts";
import Sections from "./Components/Sections";
import Layout from "./Components/Layout";
import { server } from "../config/index";

export default function Home({ posts }) {
  return (
    <>
      <Layout search={false}>
        <Reklama img="/img/imperea.jpg" />
        <UdarnaVijest />
        <TopPosts posts={posts} />
        <Reklama img="/img/jahorina.png" height="250px" />
        <Sections />
      </Layout>
    </>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/posts`);
  let posts = await res.json();
  posts = posts.filter((post) => post.id <= 5);

  return {
    props: {
      posts,
    },
  };
};
