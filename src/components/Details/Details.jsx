import React, { useState } from "react";
import styles from "./Details.module.css";
import Header from "../Header/Header";
import Input from "../Input/Input"; // Reuse the Input component
import Button from "../Button/Button"; //Reuse the Button component

const Details = ({ camper }) => {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  });

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted successfully!"); // Replace with actual submission logic
  };

  return (
    <div className={styles.details}>
      <Header className={styles["header-default-instance"]} />

      <div className={styles.form}>
        <h2>Book Your Campervan Now</h2>
        <p>Stay connected! We're always ready to help.</p>

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Name*"
            value={bookingData.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email*"
            value={bookingData.email}
            onChange={handleChange}
          />
          <Input
            type="date"
            name="bookingDate"
            placeholder="Booking Date*"
            value={bookingData.bookingDate}
            onChange={handleChange}
          />
          <textarea
            name="comment"
            placeholder="Comment"
            value={bookingData.comment}
            onChange={handleChange}
            className={styles.comment} // Add class to style textarea
          />
          <Button text="Submit" type="submit" />
        </form>
      </div>

      {camper && (
        <div className={styles.camperDetails}>
          {/* Display camper details here */}
          <h2>{camper.name}</h2>
          <p>Price: €{camper.price.toFixed(2)}</p>
          {/* Add other details */}
        </div>
      )}
    </div>
  );
};

export default Details;
