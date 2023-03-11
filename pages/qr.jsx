import React from "react";
import Head from "next/head";
import qr from "@/public/qr.png";
import Link from "next/link";

const { src: qr_code } = qr;

const Qr = () => {
  return (
    <>
      <Head>
        <title>X-QUIZ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="qr__container">
        <img className="qr__code" src={qr_code} alt="qr code" />
        <Link
          className="button"
          style={{ width: "300px", height: "70px" }}
          href="/"
        >
          Home
        </Link>
      </div>
    </>
  );
};

export default Qr;
