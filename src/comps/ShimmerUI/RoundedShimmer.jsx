import { Grid, Skeleton, Stack } from "@mui/material";
import React, { memo } from "react";

const GenresShimmer = () => {
  return (
    <Grid
      container
      direction="row"
      spacing={5}
      alignItems="center"
      justifyContent="center"
      flexWrap="nowrap"
    >
      {Array(6)
        .fill("")
        .map((it, index) => (
          <Grid item xs={5} sm={3} md={2} lg={2} key={index}>
            <Stack spacing={2}>
              <Skeleton
                variant="circular"
                animation={"wave"}
                sx={{
                  bgcolor: "grey.900",
                  height: { xs: "100px", md: "140px" },
                }}
              />
              <Skeleton
                variant="text"
                animation="wave"
                sx={{ bgcolor: "grey.900" }}
              />
              <Skeleton
                variant="text"
                animation="wave"
                sx={{ bgcolor: "grey.900" }}
              />
            </Stack>
          </Grid>
        ))}
    </Grid>
  );
};

export default memo(GenresShimmer);
