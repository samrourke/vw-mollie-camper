import Image from "next/image";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <>
      <section
        className={`${styles.storySection} ${styles.aboutSection}`}
        id="about"
      >
        <div className={styles.sectionTextureTop} />
        <div className={styles.container}>
          <h2 className="sectionTitle" id={styles.subtitleFirst}>
            More than just a van
          </h2>
          <div className={styles.storyGrid}>
            <div className={styles.storyCopy}>
              <p>
                I'm Andy, Mollie's driver and owner of Rock The Bus. I started
                Rock The Bus because of a genuine love for classic Volkswagens.
                I have always had a passion for them, especially the iconic
                split screens that seem to bring joy wherever they go.
              </p>

              <p>
                I feel incredibly lucky to share my beautiful Mollie with
                couples on one of the most memorable days of their lives. And
                after all, life is too short not to ride in a classic VW split
                screen!
              </p>
              <div className={styles.logoContainer} id={styles.logoFirst}>
                <img
                  src="/icon.png"
                  alt="Rock The Bus logo"
                  className={styles.logo}
                />
              </div>
            </div>

            <div className={styles.mediaWrap}>
              <div className={styles.whoRibbon}>
                <img
                  className={styles.bannerImg}
                  src="/images/who-banner.png"
                  alt="banner image with text saying 'Who We Are'"
                />
              </div>
              <div className={styles.imageCard}>
                <Image
                  src="/images/output/andy-ps.webp"
                  alt="Andy, the owner of Rock The Bus, standing next to Mollie, the vintage VW camper van, in a sunny outdoor setting"
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.storySection} ${styles.offerSection}`}>
          <div
            // style={{
            //   display: "flex",
            //   alignItems: "flex-end",
            //   justifyContent: "flex-end",
            //   width: " min(1200px, calc(100% - 3rem))",
            //   margin: "0 auto",
            // }}
            id={styles.subtitleSecond}
          >
            {" "}
            <h2 className="sectionTitle">What We Offer</h2>
          </div>

          <div className={styles.sectionTextureBottom} />
          <div className={styles.container}>
            <div className={`${styles.storyGrid} ${styles.reverse}`}>
              <div className={styles.mediaWrap}>
                <div className={styles.whatRibbon}>
                  <img
                    className={styles.bannerImg}
                    src="/images/what-banner.png"
                    alt="banner image with text saying 'What We Do'"
                  />
                </div>
                <div className={styles.imageCard}>
                  <Image
                    src="/images/output/champagne-01.webp"
                    alt="Classic VW wedding camper van ready for a special occasion"
                    fill
                    className={styles.image}
                    id={styles.logoSecond}
                  />
                </div>
              </div>

              <div className={styles.storyCopy}>
                <p>
                  Mollie is here to make your day feel calm, special and just
                  that little bit more unique.
                </p>
                <p>
                  Mollie shall pick up those to be wed along with any special
                  friends for a smooth, calm and stress-free journey to the
                  ceremony. We like to give everyone a moment here to breathe
                  and enjoy the journey.
                </p>
                <p>
                  Mollie would love you to toast your special day so please feel
                  free to bring a bottle of your favourite tipple and we shall
                  supply the rest.
                </p>
                <p>
                  Afterwards, she can whisk the newlyweds off to the celebration
                  and then she can stay a while longer for photographs. Mollie
                  loves being part of the occasion and is always very happy to
                  have her picture taken.
                </p>
                <div className={styles.logoContainer} id={styles.logoSecond}>
                  <img
                    src="/icon.png"
                    alt="Rock The Bus logo"
                    className={styles.logo}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
