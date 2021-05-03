import styles from "../../styles/css/Layout.module.css";
import OuterNav from "./OuterNav";
import InnerNav from "./InnerNav";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children, search, onChangeVal }) => {
  return (
    <>
      <OuterNav />
      <InnerNav search={search} onChangeVal={onChangeVal} />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />
        <title>Princip news</title>
      </Head>

      <div className="container">
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
