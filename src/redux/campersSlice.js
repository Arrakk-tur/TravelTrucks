import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";

const initialState = {
  campers: [],
  total: 0,
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  filters: {
    location: "",
    form: "", // Vehicle form type
    AC: false, // Vehicle form type
    bathroom: false, // Vehicle form type
    kitchen: false, // Vehicle form type
    TV: false, // Vehicle form type
    radio: false, // Vehicle form type
    refrigerator: false, // Vehicle form type
    microwave: false, // Vehicle form type
    gas: false, // Vehicle form type
    water: false, // Vehicle form type
  },
  loading: false,
  error: null,
  hasMore: false,
};

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, { getState }) => {
    const { filters } = getState().campers;
    try {
      const items = await api.fetchCampers(filters);
      // Return in the structure where item has items
      return { items: items, total: items.total };
    } catch (error) {
      throw error;
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id) => {
    try {
      const camper = await api.fetchCamperById(id);
      return camper;
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
      state.hasMore = false;
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
      state.hasMore = false;
    },
    // remove all increment page function, cause there is no sense now
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        // Update campers and total
        state.campers = action.payload.items;
        state.total = action.payload.total;
        state.hasMore = false;
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
        state.camper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilters, toggleFavorite, clearCampers } =
  campersSlice.actions;
export default campersSlice.reducer;
