import type { NextPage } from "next";
import Head from "next/head";
import Header from '../components/Header';
import GetInvolved from '../components/GetInvolved';
import Footer from '../components/Footer';

const GetInvolvedPage: NextPage = () => {
  return (
    <>
    <Head>
      <title>Graih - A home for the homeless in the Isle of Man</title>
    </Head>
    <div className="App bg-slate-100 relative">
    <Header></Header>
    <GetInvolved></GetInvolved> 
    <Footer></Footer>
  </div></>
  );
};

export default GetInvolvedPage;
