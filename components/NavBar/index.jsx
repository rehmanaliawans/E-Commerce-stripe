import React from "react";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";
const NavBar = () => {
  return (
    <Box className="navbar-container">
      <Typography variant="body1" className="logo">
        <Link href="/">E-commerece Store</Link>
      </Typography>
      <Button className="cart-icon">
        <AiOutlineShoppingCart />
        <span className="cart-item-qty">1</span>
      </Button>
    </Box>
  );
};

export default NavBar;
