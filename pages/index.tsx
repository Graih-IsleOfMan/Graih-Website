import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import OpeningTimes from '../components/OpeningTimes';
import Statistics from '../components/Statistics';
import Footer from "../components/Footer";
import homeContent from "../_content/home.yml";
import { markdownToHtml } from "../utils/markdown";

type Props = {
  intro: string;
}

const Home = ({intro}:Props) => {
  return (
    <>
    {/* <h1 dangerouslySetInnerHTML={{__html:intro}}/> */}
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

export const getStaticProps: GetStaticProps = async () => {
	const intro = await markdownToHtml(homeContent.introParagraph);
	return {props: {intro}};
};

export default Home;
