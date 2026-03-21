import styles from "./Booking.module.css";

export default function Booking() {
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
              <span className={styles.bold}>£400</span>. To enquire about
              Mollie’s availability please send a message via the form below and
              include the date of your wedding, where it is and how many trips
              are required.
            </p>

            <p className={`${styles.intro} ${styles.bold}`}>
              Don't forget to mention any special requests that you may have for
              Mollie.
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
                <p className={styles.detailText}>Kent</p>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Covering</span>
                <p className={styles.detailText}>Kent and the South East</p>
              </div>
            </div>

            {/* <div className={styles.badge}>
              <span>Weddings • Styled shoots • Special occasions</span>
            </div> */}
          </div>

          <div className={styles.right}>
            <div className={styles.formCard}>
              {/* <div className={styles.ribbon}>Start your enquiry</div> */}

              <form className={styles.form}>
                <div className={styles.fieldGrid}>
                  <div className={styles.field}>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
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
                    <select id="bookingType" name="bookingType" defaultValue="">
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
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send enquiry
                </button>
                <div className={styles.logoDiv}>
                  <img src="/icon.png" className={styles.logo} />
                </div>
                {/* <p className={styles.responseNote}>
                  We usually reply within 1–2 days.
                </p> */}
              </form>
            </div>
          </div>
        </div>

        {/* <div className={styles.cardRow}>
          <article className={styles.infoCard}>
            <h3>Wedding bookings</h3>
            <p>
              A memorable way to arrive, depart or add something special to the
              day.
            </p>
          </article>

          <article className={styles.infoCard}>
            <h3>Photo shoots</h3>
            <p>
              Perfect for couple portraits, guest pictures and relaxed styled
              content.
            </p>
          </article>

          <article className={styles.infoCard}>
            <h3>Kent & South East</h3>
            <p>
              Available across Kent and surrounding areas for carefully planned
              bookings.
            </p>
          </article>
        </div> */}
      </div>
    </section>
  );
}
