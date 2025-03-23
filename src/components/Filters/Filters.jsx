import React from "react";
import { useSelector } from "react-redux";
import styles from "./Filters.module.css";
import Input from "../Input/Input";

const Filters = ({ onFilterChange }) => {
  const filters = useSelector((state) => state.campers.filters);

  const handleLocationChange = (e) => {
    onFilterChange({ location: e.target.value });
  };

  const handleFormChange = (e) => {
    onFilterChange({ form: e.target.value });
  };

  const handleEquipmentChange = (e) => {
    const equipment = e.target.name;
    const checked = e.target.checked;
    onFilterChange({ [equipment]: checked });
  };

  return (
    <div className={styles.filters}>
      <Input
        type="text"
        placeholder="Location"
        value={filters.location}
        onChange={handleLocationChange}
      />

      <div>
        <h3>Vehicle Form</h3>
        <label>
          <input
            type="radio"
            name="form"
            value="alcove"
            checked={filters.form === "alcove"}
            onChange={handleFormChange}
          />
          Alcove
        </label>
        <label>
          <input
            type="radio"
            name="form"
            value="fullyIntegrated"
            checked={filters.form === "fullyIntegrated"}
            onChange={handleFormChange}
          />
          Fully Integrated
        </label>
        <label>
          <input
            type="radio"
            name="form"
            value="panelTruck"
            checked={filters.form === "panelTruck"}
            onChange={handleFormChange}
          />
          Van
        </label>
      </div>

      <div>
        <h3>Vehicle Equipment</h3>
        <label>
          <input
            type="checkbox"
            name="AC"
            checked={filters.AC}
            onChange={handleEquipmentChange}
          />
          AC
        </label>
        <label>
          <input
            type="checkbox"
            name="bathroom"
            checked={filters.bathroom}
            onChange={handleEquipmentChange}
          />
          Bathroom
        </label>
        <label>
          <input
            type="checkbox"
            name="kitchen"
            checked={filters.kitchen}
            onChange={handleEquipmentChange}
          />
          Kitchen
        </label>
        <label>
          <input
            type="checkbox"
            name="TV"
            checked={filters.TV}
            onChange={handleEquipmentChange}
          />
          TV
        </label>
        <label>
          <input
            type="checkbox"
            name="radio"
            checked={filters.radio}
            onChange={handleEquipmentChange}
          />
          Radio
        </label>
        <label>
          <input
            type="checkbox"
            name="refrigerator"
            checked={filters.refrigerator}
            onChange={handleEquipmentChange}
          />
          Refrigerator
        </label>
        <label>
          <input
            type="checkbox"
            name="microwave"
            checked={filters.microwave}
            onChange={handleEquipmentChange}
          />
          Microwave
        </label>
        <label>
          <input
            type="checkbox"
            name="gas"
            checked={filters.gas}
            onChange={handleEquipmentChange}
          />
          Gas
        </label>
        <label>
          <input
            type="checkbox"
            name="water"
            checked={filters.water}
            onChange={handleEquipmentChange}
          />
          Water
        </label>
      </div>
    </div>
  );
};

export default Filters;
