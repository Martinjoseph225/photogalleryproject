import { Typography } from "@mui/material";
import React from "react";
import RQFetching from "../components/RQFetching";

const Homepage = () => {
  return (
    <>
      <Typography
        gutterBottom
        variant="h3"
        align="center"
        style={{ margin: "0 auto", padding: "45px 0px", color: "darkgreen" }}>
        React App with Photo Gallery and Employee Details
      </Typography>
      <RQFetching/>
    </>
  );
};

export default Homepage;
