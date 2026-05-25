"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import styles from "./Nav.module.css";

export default function Navbar({
  logo = "/icon.png",
  links = [
    { href: "/", label: "Home", id: "home" },
    { href: "/#meet-mollie", label: "Mollie", id: "meet-mollie" },
    { href: "/#about", label: "About", id: "about" },

    { href: "/", label: "Logo", image: "/icon.png" },
    { href: "/#reviews", label: "Reviews", id: "reviews" },
    // { href: "/#reviews", label: "Reviews" },
    { href: "/#gallery", label: "Gallery", id: "gallery" },
    { href: "/#contact", label: "Contact", id: "contact" },
  ],
  accentColor = "var(--teal)",
  breakpoint = 860,
}) {
  const linksLeft = links.slice(0, 3);
  const linksRight = links.slice(4);

  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [activeSection, setActiveSection] = useState("/");
  const mobileMenuRef = useRef(null);
  const tl = useRef(null);

  console.log("Active section:", activeSection); // Debug log for active section

  // Track viewport width
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto close menu on desktop resize
  useEffect(() => {
    if (width > breakpoint) setIsOpen(false);
  }, [width, breakpoint]);

  // Setup GSAP for mobile nav only
  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    gsap.set(menu, { y: "-100%", opacity: 0, pointerEvents: "none" });

    tl.current = gsap.timeline({
      paused: true,
      defaults: { ease: "power3.out" },
    });
    tl.current
      .to(menu, { duration: 0.35, y: 0, opacity: 1, pointerEvents: "all" })
      .from(
        menu.querySelectorAll("li"),
        { opacity: 0, y: 25, stagger: 0.06, duration: 0.35, delay: 0.2 },
        "<",
      );

    return () => tl.current?.kill();
  }, []);

  // Toggle GSAP animation
  useEffect(() => {
    if (!tl.current) return;
    isOpen ? tl.current.play() : tl.current.reverse();
  }, [isOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = Array.from(entries).find(
          (entry) => entry.isIntersecting,
        )?.target;
        if (visibleSection) setActiveSection(visibleSection.id);
      },
      { root: null, threshold: 0.3 },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <button
        className={`${styles.toggleButton} ${isOpen ? styles.open : ""}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <Link key="mobileLogo" href="/" className={styles.mobileLogoWrap}>
        <img src={logo} alt="Site logo" className={styles.mobileLogo} />
      </Link>

      {/* Desktop Nav */}
      <div className={styles.desktopNav}>
        <ul className={styles.navLeft}>
          {linksLeft.map((link, i) => (
            <li
              key={`desktopL${i}`}
              className={`${styles.li} ${activeSection === link.id ? styles.active : ""}`}
            >
              <Link href={link.href}>
                <h3>{link.label}</h3>
              </Link>
            </li>
          ))}
        </ul>
        <Link key="navLogo" href="/" className={styles.logoWrap}>
          <img src={"/icon.png"} alt="Site logo" className={styles.logo} />
        </Link>
        <ul className={styles.navRight}>
          {linksRight.map((link, i) => (
            <li
              key={`desktopR${i}`}
              className={`${styles.li} ${activeSection === link.id ? styles.active : ""}`}
            >
              <Link href={link.href}>
                <h3>{link.label}</h3>
              </Link>
            </li>
          ))}
        </ul>

        {/* {links.map((link, i) =>
          link.label === "Logo" ? (
            <Link key="navLogo" href="/" className={styles.logoWrap}>
              <img src={link.image} alt="Site logo" className={styles.logo} />
            </Link>
          ) : (
            <li key={`desktop${i}`}>
              <Link href={link.href}>
                <h3>{link.label}</h3>
              </Link>
            </li>
          ),
        )} */}
      </div>

      {/* Mobile Nav */}
      <ul ref={mobileMenuRef} className={styles.mobileNav}>
        {links.map((link, i) =>
          link.label === "Logo" ? null : (
            <li key={`mobile${i}`}>
              <Link href={link.href} onClick={() => setIsOpen(false)}>
                <h3>{link.label}</h3>
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
