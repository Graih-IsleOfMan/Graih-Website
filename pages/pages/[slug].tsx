import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { fetchPages } from "../../utils/pages";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Page = ({ page }: any) => {
  return (
    <>
      <Head>
        <title>Graih - {page.title}</title>
      </Head>
      <div className="App bg-slate-100 relative">
        <Header></Header>
        <article className="max-w-7xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:px-8 prose lg:prose-lg prose-teal bg-slate-100 text-slate-600">
          <h1 className="text-teal-600">{page.title}</h1>
          {page.paragraphs.map((p: any) => {
            return (
              <div className="m-0 p-0 lg:grid lg:grid-cols-2 lg:gap-8">
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
        <Footer></Footer>
      </div>
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
  const fetchedPages = await fetchPages();
  const page = fetchedPages.find((page) => page.slug === context?.params?.slug);

  return { props: { page: await page } };
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
