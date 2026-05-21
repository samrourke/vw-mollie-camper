"use client";

import styles from "./page.module.css";
export default function ThankYou() {
  return (
    <main className={styles.main}>
      <h1 className={styles.text}>Thank you!</h1>
      <p className={styles.text}>Your enquiry has been sent successfully.</p>
      <p className={styles.text}>
        We will get back to you as soon as possible.
      </p>
      <button className="cta" onClick={() => (window.location.href = "/")}>
        Back to Home
      </button>
    </main>
  );
}
