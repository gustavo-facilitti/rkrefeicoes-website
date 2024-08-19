/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

//dark and light mode images imports
import darkPng from "../../assets/website/dark-mode-button.png";
import lightPng from "../../assets/website/light-mode-button.png";

const DarkMode = () => {
  //theme will be stored in localStorage, if there is none, set default to light
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  //get ahold of document html to add or remove classes
  const element = document.documentElement;

  //check and change themes on render
  useEffect(() => {
    if (theme === "dark") {
      //will add class dark to html
      element.classList.add("dark");
      // localStorage.setItem("theme", "dark");
    } else {
      //will remove class dark from html
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <div className="relative">
        {/* images will be on top of each other, on click the theme will change */}
        {/* then we check if theme is dark, hide the dark image, if theme is light, hide the light image */}
        <img
          src={darkPng}
          alt="dark mode button"
          onClick={changeTheme}
          className={`w-12 absolute right-0 z-10 cursor-pointer transition-all duration-500 ${
            theme !== "dark" ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={lightPng}
          alt="light mode button"
          onClick={changeTheme}
          className="w-12 cursor-pointer transition-all duration-500"
        />
      </div>
    </>
  );
};

export default DarkMode;
