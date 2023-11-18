import { Container, Grid, Skeleton, Stack } from "@mui/material";
import React, { memo } from "react";

const Shimmer = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        spacing={5}
        alignItems="center"
        justifyContent="center"
        pb="10px"
      >
        {Array(8)
          .fill("")
          .map((it, index) => (
            <Grid item xs={11} sm={5} md={4} lg={3} key={index}>
              <Stack spacing={1}>
                <Skeleton
                  variant="rounded"
                  height={310}
                  animation={"wave"}
                  sx={{ bgcolor: "grey.900" }}
                />
                <Skeleton
                  variant="text"
                  sx={{ bgcolor: "grey.900" }}
                  animation={"wave"}
                />
                <Stack direction="row" justifyContent={"space-between"}>
                  <Skeleton
                    variant="text"
                    width="70%"
                    animation={"wave"}
                    sx={{ bgcolor: "grey.900" }}
                  />
                  <Skeleton
                    variant="circular"
                    height={30}
                    width={30}
                    animation={"wave"}
                    sx={{ bgcolor: "grey.900" }}
                  />
                </Stack>
              </Stack>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default memo(Shimmer);
