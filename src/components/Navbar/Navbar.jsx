//logo img
// import Logo from "../../assets/food-logo.png";
import RKLogo from "../../assets/Rk_logo.webp"

//react icons
import { FaPhoneAlt } from "react-icons/fa";

//components
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div className="mb-32 fixed top-0 z-50 w-full shadow-md bg-rkcolor text-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <a
              href="#inicio"
              className="flex items-center text-2xl sm:text-3xl font-bold"
            >
              <img src={RKLogo} alt="logo" className="w-36" />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <DarkMode />
            </div>
            <ul className="hidden md:flex gap-4">
              <li>
                <a
                  href="#inicio"
                  className="inline-block py-4 px-4 hover:text-primary duration-200"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="inline-block py-4 px-4 hover:text-primary duration-200"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="inline-block py-4 px-4 hover:text-primary duration-200"
                >
                  Contato
                </a>
              </li>
            </ul>
            <button className="flex gap-2 items-center bg-gradient-to-r from-green-400 to-green-800 text-white px-2 py-2 rounded-full hover:scale-110 duration-200 md:hidden">
              Whatsapp{" "}
              <FaPhoneAlt className="hidden sm:block text-xl text-white drop-shadow-sm cusor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
