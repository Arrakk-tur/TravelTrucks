import React from "react";
import styles from "./Catalog.module.css";
import CamperCard from "../CamperCard/CamperCard";
import Filters from "../Filters/Filters";
import Header from "../Header/Header";

const Catalog = ({ campers, onFilterChange }) => {
  return (
    <div className={styles.catalog}>
      <Header />
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <Filters onFilterChange={onFilterChange} />
        </aside>
        <main className={styles.mainContent}>
          <div className={styles.camperList}>
            {campers &&
            Array.isArray(campers.items) &&
            campers.items.length > 0 ? (
              campers.items.map((camper) => (
                <CamperCard key={camper.id} camper={camper} />
              ))
            ) : (
              <p>No campers found.</p>
            )}
          </div>
          {/* Add "Load More" button if you decide to use it later */}
        </main>
      </div>
    </div>
  );
};

export default Catalog;
