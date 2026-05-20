import styles from "./Reviews.module.css";

const reviews = [
  {
    id: 1,
    name: "Emily & Josh",
    text: "Hiring Mollie for our wedding was one of the best decisions we made. She looked absolutely stunning in the photos and created such a relaxed atmosphere for our guests throughout the day.",
  },
  {
    id: 2,
    name: "Sophie & Daniel",
    text: "The camper was beautifully presented and instantly became the focal point of our venue. Andy was fantastic from start to finish and made the whole experience effortless.",
  },
  {
    id: 3,
    name: "Hannah & Luke",
    text: "We had so many compliments about Mollie. She added such a unique touch to our wedding and the photos turned out even better than we imagined.",
  },
  {
    id: 4,
    name: "Chloe & Matt",
    text: "Absolutely incredible service. Communication was amazing throughout and the camper itself was immaculate. We genuinely couldn’t recommend them more highly.",
  },
];

export default function Reviews() {
  return (
    <section className={styles.section} id="reviews">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className="sectionTitle">Reviews</h2>
        </div>

        <div className={styles.copyContainer}>
          <p className={styles.intro}>
            We feel so lucky to have shared our beautiful Mollie with some
            incredible couples. Here's what they had to say about their
            experience with us:
          </p>
        </div>

        <div className={styles.reviewsGrid}>
          {reviews.map((review) => (
            <article key={review.id} className={styles.card}>
              <div className={styles.quoteMark}>“</div>

              <p className={styles.reviewText}>{review.text}</p>

              <div className={styles.reviewer}>
                <span>{review.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className={styles.logoContainer} id={styles.logoSecond}>
        <img src="/icon.png" alt="Rock The Bus logo" className={styles.logo} />
      </div>
    </section>
  );
}
