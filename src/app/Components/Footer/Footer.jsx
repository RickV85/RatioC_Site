import { MobileContactLinks } from "@/app/MobileContactLinks/MobileContactLinks";
import styles from "./footer.module.css";

export const Footer = ({ toggleContactMenu }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles["button-div"]}>
        <button
          onClick={() => toggleContactMenu()}
          className={styles["contact-button"]}
        >
          Contact Us
        </button>
        <MobileContactLinks />
      </div>
      <div className={styles.copyright}>
        ©2020 by Ratiocinative Engineering Services LLC.
      </div>
    </footer>
  );
};
