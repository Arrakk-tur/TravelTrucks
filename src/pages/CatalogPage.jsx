import React, { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import * as api from "../api/api";
import CamperList from "../components/CamperList/CamperList";
import Filters from "../components/Filters/Filters";
import styles from "./CatalogPage.module.css";

function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const locationValue = searchParams.get("location") ?? "";
  const formValue = searchParams.get("form") ?? "";

  const performSearch = useCallback(async () => {
    setLoading(true);
    try {
      const filters = {};

      if (locationValue) {
        filters.location = locationValue;
      }
      if (formValue) {
        filters.form = formValue;
      }

      const booleanKeys = [
        "AC",
        "bathroom",
        "kitchen",
        "TV",
        "radio",
        "refrigerator",
        "microwave",
        "gas",
        "water",
      ];
      booleanKeys.forEach((key) => {
        if (searchParams.has(key)) {
          filters[key] = true;
        }
      });
      console.log("performSearch send: ", filters);
      const results = await api.fetchCampers(filters);
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching campers:", error);
    } finally {
      setLoading(false);
    }
  }, [searchParams, locationValue, formValue]);

  useEffect(() => {
    performSearch(); // Initial load with no filters
  }, [performSearch]);

  const handleInputChange = (event) => {
    const { name, type, checked, value } = event.target;
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      // Handle checkbox input
      if (type === "checkbox") {
        if (checked) {
          newParams.set(name, "true");
        } else {
          newParams.delete(name);
        }
      } else {
        // Other parameters - remove this parameter if is not available and add other value
        if (value) {
          newParams.set(name, value);
        } else {
          newParams.delete(name);
        }
      }
      return newParams;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    performSearch();
  };

  return (
    <div>
      <div className={styles.container}>
        <Filters
          locationValue={locationValue}
          form={formValue}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          searchParams={searchParams}
        />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <CamperList campers={searchResults} />
        )}
      </div>
    </div>
  );
}

export default CatalogPage;
