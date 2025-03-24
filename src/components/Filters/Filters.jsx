import React from "react";
import styles from "./Filters.module.css";

const Filters = ({
  locationValue,
  form,
  onInputChange,
  onSubmit,
  searchParams,
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        value={locationValue}
        onChange={onInputChange}
        className={styles.input}
        placeholder="Enter location"
      />

      <label htmlFor="form">Form:</label>
      <select
        id="form"
        name="form"
        value={form}
        onChange={onInputChange}
        className={styles.select}
      >
        <option value="">All</option>
        <option value="alcove">Alcove</option>
        <option value="fullyIntegrated">Fully Integrated</option>
        <option value="panelTruck">Panel Truck</option>
      </select>

      <div>
        <h3>Vehicle Equipment</h3>
        <label>
          <input
            type="checkbox"
            name="AC"
            checked={searchParams.has("AC")}
            onChange={onInputChange}
          />
          AC
        </label>
        <label>
          <input
            type="checkbox"
            name="bathroom"
            checked={searchParams.has("bathroom")}
            onChange={onInputChange}
          />
          Bathroom
        </label>
        <label>
          <input
            type="checkbox"
            name="kitchen"
            checked={searchParams.has("kitchen")}
            onChange={onInputChange}
          />
          Kitchen
        </label>
        <label>
          <input
            type="checkbox"
            name="TV"
            checked={searchParams.has("TV")}
            onChange={onInputChange}
          />
          TV
        </label>
        <label>
          <input
            type="checkbox"
            name="radio"
            checked={searchParams.has("radio")}
            onChange={onInputChange}
          />
          Radio
        </label>
        <label>
          <input
            type="checkbox"
            name="refrigerator"
            checked={searchParams.has("refrigerator")}
            onChange={onInputChange}
          />
          Refrigerator
        </label>
        <label>
          <input
            type="checkbox"
            name="microwave"
            checked={searchParams.has("microwave")}
            onChange={onInputChange}
          />
          Microwave
        </label>
        <label>
          <input
            type="checkbox"
            name="gas"
            checked={searchParams.has("gas")}
            onChange={onInputChange}
          />
          Gas
        </label>
        <label>
          <input
            type="checkbox"
            name="water"
            checked={searchParams.has("water")}
            onChange={onInputChange}
          />
          Water
        </label>
      </div>

      <button type="submit" className={styles.button}>
        Apply Filters
      </button>
    </form>
  );
};

export default Filters;
