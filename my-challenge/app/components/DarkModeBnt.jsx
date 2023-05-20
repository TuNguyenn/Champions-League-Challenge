"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const DarkModeBnt = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {currentTheme === "dark" ? (
        <BsFillSunFill
          className="w-8 h-8 text-yellow-500 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonFill
          className="w-8 h-8 cursor-pointer dark:text-black"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkModeBnt;
