import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isGenresFetching: false,
  moviesGenres: [],
  moviesSelectedGenres: [],
};

export const fetchMovieGenres = createAsyncThunk(
  "genres/fetchMovieGenres",
  async () => {
    let response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    );
    return response.data;
  }
);

const moviesSLice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    selectGenres: (state, action) => {
      state.moviesGenres = state.moviesGenres.filter(
        (gn) => gn.id !== action.payload.id
      );
      state.moviesSelectedGenres = [
        ...state.moviesSelectedGenres,
        action.payload,
      ];
    },
    removeSelectedGenres: (state, action) => {
      state.moviesSelectedGenres = state.moviesSelectedGenres.filter(
        (sg) => sg.id !== action.payload.id
      );
      state.moviesGenres = [...state.moviesGenres, action.payload];
    },
    resetGenres: (state, action) => {
      state.moviesGenres = [];
      state.moviesSelectedGenres = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovieGenres.pending, (state, action) => {
      state.isGenresFetching = true;
    });
    builder.addCase(fetchMovieGenres.fulfilled, (state, action) => {
      state.moviesGenres = action.payload.genres;
      state.isGenresFetching = false;
    });
    builder.addCase(fetchMovieGenres.rejected, (state, action) => {
      console.log(action.error.message);
    });
  },
});

export const { reducer } = moviesSLice;
export const { selectGenres, removeSelectedGenres, resetGenres } =
  moviesSLice.actions;
