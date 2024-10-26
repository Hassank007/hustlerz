"use client";
import React, { useRef, useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaSnapchat,
  FaLinkedin,
} from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";

export default function HomePage() {
  const form = useRef();
  const [notification, setNotification] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q3231i8",
        "template_quzf1b9",
        form.current,
        "DEpvCeD6sw2Us6CWj"
      )
      .then(
        () => {
          setNotification("Your message has been sent!");
          setTimeout(() => {
            setNotification("");
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <Navbar ncolor={'bg-white'}/>
      <div className="relative">
        <img
          src="./digitalpr.webp"
          className="w-full h-[30rem] sm:h-[25rem] object-cover"
        />
        <div className="absolute inset-0 bg-secondary opacity-95"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center sm:pt-20">
          <h1 className="text-white text-3xl sm:text-6xl font-bold pheader text-center">
          "Digital PR without strategy is directionless, and strategy without Digital PR is voiceless."
          </h1>
          <p className="text-white sm:text-3xl font-bold pheader text-center pt-10">
          — Mark Doorman
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full sm:h-[60rem] h-[120rem] bg-white">
        <div className="sm:w-[85rem]">
          <div className="sm:px-44">
            <h1 className="text-center">
              If you have a huge following on social media and people listen to
              you, then we have a job for you. To join our team of influencers
              fill out the form below and someone from our team will contact
              you. Together, we will create phenomenal digital disruption.
            </h1>
          </div>
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <div className="flex sm:flex-row flex-col py-10 space-y-2 items-center justify-center">
              <div className="sm:space-x-4 sm:px-4 flex flex-col">
                <label htmlFor="name" className="text-sm text-black sm:pl-4">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 sm:w-[20rem] w-full p-2 border border-gray-300 rounded-md bg-primary text-black"
                />
              </div>
              <div className="sm:space-x-4 sm:px-4 flex flex-col">
                <label
                  htmlFor="contact-number"
                  className="text-sm text-black sm:pl-4"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contact-number"
                  name="contact_number"
                  required
                  className="mt-1 sm:w-[20rem] w-full p-2 border border-gray-300 rounded-md bg-primary text-black"
                />
              </div>
              <div className="sm:space-x-4 sm:px-4 flex flex-col">
                <label htmlFor="website" className="text-sm text-black sm:pl-4">
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  required
                  className="mt-1 sm:w-[20rem] w-full p-2 border border-gray-300 rounded-md bg-primary text-black"
                />
              </div>
              <div className="sm:space-x-4 sm:px-4 flex flex-col">
                <label htmlFor="email" className="text-sm text-black sm:pl-4">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 sm:w-[20rem] w-full p-2 border border-gray-300 rounded-md bg-primary text-black"
                />
              </div>
            </div>
            <div>
              <h1 className="pheader font-bold pl-4">Social Media Profiles</h1>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-6">
              <div className="space-x-4 sm:px-4 flex flex-row items-center">
                <label htmlFor="facebook" className="text-4xl text-black pl-4">
                  <FaFacebook />
                </label>
                <input
                  type="text"
                  id="facebook"
                  name="facebook"
                  className="mt-1 sm:w-[8rem] w-full p-2 border border-gray-300 rounded-md bg-primary text-black"
                />
              </div>
              <div className="space-x-4 sm:px-4 flex flex-row items-center">
                <label htmlFor="twitter" className="text-4xl text-black pl-4">
                  <FaTwitter />
                </label>
                <input
                  type="text"
                  id="twitter"
                  name="twitter"
                  className="mt-1 sm:w-[8rem] w-full p-2 border border-gray-300 rounded-md bg-primary text-black"
                />
              </div>
              <div className="space-x-4 sm:px-4 flex flex-row items-center">
                <label htmlFor="linkedin" className="text-4xl text-black pl-4">
                  <FaLinkedin />
                </label>
                <input
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  className="mt-1 sm:w-[8rem] w-full p-2 border border-gray-300 rounded-md bg-primary text-black"
                />
              </div>
              <div className="space-x-4 sm:px-4 flex flex-row items-center">
                <label htmlFor="snapchat" className="text-4xl text-black pl-4">
                  <FaSnapchat />
                </label>
                <input
                  type="text"
                  id="snapchat"
                  name="snapchat"
                  className="mt-1 sm:w-[8rem] w-full p-2 border border-gray-300 rounded-md bg-primary text-black"
                />
              </div>
              <div className="space-x-4 sm:px-4 flex flex-row items-center">
                <label htmlFor="youtube" className="text-4xl text-black pl-4">
                  <FaYoutube />
                </label>
                <input
                  type="text"
                  id="youtube"
                  name="youtube"
                  className="mt-1 sm:w-[8rem] w-full p-2 border border-gray-300 rounded-md bg-primary text-black"
                />
              </div>
              <div className="space-x-4 sm:px-4 flex flex-row items-center">
                <label htmlFor="instagram" className="text-4xl text-black pl-4">
                  <FaInstagram />
                </label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  className="mt-1 sm:w-[8rem] w-full p-2 border border-gray-300 rounded-md bg-primary text-black"
                />
              </div>
            </div>
            <div className="pl-5 pt-16 grid grid-cols-2 sm:grid-cols-5 space-y-5">
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value="Beauty"
                  className="mt-6"
                />{" "}
                Beauty
              </label>
              <label>
                <input type="checkbox" name="category" value="Entertainment" />{" "}
                Entertainment
              </label>
              <label>
                <input type="checkbox" name="category" value="Food & Recipes" />{" "}
                Food & Recipes
              </label>
              <label>
                <input type="checkbox" name="category" value="Fashion" />{" "}
                Fashion
              </label>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value="Health & Fitness"
                />{" "}
                Health & Fitness
              </label>
              <label>
                <input type="checkbox" name="category" value="Lifestyle" />{" "}
                Lifestyle
              </label>
              <label>
                <input type="checkbox" name="category" value="Pets" /> Pets
              </label>
              <label>
                <input type="checkbox" name="category" value="Politics" />{" "}
                Politics
              </label>
              <label>
                <input type="checkbox" name="category" value="Religion" />{" "}
                Religion
              </label>
              <label>
                <input type="checkbox" name="category" value="Sports" /> Sports
              </label>
              <label>
                <input type="checkbox" name="category" value="Technology" />{" "}
                Technology
              </label>
              <label>
                <input type="checkbox" name="category" value="Travel" /> Travel
              </label>
              <label>
                <input type="checkbox" name="category" value="Photography" />{" "}
                Photography
              </label>
              <label>
                <input type="checkbox" name="category" value="Others" /> Others
              </label>
            </div>
            <div>
              <h1 className="pheader font-bold py-5 pl-4 sm:pl-0">
                Please mention your:
              </h1>
            </div>
            <div className="flex sm:flex-row flex-col">
              <div className="sm:space-x-4 sm:px-4 px-2 flex flex-col">
                <label htmlFor="age" className="text-sm text-black sm:pl-4">
                  Age
                </label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  required
                  className="mt-1 sm:w-[14rem] w-full p-2 border border-gray-300 rounded-md bg-primary text-black"
                />
              </div>
              <div className="flex flex-col sm:flex-row mt-8 space-x-4 ml-0 sm:ml-0">
                <label className="sm:inline-flex items-center ml-4">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="Male"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="sm:inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="Female"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>
            <div className="p-1 py-10 sm:px-7 px-2">
              <button
                type="submit"
                className="w-28 bg-[#1F51FF] hover:bg-black pheader text-white p-4  transition-all"
              >
                SUBMIT
              </button>
            </div>
          </form>
          {notification && <div className="notification">{notification}</div>}
        </div>
      </div>
      <Footer />
    </>
  );
}
