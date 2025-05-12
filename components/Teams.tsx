


"use client";

import React from "react";
import AnimatedSection from "./animated-section";
import { Users, ChevronLeft, ChevronRight } from "lucide-react";
import TeamMember from "./team-member";

export default function Teams() {
  // Team members data
  const teamMembers = [
  {
    name: "Md. Gazi Alauddin",
    role: "GM of JVAI",
    image: "/team/WhatsApp Image 2025-05-05 at 18.25.48_cafe20e3.jpg",
    bio: "Leads JVAI with a Ph.D. in Machine Learning and over 15 years steering innovative AI research and strategic implementations.",
  },
  {
    name: "Palash Chandra Barman",
    role: "Sr. Software Engineer",
    image: "/team/palash.jpg",
    bio: "A Senior Software Engineer is a highly experienced software development professional who leads the design, development, and maintenance of software systems.",
  },
  {
    name: "Rafsun Ahmed",
    role: "AI Engineer",
    image: "/team/WhatsApp Image 2025-05-05 at 18.25.47_dc798f8c.jpg",
    bio: "Specializes in the design and optimization of Natural Language Processing (NLP) systems, driving advancements in conversational AI and machine learning models.",
  },
  {
    name: "Zaman Shaikh",
    role: "Flutter Developer",
    image: "/team/WhatsApp Image 2025-05-05 at 18.25.47_ed503490.jpg",
    bio: "Develops high-performance, cross-platform mobile applications with a focus on delivering robust solutions in industries like finance and healthcare using Flutter.",
  },
  {
    name: "Saidul Mursalin Khan",
    role: "AI Engineer",
    image: "/team/image.png",
    bio: "Leads the development and implementation of ethical AI technologies, focusing on responsible and inclusive AI solutions for global impact.",
  },
  {
    name: "Mehedi Hasan",
    role: "Python Developer",
    image: "/team/mehedi.jpg",
    bio: "A skilled Python developer, known for creating scalable backend solutions and working with frameworks such as Django and FastAPI to deliver robust applications.",
  },
  {
    name: "Rifat Hossain",
    role: "Senior Backend Engineer",
    image: "/team/rifatdb.jpeg",
    bio: "An experienced backend engineer with deep expertise in designing and optimizing server-side systems, databases, and scalable architectures.",
  },
  {
    name: "Abdull Satter",
    role: "Backend Developer",
    image: "/team/satter.png",
    bio: "Focuses on building scalable, high-performance backend systems, bringing advanced expertise in algorithms, server-side technologies, and complex database management.",
  },
  {
    name: "Zakaria Rabby",
    role: "UI/UX Designer",
    image: "/team/Zakaria.png",
    bio: "Creates user-centered designs, transforming complex functionality into intuitive and aesthetically pleasing interfaces that enhance user engagement and experience.",
  },
  {
    name: "Sharif Mahamud",
    role: "Frontend Developer",
    image: "/team/155249475.jpg",
    bio: "A front-end developer specializing in responsive web design, ensuring seamless user interfaces using technologies such as HTML, CSS, JavaScript, and Next.js.",
  },
  {
    name: "Rakibul Hossain",
    role: "Software Engineer",
    image: "/team/rikb.png",
    bio: "Expert in creating software solutions with a focus on scalability and performance, working across various frameworks including Django and FastAPI.",
  },
  {
    name: "Nilutpal Majumder",
    role: "Senior UI/UX Designer",
    image: "/team/WhatsApp Image 2025-05-05 at 18.25.47_8fad6b82.jpg",
    bio: "Specializes in advanced computer vision and deep learning techniques, developing real-time image processing solutions for dynamic user interfaces.",
  },
];


  // Calculate total pages
  const itemsPerPage = 3;
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  // State for current page
  const [currentPage, setCurrentPage] = React.useState(1);

  // Get current members
  const indexOfLastMember = currentPage * itemsPerPage;
  const indexOfFirstMember = indexOfLastMember - itemsPerPage;
  const currentMembers = teamMembers.slice(
    indexOfFirstMember,
    indexOfLastMember
  );

  // Change page
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div>
      <AnimatedSection className="py-24 bg-black relative" id="team">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-[#0043f8] mr-2" />
              <h2 className="text-2xl font-semibold text-gray-300">Our Team</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-[#0043f8]">AI Experts</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team of AI specialists, data scientists, and engineers are
              passionate about creating innovative solutions.
            </p>
          </div>

          {/* Grid layout with 3 items per page */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Left arrow - positioned absolutely on the left side */}
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full ${
                currentPage === 1
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[#0043f8] hover:bg-blue-700"
              } text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400`}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Team members */}
            {currentMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}

            {/* Right arrow - positioned absolutely on the right side */}
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full ${
                currentPage === totalPages
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[#0043f8] hover:bg-blue-700"
              } text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400`}
              aria-label="Next page"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
