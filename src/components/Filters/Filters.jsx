import React from "react";
import { useSelector } from "react-redux";
import styles from "./Filters.module.css";
import Input from "../Input/Input";

const Filters = ({ onFilterChange }) => {
  const filters = useSelector((state) => state.campers.filters);

  const handleLocationChange = (e) => {
    onFilterChange({ location: e.target.value });
  };

  const handleVehicleTypeChange = (e) => {
    onFilterChange({ vehicleType: e.target.value });
  };

  const handleEquipmentChange = (e) => {
    const equipment = e.target.value;
    let updatedEquipment = [...filters.vehicleEquipment];

    if (e.target.checked) {
      updatedEquipment.push(equipment);
    } else {
      updatedEquipment = updatedEquipment.filter((item) => item !== equipment);
    }

    onFilterChange({ vehicleEquipment: updatedEquipment });
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
        <h3>Vehicle Type</h3>
        <label>
          <input
            type="radio"
            name="vehicleType"
            value="van"
            checked={filters.vehicleType === "van"}
            onChange={handleVehicleTypeChange}
          />
          Van
        </label>
        <label>
          <input
            type="radio"
            name="vehicleType"
            value="fullyIntegrated"
            checked={filters.vehicleType === "fullyIntegrated"}
            onChange={handleVehicleTypeChange}
          />
          Fully Integrated
        </label>
        <label>
          <input
            type="radio"
            name="vehicleType"
            value="alcove"
            checked={filters.vehicleType === "alcove"}
            onChange={handleVehicleTypeChange}
          />
          Alcove
        </label>
      </div>

      <div>
        <h3>Vehicle Equipment</h3>
        <label>
          <input
            type="checkbox"
            value="AC"
            checked={filters.vehicleEquipment.includes("AC")}
            onChange={handleEquipmentChange}
          />
          AC
        </label>
        <label>
          <input
            type="checkbox"
            value="Automatic"
            checked={filters.vehicleEquipment.includes("Automatic")}
            onChange={handleEquipmentChange}
          />
          Automatic
        </label>
        <label>
          <input
            type="checkbox"
            value="Kitchen"
            checked={filters.vehicleEquipment.includes("Kitchen")}
            onChange={handleEquipmentChange}
          />
          Kitchen
        </label>
        <label>
          <input
            type="checkbox"
            value="TV"
            checked={filters.vehicleEquipment.includes("TV")}
            onChange={handleEquipmentChange}
          />
          TV
        </label>
        <label>
          <input
            type="checkbox"
            value="Bathroom"
            checked={filters.vehicleEquipment.includes("Bathroom")}
            onChange={handleEquipmentChange}
          />
          Bathroom
        </label>
      </div>
    </div>
  );
};

export default Filters;
