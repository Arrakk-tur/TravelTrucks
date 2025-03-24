import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./CamperList.module.css";

function CamperList({ campers }) {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {campers && Array.isArray(campers.items) ? (
        campers.items.map((camper) => (
          <li key={camper.id} className={styles.listItem}>
            <Link
              to={`/catalog/${camper.id}`}
              state={{ from: location }}
              className={styles.link}
            >
              {camper.name}
            </Link>
          </li>
        ))
      ) : (
        <p>No campers found.</p>
      )}
    </ul>
  );
}

export default CamperList;
