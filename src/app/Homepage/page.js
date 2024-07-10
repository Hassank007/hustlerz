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
export default function HomePage() {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 4;

  const updateSection = () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section, index) => {
      if (index === currentSection) {
        section.style.transform = "translateY(0)";
      } else if (index < currentSection) {
        section.style.transform = "translateY(-100%)";
      } else {
        section.style.transform = "translateY(100%)";
      }
    });
  };

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      if (currentSection < totalSections - 1) {
        setCurrentSection(currentSection + 1);
      }
    } else {
      if (currentSection > 0) {
        setCurrentSection(currentSection - 1);
      }
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    window.addEventListener("wheel", handleScroll);

    // Update sections only after the first render
    updateSection();

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection]);

  return (
    <>
      <Navbar />
      <div className="container relative w-screen h-screen overflow-hidden">
        <div
          className="section absolute inset-0 flex w-screen justify-center items-center text-white text-4xl bg-[#231f20]"
          style={{ transform: "translateY(0)" }}
        >
          <div className="flex flex-row items-center justify-between ">
            <div className="flex items-start justify-start left">
              <img src="images9.webp" className="w-[54rem] h-[49rem] xl:w-[64rem]" />
            </div>
            <div className="flex flex-col w-[53rem]  pl-[5rem] right ">
              <h1 className="text-5xl font-extrabold pheader ">
                <span className="pcolor pheader">“The best marketing </span>
                <br />
                doesn’t feel like <br />
                marketing”
              </h1>
              <h2 className="text-xl py-10">(Tom Fishburne)</h2>
            </div>
          </div>
        </div>
        <div
          className="section absolute inset-0 flex justify-center items-center text-white text-4xl bg-white"
          style={{ transform: "translateY(100%)" }}
        >
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col w-[53rem]  pl-[5rem] pt-10 left">
              <h1 className="text-5xl font-extrabold pheader text-black">
                “In the<span className="pcolor pheader"> digital world</span>,
                he who hesitates is{" "}
                <span className="pcolor pheader">abandoned.</span>”
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
              <div className="flex flex-row items-center justify-center py-10 gap-32 pr-20">
                <div className="flex flex-col items-center">
                  <LuConciergeBell className="pcolor text-6xl" />
                  <h1 className="pheader text-xl pcolor">Our Services</h1>
                </div>
                <div>
                  <LuMessagesSquare className="pcolor text-6xl" />
                  <h1 className="pheader text-xl pcolor">Talk To US</h1>
                </div>

                <div>
                  
                  <MdOutlinePeopleAlt className="pcolor text-6xl" />
                  <h1 className="pheader text-xl pcolor">Our Team</h1>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-start right ">
              <img src="image10.webp" className="w-[52.5rem] h-[48.3rem]" />
            </div>
          </div>
        </div>
        <div
          className="section absolute inset-0 flex justify-center items-center text-white text-4xl bg-[#231f20]"
          style={{ transform: "translateY(100%)" }}
        >
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-start justify-start left">
              <img src="images11.webp" className="w-[54rem] h-[48.3rem]" />
            </div>
            <div className="flex flex-col w-[53rem]  pl-[5rem] ">
              <h1 className="text-5xl font-extrabold pheader ">There is yet to exist <br/>a problem that does not<br/> have a
                <span className="pcolor pheader"> creative solution. </span>
                
                
              </h1>
             <div className="flex flex-row items-center justify-start">
             <div className="flex flex-col items-center gap-2 right">
                  <HiOutlineLightBulb  className="text-white hover:text-[#1f51ff] text-7xl" />
                  <h1 className="pheader text-xl text-white hover:text-[#1f51ff]">Our Services</h1>
                </div>
                <div>
                  <LuMessagesSquare className="text-white hover:text-[#1f51ff] text-6xl" />
                  <h1 className="pheader text-xl text-white hover:text-[#1f51ff]">Talk To US</h1>
                </div>

                <div>
                  
                  <MdOutlinePeopleAlt className="text-white hover:text-[#1f51ff] text-6xl" />
                  <h1 className="pheader text-xl text-white hover:text-[#1f51ff]">Our Team</h1>
                </div>
             </div>
             <div className="flex flex-row items-center justify-start">
             <div className="flex flex-col items-center ">
                  <LuConciergeBell className="text-white  text-6xl" />
                  <h1 className="pheader text-xl text-white ">Our Services</h1>
                </div>
                <div>
                  <LuMessagesSquare className="text-white hover:text-[#1f51ff] text-6xl" />
                  <h1 className="pheader text-xl text-white hover:text-[#1f51ff]">Talk To US</h1>
                </div>

             </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
