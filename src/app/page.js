"use client";
import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import { HomeHero } from "./Components/HomeHero/HomeHero";
import { PopularServices } from "./Components/PopularServices/PopularServices";
import { HomePartners } from "./Components/HomePartners/HomePartners";
import { Footer } from "./Components/Footer/Footer";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen ? null : (
        <>
          <main className={styles.main}>
            <HomeHero />
            <PopularServices />
            <HomePartners />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
