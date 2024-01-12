import styles from "./popularservices.module.css";
import Image from "next/image";

export const PopularServices = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.div}>
        <h2 className={styles["header"]}>POPULAR SERVICES</h2>
        <div className={styles.service}>
          <img
            className={styles.img}
            alt="Lightning bolt"
            src="/lightning-bolt-circle.png"
          />
          <h3 className={styles["service-title"]}>Electrical Engineering</h3>
        </div>
        <div className={styles.service}>
          <img className={styles.img} alt="Tools" src="/tools.png" />
          <h3 className={styles["service-title"]}>Root Cause Analysis</h3>
        </div>
        <div className={styles.service}>
          <img className={styles.img} alt="Cube" src="/cube.png" />
          <h3 className={styles["service-title"]}>Optics</h3>
        </div>
      </div>
      <img
        className={styles["mask-group"]}
        alt="Mask group"
        src="/PopServicesSVG.svg"
      />
      <div className={styles["button-wrapper"]}>
        <div className={styles["primary-button"]}>
          <div role="button" className={styles["text-wrapper-3"]}>
            See All Services
          </div>
        </div>
      </div>
    </div>
  );
};
