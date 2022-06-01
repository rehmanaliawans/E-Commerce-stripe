import { Box, Typography } from "@mui/material";
import React from "react";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <Box className="footer-container">
      <Typography variant="body1">
        2022 E-commerece Store All Rights Reserved
      </Typography>
      <Typography variant="body1">
        <AiOutlineTwitter />
        <AiFillInstagram />
      </Typography>
    </Box>
  );
};

export default Footer;
