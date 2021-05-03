import Link from "next/link";
import React from "react";
import styles from "../../styles/css/UdarnaVijest.module.css";

const UdarnaVijest = () => {
  return (
    <section className={styles.udarnaVijest}>
      <button
        className={"button is-danger" + " " + styles.btnUdarna}
        style={{}}
      >
        <i className="fas fa-fire-alt"></i>
        <span>Udarna vijest:</span>
      </button>
      <Link href="#">
        <a style={{ marginLeft: "3%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </a>
      </Link>
      <Link href="#">
        <a style={{ marginLeft: "3%" }}>
          tempor incididunt ut labore et dolore.
        </a>
      </Link>
      <Link href="#">
        <a style={{ marginLeft: "3%" }}>
          Accumsan in nisl nisi scelerisque eu sed do eiusmod
        </a>
      </Link>
    </section>
  );
};

export default UdarnaVijest;
