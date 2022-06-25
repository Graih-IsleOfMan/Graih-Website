import { GetStaticProps } from "next";
import { StringifyOptions } from "querystring";
import { markdownToHtml } from "../utils/markdown";

type Schedule = {
  days: String;
  openingTimes: String;
};

export type ServiceArea = {
  serviceArea: string;
  description?: string;
  schedules: Schedule[];
};

type Props = {
  openingHours: ServiceArea[];
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const OpeningTimes = ({ openingHours }: Props) => {
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
              <div>
                <h2 className="text-xl font-semibold">Opening hours</h2>
                <div className="flex flex-col justify-around">
                  {openingHours.map((serviceArea, index) => {
                    return <div
                      key={`serviceArea-${serviceArea.serviceArea.replace(
                        /\s/g,
                        "-"
                      )}`}
                    >
                      <h3 className={classNames(
                        index === 0 ? "mt-3" : "mt-10",
                        "font-headingFont text-2xl lg:text-3xl font-semibold text-graih1-600")}>
                        {serviceArea.serviceArea}
                      </h3>
                      { serviceArea.description && !serviceArea.description.match(/^\s*$/) ? <p className="mt-2 text-lg">
                      {serviceArea.description}
                    </p> : null }
                      <ul className="flex flex-col content-between">
                        {serviceArea.schedules.map((schedule) => {
                          return (
                            <li
                              key={`schedule-${schedule.days.replace(
                                /\s/g,
                                "-"
                              )}`}
                              className="mt-4 bg-graih3-600 rounded-lg shadow py-2 bg-teal-600"
                            >
                              <div className="text-center uppercase tracking-wide text-lg lg:text-xl text-white">
                                {schedule.days}
                              </div>
                              <div className="text-white text-center text-2xl lg:text-3xl font-semibold">
                                {schedule.openingTimes}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default OpeningTimes;
