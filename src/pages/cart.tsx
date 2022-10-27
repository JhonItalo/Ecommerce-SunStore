import React from "react";
import Head from "next/head";
import MyCart from "../components/myCart";

const cart = () => {
  return (
    <>
      <Head>
        <title>SunStore - Cart</title>
      </Head>
      <MyCart />
    </>
  );
};

export default cart;
