import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Fragment } from "react";

type Props = {
  menu: { label: string; href: string }[];
};

const Menu = ({ menu }: Props) => {
  return (
    <Disclosure as="header">
      {({ open }) => (
        <Fragment>
          <div className="py-4">
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto text-white">
                  <Link href="/">
                    <a className="h-12 md:h-16 flex flex-row items-center">
                      <svg
                        className="h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 28.57 28.108"
                      >
                        <g
                          className="stroke-current"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            d="M1.906 12.61s-.308 4.694.467 13.61M6.474 14.027s-.38 4.118-.392 9.08M15.826 13.085s-.428 3.317-.492 6.943M24.158 12.631s-.238 1.166-1.102 7.423"
                            strokeWidth=".26458"
                          />
                          <path
                            className="text-teal-500 stroke-current"
                            d="M2.86 27.844s9.142-11.718 24.734-5.258"
                            strokeWidth=".52916"
                          />
                          <path
                            d="M1.062 9.798l2.888-4.18M6.966 2.193l.306-.572 4.217.897M17.081 4.557l3.582-.04"
                            strokeWidth=".26458"
                          />
                          <path
                            d="M.265 10.407s4.136 2.124 5.668 2.287l5.623-8.665s.475-1.325 1.022.029"
                            strokeWidth=".52916"
                          />
                          <path
                            d="M12.578 4.058l2.955 7.427s.257.86.977-.037l4.645-6.334s.57-.705.82.04l1.932 5.968s.27.79.585-.003l2.17-3.805s.32-.774.684.077c0 0 .58 1.223.96 5.11M9.618 10.988l.046 2.8M12.368 10.657l-.046 2.727M19.741 10.95l-.09 1.895M21.88 10.99l-.056 1.86M26.04 11.936l-.095 1.082M27.061 12.429l-.044.934"
                            strokeWidth=".52916"
                          />
                          <path
                            d="M10.505 21.338s-.308-.897-.188-2.454c0 0 .487-.686 1.379-.446 0 0 .194.41.306 2.06M18.999 19.89s-.07-1.102.21-2.589c0 0 .354-.417 1.004-.148 0 0 .152.457.16 2.594M24.7 20.632s.05-1.372.545-2.445c0 0 .342-.24.767-.037 0 0 .204-.077-.5 2.732M4.7 6.107L4.787.475s.657-.758 1.397-.032l.166 5.365M14.612 5.699s.062-1.32.705-3.452c0 0 .406-.49 1.193.268 0 0 .11 1.568-.576 4.402M24.825 6.615l1.564-.007M23.408 6.66l.073-2.225s.382-.467.842.022l-.027 2.668M28.076 13.785s-.22 4.324-1.031 7.55"
                            strokeWidth=".26458"
                          />
                        </g>
                      </svg>
                      <h1 className="ml-4 text-2xl md:text-4xl font-medium">
                        Graih
                      </h1>
                    </a>
                  </Link>

                  <div className="-mr-2 flex items-center md:hidden">
                    <Disclosure.Button className="bg-teal-400 rounded-md p-2 inline-flex items-center justify-center text-slate-400 hover:bg-teal-600 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open menu</span>
                      <MenuIcon
                        className="h-6 w-6 text-slate-800"
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:flex md:ml-10"></div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                {menu.map((item) => (
                  <span
                    key={`menu-${item.href}`}
                    className="text-base font-medium text-white hover:text-slate-300"
                  >
                    <Link key={`link-${item.href}`} href={item.href}>
                      {item.label}
                    </Link>
                  </span>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Disclosure.Panel className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
              {({ close }) => (
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <Link href="/">
                      <a className="h-12 md:h-16 flex flex-row items-center text-slate-800">
                        <svg
                          className="h-full"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 28.57 28.108"
                        >
                          <g
                            className="stroke-current"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              d="M1.906 12.61s-.308 4.694.467 13.61M6.474 14.027s-.38 4.118-.392 9.08M15.826 13.085s-.428 3.317-.492 6.943M24.158 12.631s-.238 1.166-1.102 7.423"
                              strokeWidth=".26458"
                            />
                            <path
                              className="text-teal-500 stroke-current"
                              d="M2.86 27.844s9.142-11.718 24.734-5.258"
                              strokeWidth=".52916"
                            />
                            <path
                              d="M1.062 9.798l2.888-4.18M6.966 2.193l.306-.572 4.217.897M17.081 4.557l3.582-.04"
                              strokeWidth=".26458"
                            />
                            <path
                              d="M.265 10.407s4.136 2.124 5.668 2.287l5.623-8.665s.475-1.325 1.022.029"
                              strokeWidth=".52916"
                            />
                            <path
                              d="M12.578 4.058l2.955 7.427s.257.86.977-.037l4.645-6.334s.57-.705.82.04l1.932 5.968s.27.79.585-.003l2.17-3.805s.32-.774.684.077c0 0 .58 1.223.96 5.11M9.618 10.988l.046 2.8M12.368 10.657l-.046 2.727M19.741 10.95l-.09 1.895M21.88 10.99l-.056 1.86M26.04 11.936l-.095 1.082M27.061 12.429l-.044.934"
                              strokeWidth=".52916"
                            />
                            <path
                              d="M10.505 21.338s-.308-.897-.188-2.454c0 0 .487-.686 1.379-.446 0 0 .194.41.306 2.06M18.999 19.89s-.07-1.102.21-2.589c0 0 .354-.417 1.004-.148 0 0 .152.457.16 2.594M24.7 20.632s.05-1.372.545-2.445c0 0 .342-.24.767-.037 0 0 .204-.077-.5 2.732M4.7 6.107L4.787.475s.657-.758 1.397-.032l.166 5.365M14.612 5.699s.062-1.32.705-3.452c0 0 .406-.49 1.193.268 0 0 .11 1.568-.576 4.402M24.825 6.615l1.564-.007M23.408 6.66l.073-2.225s.382-.467.842.022l-.027 2.668M28.076 13.785s-.22 4.324-1.031 7.55"
                              strokeWidth=".26458"
                            />
                          </g>
                        </svg>
                        <h1 className="ml-4 text-2xl md:text-4xl font-medium">
                          Graih
                        </h1>
                      </a>
                    </Link>
                    <div className="-mr-2">
                      <Disclosure.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-slate-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-600">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Disclosure.Button>
                    </div>
                  </div>
                  <div className="pt-5 pb-6">
                    <div className="px-2 space-y-1">
                      {menu.map((item) => (
                        <Disclosure.Button
                          as={Link}
                          key={item.label}
                          href={item.href}
                        >
                          <span
                            key={`menu2-${item.href}`}
                            className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-teal-200"
                            onClick={()=> close()}
                          >
                            {item.label}
                          </span>
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Disclosure.Panel>
          </Transition>
          { open ? <div
            className={`${open ? "opacity-60 fixed inset-0 z-20" : "opacity-0"
              } bg-black transition-opacity`}
          />  : null }
        </Fragment>
      )}
    </Disclosure>
  );
};

export default Menu;
