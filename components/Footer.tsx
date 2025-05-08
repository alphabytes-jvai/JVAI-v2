import React from "react";
import { CgFacebook } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                {/* <Brain className="h-8 w-8 mr-2 text-[#0043f8]" /> */}
                {/* <span className="text-2xl font-bold">Join Venture AI</span> */}
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-tight">
                  Join{" "}
                  <span className="relative inline-block">
                    Venture
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-transparent"></span>
                  </span>{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    AI
                  </span>
                </h1>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming businesses with intelligent AI solutions.
              </p>
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

            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-[#0043f8]">
                    Natural Language Processing
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-[#0043f8]">
                    Predictive Analytics
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-[#0043f8]">
                    Custom AI Development
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-[#0043f8]">
                    Data Processing
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-[#0043f8]">
                    AI Integration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-[#0043f8]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-gray-400 hover:text-[#0043f8]">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-[#0043f8]">
                    Our Clients
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-[#0043f8]">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-[#0043f8]">
                    Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                {/* <li className="text-gray-400">123 AI Innovation Center</li>
                <li className="text-gray-400">Tech District, San Francisco</li>
                <li className="text-gray-400">CA 94105</li>
                <li className="text-gray-400">info@joinventureai.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li> */}
                <li>Police Park, Besides Pizzaburg Restaurant (1st Floor), House 180/6/23/CAD, Road 14, Block C, Rampura, Banasree, Dhaka-1209, Dhaka, Bangladesh</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Join Venture AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
