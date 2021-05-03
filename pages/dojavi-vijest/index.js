import Head from "next/head";
import React from "react";
import Layout from "../Components/Layout";
import Reklama from "../Components/Reklama";
import SectionTitle from "../Components/SectionTitle";
import styles from "../../styles/css/Dojavi.module.css";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>PRINCIP NEWS | KONTAKT</title>
      </Head>
      <Reklama img="/img/jahorina.png " />
      <div>
        <SectionTitle title="Kontaktirajte nas" />

        <div className="main" style={{ width: "100%", display: "flex" }}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              marginRight: "1rem",
            }}
          >
            <div
              className="inputs"
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              <div
                className="field"
                style={{ width: "100%", marginRight: "1rem" }}
              >
                <div
                  className="field-label is-normal is-left"
                  style={{ textAlign: "left" }}
                >
                  <label className="label">Ime i prezime</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="John Doe"
                      />
                    </p>
                  </div>
                </div>
              </div>
              {/** Email input */}
              <div className="field" style={{ width: "100%" }}>
                <div
                  className="field-label is-normal"
                  style={{ textAlign: "left" }}
                >
                  <label className="label">Email</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="primjer@email.com"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="field" style={{ width: "100%" }}>
              <div
                className="field-label is-normal"
                style={{ textAlign: "left" }}
              >
                <label className="label">Vijest</label>
              </div>
              <div className="control">
                <textarea
                  className="textarea has-fixed-size is-rounded"
                  rows="15"
                  placeholder="Sadržaj vijesti"
                ></textarea>
              </div>
            </div>
            {/**
             * input for adding photos
             */}
            <div className="field" style={{ width: "50%" }}>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      style={{ border: "none" }}
                      className={`input ${styles.CustomFileInput}`}
                      type="file"
                    />
                  </p>
                </div>
              </div>
            </div>
            {/**
             * button posalji
             */}
            <button
              style={{
                width: "30%",
                height: "50px",
                color: "white !important",
              }}
              type="submit"
              className="button is-primary"
            >
              POŠALJI
            </button>
          </form>

          <div style={{ width: "30%", marginLeft: "1rem", marginTop: "1rem" }}>
            <Reklama img="/img/vertical.jpg" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
