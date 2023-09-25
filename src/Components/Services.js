/** @format */

import React from "react";
import styles from "../Styles/Services.module.css";

function Services() {
  return (
    <div className={styles.services}>
      <section className={styles.frame1}>
        <div>
          <header>
            <span>Your Unforgettable Wedding Journey Begins Here"</span>
          </header>
          <main>
            <p>
              Discover our bespoke services that infuse your celebration with personalised touches
              mirroring your love story.
            </p>
          </main>
        </div>
        <Button>Explore our works</Button>
      </section>

      <section className={styles.frame2}>
        <div>
          <header>
            <span>Full-Service Planning</span>
          </header>
          <main>
            <p>
              Discover our bespoke services that infuse your celebration with personalised touches
              mirroring your love story.
            </p>
          </main>
        </div>
        <div>
          <header>
            <span>Partial Planning</span>
          </header>
          <main>
            <p>
              Enhance your plans with our expert touch. We collaborate to perfect your ideas,
              ensuring a cohesive and memorable wedding day that reflects your personality and
              style.
            </p>
          </main>
        </div>
        <div>
          <header>
            <span>Destination Weddings</span>
          </header>
          <main>
            <p>
              Turn your dream destination into your wedding reality. Our experience in crafting
              destination weddings guarantees an enchanting experience no matter where you choose to
              say "I do."
            </p>
          </main>
        </div>
        <div>
          <header>
            <span>Customisation Options</span>
          </header>
          <main>
            <p>
              Tailor our services to fit your distinct vision. Mix and match to create a custom
              package that encapsulates your love story, ensuring your wedding day is as unique as
              your journey together.
            </p>
          </main>
        </div>
      </section>
    </div>
  );
}

export default Services;
