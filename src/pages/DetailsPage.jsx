import React, { useState, useEffect, Suspense, lazy, useRef } from "react";
import {
  useParams,
  Link,
  useLocation,
  useNavigate,
  Route,
  Routes,
} from "react-router-dom";
import * as api from "../api/api";
import Loader from "../components/Loader/Loader";
import styles from "./DetailsPage.module.css";

const Features = lazy(() => import("../components/Features/Features"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));

function DetailsPage() {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const locationRef = useRef(location.state?.from || "/catalog");

  useEffect(() => {
    const getCamperDetails = async () => {
      setLoading(true);
      try {
        const camperDetails = await api.fetchCamperById(id);
        setCamper(camperDetails);
      } catch (error) {
        if (error.message === "Camper not found") {
          navigate("/404");
        } else {
          console.error("Error fetching camper details:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    getCamperDetails();
  }, [id, navigate]);

  const handleGoBack = () => {
    navigate(locationRef.current);
  };

  if (loading) {
    return Loader;
  }

  if (!camper) {
    return null;
  }

  return (
    <div>
      <h2>{camper.name}</h2>
      <div className={styles.container}>
        <section className={styles.imageGallery}>
          {/* TODO: make loop  */}
          {camper.gallery.map((image) => {
            return (
              <img
                src={image.thumb}
                alt={camper.name}
                className={styles.mainImage}
              />
            );
          })}
        </section>

        <span>Rating: {camper.rating}</span>

        <section className={styles.buttonToDetails}>
          {/* Details */}
          <div className={styles.additionalInfo}>
            {/* <h3>Additional information</h3> */}
            <ul>
              <li>
                <Link to={`/catalog/${id}/features`}>Features</Link>
              </li>
              <li>
                <Link to={`/catalog/${id}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
          {/* Button */}

          <button onClick={handleGoBack} className={styles.button}>
            Go back
          </button>
        </section>

        <Suspense fallback={Loader}>
          <Routes>
            <Route path="features" element={<Features camper={camper} />} />
            <Route
              path="reviews"
              element={<Reviews reviews={camper.reviews} />}
            />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default DetailsPage;
