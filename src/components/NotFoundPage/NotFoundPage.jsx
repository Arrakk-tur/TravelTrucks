import React from "react";
import styles from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className={styles.backToHome}>
        Go back to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
