"use client";
import React from "react";
import Head from "next/head";
import { Doc } from "@/Sections";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blue Dashboard | Meraj Mazidi</title>
        <meta name="description" content="Meraj Mazidi Blue Dashboard" />
        <meta name="keywords" content="Meraj Mazidi Blue Dashboard" />
        <meta name="author" content="Meraj Mazidi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Popins Font */}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </style>
      </Head>

      <main>
        <Doc />
      </main>
    </>
  );
}
