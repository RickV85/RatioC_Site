import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import { HomeHero } from "./Components/HomeHero/HomeHero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HomeHero />
    </main>
  );
}
