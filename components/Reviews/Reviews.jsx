import styles from "./Reviews.module.css";

const reviews = [
  // {
  //   id: 1,
  //   name: "Andy & Jo",
  //   text: "We were delighted to share our wonderful day with Mollie she certainly brought a smile to everyone's face. We were especially happy that our lovely dogs also enjoyed the day.",
  // },
  {
    id: 2,
    name: "Andy & Jo",
    text: "Hired this gorgeous VW camper van for our wedding and absolutely loved it. It was such a fun thing to have as part of our day and made for some great photos too! Andy was brilliant from start to finish, really friendly, easy-going, plus he came up with lots of great photo ideas. Felt like a Queen for the day as we drove through Wimbledon…❤️ Would definitely recommend if you’re looking for something a bit different and lots of fun for your wedding.",
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
