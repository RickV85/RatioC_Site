import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import { HomeHero } from "./Components/HomeHero/HomeHero";
import { PopularServices } from "./Components/PopularServices/PopularServices";
import { HomePartners } from "./Components/HomePartners/HomePartners";
import { Footer } from "./Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <HomeHero />
        <PopularServices />
        <HomePartners />
      </main>
      <Footer />
    </>
  );
}
