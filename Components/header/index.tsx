"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaBox,
  FaBlog,
  FaQuestion,
  FaCogs,
  FaHome,
  FaInfoCircle,
} from "react-icons/fa";
import ThemeToggle from "./themeToggle";

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { link: "Home", path: "/", icon: <FaHome /> },
    { link: "Product", path: "/Products", icon: <FaBox /> },
    { link: "Service", path: "/service", icon: <FaCogs /> },
    { link: "Blog", path: "/blog", icon: <FaBlog /> },
    { link: "about", path: "/About", icon: <FaInfoCircle /> },
    { link: "Faq", path: "/Faq", icon: <FaQuestion /> },
  ];

  return (
    <header
      className={`w-full ${
        isSticky
          ? "sticky top-0 left-0 right-0 border-b"
          : " dark:bg-orange-500 00 duration-300 transition-colors ease-in-out"
      } fixed top-0 left-0 right-0 z-50`}
    >
      <nav
        className={`py-4 px-4 ${
          isSticky
            ? "bg-opacity-90 bg-white dark:bg-black/90 duration-300 transition-colors ease-in-out"
            : " duration-300 transition-colors ease-in-out"
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo e texto (ajustado para responsividade no mobile) */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="https://media.istockphoto.com/id/1313644269/pt/vetorial/gold-and-silver-circle-star-logo-template.jpg?s=612x612&w=0&k=20&c=scmIJTmynhc2Y3fs9a-RN6UDB5OJrz06AJqo5w9jSgo="
              alt="logo"
              className="w-5 md:w-10 inline-block"
            />
            <div className="flex flex-col lg:flex-row items-start lg:items-center">
              <span className="text-xs md:text-sm lg:text-xl font-semibold ">
                ORN
              </span>
              <span className="text-xs sm:text-sm lg:text-xl lg:ml-1 font-semibold">
                Electroferragem
              </span>
            </div>
          </Link>

          {/* Barra de pesquisa */}
          <div className="flex flex-1 justify-end md:justify-center animate-pulse">
            <input
              type="text"
              placeholder="Buscar..."
              className="px-4 py-2 border w-11/12 rounded-full bg-gray-800 dark:bg-black max-w-screen-md text-white shadow-lg focus:outline-none ring-1 ring-white focus:ring-2 focus:ring-blue-500 transition-transform duration-150 ease-in-out"
            />
          </div>

          {/* Links de navegação no desktop */}
          <ul className="md:flex space-x-4 xl:space-x-8 hidden">
            <ThemeToggle />
            {navItems.map(({ link, path }) => (
              <Link
                href={path}
                key={path}
                className="block text-sm lg:text-lg text-cinza hover:text-blue-500 font-medium transition-all duration-200 ease-in-out"
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      </nav>

      {/* Barra de navegação fixa para mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-blue-950 dark:bg-black/90 z-50 shadow-lg">
        <div className="flex justify-around py-4">
          {navItems.map(({ link, path, icon }) => (
            <Link href={path} key={path} className="block text-center">
              <div className="flex flex-col items-center justify-center">
                {/* Ícone com hover e transição suave */}
                <div className="text-white text-3xl hover:text-blue-500 transition-all duration-200 ease-in-out">
                  {icon}
                </div>
                {/* Mini texto abaixo do ícone */}
                <span className="block text-xs text-white mt-1">{link}</span>
              </div>
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
