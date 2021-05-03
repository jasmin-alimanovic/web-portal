import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import Reklama from "../Components/Reklama";
import Section from "../Components/Section";
import styles from "../../styles/css/Search.module.css";
import AsideSections from "../Components/AsideSections";
import Pagination from "../Components/Pagination";
import axios from "axios";
import { server } from "../../config/index";

const index = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`${server}/api/posts`);
      setPosts(res.data);
    };
    getPosts();
  }, []);

  function paginate(pageNum) {
    setCurrentPage(pageNum);
  }
  //variables for handling posts
  let indexOfLastPost = postsPerPage * currentPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <Layout>
      <Head>
        <title>PRINCIP NEWS | Vijesti</title>
      </Head>
      <Reklama img="/img/jahorina.png" />
      <div className={styles.main}>
        <div
          className={styles.posts}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Section
            isFlex={false}
            hasDescription={true}
            posts={currentPosts}
            title="Vijesti"
          />
        </div>
        <div className={styles.side}>
          <Reklama img="/img/vertical.jpg" />
          <AsideSections />
        </div>
      </div>
      <Pagination
        posts={posts}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </Layout>
  );
};

export default index;
