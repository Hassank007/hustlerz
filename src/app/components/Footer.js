import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import { FaBoxOpen } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-[#16171d] h-[95rem] sm:h-[35rem] ">
      <div className="flex flex-col md:w-[46rem] lg:w-[30rem] lg:pl-28 pt-12 justify-center items-center lg:justify-start lg:items-start">
        <Link href="/">
          <img
            src="./logo3.png"
            className="w-[10rem] md:w[10rem] lg:w-[12rem] xl:w-[14rem] lg:ml-0 lg:mb-2 ml-2"
          />
        </Link>

        <h1 className="text-white pheader pt-9 text-center sm:text-start">
          We are a bunch of imaginative enthusiasts who live and breathe
          creativity, sharing a common passion for creating ideas and turning
          them into innovative digital solutions for you.
        </h1>
        <div className="pt-5">
          <p className="text-white pheader text-center sm:text-start">info@olivedigital.com</p>
          <p className="text-white pheader text-center sm:text-start">careers@olivedigital.com</p>
          <p className="text-white pheader text-center sm:text-start">+1 (888) 2073409</p>
        </div>
        <div className="flex flex-row gap-3 pt-5">
          <FaFacebookF className="text-white text-xl cursor-pointer hover:text-[#1F51FF]" />
          <FaInstagram className="text-white text-xl cursor-pointer hover:text-[#1F51FF]" />
          <FaLinkedin className="text-white text-xl cursor-pointer hover:text-[#1F51FF]" />
          <FaWhatsapp className="text-white text-xl cursor-pointer hover:text-[#1F51FF]" />
        </div>
      </div>
      <div className="flex flex-col sm:w-[30rem]  sm:pl-28 pt-16 justify-center items-center sm:justify-start sm:items-start">
        <h1 className="text-white pheader text-3xl font-bold ">Why Pick Us?</h1>
        <p className="text-white pheader pt-7 text-center sm:text-start">
          We don’t just love what we do, we know what we are doing, and we are
          very good at it too.
        </p>
        <div className="flex flex-col divide divide-y gap-3 pt-10 w-5/6">
          <div className="flex flex-row gap-3 ">
            <CiGift className="text-white text-2xl  " />
            <h2 className="text-white  ">Our success is tied to yours.</h2>
          </div>
          <div className="flex flex-row pt-5 gap-3">
            <FaBoxOpen className="text-white text-2xl  " />
            <h2 className="text-white  ">We listen, we discuss, we advise..</h2>
          </div>
          <div className="flex flex-row pt-5 gap-3">
            <LuHeartHandshake className="text-white text-2xl " />
            <h2 className="text-white  ">
              We don’t work for you, we work with you
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:w-[40rem]  sm:pl-60 pt-16 justify-center items-center sm:justify-start sm:items-start">
        <h1 className="text-3xl text-white pheader ">Our Offices</h1>
        <p className=" text-white pheader pt-10 text-center sm:text-start">
          Our office is custom built to keep the spirit of collaboration alive
          and decked up to extend our creative and digital influence across the
          world.
        </p>
      </div>
    </div>
  );
};

export default Footer;
