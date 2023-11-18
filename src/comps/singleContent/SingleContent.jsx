import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Box,
} from "@mui/material";
import { img_300, unavailable, voteAverageColor } from "../../utils/utils";
import { useStyles } from "./singleContentStyle";
import { Link } from "react-router-dom";

const SingleContent = (props) => {
  const {
    page,
    id,
    title,
    original_title,
    name,
    original_name,
    poster_path,
    vote_average,
    media_type,
  } = props;
  const classes = useStyles();

  return (
    <Grid item xs={11} sm={5} md={4} lg={3}>
      <Link
        to={`/info/${media_type}/${id}`}
        onClick={() => window.scroll(0, 0)}
        style={{
          textDecoration: "none",
        }}
      >
        <Card className={classes.card}>
          <CardMedia
            component="img"
            loading="lazy"
            className={classes.cardImg}
            alt={title}
            height="310px"
            style={{ objectFit: "fill" }}
            image={poster_path ? `${img_300}${poster_path}` : unavailable}
          />
          <CardContent>
            {(page === "trending" || page === "search") && (
              <Typography
                variant="subtitle2"
                textTransform="capitalize"
                align="center"
              >
                {media_type}
              </Typography>
            )}
            <Box className={classes.cardBox}>
              <Typography variant="body1" fontWeight="bold">
                {title || original_title || name || original_name}
              </Typography>
              {vote_average !== 0 ? (
                <Box>
                  <Typography
                    sx={{
                      padding: "7px 9px",
                      color: "#fff",
                      fontWeight: "bold",
                      backgroundColor: voteAverageColor(vote_average),
                      borderRadius: "100%",
                    }}
                  >
                    {vote_average && vote_average?.toFixed(1)}
                  </Typography>
                </Box>
              ) : (
                <Typography
                  variant="caption"
                  fontWeight={"bold"}
                  textAlign={"end"}
                >
                  Not Rated
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default React.memo(SingleContent);
