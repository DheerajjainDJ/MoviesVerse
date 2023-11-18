import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isGenresFetching: false,
  tvGenres: [],
  selectedTvGenres: [],
};

export const fetchTvGenres = createAsyncThunk(
  "tvGenres/fetchTvGenres",
  async () => {
    let response = await axios.get(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    );
    return response.data;
  }
);

const tvSlice = createSlice({
  name: "tv",
  initialState: initialState,
  reducers: {
    selectGenres: (state, action) => {
      state.tvGenres = state.tvGenres.filter(
        (gn) => gn.id !== action.payload.id
      );
      state.selectedTvGenres = [...state.selectedTvGenres, action.payload];
    },
    removeSelectedGenres: (state, action) => {
      state.selectedTvGenres = state.selectedTvGenres.filter(
        (sg) => sg.id !== action.payload.id
      );
      state.tvGenres = [...state.tvGenres, action.payload];
    },
    resetGenres: (state, action) => {
      state.tvGenres = [];
      state.selectedTvGenres = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTvGenres.pending, (state, action) => {
      state.isGenresFetching = true;
    });
    builder.addCase(fetchTvGenres.fulfilled, (state, action) => {
      state.tvGenres = action.payload.genres;
      state.isGenresFetching = false;
    });
    builder.addCase(fetchTvGenres.rejected, (state, action) => {
      console.log(action.error.message);
    });
  },
});

export const { reducer } = tvSlice;
export const { selectGenres, removeSelectedGenres, resetGenres } =
  tvSlice.actions;
