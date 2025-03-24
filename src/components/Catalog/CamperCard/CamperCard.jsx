import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../redux/campersSlice";
import styles from "./CamperCard.module.css";
import Rating from "../../Rating/Rating";
import FavoriteButton from "../../FavoriteButton/FavoriteButton";
import Button from "../../Button/Button";

const CamperCard = ({ camper }) => {
  console.log("camper: ", camper);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.campers.favorites);
  const isFavorite = favorites.includes(camper.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

  const handleShowMoreClick = () => {
    window.open(`/catalog/${camper.id}`);
  };

  return (
    <div className={styles.card}>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        className={styles.image}
      />
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
          {/* <svg className={styles.mapIcon}> */}
          <svg className={styles.icon}>
            {/* <use href="/assets/icons.svg#map" /> */}
            <use href="/src/assets/icons.svg#map" />
            {/* Replace 'map' with the actual ID in your sprite */}
          </svg>
          {camper.location}
        </div>
        <Rating rating={camper.rating} reviewCount={camper.reviews.length} />
        <p className={styles.description}>{camper.description}</p>
        <div className={styles.features}>
          {camper.transmission === "automatic" && (
            <div className={styles.feature}>Automatic</div>
          )}
          {camper.engine === "diesel" && (
            <div className={styles.feature}>Diesel</div>
          )}
          {camper.AC && <div className={styles.feature}>AC</div>}
          {camper.bathroom && <div className={styles.feature}>Bathroom</div>}
          {camper.kitchen && <div className={styles.feature}>Kitchen</div>}
        </div>
        <Button text="Show more" onClick={handleShowMoreClick} />
      </div>
    </div>
  );
};

export default CamperCard;
