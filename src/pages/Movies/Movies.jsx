import React, { useEffect, useCallback } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMovieGenres,
  selectGenres,
  removeSelectedGenres,
} from "../../features/movies/moviesSlice";
import Genres from "../../comps/Genres/Genres";
import Shimmer from "../../comps/ShimmerUI/Shimmer";
import SingleContent from "../../comps/singleContent/SingleContent";
import CustomPagination from "../../comps/customPagination/CustomPagination";
import useGenre from "../../comps/Genres/useGenre";
import { useGetMoviesQuery } from "../../services/tmdbCore";
import GenresShimmer from "../../comps/ShimmerUI/GenresShimmer";

const Movies = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isGenresFetching, moviesGenres, moviesSelectedGenres } = useSelector(
    (state) => state.movies
  );
  const genreForUrl = useGenre(moviesSelectedGenres);
  const { data: moviesData, isFetching } = useGetMoviesQuery({
    page,
    genreForUrl,
  });

  useEffect(() => {
    if (!moviesGenres.length) {
      dispatch(fetchMovieGenres());
    }
  }, [dispatch]);

  const selectedGenreHandler = useCallback((genre) => {
    dispatch(selectGenres(genre));
    navigate("/movies");
  }, []);

  const selectedDeletionHandler = useCallback((genre) => {
    dispatch(removeSelectedGenres(genre));
    navigate("/movies");
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography align="center" variant="h4" pt="30px" color="#fff">
        MOVIES
      </Typography>
      <Box py="15px" textAlign="center">
        {isGenresFetching ? (
          <GenresShimmer />
        ) : (
          <Genres
            genres={moviesGenres}
            selectedGenres={moviesSelectedGenres}
            selectedGenreHandler={selectedGenreHandler}
            selectedDeletionHandler={selectedDeletionHandler}
          />
        )}
      </Box>
      {isFetching ? (
        <Shimmer />
      ) : (
        <Grid
          container
          spacing={5}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {moviesData &&
            moviesData?.results?.map((movieItem) => (
              <SingleContent
                key={movieItem.id}
                media_type="movie"
                {...movieItem}
              />
            ))}
        </Grid>
      )}

      <CustomPagination
        type="movies"
        page={Number(page) > 1 ? Number(page) : 1}
        totalPage={
          moviesData && moviesData?.total_pages > 400
            ? 400
            : moviesData?.total_pages
        }
      />
    </Container>
  );
};

export default React.memo(Movies);
