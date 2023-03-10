import Head from "next/head";
import data from "@/data/home";
import illustration from "@/public/illustration.jpg";
import logo_pic from "@/public/logo.png";
import Router from "next/router";

const { src: pic1 } = illustration;
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

const Content1 = ({ title, description, logo }) => {
  return (
    <>
      <img src={logo} alt="logo" className="logo" />
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <button
        className="cta"
        onClick={() => {
          Router.push("/choose");
        }}
      >
        Enter
      </button>
    </>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>X-QUIZ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Lines />
      <Container image={pic1}>
        <Content1
          title={data.home.title}
          description={data.home.description}
          logo={logo}
        />
      </Container>
    </>
  );
}
