import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { fetchPages, getFooterMenu, getHeaderMenu } from "../../utils/pages";
import homeContent from "../../_content/home.json";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Page = ({ page, menu, footerMenu, trustees }: any) => {
  return (
    <>
      <Head>
        <title>Graih - {page.title}</title>
      </Head>
      <div className="App bg-slate-100 relative">
        <Header menu={menu}></Header>
        <article className="max-w-7xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:px-8 prose lg:prose-lg prose-teal bg-slate-100 text-slate-600">
          <h1 className="text-teal-600">{page.title}</h1>
          {page.paragraphs.map((p: any, index: number) => {
            return (
              <div className="m-0 p-0 lg:grid lg:grid-cols-2 lg:gap-8" key={`p-${index}`}>
                {p.includeImage ? (
                  <img
                    className={classNames(
                      p.includeImage && p.imageLeft ? "col-start-1" : "col-start-2" ,
                      "rounded-lg shadow-lg object-cover object-center w-full row-start-1 aspect-[2/1] lg:aspect-square")}
                    src={p.featuredImage}
                    alt={p.imageAlt}
                  />
                ) : null}
                <div
                  className={classNames(
                    p.includeImage ? "col-span-1" : "col-span-2",
                    p.includeImage && p.imageLeft ? "col-start-2": "col-start-1",
                    "m-0 p-0"
                  )}
                >
                  {p.heading ? (
                    <h2 className="text-teal-600">{p.heading}</h2>
                  ) : null}
                  <div dangerouslySetInnerHTML={{ __html: p.content }}></div>
                </div>
              </div>
            );
          })}
        </article>
        <Footer footerMenu={footerMenu} trustees={trustees}></Footer>
      </div>
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
  const fetchedPages = await fetchPages();
  const page = fetchedPages.find((page) => page.slug === context?.params?.slug);
  const menu = getHeaderMenu(fetchedPages);
  const footerMenu = getFooterMenu(fetchedPages);
  const { trustees } = homeContent;

  return { props: { page: await page, menu, footerMenu, trustees } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await fetchPages()).map((page) => ({
    params: { slug: page.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
