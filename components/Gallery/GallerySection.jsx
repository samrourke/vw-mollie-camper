"use client";

import styles from "./GallerySection.module.css";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function GallerySection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal",
        { autoAlpha: 0, y: 80, scale: 1.05 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" className={styles.section} ref={sectionRef}>
      <div className={styles.title}>
        {" "}
        <h1 className="sectionTitle">Gallery</h1>
        <h3 className={styles.subtitle}>
          See Mollie in action with all her friends{" "}
        </h3>
      </div>

      {/* Row 1 */}
      <div className={`${styles.full} reveal`}>
        <Image
          src="/images/edits/couple-10.png"
          alt=""
          fill
          className={styles.img}
        />
      </div>

      {/* Row 2 */}
      <div className={styles.split}>
        <div className={`${styles.half} reveal`}>
          <Image
            src="/images/edits/couple-07.png"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <div className={`${styles.half} reveal`}>
          <Image
            src="/images/edits/champagne-01.jpg"
            alt=""
            fill
            className={styles.img}
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className={styles.offsetRow}>
        <div className={`${styles.large} reveal`}>
          <Image
            src="/images/edits/couple-08.png"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <div className={styles.smallContainer}>
          <div className={`${styles.small} reveal`}>
            <Image
              src="/images/edits/mollie-03.png"
              alt=""
              fill
              className={styles.img}
            />
          </div>
          <div className={`${styles.small} reveal`}>
            <Image
              src="/images/edits/dog-01.jpg"
              alt=""
              fill
              className={styles.img}
            />
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className={`${styles.full} reveal`}>
        <Image
          src="/images/edits/bridesmaids-ps.png"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      {/* Row 5 */}
      <div className={styles.split}>
        <div className={`${styles.half} reveal`}>
          <Image
            src="/images/edits/mollie-04.png"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <div className={`${styles.half} reveal`}>
          <Image
            src="/images/edits/couple-09.png"
            alt=""
            fill
            className={styles.img}
          />
        </div>
      </div>
    </section>
  );
}
