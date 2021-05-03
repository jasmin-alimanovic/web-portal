import React from "react";
import Layout from "../../Components/Layout";
import Head from "next/head";
import Reklama from "../../Components/Reklama";
import Section from "../../Components/Section";
import styles from "../../../styles/css/Search.module.css";
import AsideSections from "../../Components/AsideSections";

const index = ({ posts }) => {
  console.log(posts);
  return (
    <Layout>
      <Head>
        <title>PRINCIP NEWS | {posts[0]?.lokacija}</title>
      </Head>
      <Reklama img="\img\jahorina.png" />
      <div className={styles.main}>
        <div
          className={styles.posts}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Section
            isFlex={false}
            hasDescription={true}
            posts={posts}
            title="Rezultati pretrage"
          />
        </div>
        <div className={styles.side}>
          <Reklama img="/img/vertical.jpg" />
          <AsideSections />
        </div>
      </div>
    </Layout>
  );
};
export const getServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/posts/`);
  let posts = await res.json();
  posts = posts.filter(
    (p) =>
      p?.lokacija?.toLowerCase().replace(" ", "-") == context.params.lokacija
  );
  return {
    props: {
      posts,
    },
  };
};

export default index;
