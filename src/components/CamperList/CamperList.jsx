import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./CamperList.module.css";
import CamperCard from "../Catalog/CamperCard/CamperCard";

function CamperList({ campers }) {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {campers && Array.isArray(campers.items) ? (
        campers.items.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />

          //   <li key={camper.id} className={styles.listItem}></li>
        ))
      ) : (
        <p>No campers found.</p>
      )}
    </ul>
  );
}

export default CamperList;
