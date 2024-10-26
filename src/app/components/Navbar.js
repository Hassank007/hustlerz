"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Navbar = ({ ncolor, textcolor }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 10); // Adjust the scroll threshold as needed
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* DESKTOP NAV */}
      <div className="sm:block hidden">
        <nav
          className={`fixed h-16 w-full sm:w-full transition-all duration-300 ease-in-out z-50 ${ncolor}`}
        >
          <div className="flex flex-row sm:h-[4.5rem] justify-between items-center sm:items-startpx-8 sm:px-32 lg:px-24 w-full ">
            <div className="logo flex flex-row justify-start">
              <Link href="/">
                <img
                  src="./logo3.png"
                  className="w-[10rem] md:w[10rem] lg:w-[12rem] xl:w-[14rem] lg:ml-0 lg:mb-2 ml-2"
                />
              </Link>
            </div>
            <div className="nav flex flex-row justify-end items-center">
              <ul className="flex justify-end items-center gap-4 lg:gap-4 xl:gap-6 text-sm lg:text-sm xl:text-[15.3px] primaryf font-semibold text-black ">
                <li>
                  <Link
                    href="/"
                    className={`${textcolor} hover:text-[#1F51FF]`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="./About"
                    className={`${textcolor} hover:text-[#1F51FF]`}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="./Service"
                    className={`${textcolor} hover:text-[#1F51FF]`}
                  >
                    Sevices
                  </Link>
                </li>

                <li
                  className={`${textcolor} hover:text-[#1F51FF] cursor-pointer`}
                >
                  <Link
                    href="./Portfolio"
                    className={`${textcolor} hover:text-[#1F51FF]`}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="./DigitalPr"
                    className={`${textcolor} hover:text-[#1F51FF]`}
                  >
                    Digital Pr
                  </Link>
                </li>
                
                <li>
                  <Link
                    href="./Contact"
                    className={`${textcolor} hover:text-[#1F51FF]`}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Divider */}
        <div className="flex items-center justify-center">
          <div
            className={`w-[80rem] h-0.5 bg-divider-gradient absolute top-[6.8rem] -z-0 sm:block hidden ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
          ></div>
        </div>
      </div>
      {/* MOBILE NAV */}
      <div
        className={`fixed w-full transition-all duration-300 ease-in-out sm:hidden flex flex-row justify-between items-center h-16  z-50 bg-white`}
      >
        <div className="logo flex flex-row justify-start items-center">
          <Link href="/">
            <img
              src="logo3.png"
              className="sm:w-[14rem] sm:ml-0 w-[10rem] ml-2"
            />
          </Link>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={isOpen ? "close.svg" : "menu.svg"}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer mx-4"
            onClick={handleToggle}
          />
          <div
            className={`${
              !isOpen ? "hidden" : "flex"
            } p-6 bg-white outline outline-black outline-1  absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 `}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <li
                className="font-sans font-medium cursor-pointer text-black text-[16px]"
                onClick={handleToggle}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className="font-sans font-medium cursor-pointer text-black text-[16px]"
                onClick={handleToggle}
              >
                <Link href="./About">About Us</Link>
              </li>
              <li
                className="font-sans font-medium cursor-pointer text-black text-[16px]"
                onClick={handleToggle}
              >
                <Link href="./Service">Services</Link>
              </li>
              <li
                className="font-sans font-medium cursor-pointer text-black text-[16px]"
                onClick={handleToggle}
              >
                <Link href="./Portfolio">Portfolio</Link>
              </li>
              <li
                className="font-sans font-medium cursor-pointer text-black text-[16px]"
                onClick={handleToggle}
              >
                <Link href="./DigitalPr">Digital Pr</Link>
              </li>
              <li
                className="font-sans font-medium cursor-pointer text-black text-[16px]"
                onClick={handleToggle}
              >
                <Link href="./Contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
