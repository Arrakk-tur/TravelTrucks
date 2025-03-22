import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api"; // Import API functions

const initialState = {
  campers: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  filters: {
    location: "",
    vehicleType: "",
    vehicleEquipment: [],
    page: 1, // Add page to filters for unified approach
    limit: 4, // Add limit to filters
  },
  loading: false,
  error: null,
  hasMore: true,
};

// Async Thunk for fetching campers
export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, { getState }) => {
    // No direct filter argument
    const { filters } = getState().campers;
    try {
      const response = await api.fetchCampers(filters);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

// Async Thunk for fetching a single camper by ID
export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id) => {
    try {
      const response = await api.fetchCamperById(id);
      return response;
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
      // Reset page to 1 when filters change, also preserve the limit
      state.filters = { ...state.filters, ...action.payload, page: 1 };
      state.hasMore = true;
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
      state.hasMore = true;
    },
    incrementPage: (state) => {
      state.filters.page += 1; // Increment page within filters
    },
    setCampers: (state, action) => {
      state.campers = action.payload;
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
        // Conditionally update the campers array
        state.campers =
          state.filters.page === 1
            ? action.payload
            : [...state.campers, ...action.payload];
        state.hasMore = action.payload.length === state.filters.limit;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.hasMore = false;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.camper = action.payload; // Store single camper data
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setFilters,
  toggleFavorite,
  clearCampers,
  incrementPage,
  setCampers,
} = campersSlice.actions;
export default campersSlice.reducer;
