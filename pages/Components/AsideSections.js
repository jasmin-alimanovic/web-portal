import React from "react";
import Tabs from "./Tabs";
import { useState, useEffect } from "react";
import { server } from "../../config/index";

const AsideSections = () => {
  const [activeTab, setActiveTab] = useState("Najnovije");

  async function getPosts() {
    const res = await fetch(`${server}/api/posts`);
    const post = await res.json();
    setTabList([
      { name: "Najnovije", posts: post },
      { name: "Najčitanije", posts: post.filter((p) => p.id < 4) },
      { name: "Preporuke", posts: post },
    ]);
  }
  useEffect(() => {
    getPosts();
  }, []);

  const [tabList, setTabList] = useState([]);

  function changeActiveTab(tab) {
    setActiveTab(tab);
  }
  return (
    <section style={{ marginTop: "2rem" }}>
      <Tabs
        tabList={tabList}
        changeActiveTab={changeActiveTab}
        activeTab={activeTab}
      />
    </section>
  );
};

export default AsideSections;
