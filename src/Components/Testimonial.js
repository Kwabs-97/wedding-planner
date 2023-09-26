/** @format */

import React from "react";
import styles from "../Styles/Testimonial.module.css";
import quoteSvg from "../Components/assets/bxs_quote-alt-left.svg";

function Testimonial() {
  return (
    <div className={styles.testimonial}>
      <div className={styles.container}>
        <span> What our clients have to say</span>
        <div className={styles.testimonialFrame}>
          <div className={styles.testimonialContainer}>
            <div className={styles.imgContainer}>
              <img src={quoteSvg} alt="" />
            </div>
            <div className={styles.textContainer}>
              <article>
                "We want to express our heartfelt gratitude to team for creating the wedding of our
                dreams. From the very start of our journey, they understood our vision and brought
                it to life in ways that surpassed our expectations. What began as a simple idea
                evolved into a day filled with magic, love, and cherished memories. The team left no
                stone unturned in ensuring that every detail, no matter how small, was thoughtfully
                considered and flawlessly executed. Their ability to connect us with the perfect
                venue and an exceptional network of vendors who shared our commitment to excellence
                was truly remarkable. We had the wedding we envisioned while staying comfortably
                within our budget.
              </article>
            </div>
            <div className={styles.footer}>
              
              <span>Celina & James </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
