/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { urlFor } from "../../lib/client";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
const Product = ({ product: { image, slug, price, name } }) => {
  return (
    <Box>
      <Link href={`/product/${slug.current}`}>
        <Grid className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={200}
            height={200}
            className="product-image"
            alt="product-image"
          />
          <Typography variant="h6" className="product-name">
            {name}
          </Typography>
          <Typography variant="h6" className="product-price">
            ${price}
          </Typography>
        </Grid>
      </Link>
    </Box>
  );
};

export default Product;
