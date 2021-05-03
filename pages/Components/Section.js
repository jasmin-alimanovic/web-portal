import styles from "../../styles/css/Section.module.css";
import Post from "./Post";
import SectionTitle from "./SectionTitle";

const Section = ({ title, posts, isFlex, hasDescription }) => {
  return (
    <section className={styles.SportSection}>
      <SectionTitle title={title} />
      <div className={!isFlex ? styles.SportPosts : styles.PostsFlex}>
        {posts?.map((post) => (
          <Post
            hasDescription={hasDescription}
            key={post?.id}
            isFlex={isFlex}
            post={post}
          />
        ))}
      </div>
    </section>
  );
};

export default Section;
