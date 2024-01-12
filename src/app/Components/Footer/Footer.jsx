import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["button-div"]}>
        <button className={styles["contact-button"]}>Contact Us</button>
        <div className={styles["social-button-div"]}>
          <img className={`${styles['contact-icon']} ${styles['scale-down']}`} src="/LinkedInLogo.svg" alt="LinkedIn Logo"/>
          <img className={`${styles['contact-icon']} ${styles['scale-down']}`} src="/FBLogo.svg" alt="Facebook Logo"/>
          <img className={styles["contact-icon"]} src="/phone.svg" alt="Phone Icon"/>
        </div>
      </div>
      <div className={styles.copyright}>©2020 by Ratiocinative Engineering Services LLC.</div>
    </footer>
  );
};
