import styles from "./styles.module.css";

export const MobileContactLinks = () => {
  return (
    <div className={styles["mobile-contact-div"]}>
      <img
        className={`${styles["contact-icon"]} ${styles["scale-down"]}`}
        src="/LinkedInLogo.svg"
        alt="LinkedIn Logo"
      />
      <img
        className={`${styles["contact-icon"]} ${styles["scale-down"]}`}
        src="/FBLogo.svg"
        alt="Facebook Logo"
      />
      <img
        className={styles["contact-icon"]}
        src="/phone.svg"
        alt="Phone Icon"
      />
    </div>
  );
};
