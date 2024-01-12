import { MobileContactLinks } from "@/app/MobileContactLinks/MobileContactLinks";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["button-div"]}>
        <button className={styles["contact-button"]}>Contact Us</button>
        <MobileContactLinks />
      </div>
      <div className={styles.copyright}>
        ©2020 by Ratiocinative Engineering Services LLC.
      </div>
    </footer>
  );
};
