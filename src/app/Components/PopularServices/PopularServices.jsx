import styles from "./popularservices.module.css";
import Image from "next/image";

export const PopularServices = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.div}>
        <div className={styles["text-wrapper"]}>POPULAR SERVICES</div>
        <div className={styles.service}>
          <img
            className={styles.img}
            alt="Lightning bolt"
            src="/lightning-bolt-circle.png"
          />
          <div className={styles["text-wrapper-2"]}>Electrical Engineering</div>
        </div>
        <div className={styles.service}>
          <img className={styles.img} alt="Tools" src="/tools.png" />
          <div className={styles["text-wrapper-2"]}>Root Cause Analysis</div>
        </div>
        <div className={styles.service}>
          <img className={styles.img} alt="Cube" src="/cube.png" />
          <div className={styles["text-wrapper-2"]}>Optics</div>
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
