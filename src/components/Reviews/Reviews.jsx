import React from "react";
import styles from "./Reviews.module.css";
import Rating from "../Rating/Rating";

const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className={styles.reviewsContainer}>
      {reviews.map((review) => (
        <div key={review.id} className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <div className={styles.avatar}>{review.author.charAt(0)}</div>
            <div className={styles.reviewInfo}>
              <p className={styles.authorName}>{review.author}</p>
              <Rating rating={review.rating} reviewCount={1} />{" "}
              {/* Assuming 1 review per entry */}
            </div>
          </div>
          <p className={styles.reviewText}>{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
