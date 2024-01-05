import SiteTitleSVG from "../SiteTitleSVG/SiteTitleSVG";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.visuallyHidden}>
        Ratiocinative Engineering Services LLC
      </h1>
      <div className={styles.siteTitleDiv}>
        <SiteTitleSVG />
        <h2 className={styles.tagline}>Rapid Engineering Services</h2>
      </div>
      <div className={styles.hamburgerContainer}>
        <div className={styles.hamburger}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle cx="16" cy="16" r="15.5" stroke="white" />
            <rect x="8" y="11" width="16" height="1" rx="0.5" fill="white" />
            <rect x="8" y="16" width="16" height="1" rx="0.5" fill="white" />
            <rect x="8" y="21" width="16" height="1" rx="0.5" fill="white" />
          </svg>
        </div>
      </div>
    </header>
  );
}
