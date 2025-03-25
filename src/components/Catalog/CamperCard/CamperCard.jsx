import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CamperCard.module.css";
import Button from "../../Button/Button";

const CamperCard = ({ camper }) => {
  const navigate = useNavigate();

  const handleShowMoreClick = () => {
    navigate(`/catalog/${camper.id}`);
  };
  return (
    <div className={styles["card-1"]}>
      <div className={styles.content}>
        <img
          className={styles.pic}
          src={camper.gallery[0].thumb}
          alt={camper.name}
        />
        <div className={styles.info}>
          <div className={styles["text-container"]}>
            <div className={styles.title}>
              <div className={styles.text}>{camper.name}</div>
              <div className={styles.price}>
                <div className={styles.text}>€{camper.price}.00</div>
                <button className={styles["heart-instance"]}>
                  <svg width="15px" height="15px">
                    <use href="/src/assets/icons.svg#icon-heart"></use>
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.reviews}>
                <svg
                  property1="pressed"
                  className={styles["star-instance"]}
                  alt="Star"
                  width="20px"
                  height="20px"
                >
                  <use href="/src/assets/icons.svg#icon-rating"></use>
                </svg>
                <div className={styles.button}>
                  <div className={styles.text2}>
                    {camper.rating}({camper.reviews.length} Reviews)
                  </div>
                </div>
              </div>
              <div className={styles.location}>
                <svg className={styles.map} width="20px" height="20px">
                  <use href="/src/assets/icons.svg#icon-map"></use>
                </svg>
                <div className={styles.text2}>{camper.location}</div>
              </div>
            </div>
          </div>
          <div className={styles["supporting-text"]}>
            {camper.description.substring(0, 100)}
          </div>
          <div className={styles["badges-container"]}>
            <div className={styles["_1-raw"]}>
              <div className={styles["_1"]}>
                <svg
                  className={styles["diagram-instance"]}
                  width="20px"
                  height="20px"
                >
                  <use href="/src/assets/icons.svg#icon-diagram"></use>
                </svg>
                <div className={styles.text3}>{camper.transmission}</div>
              </div>
              <div className={styles["_2"]}>
                <svg
                  className={styles["fuel-pump-instance"]}
                  width="20px"
                  height="20px"
                >
                  <use href="/src/assets/icons.svg#icon-gas_stove"></use>
                </svg>
                <div className={styles.text3}>{camper.engine}</div>
              </div>
              <div className={styles["_3"]}>
                <svg
                  className={styles["cup-hot-instance"]}
                  width="20px"
                  height="20px"
                >
                  <use href="/src/assets/icons.svg#icon-cup_hot"></use>
                </svg>
                <div className={styles.text3}>
                  {camper.kitchen ? "Kitchen" : null}
                </div>
              </div>
            </div>
            <div className={styles["_2-raw"]}>
              <div className={styles["_1"]}>
                <svg
                  className={styles["wind-instance"]}
                  width="20px"
                  height="20px"
                >
                  <use href="/src/assets/icons.svg#icon-wind"></use>
                </svg>
                <div className={styles.text3}>{camper.AC ? "AC" : null}</div>
              </div>
            </div>
          </div>
          <Button text="Show more" onClick={handleShowMoreClick} />
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
