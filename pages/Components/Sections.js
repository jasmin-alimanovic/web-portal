import Section from "../Components/Section";
import AsideSections from "./AsideSections";
import styles from "../../styles/css/Sections.module.css";
import React, { useState, useEffect } from "react";
import { server } from "../../config/index";

const Sections = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch(`${server}/api/sport`);
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className={styles.sectionContent}>
      <div className={styles.sections}>
        <Section posts={posts} title="Sport" />
        <Section posts={posts} title="Kultura" />
        <Section posts={posts} title="Zanimljivosti" />
      </div>
      <AsideSections />
    </div>
  );
};

export default Sections;
