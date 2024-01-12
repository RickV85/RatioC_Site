import { MobileMenu } from "../MobileMenu/MobileMenu";
import SiteTitleSVG from "../SiteTitleSVG/SiteTitleSVG";
import styles from "./header.module.css";
import Hamburger from "hamburger-react";

export default function Header({ menuOpen, setMenuOpen, toggleContactMenu }) {
  return (
    <>
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
            </svg>
            <div className={styles["hamburger-button"]}>
              <Hamburger
                toggled={menuOpen}
                toggle={setMenuOpen}
                direction="left"
                label="open hamburger menu button"
                rounded={true}
                size={16}
                color="#ffffff"
              />
            </div>
          </div>
        </div>
      </header>
      {menuOpen ? <MobileMenu toggleContactMenu={toggleContactMenu} /> : null}
    </>
  );
}
