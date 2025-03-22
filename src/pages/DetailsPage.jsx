import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../redux/campersSlice";
import { Details } from "../components/Details/Details";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { camper, loading, error } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

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
