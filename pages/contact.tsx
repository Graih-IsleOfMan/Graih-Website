import { GetStaticProps } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { fetchPages, getFooterMenu, getHeaderMenu } from "../utils/pages";
import homeContent from "../_content/home.json";
import contactContent from "../_content/contact.json";

const Contact = ({
  menu,
  footerMenu,
  trustees,
  title,
  contactDetails,
  detailsNote,
  address,
  addressNote,
  map,
}: any) => {
  return (
    <>
      <Head>
        <title>Graih - {title}</title>
      </Head>
      <div className="App bg-white relative">
        <Header menu={menu}></Header>
        <div className="bg-white py-16 px-0 sm:py-12">
          <div
            className="lg:mx-auto lg:max-w-7xl px-6
          "
          >
            <h1 className="text-5xl font-extrabold text-teal-600">
              Contact us
            </h1>
          </div>

          <div className="mt-10 bg-gradient-to-r from-teal-100 to-teal-200 lg:pb-0 lg:z-10 lg:relative">
            <div className="lg:grid lg:grid-cols-2 max-w-7xl m-auto">
              <div className="col-span-1 col-start-1 px-6 py-6">
                <h2 className="text-3xl font-semibold text-teal-700">
                  Contact details
                </h2>
                <dl className="sm:divide-y sm:divide-teal-600 mt-5">
                  {contactDetails.map((detail: any) => (
                    <div key={detail.name} className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="font-semibold text-teal-700">
                        {detail.name}
                      </dt>
                      <dd
                        className="mt-1 text-teal-900 sm:mt-0 sm:col-span-2"
                        dangerouslySetInnerHTML={{ __html: detail.details }}
                      ></dd>
                    </div>
                  ))}
                </dl>

                <p className="font-medium text-teal-700 mt-5">{detailsNote}</p>
                <h2 className="text-3xl font-semibold mt-16 text-teal-700">
                  Where to find us
                </h2>
                <p className="mt-3 text-teal-700">We are based at:</p>

                <div className="text-teal-700">
                  <div className="grid place-content-center">
                    <p
                      className="mt-1 text-xl text-warm-gray-500"
                      dangerouslySetInnerHTML={{ __html: address }}
                    ></p>
                  </div>
                  <p className="mt-6">
                    {addressNote}
                  </p>
                </div>
                <div className="flex flex-col justify-around"></div>
              </div>
              <div className=" bg-white h-auto lg:-my-8 rounded-xl col-span-1 col-start-2">
                <div className="lg:rounded-xl lg:shadow-xl overflow-hidden aspect-auto lg:h-full">
                  <a href={map} title="Open map">
                    <img
                      className="object-cover object-bottom h-full w-full relative"
                      src={map}
                      alt="Map showing Graih&apos;s location in Douglas (54.15780131779715, -4.478278503200159)"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="relative">
              <h2 className="sr-only">Contact us</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact form */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-3 xl:p-12">
                  <h3 className="text-3xl font-semibold text-teal-600">
                    Send us a message
                  </h3>
                  <form
                    name="Contact"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    method="POST"
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <p className="hidden">
                      <label>
                        Don&apos;t fill this out if you&apos;re human:{" "}
                        <input name="bot-field" />
                      </label>
                    </p>
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          required
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          required
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Email
                        </label>
                        <span
                          id="email-optional"
                          className="text-sm text-gray-500"
                        >
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Phone
                        </label>
                        <span
                          id="phone-optional"
                          className="text-sm text-gray-500"
                        >
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                          aria-describedby="phone-optional"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Subject
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          required
                          name="subject"
                          id="subject"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Message
                        </label>
                        <span
                          id="message-max"
                          className="text-sm text-gray-500"
                        >
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          required
                          name="message"
                          rows={4}
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-gray-300 rounded-md"
                          aria-describedby="message-max"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  const { title, contactDetails, detailsNote, address, addressNote, map } =
    contactContent;

  return {
    props: {
      menu,
      footerMenu,
      trustees,
      title,
      contactDetails: contactDetails.map((x) => ({
        name: x.name,
        details: x.details.replace(/\n/g, "<br />"),
      })),
      detailsNote,
      address: address.replace(/\n/g, "<br />"),
      addressNote,
      map,
    },
  };
};
