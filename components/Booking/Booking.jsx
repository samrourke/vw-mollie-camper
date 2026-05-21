"use client";

import styles from "./Booking.module.css";

export default function Booking() {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode(data),
      });

      window.location.href = "/thank-you";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.texture} />
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            {/* <p className={styles.eyebrow}>Get in touch</p> */}

            <h2 className="sectionTitle">Get In Touch</h2>
            <p className={styles.intro}>
              The hire of Mollie starts from{" "}
              <span className={styles.bold}>£450</span>. To enquire about
              Mollie’s availability please send a message via our booking form
              and include the date of your wedding, where it is and how many
              trips are required.
            </p>

            <p className={`${styles.intro} ${styles.bold}`}>
              Don't forget to mention any special requests that you may have for
              Mollie.
            </p>
            <p className={styles.intro}>
              If you have any pets that are joining you, that's great! Mollie
              loves animals and is{" "}
              <span className={styles.bold}>pet friendly.</span>{" "}
            </p>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Email</span>
                <a
                  href="mailto:hello@rockthebus.co.uk"
                  className={styles.detailLink}
                >
                  andy@rockthebus.co.uk
                </a>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Based in</span>
                <p className={styles.detailText}>Wimbledon</p>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Covering</span>
                <p className={styles.detailText}>South London</p>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.formCard}>
              {/* <div className={styles.ribbon}>Start your enquiry</div> */}

              <form
                name="booking"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/*Hidden Input for Netlify - do not use self closing tags */}
                <input type="hidden" name="form-name" value="booking"></input>
                {/*Hidden Input for Netlify to handle redirect instead of action="/thank-you" inside <form /> */}
                <input type="hidden" name="_next" value="/thank-you"></input>
                {/* Honeypot anti-spam field */}
                <div hidden>
                  <input name="bot-field" />
                </div>

                <div className={styles.fieldGrid}>
                  <div className={styles.field}>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className={styles.fieldGrid}>
                  <div className={styles.field}>
                    <label htmlFor="date">Event date</label>
                    <input
                      id="date"
                      name="date"
                      type="text"
                      placeholder="e.g. 14 June 2026"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="bookingType">Booking type</label>
                    <select
                      id="bookingType"
                      name="bookingType"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      <option value="wedding">Wedding</option>
                      <option value="styled-shoot">Styled shoot</option>
                      <option value="special-event">Special event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="location">Venue / location</label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Where is the event taking place?"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us a little about your plans..."
                    required
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send enquiry
                </button>

                <div className={styles.logoDiv}>
                  <img src="/icon.png" className={styles.logo} alt="Logo" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
