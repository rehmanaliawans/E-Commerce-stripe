import { Grid, Typography, Box } from "@mui/material";
import { Product, HeroBanner, FooterBanner } from "../components";
const Home = () => {
  return (
    <>
      <HeroBanner />
      <Box className="products-heading">
        <Typography variant="h2">Best Selling Products</Typography>
        <Typography variant="body1">Speakers of many variantions</Typography>
      </Box>
      <Box className="products-container">
        {["Product 1 ", "Product 2"].map((product, index) => product)}
      </Box>
      <FooterBanner />
    </>
  );
};

export default Home;
