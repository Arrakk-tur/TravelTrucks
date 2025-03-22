import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../redux/campersSlice";
import styles from "./CamperCard.module.css";
import Rating from "../../Rating/Rating";
import FavoriteButton from "../../FavoriteButton/FavoriteButton";
import Button from "../../Button/Button";
const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.campers.favorites);
  const isFavorite = favorites.includes(camper.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

  const handleShowMoreClick = () => {
    window.open(`/catalog/${camper.id}`, "_blank");
  };

  return (
    <div className={styles.card}>
      <img src={camper.image} alt={camper.name} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.name}>{camper.name}</h2>
        <div className={styles.priceAndFavorite}>
          <span className={styles.price}>€{camper.price.toFixed(2)}</span>
          <FavoriteButton
            isFavorite={isFavorite}
            onClick={handleToggleFavorite}
          />
        </div>
        <div className={styles.location}>
          <svg className={styles.icon}>
            <use href="/assets/icons.svg#map" />{" "}
            {/* Replace 'map' with the actual ID in your sprite */}
          </svg>
          {camper.location}
        </div>
        <Rating rating={camper.rating} reviewCount={camper.reviewCount} />
        <p className={styles.description}>{camper.description}</p>
        <div className={styles.features}>
          {camper.transmission === "automatic" && (
            <div className={styles.feature}>
              <svg className={styles.icon}>
                <use href="/assets/icons.svg#diagram" />{" "}
                {/* Replace 'diagram' with the correct ID */}
              </svg>
              Automatic
            </div>
          )}
          {camper.fuel === "petrol" && (
            <div className={styles.feature}>
              <svg className={styles.icon}>
                <use href="/assets/icons.svg#fuel-pump" />{" "}
                {/* Replace 'fuel-pump' with the correct ID */}
              </svg>
              Petrol
            </div>
          )}
          {camper.kitchen && (
            <div className={styles.feature}>
              <svg className={styles.icon}>
                <use href="/assets/icons.svg#cup-hot" />{" "}
                {/* Replace 'cup-hot' with the correct ID */}
              </svg>
              Kitchen
            </div>
          )}
          {camper.ac && (
            <div className={styles.feature}>
              <svg className={styles.icon}>
                <use href="/assets/icons.svg#wind" />{" "}
                {/* Replace 'wind' with the correct ID */}
              </svg>
              AC
            </div>
          )}
        </div>
        <Button text="Show more" onClick={handleShowMoreClick} />
      </div>
    </div>
  );
};

export default CamperCard;
