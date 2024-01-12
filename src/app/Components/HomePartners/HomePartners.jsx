import styles from "./homepartners.module.css";

export const HomePartners = () => {
  return (
    <div className={styles.frame}>
      <h2 className={styles["header"]}>OUR PARTNERS</h2>
      <div className={styles["frame-wrapper"]}>
        <div className={styles.div}>
          <img
            className={styles.unsplash}
            alt="Unsplash"
            src="/unsplash_DKPh3G8HLRU.svg"
          />
          {/* Testimonial component if more added? */}
          <div className={styles["testimonial-wrapper"]}>
            <p className={styles["testimonial-title"]}>
              Head of Dept, <br />
              Princeton University
            </p>
          </div>
        </div>
      </div>
      <p className={styles["testimonial-body"]}>
        &#34;RatioC has made creating conversation dialogue journeys easy and
        smooth. It has facilitated the collaboration and best practice sharing
        between people across different teams and countries.” - Person
      </p>
    </div>
  );
};
