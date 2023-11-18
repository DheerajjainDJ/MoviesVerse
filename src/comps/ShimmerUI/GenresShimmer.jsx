import { Grid, Skeleton } from "@mui/material";
import React, { memo } from "react";

const GenresShimmer = () => {
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="center"
    >
      {Array(10)
        .fill("")
        .map((it, index) => (
          <Grid item xs={3} sm={2} md={1.5} lg={1.5} key={index}>
            <Skeleton
              variant="rounded"
              height={35}
              animation={"wave"}
              sx={{ bgcolor: "grey.900", borderRadius: "32px" }}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default memo(GenresShimmer);
