/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../lib/client";
const HeroBanner = ({ HeroBanner }) => {
  return (
    <Grid className="hero-banner-container">
      <Grid>
        <Typography variant="body1" className="beats-solo">
          {HeroBanner.smallText}
        </Typography>
        <Typography variant="h3">{HeroBanner.midText}</Typography>
        <Typography variant="h1">{HeroBanner.largeText1}</Typography>
        <img
          src={urlFor(HeroBanner.image)}
          alt="headephones"
          className="hero-banner-image"
        />
        <Grid>
          <Link href={`/product/${HeroBanner.product}`}>
            <Button>{HeroBanner.buttonText}</Button>
          </Link>
          <Grid className="desc">
            <Typography variant="h5">Description</Typography>
            <Typography variant="body1">{HeroBanner.desc}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
