import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Photo from "./Photo";
import { Typography } from "@material-ui/core";

const Picture = () => {
  const [imageData, setImageData] = useState([]);

  const getImages = async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=300"
    );
    if (!response.ok) {
      throw new Error("Data could not be fetched");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    getImages().then((res) => {
      setImageData(res);
    });
  }, []);

  

  return (
    <>
      <Typography
        gutterBottom
        variant="h4"
        align="center"
        style={{ margin: "0 auto", padding: "15px 0px", color: "grey" }}>
        Photo Gallery
      </Typography>
      <Grid container>
        {imageData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Photo imgUrl={item.download_url} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Picture;
