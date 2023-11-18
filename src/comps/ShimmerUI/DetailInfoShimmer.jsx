import { Box, Container, Grid, Skeleton, Stack } from "@mui/material";
import React, { memo } from "react";

const DetailInfoShimmer = () => {
  return (
    <Box height="100%" py={3}>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" columnSpacing={5}>
          <Grid item xs={12} sm={5.5} md={5} lg={3.5}>
            <Skeleton
              variant="rounded"
              height={440}
              sx={{ bgcolor: "grey.900" }}
              animation={"wave"}
            />
          </Grid>
          <Grid item xs={12} sm={11} md={11} lg={7}>
            <Stack mt={3} spacing={1.5} direction="column">
              <Skeleton
                variant="text"
                width="90%"
                height={100}
                sx={{
                  bgcolor: "grey.900",
                  fontSize: { xs: "1.1rem", md: "2.4rem" },
                }}
                animation={"wave"}
              />
              <Skeleton
                variant="text"
                width="60%"
                sx={{
                  bgcolor: "grey.900",
                  fontSize: { xs: "1rem", md: "1.4rem" },
                }}
                animation={"wave"}
              />
              <Skeleton
                variant="text"
                width="50%"
                sx={{
                  bgcolor: "grey.900",
                  fontSize: { xs: "1rem", md: "1.4rem" },
                }}
                animation={"wave"}
              />
              <Stack spacing={2} direction="row">
                {Array(3)
                  .fill("")
                  .map((item, index) => (
                    <Skeleton
                      key={index}
                      variant="circular"
                      height={35}
                      width={35}
                      animation={"wave"}
                      sx={{ bgcolor: "grey.900" }}
                    />
                  ))}
              </Stack>
              <Skeleton
                variant="text"
                width={80}
                sx={{
                  bgcolor: "grey.900",
                }}
                animation={"wave"}
              />
              <Stack spacing={1.5}>
                {Array(3)
                  .fill("")
                  .map((item, index) => (
                    <Skeleton
                      key={index}
                      variant="text"
                      sx={{
                        bgcolor: "grey.900",
                        fontSize: { xs: "1rem", md: "1.2rem" },
                      }}
                      animation={"wave"}
                    />
                  ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(DetailInfoShimmer);
