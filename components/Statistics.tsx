export type Statistic = {
  statValue: string;
  statDescription: string;
};

type Props = {
  impactStats: Statistic[];
  impactDates: string;
};

const Statistics = ({ impactStats, impactDates }: Props) => {
  console.log({impactDates, impactStats})
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto x-4 sm:px-6 pt-8 pb-16 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Our impact
          </h2>
          <p className="mt-3 text-xl text-slate-700 sm:mt-4">{impactDates}</p>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
          <div className="max-w-4xl mx-auto">
            <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
              <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-slate-500">
                  {impactStats[0].statDescription}
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-teal-600">
                  {impactStats[0].statValue}
                </dd>
              </div>
              <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-slate-500">
                  {impactStats[1].statDescription}
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-teal-600">
                  {impactStats[1].statValue}
                </dd>
              </div>
              <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-slate-500">
                  {impactStats[2].statDescription}
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-teal-600">
                  {impactStats[2].statValue}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
