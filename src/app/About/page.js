"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Navbar ncolor={'bg-white'} textcolor={'text-black'}/>
      <div className="relative">
        <img src="./digitalpr1.jpg" className="w-full h-[30rem] sm:h-[40rem] object-cover" />
        <div className="absolute inset-0 bg-secondary opacity-95"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl sm:text-6xl font-bold pheader text-center">
          "We are innovators at heart, navigating a digital world,<br/> and shaping a future driven by possibility."
          </h1>
          <p className="text-white sm:text-3xl font-bold pheader text-center pt-10">
          — Neil Turok
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row bg-white w-full h-[46rem] sm:h-[460px] p-4 sm:p-20 gap-20">
        <div className=" flex flex-col w-full sm:w-[178rem] gap-5">
          <h1 className="pcolor text-2xl pheader font-bold ">Who We Are</h1>
          <p className="pheader text-sm sm:text-base">
            With our heritage in digital technology that goes back to as long as
            13 years, stepping into creative landscape was a natural
            progression. Starting off as a full-fledged creative agency in early
            2015, we’ve already disrupted the digital landscape of Pakistan and
            have created ripples of change wherever we went. Born out of the
            fast and unstoppable emergence and convergence of media
            communication, we’ve fast developed our understanding of creative
            landscape and have since been offering digital solutions to people
            all over Pakistan and beyond. We understand that ordinary doesn’t
            make people happy. Everyone wants a unique solution that sets them
            apart from the crowd and brings them value, variety, and strategic
            insight. We entered into the realms of digital and creative
            solutions with the vision to bring you something that goes above and
            beyond the standards set by market. We don’t just aim to make your
            customers happy, our mission is to leave them hungry for more.
          </p>
        </div>
        <div className=" flex flex-col w-full h-screen sm:w-[178rem] gap-5">
        <h1 className="pcolor text-2xl pheader  font-bold ">What We Do</h1>
        <p className="pheader text-sm sm:text-base">
            It is not that we do anything that others don’t do; it is how we do
            it that sets us apart from others. Today, the digital world is more
            than just a medium of communication transmitting information from
            one end to another. It begins with customer engagement and ends at
            maintaining your brand’s visibility in every way possible. Any
            problem you face in the realm of digital and creative marketing, we
            are here to provide you creative solutions tailored to your specific
            business needs. We provide digital solutions to all business types,
            be it creating your brand identity from ground up or revamping your
            current business website. From setting up your ecommerce website
            from scratch to designing a digital marketing campaign for your
            business, we do it all. We translate your vision into a great idea
            and combine it with our creative expertise to shape it into an
            engaging, innovative, and result drive digital solution.
          </p>
        </div>
      </div>
      <div className="relative pt-[25rem] sm:pt-0 overflow-hidden">
        <img src="./digitalpr.webp" className="w-full h-[24rem] object-cover" />
        {/* <div className="absolute inset-0 bg-secondary opacity-95"></div> */}
        <div className="absolute inset-0 flex flex-col justify-center pt-[26rem] sm:pt-[0rem] items-center">
          <h1 className="text-white text-3xl sm:text-5xl font-extrabold pheader text-center">
            “Being human in the digital world is about <br />
            building a digital world for humans”
          </h1>
          <p className="text-white text-xl sm:text-3xl font-bold pheader text-center pt-10">
            (Andrew Keen)
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-48 sm:py-20 py-14">
        <div className="flex flex-row items-center  justify-center gap-5 right group">
          <HiOutlineLightBulb className="text-black text-7xl transition-all duration-300 group-hover:text-[#1f51ff]" />
          <h1 className="pheader text-xl text-black text-center transition-all duration-300 group-hover:text-[#1f51ff]">
            Design & 
            Development
          </h1>
        </div>
        <div className="flex flex-row items-center gap-5 pr-[7.5rem] sm:pr-0 right group">
          <MdOutlineSettingsSuggest className="text-black text-7xl transition-all duration-300 group-hover:text-[#1f51ff]" />
          <h1 className="pheader text-xl text-black transition-all duration-300 group-hover:text-[#1f51ff]">
            Support
          </h1>
        </div>
        <div className="flex flex-row items-center gap-5 pr-[3.5rem] sm:pr-0 right group">
          <GiNetworkBars className="text-black text-6xl transition-all duration-300 group-hover:text-[#1f51ff]" />
          <h1 className="pheader text-xl text-black text-center transition-all duration-300 group-hover:text-[#1f51ff]">
            Digital Marketing <br />& Strategy
          </h1>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-14 sm:gap-48 pb-20">
        <div className="flex flex-row items-center justify-center gap-5 pr-[6.5rem] sm:pr-0 right group">
          <FaCartArrowDown className="text-black text-6xl transition-all duration-300 group-hover:text-[#1f51ff]" />
          <h1 className="pheader text-xl text-black transition-all duration-300 group-hover:text-[#1f51ff]">
            eCommerce
          </h1>
        </div>
        <div className="flex flex-row items-center gap-5 pr-[1.5rem] sm:pr-0 right group">
          <CiMobile3 className="text-black text-6xl transition-all duration-300 group-hover:text-[#1f51ff]" />
          <h1 className="pheader text-xl text-black transition-all duration-300 group-hover:text-[#1f51ff]">
            Content Generation
          </h1>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default page;
