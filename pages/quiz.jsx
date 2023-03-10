import React from "react";
import Head from "next/head";
import data from "@/data/home";
import logo_pic from "@/public/logo.png";
import Router from "next/router";

import illu1 from "@/public/messi.jpg";
import illu2 from "@/public/geo.png";
import illu3 from "@/public/weekend.gif";
import illu4 from "@/public/history.png";
import QuizSection from "@/Components/QuizSection";

const { src: pic1 } = illu1;
const { src: pic2 } = illu2;
const { src: pic3 } = illu3;
const { src: pic4 } = illu4;
const { src: logo } = logo_pic;

const Lines = ({ top }) => {
  return (
    <>
      {top && <span className="line0"></span>}
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
      <span className="line4"></span>
      <span className="line5"></span>
      <span className="line6"></span>
    </>
  );
};

const Container = ({ children, image }) => {
  return (
    <main className="container">
      <section className="content">{children}</section>
      <section className="cover">
        <img className="cover__image" src={image} alt="cover image" />
      </section>
    </main>
  );
};

const Content1 = ({ title, description, logo, topic }) => {
  return (
    <>
      <img src={logo} alt="logo" className="logo" />
      <QuizSection topic={topic} />
    </>
  );
};

const quiz = () => {
  let picture;
  switch (Router.query.topic) {
    case "history":
      picture = pic4;
      break;
    case "football":
      picture = pic1;
      break;
    case "music":
      picture = pic3;
      break;
    case "geography":
      picture = pic2;
      break;
    default:
      picture = pic1;
  }
  return (
    <>
      <Head>
        <title>X-QUIZ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Lines />
      <Container image={picture}>
        <Content1
          title={data.home.title}
          description={data.home.description}
          logo={logo}
          topic={Router.query.topic}
        />
      </Container>
    </>
  );
};

export default quiz;
