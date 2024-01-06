import styles from "./homehero.module.css";

export const HomeHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.group}>
        <div className={styles["overlap-group"]}>
          <p className={styles["text-wrapper"]}>Your source for rapid turn-key engineered prototypes.</p>
          <button className={styles["primary-button"]}>
            <div className={styles.div}>Get started</div>
          </button>
        </div>
      </div>
    </div>
  );
};
