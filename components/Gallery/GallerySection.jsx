"use client";

import styles from "./GallerySection.module.css";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const images = [
  {
    src: "/images/output/couple-10.avif",
    className: "hero",
  },
  {
    src: "/images/output/couple-07.avif",
    className: "landscape",
  },
  {
    src: "/images/output/couple-05B.avif",
    className: "portrait",
  },
  {
    src: "/images/output/couple-08.avif",
    className: "large",
  },
  {
    src: "/images/output/couple-06.avif",
    className: "square",
  },
  {
    src: "/images/output/dog-01.avif",
    className: "square",
  },
  {
    src: "/images/output/couple-12.avif",
    className: "landscape",
  },
  {
    src: "/images/output/couple-11.avif",
    className: "portrait",
  },
  {
    src: "/images/output/couple-13.avif",
    className: "portrait",
  },

  {
    src: "/images/output/couple-14.avif",
    className: "landscape",
  },
  {
    src: "/images/output/couple-09.avif",
    className: "portrait",
  },
  {
    src: "/images/output/couple-17.avif",
    className: "square",
  },
  {
    src: "/images/output/couple-16.avif",
    className: "landscape",
  },
  {
    src: "/images/output/bridesmaids-ps.avif",
    className: "large",
  },
];

export default function GallerySection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal",
        {
          autoAlpha: 0,
          y: 60,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.08,
          ease: "power3.out",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" className={styles.section} ref={sectionRef}>
      <div className={styles.title}>
        <h1 className="sectionTitle">Gallery</h1>

        <h3 className={styles.subtitle}>
          See Mollie in action with all her friends
        </h3>
      </div>

      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div key={index} className={`${styles.item} reveal`}>
            <Image
              src={image.src}
              alt=""
              width={1200}
              height={800}
              className={styles.img}
            />
          </div>
        ))}
      </div>
      <div className={styles.logoContainer}>
        <img src="/icon.png" alt="Rock The Bus logo" className={styles.logo} />
      </div>
    </section>
  );
}
