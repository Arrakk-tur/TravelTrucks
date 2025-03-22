import axios from "axios";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = async (params) => {
  try {
    const response = await axios.get(API_URL, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching campers:", error);
    throw error;
  }
};

export const fetchCamperById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching camper by ID:", error);
    if (error.response && error.response.status === 404) {
      throw new Error("Camper not found"); // Specific error for 404
    }
    throw error;
  }
};

export const fetchReviews = async (camperId) => {
  try {
    const response = await axios.get(
      `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/reviews?camperId=${camperId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};
