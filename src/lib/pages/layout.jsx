import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import Logo from "/logo.png";
import FB from "../../assets/social_media/fb.png";
import Instagram from "../../assets/social_media/instagram.png";
import Whatsapp from "../../assets/social_media/whatsapp.png";
import Socialmedia from "../../components/socialmedia";

const socialmedia = [
  ["/", FB],
  ["/", Instagram],
  ["https://wa.me/+967772575568", Whatsapp],
];

const navItems = ["Home", "Meals", "Drinks", "Desserts"]; // Define navItems here

function Layout() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <>
      <header
        id="header"
        className="border-b-2 border-[#8b655c] bg-[#f0b8ad] h-[144px] w-full z-50"
      >
        <nav className="flex justify-between items-center max-md:py-3 md:py-3 lg:py-6">
          <img src={Logo} alt="Logo" className="w-[175px]" />
          <ul
            className={`z-40 flex ${
              isOpen ? "flex-col" : "hidden"
            } md:flex md:flex-row md:relative md:top-0 max-md:absolute max-md:top-35 max-md:right-0 max-md:left-0 bg-[#f0b8ad] rounded-b-lg`}
          >
            {navItems.map((item, index) => {
              const url = item === "Home" ? "" : item;

              return (
                <li key={index} className="inline-inline-block mx-[10.4px]">
                  <Link
                    className={`text-white no-underline py-2 px-8 my-2 flex justify-center items-center rounded-lg transition-colors duration-200 ease-in-out ${
                      activeTab === item
                        ? "bg-[#b78276]"
                        : "bg-[#8b655c] hover:bg-[#b78276] focus:bg-[#b78276]"
                    }`}
                    to={`/${url}`}
                    onClick={() => {
                      setActiveTab(item);
                      setIsOpen(false); // Close menu on item click
                    }}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="relative md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-5 text-white text-5xl focus:outline-none "
            >
              ☰
            </button>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="relative text-center mt-auto h-[70px] w-full border-t-2 border-[#8b655c] bg-[#f0b8ad]">
        <ul className="mx-[20%] my-[5px]">
          {socialmedia.map((item, index) => (
            <li className="inline-block p-1" key={index}>
              <Socialmedia url={item[0]} img={item[1]} />
            </li>
          ))}
        </ul>
        <div className="absolute text-[#8b655c] bottom-[20px] right-[10px]">
          <p className="hidden">This is a College Project made in</p> 2023
          <sup>&copy;</sup>
        </div>
      </footer>
    </>
  );
}

export default Layout;
