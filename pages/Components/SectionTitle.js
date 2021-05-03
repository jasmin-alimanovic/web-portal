import styles from "../../styles/css/SectionTitle.module.css";

const SectionTitle = ({ title }) => {
  return (
    <div className={styles.sectionTitle}>
      <h1 className="title is-2" style={{ fontWeight: "lighter !important" }}>
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
