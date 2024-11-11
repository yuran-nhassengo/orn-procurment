"use client";

import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaAdjust } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  const setThemeClass = (theme: "light" | "dark" | "system") => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (theme === "system") {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
  };

  const toggleTheme = () => {
    let newTheme: "light" | "dark" | "system";

    if (theme === "system") {
      newTheme = "dark"; 
    } else if (theme === "dark") {
      newTheme = "light"; 
    } else {
      newTheme = "system";
    }

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setThemeClass(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

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

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (savedTheme === "system" || theme === "system") {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        setThemeClass(newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  return (
    <div className="flex items-center space-x-4">
      <button onClick={toggleTheme} className="text-2xl">
        {theme === "system" && <FaAdjust className="text-blue-500" />}
        {theme === "dark" && <FaMoon className="text-yellow-300" />}
        {theme === "light" && <FaSun className="text-yellow-500" />}
      </button>
    </div>
  );
};

export default ThemeToggle;
