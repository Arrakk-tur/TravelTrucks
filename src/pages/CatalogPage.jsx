import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCampers,
  clearCampers,
  incrementPage,
} from "../redux/campersSlice";
import Catalog from "../components/Catalog/Catalog";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { campers, filters, loading, error, hasMore } = useSelector(
    (state) => state.campers
  );

  useEffect(() => {
    dispatch(clearCampers()); // Clear previous results
    dispatch(fetchCampers(filters)); // Fetch initial set of campers
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    if (hasMore) {
      dispatch(incrementPage());
      dispatch(fetchCampers(filters));
    }
  };

  return (
    <Catalog
      campers={campers}
      loading={loading}
      error={error}
      hasMore={hasMore}
      onLoadMore={handleLoadMore}
    />
  );
};

export default CatalogPage;
