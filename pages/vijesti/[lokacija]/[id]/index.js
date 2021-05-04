import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../../Components/Layout";
import SinglePost from "../../../Components/SinglePost";
import Reklama from "../../../Components/Reklama";
import Section from "../../../Components/Section";
import Tabs from "../../../Components/Tabs";
import "bulma/css/bulma.min.css";
import styles from "../../../../styles/css/PostPage.module.css";
import { server } from "../../../../config/index";

const index = ({ post }) => {
  //declaration of use states
  const [tabList, setTabList] = useState([]);
  const [activeTab, setActiveTab] = useState("Najnovije");
  const [posts, setPosts] = useState([]);

  /**
   * function that fetches posts from api and stores it in use state,
   * also in this function list of tabs is set
   */
  async function getPosts() {
    const res = await fetch(`${server}/api/posts`);
    const post = await res.json();
    setPosts(post);
    setTabList([
      { name: "Najnovije", posts: post },
      { name: "Najčitanije", posts: post.filter((p) => p.id < 4) },
      { name: "Preporuke", posts: post },
    ]);
  }
  useEffect(() => {
    getPosts();
  }, []);

  /**
   *
   * @param {string} tab
   * changes active tab
   */
  function changeActiveTab(tab) {
    setActiveTab(tab);
  }

  return (
    <Layout>
      <Reklama img="/img/jahorina.png" />
      <div className={styles.main}>
        <div className={styles.post}>
          <SinglePost post={post} />
          <Section
            title="Povezani članci"
            posts={posts.filter((p) => p.id < 3)}
            description={true}
          />
        </div>
        <div className={styles.aside}>
          <Reklama img="/img/vertical.jpg" />
          <Tabs
            tabList={tabList}
            changeActiveTab={changeActiveTab}
            activeTab={activeTab}
          />
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/posts/${context.params.id}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};

export default index;
