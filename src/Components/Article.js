/** @format */

import React from "react";
import Styles from "../Styles/Article.module.css";
function Article() {
  return (
    <div className={Styles.article}>
      <div className={Styles.container}>
        <header>Latest Article</header>
        <main>
          <div className={Styles.frame}>
            <div className={`${Styles.frameImg} ${Styles.img1}`}></div>
            <div className={Styles.content}>
              <span className={Styles.date}>Sept 20, 2023</span>
              <span className={Styles.text}>Managing Family Dynamics During Wedding Planning</span>
            </div>
          </div>
          <div className={Styles.frame}>
            <div className={`${Styles.frameImg} ${Styles.img2}`}></div>
            <div className={Styles.content}>
              <span className={Styles.date}>Sept 20, 2023</span>
              <span className={Styles.text}>
                The Art of Wedding Invitations: Design and Etiquette
              </span>
            </div>
          </div>
          <div className={Styles.frame}>
            <div className={`${Styles.frameImg} ${Styles.img3}`}></div>
            <div className={Styles.content}>
              <span className={Styles.date}>Sept 20, 2023</span>
              <span className={Styles.text}>
                Choosing the Perfect Wedding Dress: Tips for Every Bride
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Article;
