import React, { useState } from "react";
import styles from "./Details.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Rating from "../Rating/Rating"; // Import the Rating component

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
      <div className={styles.camperDetails}>
        <h2>{camper.name}</h2>
        <div className={styles.rating}>
          <Rating rating={camper.rating} reviewCount={camper.reviews.length} />
        </div>
        <p>Price: €{camper.price.toFixed(2)}</p>
        <p>{camper.description}</p>
        <h3>Details:</h3>
        <ul>
          <li>Form: {camper.form}</li>
          <li>Length: {camper.length}</li>
          <li>Width: {camper.width}</li>
          <li>Height: {camper.height}</li>
          <li>Tank: {camper.tank}</li>
          <li>Consumption: {camper.consumption}</li>
          <li>Transmission: {camper.transmission}</li>
          <li>Engine: {camper.engine}</li>
          <li>AC: {camper.AC ? "Yes" : "No"}</li>
          <li>Bathroom: {camper.bathroom ? "Yes" : "No"}</li>
          <li>Kitchen: {camper.kitchen ? "Yes" : "No"}</li>
          <li>TV: {camper.TV ? "Yes" : "No"}</li>
          <li>Radio: {camper.radio ? "Yes" : "No"}</li>
          <li>Refrigerator: {camper.refrigerator ? "Yes" : "No"}</li>
          <li>Microwave: {camper.microwave ? "Yes" : "No"}</li>
          <li>Gas: {camper.gas ? "Yes" : "No"}</li>
          <li>Water: {camper.water ? "Yes" : "No"}</li>
        </ul>
        <h3>Reviews:</h3>
        <ul>
          {camper.reviews.map((review, index) => (
            <li key={index}>
              <p>Name: {review.reviewer_name}</p>
              <p>Rating: {review.reviewer_rating}</p>
              <p>Review: {review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* Booking Form */}
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
            className={styles.comment}
          />
          <Button text="Submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Details;
