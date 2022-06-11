import { GetStaticProps } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { fetchPages, getFooterMenu, getHeaderMenu } from "../utils/pages";
import homeContent from "../_content/home.json";
import contactContent from "../_content/contact.json";

const Contact = ({ menu, footerMenu, trustees, title }: any) => {
    return (
      <>
        <Head>
          <title>Graih - {title}</title>
        </Head>
        <div className="App bg-slate-100 relative">
          <Header menu={menu}></Header>
          <article className="max-w-7xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:px-8 prose lg:prose-lg prose-teal bg-slate-100 text-slate-600">
            <h1 className="text-teal-600">{title}</h1>
            
          </article>
          <Footer footerMenu={footerMenu} trustees={trustees}></Footer>
        </div>
      </>
    );
  };
  
  export default Contact;
  
  export const getStaticProps: GetStaticProps = async () => {
    const fetchedPages = await fetchPages();
    const menu = getHeaderMenu(fetchedPages);
    const footerMenu = getFooterMenu(fetchedPages);
    const { trustees } = homeContent;
    const { title } = contactContent;
  
    return { props: { menu, footerMenu, trustees, title } };
  };