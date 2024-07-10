"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Page() {
  const form = useRef();
  const [notification, setNotification] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_q3231i8", "template_quzf1b9", form.current, "DEpvCeD6sw2Us6CWj")
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
      <Navbar ncolor={'bg-[#231f20]'}/>
      <div className="relative">
        <img src="./digitalpr.webp" className="w-full h-[30rem] sm:h-[28rem] object-cover" />
        <div className="absolute inset-0 bg-secondary opacity-95"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center sm:pt-20">
          <h1 className="text-white text-3xl sm:text-6xl font-bold pheader text-center">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center bg-white sm:h-[58rem] h[85rem] ">
        <div >
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col py-5 space-y-4">
              <div className="space-x-4 px-4 flex flex-col">
                <input
                  type="text"
                  id="first-name"
                  name="first_name"
                  required
                  placeholder="First Name"
                  className="mt-1 sm:w-[40rem] w-full p-3 border border-gray-300  text-black"
                />
              </div>
              <div className="space-x-4 px-4 flex flex-col">
                <input
                  type="text"
                  id="last-name"
                  name="last_name"
                  required
                  placeholder="Last Name"
                  className="mt-1 sm:w-[40rem]  w-full p-3 border border-gray-300  text-black"
                />
              </div>
              <div className="space-x-4 px-4 flex flex-col">
                <input
                  type="number"
                  id="phone-number"
                  name="phone_number"
                  required
                  placeholder="Phone Number"
                  className="mt-1 sm:w-[40rem]  w-full p-3 border border-gray-300 bg-primary text-black"
                />
              </div>
              <div className="space-x-4 px-4 flex flex-col">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="mt-1 sm:w-[40rem] w-full p-3 border border-gray-300  bg-primary text-black"
                />
              </div>
              <div className="space-x-4 px-4 flex flex-col">
                <textarea
                  id="message"
                  name="message"
                  rows="12"
                  required
                  placeholder="Message"
                  className="mt-1 sm:w-[40rem]  w-full p-3 border border-gray-300  bg-primary text-black"
                ></textarea>
              </div>
            </div>
            <div className="pl-3 text-base pheader space-x-3">
              <label>
                <input type="checkbox" name="agree_to_terms" value="yes" className=""/>
                &nbsp; By entering your phone number, you agree to receive text messages to our
                <br />
                terms of use and privacy policy
              </label>
            </div>
            
            <div className="p-1 py-5 px-3">
              <button
                type="submit"
                className="w-28 bg-[#1F51FF] pheader text-white p-4  hover:black transition-all"
              >
                SUBMIT
              </button>
            </div>
          </form>
          {notification && <div className="notification">{notification}</div>}
        </div>
        <div className="sm:mb-[19rem] sm:ml-10 ml-4">
          <h1 className="text-3xl font-bold text-black pheader pt-5 sm:pt-0 ">
            Let’s Collaborate!
          </h1>
          <p className="sm:w-[45rem] w-full">
            If you like to have a chat with us about any digital requirements, require our
            services to design your website, or want us to run your marketing campaign and
            connect your brand to your customers, give us a call or fill out the form below and
            we’ll get in touch – or just swing by for a game of pool and a cup of coffee. We’re
            here 24/7 to give you the best service in town and to make sure all your business
            needs are met within your desired time frame.
          </p>
          <p className="py-10">
            Our project manager will be reaching out to you via text/call shortly.
          </p>
          <div className="flex sm:flex-row flex-col sm:gap-32">
            <div className="flex flex-col">
              <h1 className="pheader text-2xl text-black py-5"> Address:</h1>
              <h2 className="text-gray-600 text-base">
                200 Park Ave Suite 1700,
              </h2>
              <h2 className="text-gray-600 text-base">New York, NY 10166</h2>
            </div>
            <div className="flex flex-col">
              <h1 className="pheader text-2xl text-black py-5"> E-Mail:</h1>
              <h2 className="text-[#1F51FF] text-base">
                info@olivedigital.com
              </h2>
              <h2 className="text-[#1F51FF] text-base">careers@olivedigital.com</h2>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="pheader text-2xl text-black py-5"> Phone:</h1>
            <h2 className="text-[#1F51FF] text-base pb-10">
              +1 (888) 2073409
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full h-[30rem]" data-aos="fade-in">
        <iframe
          className="w-full h-full pb-5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.1596675502265!2d-106.95688352391076!3d44.797934577646004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a655555%3A0x7f989007682d4086!2s30n%20N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2s!4v1716909074771!5m2!1sen!2s"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}
