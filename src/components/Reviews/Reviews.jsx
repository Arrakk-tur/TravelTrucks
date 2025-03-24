import React from "react";
import styles from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className={styles.reviewsContainer}>
      <h3>Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <div className={styles.avatar}>
              {review.reviewer_name.charAt(0)}
            </div>
            <div className={styles.reviewInfo}>
              <p className={styles.authorName}>{review.reviewer_name}</p>
              <p className={styles.reviewRating}>
                Rating: {review.reviewer_rating}
              </p>
            </div>
          </div>
          <p className={styles.reviewText}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
