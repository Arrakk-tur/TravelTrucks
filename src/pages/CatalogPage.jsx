import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers, clearCampers, setFilters } from "../redux/campersSlice";
import Catalog from "../components/Catalog/Catalog";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { campers, loading, error, hasMore, filters } = useSelector(
    (state) => state.campers
  );

  useEffect(() => {
    dispatch(clearCampers());
    dispatch(fetchCampers());
  }, [dispatch, filters]);

  const handleFilterChange = (newFilters) => {
    dispatch(setFilters(newFilters));
  };

  return (
    <Catalog
      campers={campers}
      loading={loading}
      error={error}
      hasMore={hasMore}
      onFilterChange={handleFilterChange}
    />
  );
};

export default CatalogPage;
