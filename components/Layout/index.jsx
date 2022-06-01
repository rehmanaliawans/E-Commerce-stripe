import React from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import NavBar from "../NavBAr";
import Footer from "../Footer";
const Layout = ({ children }) => {
  return (
    <Box className="layout">
      <Head>
        <title>E-commerece Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
};

export default Layout;
