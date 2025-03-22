import React from "react";
import styles from "./FavoriteButton.module.css";

const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <button
      className={`${styles.favoriteButton} ${isFavorite ? styles.active : ""}`}
      onClick={onClick}
    >
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
};

export default FavoriteButton;
