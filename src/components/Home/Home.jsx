import React from "react";
import styles from "./Home.module.css";
import Button from "../Button/Button.jsx";
import camperBackground from "../../assets/media/Hero.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleViewNowClick = () => {
    navigate("/catalog");
  };

  return (
    <div className={styles.home}>
      <div className={styles.heroSection}>
        <img
          src={camperBackground}
          alt="Camper Background"
          className={styles.backgroundImage}
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Campers of your dreams</h1>
          <p className={styles.heroSubtitle}>
            You can find everything you want in our catalog
          </p>
          <Button text="View Now" onClick={handleViewNowClick} />
        </div>
      </div>
    </div>
  );
};

export default Home;
