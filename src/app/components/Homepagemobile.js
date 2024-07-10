import React from 'react'
import { useEffect, useState } from "react";

import { LuConciergeBell } from "react-icons/lu";
import { LuMessagesSquare } from "react-icons/lu";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Homepagemobile = () => {
  return (
    <div className='sm:hidden'>
        <div className="left w-full h-2/3 flex justify-center items-center  bg-[#231f20] ">
          <div className="flex items-start justify-start left">
            <img src="images9.webp" className="w-full h-[49rem]" />
          </div>
        </div>
        <div className="right w-full h-[600px] flex  justify-center items-center  bg-[#231f20]">
          <div className="flex flex-col w-[53rem] pl-[1rem] right justify-start items-start  ">
            <h1 className="text-3xl text-white font-extrabold pheader ">
              <span className="pcolor pheader">“The best marketing </span>
              doesn’t feel like marketing”
            </h1>
            <h2 className="text-sm text-white py-5">(Tom Fishburne)</h2>
          </div>
        </div>
        <div className="right w-full h-full flex justify-center items-center transition-transform duration-1000 bg-white">
          <div className="flex items-start justify-start right">
            <img src="image10.webp" className="w-full h-[48.3rem]" />
          </div>
        </div>
        <div className="left w-full h-full flex justify-center items-center  bg-white">
          <div className="flex flex-col w-full pl-[2rem] pt-10 left">
            <h1 className="text-2xl font-extrabold pheader text-black">
              “In the
              <span className="pcolor pheader"> digital world</span>, he who
              hesitates is <span className="pcolor pheader">abandoned.</span>”
            </h1>
            <h2 className="text-base py-3 font-bold pcolor">
              (Howard Stringer)
            </h2>
            <p className="text-sm text-gray-500 pheader font-semibold py-5">
              We are a bunch of creative rebels who aren’t too fond of the
              status quo. We believe in taking bold <br />
              initiatives and strive to change the world with the magic of our
              creativity and innovation.
            </p>
            <div className="flex flex-col items-center justify-center py-10 gap-10 pr-10">
              <div className="flex flex-col items-center group">
                <LuConciergeBell className="text-black text-6xl group-hover:text-[#1f51ff] cursor-pointer" />
                <h1 className="pheader text-xl text-black group-hover:text-[#1f51ff] cursor-pointer">
                  Our Services
                </h1>
              </div>
              <div className="flex flex-col items-center group">
                <LuMessagesSquare className="text-black text-6xl group-hover:text-[#1f51ff] cursor-pointer" />
                <h1 className="pheader text-xl text-black group-hover:text-[#1f51ff] cursor-pointer">
                  Talk To Us
                </h1>
              </div>
              <div className="flex flex-col items-center group">
                <MdOutlinePeopleAlt className="text-black text-6xl group-hover:text-[#1f51ff] cursor-pointer" />
                <h1 className="pheader text-xl text-black group-hover:text-[#1f51ff] cursor-pointer">
                  Our Team
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="left w-full h-full flex justify-center items-center transition-transform duration-1000 bg-[#231f20]">
          <div className="flex items-start justify-start left">
            <img src="images11.webp" className="w-full h-[48.3rem]" />
          </div>
        </div>
        <div className="right w-full h-full flex justify-center items-center transition-transform duration-1000 bg-[#231f20]">
          <div className="flex flex-col w-full  pt-10">
            <h1 className="text-3xl text-white font-extrabold pheader pl-[2rem]">
              There is yet <br />
              to exist a problem <br />
              that does not
              <br />
              have a<span className="pcolor pheader"> creative solution. </span>
            </h1>
            <div className="flex flex-col items-center justify-start gap-6 my-10">
              <div className="flex flex-col items-center gap-2 right group">
                <HiOutlineLightBulb className="text-white text-7xl transition-all duration-300 group-hover:text-[#1f51ff]" />
                <h1 className="pheader text-xl text-white text-center transition-all duration-300 group-hover:text-[#1f51ff]">
                  Design & <br />
                  Development
                </h1>
              </div>
              <div className="flex flex-col items-center gap-3 right group">
                <MdOutlineSettingsSuggest className="text-white text-7xl transition-all duration-300 group-hover:text-[#1f51ff]" />
                <h1 className="pheader text-xl text-white transition-all duration-300 group-hover:text-[#1f51ff]">
                  Support
                </h1>
              </div>
              <div className="flex flex-col items-center gap-2 right group">
                <GiNetworkBars className="text-white text-6xl transition-all duration-300 group-hover:text-[#1f51ff]" />
                <h1 className="pheader text-xl text-white text-center transition-all duration-300 group-hover:text-[#1f51ff]">
                  Digital Marketing <br />& Strategy
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-10">
              <div className="flex flex-col items-center gap-2 right group">
                <FaCartArrowDown className="text-white text-6xl transition-all duration-300 group-hover:text-[#1f51ff]" />
                <h1 className="pheader text-xl text-white transition-all duration-300 group-hover:text-[#1f51ff]">
                  eCommerce
                </h1>
              </div>
              <div className="flex flex-col items-center gap-2 right group pb-10">
                <CiMobile3 className="text-white text-6xl transition-a ll duration-300 group-hover:text-[#1f51ff] " />
                <h1 className="pheader text-xl text-white transition-all duration-300 group-hover:text-[#1f51ff]">
                  Content Generation
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="left w-full h-full flex justify-center items-center bg-white">
          <div className="flex flex-col items-center justify-between gap-4 pt-10 pr-20">
            <div className="flex flex-col gap-10">
              <h1 className="text-2xl text-black pheader font-semibold cursor-pointer">
                Contact Us
              </h1>
              <h1 className="text-xl text-black pheader pcolor cursor-pointer">
                Make a Visit
              </h1>
              <p className="text-sm text-gray-400 pheader cursor-pointer">
                200 Park Ave Suite 1700,
                <br /> New York, NY 10166
              </p>
              <h1 className="text-xl text-black pheader pcolor cursor-pointer">
                Send Us An E-Mail
              </h1>
              <h1 className="text-xl text-black pheader pcolor cursor-pointer">
                info@olivedigital.com
              </h1>
            </div>
            <div>
              <div className="flex flex-col gap-7 pl-7">
                <h1 className="text-2xl text-black pheader font-semibold cursor-pointer"></h1>
                <h1 className="text-xl text-black pheader pcolor cursor-pointer">
                  Give Us A Call
                </h1>
                <p className="text-sm text-gray-400 pheader cursor-pointer">
                  +1(888) 2073409
                </p>
                <div>
                  <h1 className="text-xl text-black pheade pcolor cursor-pointer">
                    Follow Us On
                  </h1>
                  <div className="flex flex-row gap-3">
                    <FaFacebookF className="text-black text-xl cursor-pointer hover:text-[#1F51FF]" />
                    <FaInstagram className="text-black text-xl cursor-pointer hover:text-[#1F51FF]" />
                    <FaLinkedin className="text-black text-xl cursor-pointer hover:text-[#1F51FF]" />
                    <FaWhatsapp className="text-black text-xl cursor-pointer hover:text-[#1F51FF]" />
                  </div>
                </div>
                <img src="googlepartner.jpg"  className="pb-10"/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start left">
            <img src="images12.webp" className="w-full h-[48.3rem]" />
          </div>
      </div>
  )
}

export default Homepagemobile