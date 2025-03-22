import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCampers,
  clearCampers,
  incrementPage,
  setFilters,
} from "../redux/campersSlice";
import Catalog from "../components/Catalog/Catalog";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { campers, loading, error, hasMore, filters } = useSelector(
    (state) => state.campers
  );

  useEffect(() => {
    dispatch(clearCampers()); // Clear previous results
    dispatch(fetchCampers()); // Fetch initial set of campers (no direct filter argument)
  }, [dispatch, filters]); // Depend on filters to re-fetch

  const handleLoadMore = () => {
    if (hasMore) {
      dispatch(incrementPage());
      dispatch(fetchCampers());
    }
  };

  const handleFilterChange = (newFilters) => {
    dispatch(setFilters(newFilters)); // Dispatch new filters
  };

  return (
    <Catalog
      campers={campers}
      loading={loading}
      error={error}
      hasMore={hasMore}
      onLoadMore={handleLoadMore}
      onFilterChange={handleFilterChange} // Pass down the filter change handler
    />
  );
};

export default CatalogPage;
