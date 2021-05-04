import Image from "next/image";
import styles from "../../styles/css/Footer.module.css";
import Link from "next/link";
import { server } from "../../config/index";

const Footer = () => {
  return (
    <footer className={`${styles.footer} footer`}>
      <div className={styles.brand}>
        <Image
          src="/img/footer-logo.png"
          height={100}
          width={300}
          layout="intrinsic"
        />
        <div className={styles.logos}>
          <Link href="#">
            <a className={`${styles.store} ${styles.storeApple}`}>
              <div className={styles.storeLogo}>
                <i className="fab fa-apple"></i>
              </div>
              <div className={styles.storeContent}>
                <p className="subtitle">Available on the</p>
                <h2 className="title is-2">App Store</h2>
              </div>
            </a>
          </Link>
          <Link href="#">
            <a className={`${styles.store} ${styles.storeGoogle}`}>
              <div className={`${styles.storeLogo} ${styles.storeLogoGoogle}`}>
                <i className="fab fa-google-play"></i>
              </div>
              <div
                className={`${styles.storeContent} ${styles.storeContentGoogle}`}
              >
                <p className="subtitle">GET IT ON</p>
                <h2 className="title is-2">Google Play</h2>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className={`${styles.Content} content`}>
        <div className={`${styles.mainContent} content`}>
          <div className={styles.vijesti}>
            <h2>Vijesti</h2>
            <Link href={`${server}/vijesti/istocno-sarajevo`}>
              <a>Istočno Sarajevo</a>
            </Link>
            <Link href={`${server}/vijesti/republika-srpska`}>
              <a>Republika Srpska</a>
            </Link>
            <Link href={`${server}/vijesti/bih`}>
              <a>BiH</a>
            </Link>
            <Link href={`${server}/vijesti/region`}>
              <a>Region</a>
            </Link>
            <Link href={`${server}/vijesti/svijet`}>
              <a>Svijet</a>
            </Link>
          </div>
          <div className={styles.vijesti}>
            <h2>Magazin</h2>
            <Link href={`${server}/magazin`}>
              <a>Kultura</a>
            </Link>
            <Link href={`${server}/kultura`}>
              <a>Sport</a>
            </Link>
            <Link href={`${server}/na-danasnji-dan`}>
              <a>Na današnji dan</a>
            </Link>
            <Link href={`${server}/zanimljivosti`}>
              <a>Zanimljivosti</a>
            </Link>
            <Link href={`${server}/tech`}>
              <a>Tech</a>
            </Link>
          </div>
          <div className={`${styles.vijesti} ${styles.contactInfo}`}>
            <h2>Kontaktirajte nas</h2>
            <p>redakcija@princip.news</p>
            <p>marketing@princip.news</p>

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
        <div className={`styles.copyright has-text-centered caption`}>
          <p
            className="caption"
            style={{ color: "white", fontSize: "12px", lineHeight: "22px" }}
          >
            &copy; 2021 PRINCIP NEWS. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
