import React from "react";
import styles from "./Reviews.module.css";
import Rating from "../Rating/Rating"; // Import the Rating component

const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className={styles.reviewsContainer}>
      {reviews.map((review, index) => (
        <div key={index} className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <div className={styles.avatar}>
              {review.reviewer_name.charAt(0)}
            </div>
            <div className={styles.reviewInfo}>
              <p className={styles.authorName}>{review.reviewer_name}</p>
              {/*Display individual rating for each review*/}
              <Rating rating={review.reviewer_rating} reviewCount={1} />
            </div>
          </div>
          <p className={styles.reviewText}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
