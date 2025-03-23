import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../redux/campersSlice";
import Details from "../components/Details/Details";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import * as api from "../api/api"; // Import API functions

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { camper, loading, error } = useSelector((state) => state.campers);
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
    return <div>Camper not found</div>;
  }

  return <Details camper={camper} />;
};

export default DetailsPage;
