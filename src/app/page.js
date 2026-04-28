import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../components/Hero/Hero";
import MeetMollie from "../../components/MeetMollie/MeetMollie";
import AboutPage from "../../components/About/AboutPage";
import Booking from "../../components/Booking/Booking";
import GallerySection from "../../components/Gallery/GallerySection";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Hero />
        <MeetMollie />
        <AboutPage />
        <GallerySection />
        <Booking />
      </main>
    </div>
  );
}
