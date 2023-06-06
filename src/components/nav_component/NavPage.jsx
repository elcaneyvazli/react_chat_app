import {
  RiUser2Line,
  RiMessage3Line,
  RiGroupLine,
  RiContactsLine,
  RiSettings2Line,
  RiMoonLine,
  RiUserStarLine,
} from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./NavPage.css";
import { useEffect, useState } from "react";

function NavPage() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "dark" : "light"
  );

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="bg-white dark:bg-black flex flex-col items-center justify-between h-screen py-[3rem] px-[1rem]">
      <div className="w-[3rem] h-[3rem]">
        <img src="./img/logo.svg" alt="" />
      </div>
      <div className=" flex flex-col gap-[3rem]">
        <NavLink
          to="/profile"
          className="hover:bg-tertiary p-[1rem] hover:text-primary rounded-[1rem]"
        >
          <RiUser2Line className="text-xl " />
        </NavLink>
        <NavLink
          to="/"
          className="hover:bg-tertiary p-[1rem] hover:text-primary rounded-[1rem]"
        >
          <RiMessage3Line className="text-xl " />
        </NavLink>
        <NavLink
          to="/group"
          className="hover:bg-tertiary p-[1rem] hover:text-primary rounded-[1rem]"
        >
          <RiGroupLine className="text-xl " />
        </NavLink>
        <NavLink
          to="/contacts"
          className="hover:bg-tertiary p-[1rem] hover:text-primary rounded-[1rem]"
        >
          <RiContactsLine className="text-xl " />
        </NavLink>
        <NavLink
          to="/settings"
          className="hover:bg-tertiary p-[1rem] hover:text-primary rounded-[1rem]"
        >
          <RiSettings2Line className="text-xl " />
        </NavLink>
      </div>
      <div className="text-xl flex flex-col gap-[3rem]">
        <div
          className="hover:bg-tertiary p-[1rem] hover:text-primary rounded-[1rem]"
          onClick={changeTheme}
        >
          <RiMoonLine className="text-xl " />
        </div>
        <div className="hover:bg-tertiary p-[1rem] hover:text-primary rounded-[1rem]">
          <RiUserStarLine className="text-xl " />
        </div>
      </div>
    </div>
  );
}

export default NavPage;
