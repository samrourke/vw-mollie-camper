"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import styles from "./Nav.module.css";

/**
 * Generic Navbar Template
 * -----------------------
 * - Desktop: static inline nav
 * - Mobile: animated overlay using GSAP
 * - Toggle button auto-closes on resize > breakpoint
 */

export default function Navbar({
  logo = "/icon.png",
  links = [
    { href: "/", label: "Home" },
    { href: "/#meet-mollie", label: "Mollie" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/", label: "Logo", image: "/icon.png" },
    // { href: "/#reviews", label: "Reviews" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ],
  accentColor = "var(--teal)",
  breakpoint = 860,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const mobileMenuRef = useRef(null);
  const tl = useRef(null);

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
      <div className={styles.mobileTitleWrap}>
        <h3 className={styles.mobileTitle}>Rock The Bus</h3>
      </div>

      {/* Desktop Nav */}
      <ul className={styles.desktopNav}>
        {links.map((link, i) =>
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
        )}
      </ul>

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
