import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../redux/campersSlice";
import styles from "./CamperCard.module.css";
import Rating from "../../Rating/Rating";
import FavoriteButton from "../../FavoriteButton/FavoriteButton";
import Button from "../../Button/Button";
import { ReactComponent as MapIcon } from "../../../../public/assets/map0.svg";
import { ReactComponent as DiagramIcon } from "../../../../public/assets/diagram0.svg";
import { ReactComponent as FuelPumpIcon } from "../../../../public/assets/fuel-pump0.svg";
import { ReactComponent as CupHotIcon } from "../../../../public/assets/cup-hot0.svg";
import { ReactComponent as WindIcon } from "../../../../public/assets/wind0.svg";

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
          <MapIcon className={styles.mapIcon} />
          {camper.location}
        </div>
        <Rating rating={camper.rating} reviewCount={camper.reviewCount} />
        <p className={styles.description}>{camper.description}</p>
        <div className={styles.features}>
          {camper.transmission === "automatic" && (
            <div className={styles.feature}>
              <DiagramIcon className={styles.featureIcon} /> Automatic
            </div>
          )}
          {camper.fuel === "petrol" && (
            <div className={styles.feature}>
              <FuelPumpIcon className={styles.featureIcon} /> Petrol
            </div>
          )}
          {camper.kitchen && (
            <div className={styles.feature}>
              <CupHotIcon className={styles.featureIcon} /> Kitchen
            </div>
          )}
          {camper.ac && (
            <div className={styles.feature}>
              <WindIcon className={styles.featureIcon} /> AC
            </div>
          )}
        </div>
        <Button text="Show more" onClick={handleShowMoreClick} />
      </div>
    </div>
  );
};

export default CamperCard;
