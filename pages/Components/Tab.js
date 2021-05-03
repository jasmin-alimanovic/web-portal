import React from "react";

const Tab = ({ name, activeTab, changeActiveTab }) => {
  return (
    <li
      className={name === activeTab ? "is-active" : ""}
      onClick={() => {
        changeActiveTab(name);
      }}
    >
      <a>{name}</a>
    </li>
  );
};

export default Tab;
