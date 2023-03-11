import Head from "next/head";
import data from "@/data/home";
import illustration from "@/public/topic.png";
import logo_pic from "@/public/logo.png";
import { useRouter } from "next/router";
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

const Content1 = ({ title, logo }) => {
  const router = useRouter();
  return (
    <>
      <img src={logo} alt="logo" className="logo" />
      <h1 className="title">{title}</h1>
      <button
        className="cta__choose"
        onClick={() => {
          router.push("/history");
        }}
      >
        History
      </button>
      <button
        className="cta__choose"
        onClick={() => {
          router.push("/football");
        }}
      >
        Football
      </button>
      <button
        className="cta__choose"
        onClick={() => {
          router.push("/music");
        }}
      >
        Music
      </button>
      <button
        className="cta__choose"
        onClick={() => {
          router.push("/geography");
        }}
      >
        Geography
      </button>
    </>
  );
};

const Choose = () => {
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
          title={data.choose.title}
          description={data.choose.description}
          logo={logo}
        />
      </Container>
    </>
  );
};

export default Choose;
