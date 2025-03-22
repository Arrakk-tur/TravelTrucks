import React from "react";
import styles from "./Rating.module.css";
import { ReactComponent as StarIcon } from "../../../public/assets/star-pressed0.svg";

const Rating = ({ rating, reviewCount }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <StarIcon
        key={i}
        className={i < rating ? styles.starFilled : styles.starEmpty}
      />
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
