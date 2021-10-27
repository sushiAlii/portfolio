import type { NextPage } from "next";
import Head from "next/head";
import { AboutContent } from "../components/AboutContent";
import { ContactMe } from "../components/ContactMe";
import { Footer } from "../components/Footer";
import { MainContent } from "../components/MainContent";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sushii Ali</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <MainContent />
      </div>
      <div className="full-height">
        <AboutContent />
      </div>
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
