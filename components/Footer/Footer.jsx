import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Rock The Bus. All rights reserved.
      </p>
      <p>
        Website by{" "}
        <a
          href="https://deadculture.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Dead Culture
        </a>
      </p>
    </footer>
  );
}
