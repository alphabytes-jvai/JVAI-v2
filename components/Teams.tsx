


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
      bio: "A Senior Software Engineer is a highly experienced software development professional who leads the design, development, and maintenance of software systems",
    },
    {
      name: "Rafsun Ahmed",
      role: "Ai Engineer",
      image: "/team/WhatsApp Image 2025-05-05 at 18.25.47_dc798f8c.jpg",
      bio: "Designs and optimizes natural language processing systems, enhancing conversational AI capabilities.",
    },
    {
      name: "Zaman Shaikh",
      role: "Flutter Developer",
      image: "/team/WhatsApp Image 2025-05-05 at 18.25.47_ed503490.jpg",
      bio: "Builds seamless cross-platform mobile applications using Flutter, leveraging expertise in finance and healthcare domains.",
    },

    {
      name: "Saidul Mursalin Khan",
      role: "AI Specialist",
      image: "/team/image.png",
      bio: "Champions ethical AI development, ensuring responsible and inclusive deployment of AI technologies.",
    },
    {
      name: "Mehedi Hasan",
      role: "Python Developer",
      image: "/team/mehedi.jpg",
      bio: "Specializes in Python development, creating efficient and scalable solutions using frameworks like Django and FastAPI.",
    },
    {
      name: "Rifat Hossain",
      role: "Senior Backend Engineer",
      image: "/team/rifatdb.jpeg",
      bio: "A good Senior Backend Engineer has a strong technical background, excellent problem-solving skills, and a deep understanding of databases and server-side languages",
    },
    {
      name: "Abdull Satter",
      role: "Senior Backend Developer & DSA Specialist",
      image: "/team/satter.png",
      bio: " Has a strong technical background, excellent problem-solving skills, and a deep understanding of databases and server-side languages.",
    },

    {
      name: "Zakaria Rabby",
      role: "UI/UX Designer",
      image: "/team/Zakaria.png",
      bio: "Designs intuitive and visually appealing user interfaces, ensuring a seamless user experience.",
    },
    {
      name: "Sharif Mahamud",
      role: "Frontend Developer",
      image: "/team/155249475.jpg",
      bio: "Specializes in front-end development, creating engaging and responsive user interfaces using HTML, CSS, JavaScript, and frameworks like Next.js.",
    },
    {
      name: "Rakibul Hossain",
      role: "Software Engineer",
      image: "/team/rikb.png",
      bio: "Specializes in software development, creating efficient and scalable solutions using frameworks like Django and FastAPI.",
    },
    {
      name: "David Kim",
      role: "Computer Vision Engineer",
      image: "/team/WhatsApp Image 2025-05-05 at 18.25.47_8fad6b82.jpg",
      bio: "Develops advanced computer vision solutions, specializing in deep learning for real-time image processing.",
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
