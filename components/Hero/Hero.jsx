import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.banner}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          {/* <p className={styles.eyebrow}>Vintage VW wedding hire</p> */}

          <div className={styles.titleDiv}>
            {/* <div className={styles.titleTextContainer}>
              <h1 className={styles.title}>ROCK THE BUS</h1>
              <img
                src="/images/hero-banner.png"
                className={styles.bannerImg}
                alt="Banner Image Vintage VW Hire"
              />
            </div> */}
            <img
              src="/icon.png"
              alt="rock the bus logo"
              className={styles.logo}
            />

            {/* <p className={styles.subtitle}>
              Classic split-screen camper van hire for weddings, photos and
              unforgettable arrivals.
            </p> */}
            <h2 className={styles.subtitle}>Taking Happy People</h2>
            <h2 className={styles.subtitle}>In A Happy Van</h2>
            <h2 className={styles.subtitle}>To Their Happy Day</h2>
          </div>

          <div className={styles.buttons}>
            <a href="#contact" className="cta">
              Get in Touch
            </a>
            <a href="#meet-mollie" className="cta cta_teal">
              Meet Mollie
            </a>
          </div>
        </div>
        {/* 
        <div className={styles.sunBadge}>Fun • Colourful • Unforgettable</div> */}
      </div>
      <div className={styles.heroBottom}>
        <p className={styles.meta}>
          Available for weddings, events and styled shoots across South London.
          <span> </span>
          <Link style={{ textDecoration: "underline" }} href="/#contact">
            {" "}
            Get in touch
          </Link>
          <span> </span>
          to find out more and check availability.
        </p>
      </div>
    </section>
  );
}
