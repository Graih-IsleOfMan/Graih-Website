import type { NextPage } from "next";
import Head from "next/head";
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import OpeningTimes from '../components/OpeningTimes';
import Statistics from '../components/Statistics';
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Graih - Get Involved</title>
    </Head>
    <div className="App bg-slate-100 relative">
    <Hero></Hero>
    <Introduction></Introduction>
    <OpeningTimes></OpeningTimes>
    <Statistics></Statistics>
    <Footer></Footer>
  </div></>
  );
};

export default Home;
