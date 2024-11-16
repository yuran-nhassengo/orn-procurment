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
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handlePopState);

    const originalPushState = window.history.pushState;
    window.history.pushState = (...args) => {
      originalPushState.apply(window.history, args);
      setCurrentPath(window.location.pathname);
    };

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/", icon: <FaHome /> },
    { link: "Product", path: "/Products", icon: <FaBox /> },
    { link: "Service", path: "/Servicos", icon: <FaCogs /> },
    { link: "Blog", path: "/blog", icon: <FaBlog /> },
    { link: "About", path: "/About", icon: <FaInfoCircle /> },
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

          {/* Links de navegação no desktop */}
          <ul className="md:flex space-x-4 xl:space-x-8 hidden">
            <ThemeToggle />
            {navItems.map(({ link, path }) => (
              <Link
                href={path}
                key={path}
                className={`block text-sm lg:text-lg text-cinza font-medium transition-all duration-200 ease-in-out ${
                  currentPath === path
                    ? "text-blue-500 font-semibold" // Destaca o link da página ativa
                    : "hover:text-blue-500"
                }`}
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
                <div
                  className={`text-3xl transition-all duration-200 ease-in-out ${
                    currentPath === path
                      ? "text-blue-500" // Cor azul para a página ativa
                      : "text-white hover:text-blue-500"
                  }`}
                >
                  {icon}
                </div>
                {/* Mini texto abaixo do ícone */}
                <span
                  className={`block text-xs mt-1 ${
                    currentPath === path ? "text-blue-500" : "text-white"
                  }`}
                >
                  {link}
                </span>
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
