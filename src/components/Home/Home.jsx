import styles from "./Home.module.css";
import { Button } from "../Button/Button.jsx";
import { Header } from "../Header/Header.jsx";
import picture0 from "../../assets/media/Hero.png";
import { useNavigate } from "react-router-dom";

export const Home = ({ className, ...props }) => {
  const navigate = useNavigate();

  const handleViewNowClick = () => {
    navigate("/catalog");
  };

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles["hero-image"]}>
          <img className={styles.picture} src={picture0} alt="Camper" />
          <div className={styles.title}>
            <div className={styles.text}>
              <div className={styles.text2}>Campers of your dreams</div>
              <div className={styles.text3}>
                You can find everything you want in our catalog
              </div>
            </div>
            <Button text="View Now" onClick={handleViewNowClick} />
          </div>
        </div>
      </div>
      <Header className={styles["header-default-instance"]} />
    </div>
  );
};
