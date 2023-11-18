import React, { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { img_300 } from "../../utils/utils";
import { Box, Typography, Stack } from "@mui/material";

const CastCarousel = ({ carouselContent }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      infinite={true}
      centerMode={true}
      autoPlay={true}
      keyBoardControl={true}
      autoPlaySpeed={8000}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {carouselContent?.map((c) => (
        <Stack
          key={c.id}
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          {c?.profile_path ? (
            <Box
              component="img"
              loading="lazy"
              src={`${img_300}${c?.profile_path}`}
              alt="cast"
              sx={{
                borderRadius: "100%",
                width: { xs: "100px", md: "140px" },
                height: { xs: "100px", md: "140px" },
                boxShadow: "inset 0px 1px 2px rgba(0,0,0,0.25)",
              }}
            />
          ) : (
            <Box
              sx={{
                backgroundColor: "lightgray",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                width: { xs: "100px", md: "140px" },
                height: { xs: "100px", md: "140px" },
                boxShadow: "inset 0px 1px 2px rgba(0,0,0,0.25)",
              }}
            >
              <Typography variant="h4">
                {c?.name?.split(" ").map((n) => n.charAt(0))}
              </Typography>
            </Box>
          )}
          <Typography variant="body1" align="center" color="#fff">
            {c?.name}
          </Typography>
          <Typography
            variant="caption"
            fontWeight="bold"
            color="gray"
            align="center"
          >
            {c?.character || c?.job}
          </Typography>
        </Stack>
      ))}
    </Carousel>
  );
};

export default memo(CastCarousel);
