"use client";

import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaAdjust } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  // Função para definir a classe de tema no <html>
  const setThemeClass = (theme: "light" | "dark" | "system") => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // 'system' não faz nada, pois depende da preferência do sistema
    }
  };

  // Ao carregar o componente, verifica o tema salvo no localStorage ou a preferência do sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Se houver tema salvo no localStorage, usa ele. Caso contrário, usa a preferência do sistema
    if (savedTheme && savedTheme !== "system") {
      setTheme(savedTheme as "light" | "dark");
      setThemeClass(savedTheme as "light" | "dark");
    } else if (savedTheme === "system") {
      setTheme("system");
      setThemeClass("system");
    } else if (systemPrefersDark) {
      setTheme("dark");
      setThemeClass("dark");
    } else {
      setTheme("light");
      setThemeClass("light");
    }

    // Detecta mudanças na preferência do sistema em tempo real
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (savedTheme === "system" || theme === "system") {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        setThemeClass(newTheme);
      }
    };

    // Escuta mudanças na preferência do sistema
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    // Limpeza do event listener
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]); // Quando o `theme` mudar, o `useEffect` será executado novamente

  // Alterna o tema manualmente e salva no localStorage
  const toggleTheme = (selectedTheme: "light" | "dark" | "system") => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme); // Salva no localStorage
    setThemeClass(selectedTheme); // Aplica a classe no HTML
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Botão para "Sistema" */}
      <button
        onClick={() => toggleTheme("system")}
        className={`text-2xl ${theme === "system" ? "text-blue-500" : "text-gray-500"}`}
      >
        <FaAdjust />
      </button>

      {/* Botão para "Light" */}
      <button
        onClick={() => toggleTheme("light")}
        className={`text-2xl ${theme === "light" ? "text-yellow-500" : "text-gray-500"}`}
      >
        <FaSun />
      </button>

      {/* Botão para "Dark" */}
      <button
        onClick={() => toggleTheme("dark")}
        className={`text-2xl ${theme === "dark" ? "text-yellow-300" : "text-gray-500"}`}
      >
        <FaMoon />
      </button>
    </div>
  );
};

export default ThemeToggle;
