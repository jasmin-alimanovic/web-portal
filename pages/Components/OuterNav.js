import React from "react";
import "bulma/css/bulma.min.css";
import Link from "next/link";
import styles from "../../styles/css/OuterNav.module.css";

const OuterNav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarMenu + " " + "navbar-menu"}>
        <div className={styles.end + " " + "navbar-end"}>
          <Link href="/kontakt">
            <a className="navbar-item">Kontakt</a>
          </Link>
          <Link href="/dojavi-vijest">
            <a className="navbar-item">Dojavi vijest</a>
          </Link>
          <Link href="/">
            <a className="navbar-item lat">Lat</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default OuterNav;
