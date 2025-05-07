import React from "react";
import { CgFacebook } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";
import { SlArrowUp } from "react-icons/sl";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="shadow-md rounded-xl w-full p-3 md:p-4 relative overflow-hidden bg-[#0b0e18]">
      <div className="w-full flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-[130px]">
        <img src="/image.png" alt="logo" className="w-[150px]" />

        <div className="w-4/5 sm:w-2/5 mx-auto text-center">
          <p className="text-[0.9rem] text-gray-400 text-center">
            Experienced web designer and developer with strong expertise in
            building modern, high-quality digital solutions. At JVAI, they focus
            on crafting scalable, user-friendly web experiences backed by solid
            development practices and a passion for innovation.
          </p>
        </div>

        <button className="py-3 px-6 rounded-full bg-[#3B9DF8] text-white">
          Contact Us
        </button>

        <div className="flex gap-[15px] text-black mt-4 mb-24">
          <a
            href="https://www.facebook.com/hello.jvai"
            className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md"
          >
            <CgFacebook />
          </a>
          <a
            href="mailto:jvai76951@gmail.com"
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md"
          >
            <IoIosMail />
          </a>
          {/* <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
            <BsInstagram />
          </a> */}
          <a
            href="https://www.linkedin.com/company/jvai"
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>

      <div className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-between w-full mt-">
        <p className="text-[0.9rem] text-gray-300">
          © {new Date().getFullYear()} All Rights Reserved JVAI (Join Venture
          AI)
        </p>

        <SlArrowUp className="p-2 rounded-full border border-gray-300 cursor-pointer text-[2rem] text-gray-300" />
      </div>

      {/* Background images */}
      <img
        src="/team/image.svg"
        alt="background"
        className="absolute bottom-[20px] sm:bottom-0 left-0 right-0 z-10 rounded-b-xl w-full"
      />
      {/* <img
        src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"
        alt="background"
        className="absolute bottom-0 left-0 right-0 z-10 rounded-b-xl w-full"
      /> */}
    </footer>
  );
};

export default Footer;
