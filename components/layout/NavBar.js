import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Link } from "react-scroll";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 z-50 bg-white w-full border-b border-b-slate-400 dark:bg-dark dark:border-b-slate-700">
      <nav className="flex justify-between py-4 px-5">
        <h1 className="text-xl font-semibold border-2 border-solid border-teal-700 px-2 rounded-full bg-teal-600 text-white shadow-lg">
          Fahro_o
        </h1>
        <ul className="flex items-center">
          <div className="text-black gap-10 mr-8 hidden md:flex dark:text-white">
            <li>
              <Link
                to="home"
                activeClass="menu-top"
                smooth={true}
                spy={true}
                className="cursor-pointer text-base font-semibold hover:text-cyan-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClass="menu-top"
                smooth={true}
                spy={true}
                className="cursor-pointer text-base font-semibold hover:text-cyan-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                activeClass="menu-top"
                smooth={true}
                spy={true}
                className="cursor-pointer text-base font-semibold hover:text-cyan-700"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                activeClass="menu-top"
                smooth={true}
                spy={true}
                className="cursor-pointer text-base font-semibold hover:text-cyan-700"
              >
                Contact
              </Link>
            </li>
          </div>
          <li>
            <button
              className="cursor-pointer text-xl text-black dark:text-white mt-1"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <BsFillMoonStarsFill className="hover:text-cyan-700" /> : <BsFillSunFill className="hover:text-cyan-700" />}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
