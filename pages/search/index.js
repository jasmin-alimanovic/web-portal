import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Reklama from "../Components/Reklama";
import Section from "../Components/Section";
import styles from "../../styles/css/Search.module.css";
import Pagination from "../Components/Pagination";
import AsideSections from "../Components/AsideSections";
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

  /**
   *
   * @param {string} value
   * fetches data from api and displays filtered data on the screen
   */
  async function onChangeVal(value) {
    const res = await fetch(`${server}/api/posts`);
    const posts = await res.json();
    setPosts(
      posts.filter((post) =>
        post?.title?.toLowerCase().includes(value?.toLowerCase())
      )
    );
  }

  /**
   * fetches data from api and stores it in use state
   */
  const getPosts = async () => {
    const res = await fetch(`${server}/api/posts`);
    const data = await res.json();
    setPosts(data);
  };

  /**
   * use effect
   */
  useEffect(() => {
    getPosts();
  }, []);

  /**
   * return filtered posts
   */
  return (
    <Layout search={true} onChangeVal={onChangeVal}>
      <Reklama img="/img/jahorina.png" />
      <div className={styles.main}>
        <div
          className={styles.posts}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Section
            isFlex={true}
            posts={currentPosts}
            title="Rezultati pretrage"
          />
          <Pagination
            posts={posts}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            paginate={paginate}
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

export default index;
