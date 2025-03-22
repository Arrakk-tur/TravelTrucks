import React from "react";
import styles from "./Rating.module.css";

const Rating = ({ rating, reviewCount }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`${styles.star} ${
          i < rating ? styles.starFilled : styles.starEmpty
        }`}
      >
        <use href="/assets/icons.svg#icon-rating" />
      </svg>
    );
  }

  return (
    <div className={styles.rating}>
      {stars}
      <span>
        {rating} ({reviewCount} Reviews)
      </span>
    </div>
  );
};

export default Rating;
