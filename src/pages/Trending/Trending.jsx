import React from "react";
import { Box, Pagination, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useParams, useNavigate } from "react-router-dom";
import { useGetTrendingDataQuery } from "../../services/tmdbCore";
import Shimmer from "../../comps/ShimmerUI/Shimmer";
import SingleContent from "../../comps/singleContent/SingleContent";

const useStyles = makeStyles((theme) => ({
  pagination: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "30px auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
}));

const Trending = () => {
  const classes = useStyles();
  const { page } = useParams();
  const { data: trending, isFetching } = useGetTrendingDataQuery(page);
  const navigate = useNavigate();

  const handlePageChange = (event, value) => {
    window.scroll(0, 0);
    if (value === 1) {
      return navigate("/");
    }
    navigate(`/${value}`);
  };

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        align="center"
        textTransform="uppercase"
        py={{ xs: "15px", md: "25px" }}
        color="#fff"
      >
        Trending
      </Typography>
      {isFetching ? (
        <Shimmer />
      ) : (
        <Grid
          container
          direction="row"
          spacing={5}
          alignItems="center"
          justifyContent="center"
          pb="10px"
        >
          {trending?.results &&
            trending?.results?.map((trendingItem) => (
              <SingleContent
                page="trending"
                key={trendingItem.id}
                {...trendingItem}
              />
            ))}
        </Grid>
      )}

      <Box className={classes.pagination}>
        <Pagination
          count={trending?.total_pages > 400 ? 400 : trending?.total_pages}
          defaultPage={1}
          page={Number(page) > 1 ? Number(page) : 1}
          color="secondary"
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </Box>
    </Container>
  );
};

export default React.memo(Trending);
