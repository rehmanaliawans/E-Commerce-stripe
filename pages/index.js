import { Grid, Typography, Box } from "@mui/material";
import { client } from "../lib/client";
import { Product, HeroBanner, FooterBanner } from "../components";
const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <Box className="products-heading">
        <Typography variant="h2">Best Selling Products</Typography>
        <Typography variant="body1">Speakers of many variantions</Typography>
      </Box>
      <Box className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product && product} />
        ))}
      </Box>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const productQuery = "*[_type == 'product']";
  const products = await client.fetch(productQuery);

  const bannerQuery = "*[_type == 'banner']";
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
