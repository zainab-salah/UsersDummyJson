"use client";
import Link from "next-intl/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import navData from "./navData";
import Logo from "@/public/Logo";

import { useRouter } from "next/navigation";
import { useAuth } from "@/app/[locale]/context/AuthContext";
import { toast } from "react-toastify";
import Search from "./Search";

const Header = () => {
  const { user, logout } = useAuth();

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const router = useRouter();

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  const handleLogout = async (e) => {
    await logout();
    router.push("/");
    toast.success("Logged Out!");
  };
  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center bg-transparent   ${
          sticky
            ? "!fixed !z-40 !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition   dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Logo classes="w-full dark:hidden text-dark " />
                <Logo classes="hidden w-full text-white  dark:block " />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar flex gap-5 items-center lg:flex-row flex-col   absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {navData.map((menuItem, index) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <a
                              onClick={() => handleSubmenu(index)}
                              className="flex  cursor-pointer  items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                            <div
                              className={`submenu  relative left-0 top-full rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem) => (
                                <Link
                                  onClick={navbarToggleHandler}
                                  href={submenuItem.path}
                                  key={submenuItem.id}
                                  className="block  rounded  py-2.5 text-right text-sm text-dark hover:opacity-70 dark:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                    {user ? (
                      <>
                        <li
                          className="group  relative block lg:hidden"
                          onClick={navbarToggleHandler}
                        >
                          <Link
                            href="/account"
                            className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                          >
                            My Info
                          </Link>
                        </li>
                        <li
                          className="group relative block lg:hidden"
                          onClick={navbarToggleHandler}
                        >
                          <button
                            onClick={handleLogout}
                            className={`flex py-2 text-right text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                          >
                            Logout
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li
                          className="group relative block lg:hidden"
                          onClick={navbarToggleHandler}
                        >
                          <Link
                            href="/login"
                            className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                          >
                            Login
                          </Link>
                        </li>
                        <li
                          className="group relative block lg:hidden"
                          onClick={navbarToggleHandler}
                        >
                          <Link
                            href="/signup"
                            className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                          >
                            Create New User
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                  <Search />
                </nav>
              </div>

              <div className="flex items-center justify-between">
                {user === null ? (
                  <div className="flex items-center justify-end pr-16 lg:pr-0">
                    <Link
                      href="/login"
                      className="hidden px-7 py-3 text-base font-bold text-dark hover:opacity-70 dark:text-white md:block"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="ease-in-up hidden rounded-md bg-primary px-8 py-3 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                    >
                      Create New User
                    </Link>
                  </div>
                ) : (
                  <div className="flex items-center justify-end pr-16 lg:pr-0">
                    <Link
                      href="/account"
                      className="hidden px-7 py-3 text-base font-bold text-dark hover:opacity-70 dark:text-white md:block"
                    >
                      My Info
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="ease-in-up hidden rounded-md bg-primary px-8 py-3 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                    >
                      Logout
                    </button>
                  </div>
                )}
                <ThemeToggler />
              </div>
            </div>
     
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
