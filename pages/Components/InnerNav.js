import React, { useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/css/InnerNav.module.css";
import Image from "next/image";
import { useState } from "react";
const InnerNav = ({ search, onChangeVal }) => {
  useEffect(() => {
    setisActive(window?.innerWidth <= 1024 ? true : false);
  }, []);

  const [isActive, setisActive] = useState(false);
  const [val, setVal] = useState("");
  return (
    <nav
      className={styles.navbar + " navbar is-transparent"}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/">
          <a className={styles.image}>
            <Image src="/img/logo.png" width="248px" height="98px" />
          </a>
        </Link>
        <div
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger  ${isActive ? "is-active" : ""}`}
          style={{ marginTop: "3px" }}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbar" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        {!search ? (
          <div className={"navbar-end" + " " + styles.navbarEnd}>
            <Link href="/vijesti">
              <a className="navbar-item">Vijest</a>
            </Link>
            <Link href="/sport">
              <a className="navbar-item">Sport</a>
            </Link>
            <Link href="/kultura">
              <a className="navbar-item">Kultura</a>
            </Link>
            <Link href="/lifestyle">
              <a className="navbar-item">Lifestyle</a>
            </Link>
            <Link href="/">
              <a className="navbar-item">Tech</a>
            </Link>
            <Link href="/na-danasnji-dan">
              <a className="navbar-item">Na današnji dan</a>
            </Link>
            <Link href="/zanimljivosti">
              <a className="navbar-item">Zanimljivosti</a>
            </Link>
            <Link href="/search">
              <a
                className={"navbar-item " + styles.searchMob}
                style={{ paddingRight: "0px !important" }}
              >
                <i className={styles.search + " " + "material-icons"}>search</i>
              </a>
            </Link>
          </div>
        ) : (
          <div className={styles.navbarSearch + " " + "navbar-end"}>
            <div
              className="control has-icons-left has-icons-right"
              style={{ minWidth: "100%" }}
            >
              <input
                className="input is-large"
                type="text"
                placeholder="Unesite traženi pojam"
                style={{ minWidth: "100%" }}
                name="val"
                value={val}
                onChange={(e) => {
                  onChangeVal(e.target.value);
                  setVal(e.target.value);
                }}
              />
              <span className={"icon is-medium is-left" + " " + styles.Icon}>
                <i className="material-icons">search</i>
              </span>
              <span className={"icon is-medium is-right" + " " + styles.Icon}>
                <i
                  onClick={() => {
                    setVal("");
                    onChangeVal("");
                  }}
                  className="material-icons"
                >
                  close
                </i>
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default InnerNav;
