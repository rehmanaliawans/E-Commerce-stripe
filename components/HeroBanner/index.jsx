import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const HeroBanner = () => {
  return (
    <Grid className="hero-banner-container">
      <Grid>
        <Typography variant="body1" className="beats-solo">
          SMALL TEXT
        </Typography>
        <Typography variant="h3">MID TEXT</Typography>
        {/* <Image scr="" alt="headephones" className="hero-banner-image" /> */}
        <Grid>
          <Link href="/product /ID">
            <Button> BUTTON TEXT</Button>
          </Link>
          <Grid className="desc">
            <Typography variant="h5">Description</Typography>
            <Typography variant="body1">DESCRIPTION</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
