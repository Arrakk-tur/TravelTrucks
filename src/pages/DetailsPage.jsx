import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../redux/campersSlice";
import Details from "../components/Details/Details";
import Reviews from "../components/Reviews/Reviews";
import * as api from "../api/api"; // Import API functions
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Used for redirection
  const { camper, loading, error } = useSelector((state) => state.campers);
  const [reviews, setReviews] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    dispatch(fetchCamperById(id))
      .unwrap() // Unwrap the promise to catch rejections
      .catch((error) => {
        if (error.message === "Camper not found") {
          setNotFound(true);
        } else {
          console.error("Error fetching camper:", error);
        }
      });
  }, [dispatch, id]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await api.fetchReviews(id);
        setReviews(response);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    if (camper) {
      fetchReviews();
    }
  }, [camper, id]);

  if (notFound) {
    return <NotFoundPage />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!camper) {
    return <div>Camper not found</div>; // Fallback in case something went wrong.
  }

  return (
    <div>
      <Details camper={camper} />
      <Reviews reviews={reviews} />
    </div>
  );
};

export default DetailsPage;
