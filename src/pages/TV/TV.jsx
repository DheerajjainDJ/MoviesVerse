import React, { useEffect, useCallback } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTvGenres,
  selectGenres,
  removeSelectedGenres,
} from "../../features/tv/tvSlice";
import SingleContent from "../../comps/singleContent/SingleContent";
import Shimmer from "../../comps/ShimmerUI/Shimmer";
import CustomPagination from "../../comps/customPagination/CustomPagination";
import Genres from "../../comps/Genres/Genres";
import useGenre from "../../comps/Genres/useGenre";
import { useGetTvDataQuery } from "../../services/tmdbCore";
import GenresShimmer from "../../comps/ShimmerUI/GenresShimmer";

const TV = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { isGenresFetching, tvGenres, selectedTvGenres } = useSelector(
    (state) => state.tv
  );
  const genreForUrl = useGenre(selectedTvGenres);
  const { data: tvData, isFetching } = useGetTvDataQuery({ page, genreForUrl });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!tvGenres.length) {
      dispatch(fetchTvGenres());
    }
  }, [dispatch]);

  const selectedGenreHandler = useCallback(
    (genre) => {
      dispatch(selectGenres(genre));
      navigate("/tv");
    },
    [dispatch, navigate]
  );

  const selectedDeletionHandler = useCallback(
    (genre) => {
      dispatch(removeSelectedGenres(genre));
      navigate("/tv");
    },
    [dispatch, navigate]
  );

  return (
    <Container maxWidth="lg">
      <Typography align="center" variant="h4" pt="35px" color="#fff">
        TV
      </Typography>
      <Box py="16px" textAlign="center">
        {isGenresFetching ? (
          <GenresShimmer />
        ) : (
          <Genres
            genres={tvGenres}
            selectedGenres={selectedTvGenres}
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
          {tvData &&
            tvData?.results?.map((tvItem) => (
              <SingleContent key={tvItem.id} media_type="tv" {...tvItem} />
            ))}
        </Grid>
      )}
      <CustomPagination
        type="tv"
        page={Number(page) > 1 ? Number(page) : 1}
        totalPage={tvData?.total_pages > 200 ? 200 : tvData?.total_pages}
      />
    </Container>
  );
};

export default React.memo(TV);
