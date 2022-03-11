import Link from "next/link";
import Menu from "./Menu";

const Hero = () => {
  return (
    <div className="bg-slate-800 bg-cover bg-hero-home bg-blend-soft-light">
      <Menu />
      <div className="pt-10 m:pt-16 lg:pt-8 lg:pb-14">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="pb-10 sm:pb-52 lg:py-24 ">
                <h1 className="mt-3 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-2 xl:text-6xl">
                  <span className="block">A home for the homeless</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-teal-500">
                    in the Isle of Man
                  </span>
                </h1>
                <p className="mt-3 text-base text-slate-100 sm:mt-5 sm:text-xl lg:text-xl xl:text-xl">
                  If you are homeless, or in vulnerable accomodation, Graih is
                  here to support you.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start items-center">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-lg rounded-md text-slate-800 font-bold hover:bg-teal-600 md:py-4 md:text-2xl md:px-10 bg-teal-400"
                    >
                      Need help?
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/get-involved"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-800 bg-slate-100 hover:bg-slate-300 md:py-4 md:text-xl md:px-10"
                    >
                      Get involved
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div className="hidden lg:block mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              

                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28.57 28.108"
                  className="mix-blend-overlay text-white stroke-current w-full lg:absolute lg:inset-y-0 lg:left-0 lg:w-auto lg:max-w-none"
                >
                  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path
                      d="M1.906 12.61s-.308 4.694.467 13.61M6.474 14.027s-.38 4.118-.392 9.08M15.826 13.085s-.428 3.317-.492 6.943M24.158 12.631s-.238 1.166-1.102 7.423"
                      stroke-width=".26458"
                    />
                    <path
                      d="M2.86 27.844s9.142-11.718 24.734-5.258"
                      stroke-width=".52916"
                    />
                    <path
                      d="M1.062 9.798l2.888-4.18M6.966 2.193l.306-.572 4.217.897M17.081 4.557l3.582-.04"
                      stroke-width=".26458"
                    />
                    <path
                      d="M.265 10.407s4.136 2.124 5.668 2.287l5.623-8.665s.475-1.325 1.022.029"
                      stroke-width=".52916"
                    />
                    <path
                      d="M12.578 4.058l2.955 7.427s.257.86.977-.037l4.645-6.334s.57-.705.82.04l1.932 5.968s.27.79.585-.003l2.17-3.805s.32-.774.684.077c0 0 .58 1.223.96 5.11M9.618 10.988l.046 2.8M12.368 10.657l-.046 2.727M19.741 10.95l-.09 1.895M21.88 10.99l-.056 1.86M26.04 11.936l-.095 1.082M27.061 12.429l-.044.934"
                      stroke-width=".52916"
                    />
                    <path
                      d="M10.505 21.338s-.308-.897-.188-2.454c0 0 .487-.686 1.379-.446 0 0 .194.41.306 2.06M18.999 19.89s-.07-1.102.21-2.589c0 0 .354-.417 1.004-.148 0 0 .152.457.16 2.594M24.7 20.632s.05-1.372.545-2.445c0 0 .342-.24.767-.037 0 0 .204-.077-.5 2.732M4.7 6.107L4.787.475s.657-.758 1.397-.032l.166 5.365M14.612 5.699s.062-1.32.705-3.452c0 0 .406-.49 1.193.268 0 0 .11 1.568-.576 4.402M24.825 6.615l1.564-.007M23.408 6.66l.073-2.225s.382-.467.842.022l-.027 2.668M28.076 13.785s-.22 4.324-1.031 7.55"
                      stroke-width=".26458"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
