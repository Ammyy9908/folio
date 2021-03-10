import Head from "next/head";
import Hero from "../components/Hero";
import HeroAbout from "../components/HeroAbout";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";

export default function Home({ ...pageProps }) {
  const { isNav, setNav } = pageProps;
  return (
    <div className={styles.container}>
      <Head>
        <title>Sumit Kumar</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossorigin="anonymous"
        />
      </Head>
      <Hero isNav={isNav} setNav={setNav} />
      <Navigation isNav={isNav} setNav={setNav} />
      {!isNav && <HeroAbout />}
      {!isNav && <Skills />}
      {!isNav && <Projects />}
    </div>
  );
}
