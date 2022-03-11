/* eslint-disable @next/next/no-img-element */
const OpeningTimes = () => {
  return (
    <div className="bg-slate-100 pt-16 lg:py-24">
      <div className="pb-16 bg-gradient-to-r from-teal-200 to-teal-300 lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-slate-100 lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="rounded-xl shadow-xl overflow-hidden aspect-[2/1.25] lg:aspect-auto lg:h-full">
                <img
                  className="object-cover object-bottom h-full w-full relative"
                  src="/gaelle-marcel-GaLWM8dX73U-unsplash.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              {/* <blockquote> */}
              <div>
                {/* <svg
                      className="h-12 w-12 text-black opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg> */}
                <h2 className="text-xl font-semibold">Opening hours</h2>
                <div className="flex flex-col justify-around">
                  <div>
                    <h3 className="mt-3 font-headingFont text-2xl lg:text-3xl font-semibold text-graih1-600">
                      Drop-in
                    </h3>
                    <ul className="flex flex-col content-between">
                      <li className="mt-4 bg-graih3-600 rounded-lg shadow py-2 bg-teal-600">
                        <div className="text-center uppercase tracking-wide text-lg lg:text-xl text-white">
                          Monday to Friday
                        </div>
                        <div className="text-white text-center text-2xl lg:text-3xl font-semibold">
                          10 am to 2 pm
                        </div>
                      </li>
                      <li className="mt-4 bg-graih3-600 rounded-lg shadow py-2 bg-teal-600">
                        <div className="text-center uppercase tracking-wide text-lg lg:text-xl text-white">
                          Sunday
                        </div>
                        <div className="text-white text-center text-2xl lg:text-3xl font-semibold">
                          12.30 pm to 2 pm
                        </div>
                      </li>
                      <li className="mt-4 bg-graih3-600 rounded-lg shadow py-2 bg-teal-600">
                        <div className="text-center uppercase tracking-wide text-lg lg:text-xl text-white">
                          Every evening
                        </div>
                        <div className="text-white text-center text-2xl lg:text-3xl font-semibold">
                          9 pm to 10 pm
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mt-8 font-headingFont text-2xl lg:text-3xl font-semibold text-graih1-600">
                      Emergency night shelter
                    </h3>
                    <p className="mt-2 text-lg">
                      For those without overnight accomodation, the emergency
                      night shelter is available for over 18s.
                    </p>
                    <div className="mt-4 bg-graih3-600 rounded-lg shadow py-2 bg-teal-600">
                      <div className="text-center uppercase tracking-wide text-lg lg:text-xl text-white">
                        OPEN every night
                      </div>
                      <div className="text-white text-center text-2xl lg:text-3xl font-semibold">
                        9 pm to 7:30 am
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <footer className="mt-6">
                    <p className="text-base font-medium text-black">
                      Judith Black
                    </p>
                    <p className="text-base font-medium text-black">
                      CEO at PureInsights
                    </p>
                  </footer> */}
              {/* </blockquote> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningTimes;
