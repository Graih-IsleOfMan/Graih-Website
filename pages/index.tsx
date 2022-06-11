import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import OpeningTimes, { ServiceArea } from "../components/OpeningTimes";
import Statistics, { Statistic } from "../components/Statistics";
import Footer from "../components/Footer";
import homeContent from "../_content/home.json";
import { markdownToHtml } from "../utils/markdown";
import { fetchPages, getFooterMenu, getHeaderMenu } from "../utils/pages";

type Props = {
  intro: string;
  openingHours: ServiceArea[];
  impactStats: Statistic[];
  impactDates: string;
  homeContent: any;
  menu: { label: string, href: string }[];
  footerMenu: { label: string, href: string }[];
  trustees: { name: string }[];
  primaryActionLabel: string;
  primaryActionLink: string;
  secondaryActionLabel: string;
  secondaryActionLink: string;
};

const Home = ({ intro, openingHours, impactStats, impactDates, menu, footerMenu, trustees, primaryActionLabel,
  primaryActionLink,
  secondaryActionLabel,
  secondaryActionLink }: Props) => {
  return (
    <>
      <Head>
        <title>Graih - A home for the homelessin the Isle of Man</title>
      </Head>
      <div className="App bg-slate-100 relative">
        <Hero menu={menu} actions= {{primaryActionLabel,
  primaryActionLink,
  secondaryActionLabel,
  secondaryActionLink}}></Hero>
        <div className="bg-slate-100">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pt-16 pb-8">
            <h2 className="text-4xl font-extrabold text-black">
              Welcome to Graih
            </h2>
            <h3 className="text-teal-700 text-xl mt-2">
              <em>A Manx word meaning love</em>
            </h3>
            <div
              className="mt-6 border-t border-gray-800 border-opacity-25 pt-4 text-lg"
              dangerouslySetInnerHTML={{ __html: intro }}
            />
          </div>
        </div>
        <OpeningTimes openingHours={openingHours}></OpeningTimes>
        <Statistics
          impactDates={impactDates}
          impactStats={impactStats}
        ></Statistics>
      </div>
      <Footer footerMenu={footerMenu} trustees={trustees}></Footer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fetchedPages = await fetchPages();
  const menu = getHeaderMenu(fetchedPages);
  const footerMenu = getFooterMenu(fetchedPages);

  const {
    primaryActionLabel,
    primaryActionLink,
    secondaryActionLabel,
    secondaryActionLink,
    openingHours,
    introParagraph,
    ourImpactStats: impactStats,
    ourImpactDates: impactDates,
    trustees
  } = homeContent;
  return {
    props: {
      intro: await markdownToHtml(introParagraph),
      openingHours,
      impactStats,
      impactDates,
      menu,
      footerMenu,
      trustees,
      primaryActionLabel,
      primaryActionLink,
      secondaryActionLabel,
      secondaryActionLink,
    },
  };
};

export default Home;
