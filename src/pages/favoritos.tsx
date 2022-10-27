import React from "react";
import Head from "next/head";
import MeusFavortios from "../components/meusfavoritos";

const Favoritos = () => {
  return (
    <>
      <Head>
        <title>SunStore - Favoritos</title>
      </Head>
      <MeusFavortios />;
    </>
  );
};

export default Favoritos;
