import axios from "axios";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

const buildQueryString = (params) => {
  const queryParams = new URLSearchParams();
  const booleanKeys = [
    "AC",
    "bathroom",
    "kitchen",
    "TV",
    "radio",
    "refrigerator",
    "microwave",
    "gas",
    "water",
  ];

  for (const key in params) {
    if (booleanKeys.includes(key)) {
      if (params[key] === true) {
        queryParams.append(key, "true");
      }
    } else if (
      params[key] !== "" &&
      params[key] !== null &&
      params[key] !== undefined &&
      key !== "vehicleEquipment"
    ) {
      queryParams.append(key, params[key]);
    }
  }

  let queryString = queryParams.toString();

  if (params.vehicleEquipment && params.vehicleEquipment.length > 0) {
    params.vehicleEquipment.forEach((equipment) => {
      queryString =
        queryString.length > 0
          ? queryString + `&${equipment}=true`
          : `?${equipment}=true`;
    });
  }

  return queryString ? `?${queryString}` : "";
};

export const fetchCampers = async (filters) => {
  try {
    const queryString = buildQueryString(filters);
    const response = await axios.get(`${API_URL}${queryString}`);
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
      throw new Error("Camper not found");
    }
    throw error;
  }
};
