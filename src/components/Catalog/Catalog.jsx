import React from "react";
import styles from "./Catalog.module.css";
import CamperCard from "./CamperCard/CamperCard";
import Filters from "../Filters/Filters";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import Button from "../Button/Button"; // Create Button Component
const Catalog = ({
  campers,
  loading,
  error,
  hasMore,
  onLoadMore,
  onFilterChange,
}) => {
  return (
    <div className={styles.catalog}>
      <Header className={styles["header-default-instance"]} />
      <Filters onFilterChange={onFilterChange} />

      <div className={styles.camperList}>
        {loading && <Loader />}
        {error && <p>Error: {error}</p>}
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </div>

      {hasMore && <Button text="Load More" onClick={onLoadMore} />}
    </div>
  );
};

export default Catalog;
