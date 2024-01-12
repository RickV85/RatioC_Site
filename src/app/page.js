import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import { HomeHero } from "./Components/HomeHero/HomeHero";
import { PopularServices } from "./Components/PopularServices/PopularServices";
import { HomePartners } from "./Components/HomePartners/HomePartners";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HomeHero />
      <PopularServices />
      <HomePartners />
    </main>
  );
}
