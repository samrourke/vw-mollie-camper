import Image from "next/image";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <>
      {" "}
      {/* <section className={styles.hero}>
        <div className={styles.heroTexture} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>About Rock The Bus</p>
            <h1 className={styles.heroTitle}>
              A love of split screens, happy journeys and memorable arrivals
            </h1>
            <p className={styles.heroText}>
              Rock the Bus is all about sharing the charm of classic Volkswagen
              camper vans with couples looking for something joyful, relaxed and
              full of personality on their wedding day.
            </p>
          </div>
        </div>
      </section> */}
      <section
        className={`${styles.storySection} ${styles.aboutSection}`}
        id="about"
      >
        <div className={styles.sectionTextureTop} />
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyCopy}>
              {/* <p className={styles.sectionLabel}>Who we are</p> */}
              <h2 className="sectionTitle">More than just a van</h2>
              <p>
                Rock the Bus is built around a genuine love for classic
                Volkswagen camper vans. I have always had a passion for these
                cars, especially the iconic split screens that seem to bring joy
                wherever they go.
              </p>
              {/* <p>
                With their curved shape, endless windows and unmistakable
                character, they feel less like a vehicle and more like something
                from another time. There’s something special about arriving in
                one. It slows everything down and makes the journey feel like
                part of the occasion rather than just the travel in between.
              </p> */}
              <p>
                We feel incredibly lucky to share our beautiful camper, Mollie,
                with couples on one of the most memorable days of their lives.
                And after all, life is too short not to ride in a classic VW
                split screen!
              </p>
            </div>

            <div className={styles.mediaWrap}>
              <div className={styles.whoRibbon}>
                <img
                  className={styles.bannerImg}
                  src="/images/who-banner.png"
                />
              </div>
              <div className={styles.imageCard}>
                <Image
                  src="/images/vw 20.jpg"
                  alt="Mollie the vintage VW camper van parked outdoors"
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.storySection} ${styles.offerSection}`}>
        <div className={styles.sectionTextureBottom} />
        <div className={styles.container}>
          <div className={`${styles.storyGrid} ${styles.reverse}`}>
            <div className={styles.mediaWrap}>
              <div className={styles.whatRibbon}>
                <img
                  className={styles.bannerImg}
                  src="/images/what-banner.png"
                />
              </div>
              <div className={styles.imageCard}>
                <Image
                  src="/images/vw 10.jpg"
                  alt="Classic VW wedding camper van ready for a special occasion"
                  fill
                  className={styles.image}
                />
              </div>
            </div>

            <div className={styles.storyCopy}>
              <h2 className="sectionTitle">What We Offer</h2>
              <p>
                Mollie is here to make your day feel calm, special and just that
                little bit different.
              </p>
              <p>
                She’ll arrive to collect those about to be wed, along with a
                special friend or family member if needed, and take them to the
                ceremony in a relaxed and unhurried way giving everyone a moment
                to breathe before everything begins.
              </p>
              <p>
                Afterwards, she can whisk the newlyweds off to the celebration
                and, if you’d like, she can stay a little longer for
                photographs. Mollie loves being part of the occasion and is
                always very happy to have her picture taken.
              </p>
              {/* <p>
                Whether it’s the arrival, the journey itself, or those lovely
                in-between moments, she brings warmth, character and something
                truly memorable to the day.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      {/* <section className={styles.expectSection}>
        <div className={styles.container}>
          <div className={styles.expectIntro}>
            <p className={styles.sectionLabel}>What to expect</p>
            <h2 className={styles.sectionTitle}>
              A relaxed and thoughtful experience
            </h2>
            <p className={styles.expectText}>
              From first arrival to those post-ceremony photo moments, Rock The
              Bus is all about making the journey feel smooth, special and full
              of character.
            </p>
          </div>

          <div className={styles.cardRow}>
            <article className={styles.infoCard}>
              <h3>Friendly chauffeur</h3>
              <p>
                A warm, professional presence to help everything feel calm and
                easy on the day.
              </p>
            </article>

            <article className={styles.infoCard}>
              <h3>Relaxed journeys</h3>
              <p>
                Unhurried travel that lets you enjoy the moment instead of
                rushing through it.
              </p>
            </article>

            <article className={styles.infoCard}>
              <h3>Time for photos</h3>
              <p>
                Plenty of charm and character for memorable photographs with
                Mollie.
              </p>
            </article>

            <article className={styles.infoCard}>
              <h3>Flexible feel</h3>
              <p>
                Timings can be discussed so the experience works beautifully for
                your plans.
              </p>
            </article>
          </div>
        </div>
      </section> */}
      {/* <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaCopy}>
              <p className={styles.sectionLabel}>Enquiries</p>
              <h2 className={styles.ctaTitle}>
                Thinking Mollie might be the perfect fit for your day?
              </h2>
              <p className={styles.ctaText}>
                Get in touch to check availability, talk through your plans and
                find out what to expect from booking Rock The Bus.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <a href="/#contact" className={styles.primaryButton}>
                Get in touch
              </a>
              <a href="/#meet-mollie" className={styles.secondaryButton}>
                Meet Mollie
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
