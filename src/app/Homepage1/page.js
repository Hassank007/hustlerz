"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
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
import Homepagemobile from "../components/Homepagemobile";


  export default function HomePage1() {
    const [currentSection, setCurrentSection] = useState(0);
    const [loaded, setLoaded] = useState(false); // Add loaded state to control visibility
    const totalSections = 4;
  
    const updateSection = () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section, index) => {
        const left = section.querySelector(".left");
        const right = section.querySelector(".right");
  
        if (index === currentSection) {
          section.style.zIndex = 2; // Ensure the current section is above the others
          left.style.transform = "translateY(0)";
          right.style.transform = "translateY(0)";
        } else if (index < currentSection) {
          section.style.zIndex = 1; // Ensure previous sections are below the current one
          left.style.transform = "translateY(-100vh)";
          right.style.transform = "translateY(100vh)";
        } else {
          section.style.zIndex = 1; // Ensure next sections are below the current one
          left.style.transform = "translateY(100vh)";
          right.style.transform = "translateY(-100vh)";
        }
      });
    };
  
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        if (currentSection < totalSections - 1) {
          setCurrentSection(currentSection + 1);
        } else {
          setCurrentSection(0); // Loop to first section
        }
      } else {
        if (currentSection > 0) {
          setCurrentSection(currentSection - 1);
        } else {
          setCurrentSection(totalSections - 1); // Loop to last section
        }
      }
    };
  
    useEffect(() => {
      window.addEventListener("wheel", handleScroll);
      return () => {
        window.removeEventListener("wheel", handleScroll);
      };
    }, [currentSection]);
  
    useEffect(() => {
      updateSection();
      setLoaded(true); // Once updateSection has run, mark the page as loaded
    }, [currentSection]);
  
    return (
      <>
        <Navbar ncolor={"bg-transparent"} textcolor={"text-white"} />
  
        <style>{`
          .container {
            overflow: hidden;
          }
          .section {
            visibility: ${loaded ? "visible" : "hidden"}; // Hide sections until page is loaded
          }
        `}</style>
  

      <div className="container relative w-screen h-screen overflow-hidden ">
        <div className="sm:block hidden">
          <div className="section absolute inset-0 flex justify-center items-center text-white text-4xl transition-transform duration-1000">
            <div className="flex w-full h-full">
              <div className="left w-1/2 h-full flex justify-center items-center transition-transform duration-1000 bg-[#231f20]">
                <div className="flex items-start justify-start left">
                  <img src="images9M.webp" className="w-full h-screen " />
                </div>
              </div>
              <div className="right w-1/2 h-full flex justify-center items-center transition-transform duration-1000 bg-[#231f20]">
                <div className="flex flex-col w-[53rem] pl-[5rem] right">
                  <h1 className="text-5xl font-extrabold pheader">
                    "Business has only two functions —
                    <span className="pcolor pheader">
                      {" "}
                      marketing and innovation"{" "}
                    </span>
                  </h1>
                  <h2 className="text-xl py-10"> — Milan Kundera</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="section absolute inset-0 flex justify-center items-center text-white text-4xl transition-transform duration-1000">
            <div className="flex w-full h-full">
              <div className="left w-1/2 h-full flex justify-center items-center transition-transform duration-1000 bg-white">
                <div className="flex flex-col w-[53rem] pl-[5rem] pt-10 left">
                  <h1 className="text-5xl font-extrabold pheader text-black">
                    <span className="pcolor pheader"> “Marketing</span>, he is
                    really just about sharing your
                    <span className="pcolor pheader">passion.</span>"
                  </h1>
                  <h2 className="text-base py-3 font-bold pcolor">
                    — Michael Hyatt
                  </h2>
                  <p className="text-sm text-gray-500 pheader font-semibold py-5">
                    "We are a coalition of visionary pioneers who defy
                    convention, harnessing the power of creativity to <br />
                    forge new paths and inspire meaningful change in our world."
                  </p>
                  <div className="flex flex-row items-center justify-center py-10 gap-32 pr-20">
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
              <div className="right w-1/2 h-full flex justify-center items-center transition-transform duration-1000 bg-white">
                <div className="flex items-start justify-start right">
                  <img src="market.jpg" className="w-full h-screen" />
                </div>
              </div>
            </div>
          </div>
          <div className="section absolute inset-0 flex justify-center items-center text-white text-4xl transition-transform duration-1000">
            <div className="flex w-full h-full">
              <div className="left w-1/2 h-full flex justify-center items-center transition-transform duration-1000 bg-[#231f20]">
                <div className="flex items-start justify-start left">
                  <img src="target.jpg" className="w-full h-screen" />
                </div>
              </div>
              <div className="right w-1/2 h-full flex justify-center items-center transition-transform duration-1000 bg-[#231f20]">
                <div className="flex flex-col w-[53rem] pl-[5rem]">
                  <h1 className="text-5xl font-extrabold pheader">
                    There is yet to exist <br />a problem that does not
                    <br /> have a
                    <span className="pcolor pheader"> creative solution. </span>
                  </h1>
                  <div className="flex flex-row items-center justify-start gap-20 my-10">
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
                  <div className="flex flex-row items-center justify-start gap-10">
                    <div className="flex flex-col items-center gap-2 right group">
                      <FaCartArrowDown className="text-white text-6xl transition-all duration-300 group-hover:text-[#1f51ff]" />
                      <h1 className="pheader text-xl text-white transition-all duration-300 group-hover:text-[#1f51ff]">
                        eCommerce
                      </h1>
                    </div>
                    <div className="flex flex-col items-center gap-2 right group">
                      <CiMobile3 className="text-white text-6xl transition-all duration-300 group-hover:text-[#1f51ff]" />
                      <h1 className="pheader text-xl text-white transition-all duration-300 group-hover:text-[#1f51ff]">
                        Content Generation
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section absolute inset-0 flex justify-center items-center text-white text-4xl transition-transform duration-1000">
            <div className="flex w-full h-full">
              <div className="left w-1/2 h-full flex justify-center items-center transition-transform duration-1000 bg-white">
                <div className="flex flex-row items-center justify-between gap-44">
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
                      info@Husherz.com
                    </h1>
                  </div>
                  <div>
                    <div className="flex flex-col gap-10">
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
                      <img src="googlepartner.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="right w-1/2 h-full flex justify-center items-center transition-transform duration-1000 bg-white">
                <div className="flex items-start justify-start right">
                  <img src="contactus.jpg" className="w-full h-screen" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE  */}
      <Homepagemobile />
    </>
  );
}
