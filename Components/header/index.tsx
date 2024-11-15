"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaBox,
  FaBlog,
  FaUser,
  FaQuestion,
  FaCogs,
  FaHome,
 
} from "react-icons/fa";
import ThemeToggle from "./themeToggle";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [theme, setTheme] = useState("light"); // Estado para gerenciar o tema

  // Detecta o tema preferido do usuário no localStorage ou define como "light"
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    // Aplica a classe 'dark' no <html> com base no tema
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const navItems = [
    { link: "Home", path: "/", icon: <FaHome /> },
    { link: "Product", path: "/product", icon: <FaBox /> },
    { link: "Service", path: "/service", icon: <FaCogs /> },
    { link: "Blog", path: "/blog", icon: <FaBlog /> },
    { link: "about", path: "/About", icon: <FaUser /> },
    { link: "Faq", path: "faq", icon: <FaQuestion /> },
  ];

  return (
    <header
      className={`w-full ${
        isSticky
          ? "sticky top-0 left-0 right-0 border-b shadow-md"
          : "dark:bg-orange-500 duration-300"
      } fixed top-0 left-0 right-0 z-50`}
    >
      <nav
        className={`py-4 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b shadow-md"
            : "bg-amareloPrimaria duration-300"
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-base font-semibold flex items-center space-x-2"
          >
            <img
              src="https://media.istockphoto.com/id/1313644269/pt/vetorial/gold-and-silver-circle-star-logo-template.jpg?s=612x612&w=0&k=20&c=scmIJTmynhc2Y3fs9a-RN6UDB5OJrz06AJqo5w9jSgo="
              alt="logo"
              className="w-5 md:w-10 inline-block"
            />
            <span className="text-sm lg:text-xl font-semibold">
              ORN Electroferragem
            </span>
          </Link>

          {/* Barra de pesquisa */}
          <div className="flex flex-1 justify-end md:justify-center animate-pulse">
            <input
              type="text"
              placeholder="Buscar..."
              className="px-4 py-2 border w-11/12 rounded-full bg-gray-800 dark:bg-black max-w-screen-md text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-150 ease-in-out"
            />
          </div>

          {/* Botão de alternância de tema */}


          {/* Links de navegação no desktop */}
          <ul className="md:flex space-x-4 xl:space-x-8 hidden">
            <ThemeToggle />
            {navItems.map(({ link, path }) => (
              <Link
                href={path}
                key={path}
                className="block text-sm lg:text-base text-cinza hover:text-azul font-medium transition duration-200 ease-in-out"
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
              <div className="text-white text-3xl">{icon}</div>
            </Link>
          ))}
                    <ThemeToggle />

        </div>
      </div>
    </header>
  );
};

export default Header;
