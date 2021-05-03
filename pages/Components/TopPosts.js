import React from "react";
import styles from "../../styles/css/TopPosts.module.css";
import data from "../../data";
import Post from "./Post";

const TopPosts = ({ posts }) => {
  return (
    <section className={styles.topSection}>
      {posts?.map((post) => (
        <Post key={post?.id} post={post} />
      ))}
    </section>
  );
};

export default TopPosts;
// getStaticProps
