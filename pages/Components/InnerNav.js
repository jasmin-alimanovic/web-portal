import React, { useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/css/InnerNav.module.css";
import Image from "next/image";
import { useState } from "react";
const InnerNav = ({ search, onChangeVal }) => {
  const [width, setWidth] = useState(1280);
  const [isActive, setisActive] = useState(false);
  const [val, setVal] = useState("");
  useEffect(() => {
    setWidth(window?.innerWidth);
    setisActive(window?.innerWidth <= 1024 && search ? true : false);
  }, []);

  return (
    <nav
      className={`${styles.navbar}   navbar is-transparent ${
        search && styles.navbarForSearch
      }`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className={"navbar-brand " + styles.navbarBrand}>
        <Link href="/">
          <a className={styles.image} style={{ border: "none" }}>
            <Image
              src={
                width > 1024 || search
                  ? "/img/logo.png"
                  : "/img/footer-logo.png"
              }
              width="248px"
              height="98px"
            />
          </a>
        </Link>
        <div
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger ${styles.burger}  ${
            isActive ? "is-active" : ""
          }`}
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

      <div
        id="navbar"
        className={`navbar-menu ${styles.navbarMenu} ${
          isActive ? `${styles.isActive} is-active` : ""
        }`}
      >
        {!search ? (
          <>
            <div className={"navbar-start" + " " + styles.navbarStart}>
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
                  <i className={styles.search + " " + "material-icons"}>
                    search
                  </i>
                </a>
              </Link>
            </div>
            <div className={styles.navbarEnd}>
              <div
                className={`${styles.vijesti} ${styles.contactInfo} navbar-item`}
              >
                <h2>Kontaktirajte nas</h2>
                <br />
                <p>redakcija@princip.news</p>
                <p>marketing@princip.news</p>
                <br />
                <h2>Pratite nas</h2>
                <div className={styles.socialNetworks}>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.google.com/" target="_blank">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </>
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
