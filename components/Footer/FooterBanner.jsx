/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { urlFor } from "../../lib/client";
import { Box } from "@mui/system";
import { Grid, Typography, Button } from "@mui/material";
const FooterBanner = ({
  footerBanner: {
    image,
    slug,
    price,
    name,
    discount,
    largeText1,
    largeText2,
    smallText,
    saleTime,
    buttonText,
    midText,
    desc,
    product,
  },
}) => {
  return (
    <Box className="footer-banner-container">
      <Grid className="banner-desc">
        <Grid className="left">
          <Typography variant="body1">{discount}</Typography>
          <Typography variant="h3">{largeText1}</Typography>
          <Typography variant="h3">{largeText2}</Typography>
          <Typography variant="body1">{saleTime}</Typography>
        </Grid>
        <Grid className="right">
          <Typography variant="h3">{smallText}</Typography>
          <Typography variant="h3">{midText}</Typography>
          <Typography variant="body1">{desc}</Typography>

          <Link href={`/product/${product}`}>
            <Button variant="contained">{buttonText}</Button>
          </Link>
        </Grid>
        <img
          src={urlFor(image)}
          className="footer-banner-image"
          alt="footer-banner-image"
        />
      </Grid>
    </Box>
  );
};

export default FooterBanner;
