"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./MeetMollie.module.css";
import modalStyles from "./GalleryModal.module.css";
import Image from "next/image";
import gsap from "gsap";

const galleryImages = [
  {
    src: "/images/vw 14.jpg",
    alt: "Mollie vintage VW camper van side view",
  },
  {
    src: "/images/vw 5.jpg",
    alt: "Mollie vintage VW camper van parked outdoors",
  },
  {
    src: "/images/vw 6.jpg",
    alt: "Mollie vintage VW camper van wedding styling detail",
  },
  {
    src: "/images/vw 7.jpg",
    alt: "Mollie vintage VW camper van front angle view",
  },
  {
    src: "/images/vw 1.jpg",
    alt: "Mollie vintage VW camper van front angle view",
  },
  {
    src: "/images/vw 3.jpg",
    alt: "Mollie vintage VW camper van front angle view",
  },
];

export default function MeetMollie() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideshowRef = useRef(null);
  const slidesRef = useRef([]);
  const intervalRef = useRef(null);
  const modalRef = useRef(null);
  const modalImageRef = useRef(null);

  const setSlideRef = (el, index) => {
    slidesRef.current[index] = el;
  };

  const openModal = (index = activeIndex) => {
    setActiveIndex(index);

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goPrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  useEffect(() => {
    const transitionTime = isModalOpen ? 30000 : 4500;
    const slides = slidesRef.current.filter(Boolean);
    if (!slides.length) return;

    gsap.set(slides, {
      autoAlpha: 0,
      scale: 1.02,
    });

    gsap.set(slides[0], {
      autoAlpha: 1,
      scale: 1,
    });

    let current = 0;

    intervalRef.current = setInterval(() => {
      const next = (current + 1) % slides.length;

      gsap.to(slides[current], {
        autoAlpha: 0,
        scale: 1.02,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.to(slides[next], {
        autoAlpha: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      });

      current = next;
      setActiveIndex(current);
    }, transitionTime);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKeyDown);

    if (modalRef.current && modalImageRef.current) {
      gsap.fromTo(
        modalRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1, ease: "power2.out" },
      );

      gsap.fromTo(
        modalImageRef.current,
        { autoAlpha: 0, scale: 0.96, y: 20 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" },
      );
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen || !modalImageRef.current) return;

    gsap.fromTo(
      modalImageRef.current,
      { autoAlpha: 0, scale: 0.98 },
      { autoAlpha: 1, scale: 1, duration: 0.3, ease: "power2.out" },
    );
  }, [activeIndex, isModalOpen]);

  return (
    <>
      <section className={styles.section} id="meet-mollie">
        <div className={styles.container}>
          <div className={styles.topRow}>
            <div className={styles.copy}>
              <h2 className="sectionTitle">A Classic VW Camper With Charm</h2>

              <p className={styles.text}>
                Mollie is our much-loved vintage VW split-screen camper van,
                available for weddings, styled shoots and special occasions.
              </p>
              <p className={styles.text}>
                Full of character and guaranteed to turn heads, she brings a
                fun, colourful touch to the day and makes every arrival feel
                that little bit more memorable.
              </p>

              <p className={styles.text}>
                To make your journey a truly unique, fun and memorable one look
                no further than Rock the Bus and our beautiful Mollie. She only
                brings joy and happiness on her travels.
              </p>
            </div>

            <div className={styles.mediaWrap}>
              <div className={styles.ribbonWrap}>
                <Image
                  src="/images/meet-banner.png"
                  alt=""
                  width={260}
                  height={90}
                  className={styles.ribbon}
                />
              </div>

              <button
                type="button"
                className={styles.imageCard}
                onClick={() => openModal(activeIndex)}
                aria-label="Open Mollie gallery"
              >
                <div ref={slideshowRef} className={styles.slideshow}>
                  {galleryImages.map((image, index) => (
                    <div
                      key={image.src}
                      ref={(el) => setSlideRef(el, index)}
                      className={styles.slide}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className={styles.image}
                        sizes="(max-width: 980px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </button>

              <button
                type="button"
                className="cta"
                id={styles.galleryCTA}
                onClick={() => openModal(activeIndex)}
              >
                Open Gallery
              </button>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.infoBlock}>
              <h3 className={styles.subtitle}>About Mollie</h3>
              <p>
                Mollie loves a wedding and she loves being the centre of
                attention, she is a stunning 1966 VW 21 window split screen
                samba deluxe.{" "}
              </p>
              <p>
                She offers a spacious and comfortable interior, surrounded by
                those iconic VW windows allowing the light to flood in. She is
                very proud of her full-length sunroof which when open only adds
                to the experience.
              </p>
              <p>
                {" "}
                Finished in two tone authentic VW Turquoise and Blue White, she
                is immaculately dressed for any occasion.
              </p>
            </div>
            <div className={styles.infoBlock}>
              <h3 className={styles.subtitle}>Mollie's Costumes</h3>
              <p>
                Mollie loves being decorated in flowers, bows and ribbons, she
                loves dressing up, just tell her what you would like, and she
                will make every effort to be as eye-catching as possible. She
                loves making everyone who sees her happy.
              </p>
              <p>
                {" "}
                She also loves hearing your special tunes so please just tell
                her and she will play them. Her tastefully attired chauffeur
                also comes in a variety of costumes if required.
              </p>
            </div>
          </div>

          {/* <div className={styles.cards}>
            <article className={styles.card}>
              <h3>About Mollie</h3>
              <p>
                Mollie loves a wedding and she loves being the center of
                attention, she is a stunning 1966 VW 21 window split screen
                samba deluxe.{" "}
              </p>
              <p>
                She offers a spacious and comfortable interior, surrounded by
                those iconic VW windows allowing the light to flood in. She is
                very proud of her full-length sunroof which when open only adds
                to the experience.
              </p>
              <p>
                {" "}
                Finished in two tone authentic VW Turquoise and Blue White, she
                is immaculately dressed for any occasion.
              </p>
            </article>

            <article className={styles.card}>
              <h3>Mollies Costumes</h3>
              <p>
                Mollie loves being decorated in flowers, bows and ribbons, she
                loves dressing up, just tell her what you would like, and she
                will make every effort to be as eye-catching as possible. She
                loves making everyone who see her happy.
              </p>
              <p>
                {" "}
                She also loves hearing your special tunes so please just tell
                her and she play them. Her tastefully attired chauffeur also
                comes in a variety of costumes if required.
              </p>
            </article>

            <article className={styles.card}>
              <h3>Vintage character</h3>
              <p>
                To make your journey a truly unique, fun and memorable one look
                no further than Rock the Bus and our beautiful Mollie. She only
                brings joy and happiness on her travels.
              </p>
            </article>
          </div> */}
        </div>
      </section>

      {isModalOpen && (
        <div
          ref={modalRef}
          className={modalStyles.overlay}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Mollie gallery"
        >
          <button
            type="button"
            className={modalStyles.close}
            onClick={closeModal}
            aria-label="Close gallery"
          >
            ×
          </button>
          <div
            className={modalStyles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div ref={modalImageRef} className={modalStyles.imageWrap}>
              <Image
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fill
                className={modalStyles.modalImage}
                sizes="100vw"
                priority
              />
            </div>

            <div className={modalStyles.navContainer}>
              <button
                type="button"
                className={`${modalStyles.nav} ${modalStyles.prev}`}
                onClick={goPrev}
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                type="button"
                className={`${modalStyles.nav} ${modalStyles.next}`}
                onClick={goNext}
                aria-label="Next image"
              >
                →
              </button>
            </div>

            <div className={modalStyles.counter}>
              {activeIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
