import Link from "next/link";
import React from "react";
import Tab from "./Tab";

const Tabs = ({ tabList, activeTab, changeActiveTab }) => {
  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabList?.map((tab) => (
            <Tab
              key={tab?.name}
              activeTab={activeTab}
              name={tab?.name}
              changeActiveTab={changeActiveTab}
            />
          ))}
        </ul>
      </div>
      <div className="container section">
        {tabList?.map((tab) => (
          <div
            key={tab?.name}
            id={tab?.name}
            className="content-tab"
            style={{
              display: tab?.name === activeTab ? "block" : "none",
            }}
          >
            {tab?.posts.map((post) => (
              <Link
                key={post?.id}
                href={`/vijesti/${post?.lokacija
                  ?.toLowerCase()
                  .replace(" ", "-")}/${post?.id}`}
              >
                <a style={{ display: "block" }} className="title is-6">
                  {post?.title}
                </a>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
