import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

const initialState = {
  campers: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  filters: {
    location: "",
    vehicleType: "",
    vehicleEquipment: [],
  },
  loading: false,
  error: null,
  page: 1, // For loading more campers
  hasMore: true, // Check if there are more campers to load
};

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (filters = {}, { getState, dispatch }) => {
    const { page } = getState().campers;
    // Build query string based on filters and pagination
    let queryString = `?page=${page}&limit=4`; // Adjust limit as needed

    if (filters.location) {
      queryString += `&location=${filters.location}`;
    }
    if (filters.vehicleType) {
      queryString += `&vehicleType=${filters.vehicleType}`;
    }
    if (filters.vehicleEquipment && filters.vehicleEquipment.length > 0) {
      filters.vehicleEquipment.forEach((equipment) => {
        queryString += `&vehicleEquipment[]=${equipment}`;
      });
    }

    try {
      const response = await axios.get(`${API_URL}${queryString}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.page = 1; // Reset to the first page when filters change
      state.hasMore = true; // Reset hasMore as well
    },
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      const isFavorite = state.favorites.includes(camperId);

      if (isFavorite) {
        state.favorites = state.favorites.filter((id) => id !== camperId);
      } else {
        state.favorites = [...state.favorites, camperId];
      }

      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    clearCampers: (state) => {
      state.campers = [];
      state.page = 1;
      state.hasMore = true;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        // If it's the first page, replace the campers. Otherwise, append.
        state.campers =
          state.page === 1
            ? action.payload
            : [...state.campers, ...action.payload];
        // Check if there are more campers to load.  Adjust the check based on your API response.
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilters, toggleFavorite, clearCampers, incrementPage } =
  campersSlice.actions;
export default campersSlice.reducer;
