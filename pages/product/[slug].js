/* eslint-disable @next/next/no-img-element */
import { Button, Grid, Typography } from "@mui/material";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

const ProductDetails = ({ product, products }) => {
  const { image, name, price, details } = product;
  return (
    <Grid>
      <Grid className="product-detail-container">
        <Grid>
          <Grid className="image-container">
            <img src={urlFor(image && image[0])} alt="single product image" />
          </Grid>
          {/* <Grid className="product-details">
            {image?.map((image, index) => (
              <img
                key={index}
                src={urlFor(image)}
                alt="multiple product images"
                className="product-image"
                onMouseEnter=""
              />
            ))}
          </Grid> */}
        </Grid>
        <Grid className="product-detail-desc">
          <Typography variant="h4" component="h2">
            {name}
          </Typography>
          <Grid className="reviews">
            <Grid>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </Grid>
            <Typography variant="body2" component="p">
              (20)
            </Typography>
          </Grid>

          <Typography variant="h5">Details: </Typography>
          <Typography variant="body2" component="p">
            {details}
          </Typography>
          <Typography variant="body2" component="p">
            ${price}
          </Typography>
          <Grid className="quantity">
            <Typography variant="h5" component="p">
              Quantity:
            </Typography>
            <Typography className="quantity-desc">
              <span className="minus" onClick="">
                <AiOutlineMinus />
              </span>
              <span className="num">1</span>
              <span className="plus" onClick="">
                <AiOutlinePlus />
              </span>
            </Typography>
          </Grid>
          <Grid className="buttons">
            <Button className="add-to-cart">Add to Cart</Button>
            <Button className="buy-now">But Now</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="maylike-products.wrapper">
        <Typography variant="h2" className="maylike-products-wrapper-h2">
          You may also like 
        </Typography>
      </Grid>
    </Grid>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
        slug{
            current
        }
    }`;

  const products = await client.fetch(query);
  console.log(products);
  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));
  console.log(paths);
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == 'product']`;

  const [product, products] = await Promise.all([
    client.fetch(query),
    client.fetch(productsQuery),
  ]);

  return {
    props: {
      product,
      products,
    },
  };
};

export default ProductDetails;
