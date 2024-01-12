import React from "react";
import styles from "./mobilemenu.module.css";
import Link from "next/link";
import { MobileContactLinks } from "@/app/MobileContactLinks/MobileContactLinks";

export const MobileMenu = () => {
  return (
    <div className={styles["menu-wrapper"]}>
      <menu className={styles.menu}>
        <div className={styles["mobile-menu-hero"]}>
          <img
            style={{ width: "100%", height: "100%" }}
            alt="Turtle with rocket on back"
            src="/RocketTurtle.svg"
          />
        </div>

        <div className={styles["link-container"]}>
          <Link href={"/"} className={styles["menu-item"]}>
            HOME
          </Link>
          <Link href={"/"} className={styles["menu-item"]}>
            ABOUT US
          </Link>
          <Link href={"/"} className={styles["menu-item"]}>
            PORTFOLIO
          </Link>
          <Link href={"/"} className={styles["menu-item"]}>
            SERVICES
          </Link>
        </div>
        <button className={styles["contact-button"]}>
        <p>Contact Us</p>
        </button>
        <MobileContactLinks />
      </menu>
    </div>
  );
};
