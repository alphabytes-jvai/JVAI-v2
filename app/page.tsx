import {
  ArrowRight,
  Brain,
  ChevronDown,
  Code,
  Database,
  MessageSquare,
  Users,
  Briefcase,
  Phone,
  Info,
  Zap,
  Globe,
  BarChart,
  CheckCircle,
  Award,
  Shield,
  Clock,
  Cpu,
  Server,
} from "lucide-react";
import ParticleBackground from "@/components/particle-background";
import AnimatedText from "@/components/animated-text";
import { Button } from "@/components/ui/button";
import AIModelDemo from "@/components/ai-model-demo";
import FloatingElements from "@/components/floating-elements";
import HeroAnimation from "@/components/hero-animation";
import ProjectCard from "@/components/project-card";
import TeamMember from "@/components/team-member";
import ServiceCard from "@/components/service-card";
import ContactForm from "@/components/contact-form";
import AnimatedSection from "@/components/animated-section";
import TestimonialCard from "@/components/testimonial-card";
import FeatureHighlight from "@/components/feature-highlight";
import TechnologyCard from "@/components/technology-card";
import ProcessStep from "@/components/process-step";
import ComparisonTable from "@/components/comparison-table";
import IndustryCard from "@/components/industry-card";
import ScrollingLogos from "@/components/scrolling-logos";
import StatCard from "@/components/stat-card";
import Image from "next/image";
import Teams from "@/components/Teams";
import React from "react";
import Link from "next/link";

export default function Home() {
  const textVariants = {
    animate: {
      transition: {
        staggerChildren: 0.3, // Stagger child animations
      },
    },
  };

  const textItemVariants = {
    initial: { opacity: 0, x: 20 }, // Start slightly to the right
    animate: {
      opacity: [0.7, 1, 0.7], // Continuous opacity pulse
      x: [20, 0, 20], // Gentle slide back and forth
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <main className="relative overflow-hidden">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              {/* <Brain className="h-8 w-8 mr-2 text-[#0043f8]" />
              <span className="text-2xl font-bold text-white">
                Join Venture AI
              </span> */}
              <Image
                width={150}
                height={150}
                src="/image.png"
                alt="logo"
                className="w-[150px]"
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-300 hover:text-[#0043f8] transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-[#0043f8] transition-colors"
              >
                Services
              </a>
              <a
                href="#features"
                className="text-gray-300 hover:text-[#0043f8] transition-colors"
              >
                Features
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-[#0043f8] transition-colors"
              >
                Projects
              </a>
              <a
                href="#team"
                className="text-gray-300 hover:text-[#0043f8] transition-colors"
              >
                Team
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-[#0043f8] transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-[#0043f8] transition-colors"
              >
                Contact
              </a>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Enhanced Hero Section with Advanced Animation */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden pt-16">
        <ParticleBackground />
        <HeroAnimation />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              {/* <Brain className="h-12 w-12 mr-2 text-[#0043f8] animate-pulse" /> */}
              {/* <Image width={150} height={150} src="/image.png" alt="logo" className="w-[200px] h-[100px]" /> */}

              <h1 className="text-4xl md:text-7xl font-bold">
                Join Venture <span className="text-[#0043f8]">AI</span>
              </h1>
            </div>
            <AnimatedText
              text="Transforming businesses with intelligent AI solutions"
              className="text-xl md:text-2xl mb-8 text-gray-200"
            />
            <p className="text-lg md:text-xl mb-12 text-gray-300">
              Leverage the power of artificial intelligence to drive innovation,
              efficiency, and growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#about">
                <Button className="bg-[#0043f8] hover:bg-[#0036c5] text-white px-8 py-6 group">
                  Explore Now{" "}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              {/* <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-6"
              >
                Book a Demo
              </Button> */}
            </div>

            {/* Trusted By Section */}
            {/* <div className="mt-20">
              <p className="text-gray-400 mb-6">Trusted by industry leaders</p>
              <ScrollingLogos />
            </div> */}
          </div>
        </div>
        <a
          href="#team"
          className="absolute bottom-10 cursor-pointer left-0 right-0 flex justify-center animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-white/70" />
        </a>
      </section>
      {/* <p
        data-aos="fade-left"
        data-aos-delay="3000"
        data-aos-duration="1200"
        className="mt-4 text-lg"
      >
        Intelligent Solutions for Your Business
      </p>   */}
      {/* Key Stats Section - Redesigned */}
      <section className="py-16 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              icon={<Users className="h-8 w-8 text-[#0043f8]" />}
              value="200+"
              label="Global Clients"
              description="Businesses transformed across industries"
              bgColor="bg-gray-900"
            />
            <StatCard
              icon={<Award className="h-8 w-8 text-[#0043f8]" />}
              value="98%"
              label="Success Rate"
              description="Projects delivered with measurable ROI"
              bgColor="bg-gray-900"
            />
            <StatCard
              icon={<Cpu className="h-8 w-8 text-[#0043f8]" />}
              value="50+"
              label="AI Models"
              description="Custom-built for specific business needs"
              bgColor="bg-gray-900"
            />
            <StatCard
              icon={<Globe className="h-8 w-8 text-[#0043f8]" />}
              value="24"
              label="Countries"
              description="Global presence and implementation"
              bgColor="bg-gray-900"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AnimatedSection className="py-24 bg-black relative" id="about">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                {/* <div className="w-full h-80 md:h-96 bg-gradient-to-br from-[#0043f8]/20 to-[#0043f8]/5 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="h-32 w-32 text-[#0043f8] animate-pulse" />
                  </div>
                </div> */}
                <Image
                  src="/about.jpg"
                  alt="about"
                  width={1000}
                  height={900}
                  className="rounded-l-xl"
                ></Image>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#0043f8]/10 rounded-full blur-2xl"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <Info className="h-6 w-6 text-[#0043f8] mr-2" />
                <h2 className="text-2xl font-semibold text-gray-300">
                  About Us
                </h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pioneering the Future of{" "}
                <span className="text-[#0043f8]">Artificial Intelligence</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Welcome to JVAI (Join Venture AI)--- Where we turn innovative
                ideas into intelligent digital solutions. We’re a passionate
                team that builds custom AI chatbots, smart apps, and websites
                for people and businesses worldwide. Our goal is simple: to make
                technology work for you in a way that feels easy, natural, and
                powerful.
              </p>
              <p className="text-gray-300 mb-8">
              Whether you need a chatbot that speaks your customers’ language or a beautiful, functional app or website to grow your business, we’re here to help. We don’t just write code. We listen, understand, and create solutions that solve problems. 
              At JVAI, we blend innovation with empathy to build technology that truly connects with users. 
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#0043f8]/10 p-2 rounded-lg mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-[#0043f8]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      Industry-Leading Expertise
                    </h4>
                    <p className="text-gray-400">
                      Our team includes PhDs and industry veterans with decades
                      of combined experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#0043f8]/10 p-2 rounded-lg mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-[#0043f8]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      Customized Solutions
                    </h4>
                    <p className="text-gray-400">
                      We develop tailored AI solutions that address your
                      specific business challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#0043f8]/10 p-2 rounded-lg mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-[#0043f8]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Proven Results</h4>
                    <p className="text-gray-400">
                      Our solutions have delivered measurable ROI for businesses
                      across industries.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-[#0043f8] hover:bg-[#0036c5] text-white">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection
        className="py-24 bg-gradient-to-b from-black to-gray-900 relative"
        id="services"
      >
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-[#0043f8] mr-2" />
              <h2 className="text-2xl font-semibold text-gray-300">
                Our Services
              </h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Comprehensive <span className="text-[#0043f8]">AI Solutions</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our advanced AI technologies help businesses automate processes,
              gain insights, and create exceptional customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code className="h-10 w-10 text-[#0043f8]" />}
              title="App & Website Development"
              description="AI-powered application and website development with intelligent features and personalized user experiences."
              features={[
                "AI-Driven UX/UI",
                "Intelligent Web Applications",
                "Mobile App Development",
                "Smart Content Management",
              ]}
            />
            <ServiceCard
              icon={<Code className="h-10 w-10 text-[#0043f8]" />}
              title="Custom AI Development"
              description="Tailored AI solutions designed specifically for your unique business challenges and opportunities."
              features={[
                "Custom Algorithm Development",
                "AI Integration",
                "Model Training",
                "Performance Optimization",
              ]}
            />
            <ServiceCard
              icon={<Brain className="h-10 w-10 text-[#0043f8]" />}
              title="AI Integration"
              description="Seamlessly integrate AI capabilities into your existing systems and workflows."
              features={[
                "API Development",
                "System Integration",
                "Legacy System Modernization",
                "Cloud Migration",
              ]}
            />
            <ServiceCard
              icon={<MessageSquare className="h-10 w-10 text-[#0043f8]" />}
              title="Natural Language Processing"
              description="Advanced text analysis and generation capabilities for understanding customer needs and automating responses."
              features={[
                "Sentiment Analysis",
                "Text Classification",
                "Chatbot Development",
                "Content Generation",
              ]}
            />
            {/* <ServiceCard
              icon={<BarChart className="h-10 w-10 text-[#0043f8]" />}
              title="Predictive Analytics"
              description="Forecast trends and behaviors with our machine learning models to make data-driven business decisions."
              features={[
                "Demand Forecasting",
                "Risk Assessment",
                "Customer Behavior Analysis",
                "Market Trend Prediction",
              ]}
            /> */}

            <ServiceCard
              icon={<Database className="h-10 w-10 text-[#0043f8]" />}
              title="Data Processing"
              description="Transform raw data into actionable insights with our advanced processing algorithms."
              features={[
                "Data Cleaning",
                "ETL Pipelines",
                "Big Data Processing",
                "Real-time Analytics",
              ]}
            />

            <ServiceCard
              icon={<Globe className="h-10 w-10 text-[#0043f8]" />}
              title="AI Consulting"
              description="Expert guidance on implementing AI strategies that align with your business goals."
              features={[
                "AI Readiness Assessment",
                "Strategy Development",
                "Implementation Roadmap",
                "ROI Analysis",
              ]}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Key Features Section */}
      <AnimatedSection className="py-24 bg-black relative" id="features">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-[#0043f8] mr-2" />
              <h2 className="text-2xl font-semibold text-gray-300">
                Key Features
              </h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-[#0043f8]">Join Venture AI</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform offers cutting-edge capabilities that set us apart
              from traditional solutions.
            </p>
          </div>

          <div className="space-y-24">
            <FeatureHighlight
              title="Advanced Neural Networks"
              description="Our proprietary neural network architecture delivers unparalleled accuracy and performance for complex AI tasks."
              image="/Networks2.jpg"
              features={[
                "Multi-layered deep learning models",
                "Self-optimizing algorithms",
                "Transfer learning capabilities",
                "Continuous improvement through feedback loops",
              ]}
              imagePosition="right"
            />

            <FeatureHighlight
              title="Real-time Processing"
              description="Process and analyze massive datasets in real-time to make instant, data-driven decisions."
              // image="/Networks.png"
              image="/team/data.jpg"
              features={[
                "Sub-second response times",
                "Scalable cloud infrastructure",
                "Edge computing capabilities",
                "Distributed processing architecture",
              ]}
              imagePosition="left"
            />

            <FeatureHighlight
              title="Enterprise-grade Security"
              description="Your data is protected with military-grade encryption and comprehensive security protocols."
              image="/cyber.jpg"
              features={[
                "End-to-end encryption",
                "SOC 2 Type II compliance",
                "Regular security audits",
                "Role-based access controls",
              ]}
              imagePosition="right"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Technology Stack Section */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Server className="h-6 w-6 text-[#0043f8] mr-2" />
              <h2 className="text-2xl font-semibold text-gray-300">
                Technology Stack
              </h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Powered by{" "}
              <span className="text-[#0043f8]">Cutting-edge Technology</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies across AI, web, mobile, and
              database platforms to build robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TechnologyCard
              title="Machine Learning"
              icon={<Brain className="h-12 w-12 text-[#0043f8]" />}
              description="Advanced ML algorithms including random forests, gradient boosting, and neural networks."
            />
            <TechnologyCard
              title="Deep Learning"
              icon={<Cpu className="h-12 w-12 text-[#0043f8]" />}
              description="State-of-the-art deep learning frameworks for complex pattern recognition and prediction."
            />
            <TechnologyCard
              title="Natural Language Processing"
              icon={<MessageSquare className="h-12 w-12 text-[#0043f8]" />}
              description="Sophisticated NLP models for understanding and generating human language."
            />
            <TechnologyCard
              title="Computer Vision"
              icon={
                <svg
                  className="h-12 w-12 text-[#0043f8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              }
              description="Advanced image and video analysis capabilities for object detection and recognition."
            />
            <TechnologyCard
              title="Python"
              icon={
                <svg
                  className="h-12 w-12 text-[#0043f8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3"></path>
                  <path d="M12 15h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3"></path>
                  <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"></path>
                  <path d="M16 15v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"></path>
                </svg>
              }
              description="Versatile programming language for data science, machine learning, and AI model development."
            />
            <TechnologyCard
              title="Node.js"
              icon={
                <svg
                  className="h-12 w-12 text-[#0043f8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22v-5"></path>
                  <path d="M9 8V5.5a2.5 2.5 0 0 1 5 0V8"></path>
                  <path d="M15 8h.01"></path>
                  <path d="M9 8h.01"></path>
                  <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"></path>
                </svg>
              }
              description="JavaScript runtime for building scalable, high-performance backend services and APIs."
            />
            <TechnologyCard
              title="Next.js"
              icon={
                <svg
                  className="h-12 w-12 text-[#0043f8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2H2v10h10V2Z"></path>
                  <path d="M22 12h-8v10h8V12Z"></path>
                  <path d="M12 12H2v10h10V12Z"></path>
                  <path d="M22 2h-8v8h8V2Z"></path>
                </svg>
              }
              description="React framework for building fast, SEO-friendly web applications with server-side rendering."
            />
            <TechnologyCard
              title="Flutter"
              icon={
                <svg
                  className="h-12 w-12 text-[#0043f8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.51 7.11 2 4.5 12.005 2l10 2.5-10.005 2.5-7.49.11ZM4.5 9.5v5L7 17v-5l-2.5-2.5ZM4.5 14.5 7 17l5 5 5-5-12.5-2.5ZM12 7l5.005-2.5L12 2 7 4.5 12 7Z"></path>
                  <path d="M17 17V7l-5 5"></path>
                </svg>
              }
              description="UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase."
            />
            <TechnologyCard
              title="MongoDB"
              icon={<Database className="h-12 w-12 text-[#0043f8]" />}
              description="NoSQL database for storing and retrieving document-based data with high scalability and flexibility."
            />
            <TechnologyCard
              title="PostgreSQL"
              icon={
                <svg
                  className="h-12 w-12 text-[#0043f8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v19"></path>
                  <path d="M5 8h14"></path>
                  <path d="M5 16h14"></path>
                  <path d="M3 3h18v18H3z"></path>
                </svg>
              }
              description="Advanced open-source relational database with robust features for complex data operations and analytics."
            />
            <TechnologyCard
              title="MySQL"
              icon={
                <svg
                  className="h-12 w-12 text-[#0043f8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 2v20"></path>
                  <path d="M21 5H3"></path>
                  <path d="M21 10H3"></path>
                  <path d="M21 15H3"></path>
                  <path d="M21 20H3"></path>
                </svg>
              }
              description="Popular open-source relational database management system for web applications and enterprise solutions."
            />
            <TechnologyCard
              title="Figma"
              icon={
                <svg
                  className="h-12 w-12 text-[#0043f8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
                  <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
                  <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
                  <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
                  <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
                </svg>
              }
              description="Collaborative design platform for creating user interfaces, prototypes, and design systems."
            />
            <TechnologyCard
              title="Java"
              icon={
                <svg
                  className="h-12 w-12 text-[#0043f8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z"></path>
                  <path d="M12 2v20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              }
              description="Enterprise-grade programming language for building robust, scalable applications and backend systems."
            />
            <TechnologyCard
              title="Swift"
              icon={
                <svg
                  className="h-12 w-12 text-[#0043f8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.8 3.3 7.8 16.3c-1.4 1.4-2.2 2.2-2.2 3.2 0 1.7 1.5 3 3.2 3 1 0 1.8-.8 3.2-2.2l13-13c1-1 1-2.5 0-3.5s-2.6-1-4.2.5z"></path>
                  <path d="M10.2 17.8 8.8 19.2"></path>
                  <path d="M13.3 14.7l-1.4 1.4"></path>
                  <path d="M16.3 11.7l-1.4 1.4"></path>
                  <path d="M19.4 8.6 18 10"></path>
                </svg>
              }
              description="Modern programming language for iOS, macOS, watchOS, and tvOS app development with performance and safety."
            />
            <TechnologyCard
              title="Cloud Infrastructure"
              icon={<Server className="h-12 w-12 text-[#0043f8]" />}
              description="Scalable, secure cloud architecture for deploying and managing AI solutions."
            />
            <TechnologyCard
              title="Big Data Processing"
              icon={<Database className="h-12 w-12 text-[#0043f8]" />}
              description="Distributed computing frameworks for processing and analyzing massive datasets."
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Our Process Section */}
      <AnimatedSection className="py-24 bg-black relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-[#0043f8] mr-2" />
              <h2 className="text-2xl font-semibold text-gray-300">
                Our Process
              </h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How We <span className="text-[#0043f8]">Deliver Results</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology ensures successful AI implementation and
              measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Discovery & Assessment"
              description="We analyze your business needs, data availability, and technical requirements to define project scope."
            />
            <ProcessStep
              number="02"
              title="Solution Design"
              description="Our experts design a custom AI solution architecture tailored to your specific challenges."
            />
            <ProcessStep
              number="03"
              title="Development & Training"
              description="We develop and train AI models using your data, optimizing for accuracy and performance."
            />
            <ProcessStep
              number="04"
              title="Deployment & Optimization"
              description="We implement the solution in your environment and continuously optimize for maximum ROI."
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Industry Solutions Section */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6 text-[#0043f8] mr-2" />
              <h2 className="text-2xl font-semibold text-gray-300">
                Industry Solutions
              </h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              AI Solutions for{" "}
              <span className="text-[#0043f8]">Every Industry</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver specialized AI solutions tailored to the unique
              challenges of various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustryCard
              title="Healthcare"
              icon={
                <svg
                  className="h-12 w-12 text-[#0043f8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              }
              description="Improve patient outcomes, optimize operations, and accelerate research with AI-powered healthcare solutions."
              useCases={[
                "Diagnostic assistance",
                "Patient monitoring",
                "Drug discovery",
                "Operational efficiency",
              ]}
            />
            <IndustryCard
              title="Finance"
              icon={
                <svg
                  className="h-12 w-12 text-[#0043f8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              description="Enhance risk management, detect fraud, and personalize customer experiences in the financial sector."
              useCases={[
                "Fraud detection",
                "Risk assessment",
                "Algorithmic trading",
                "Customer insights",
              ]}
            />
            <IndustryCard
              title="Retail"
              icon={
                <svg
                  className="h-12 w-12 text-[#0043f8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              }
              description="Optimize inventory, personalize shopping experiences, and forecast demand with retail AI solutions."
              useCases={[
                "Demand forecasting",
                "Personalized recommendations",
                "Inventory optimization",
                "Customer analytics",
              ]}
            />
            <IndustryCard
              title="Manufacturing"
              icon={
                <svg
                  className="h-12 w-12 text-[#0043f8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              }
              description="Improve production efficiency, predict maintenance needs, and ensure quality control in manufacturing."
              useCases={[
                "Predictive maintenance",
                "Quality control",
                "Process optimization",
                "Supply chain management",
              ]}
            />
            <IndustryCard
              title="Energy"
              icon={
                <svg
                  className="h-12 w-12 text-[#0043f8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
              description="Optimize energy production, predict equipment failures, and reduce costs with AI-powered solutions."
              useCases={[
                "Grid optimization",
                "Predictive maintenance",
                "Energy forecasting",
                "Consumption analysis",
              ]}
            />
            <IndustryCard
              title="Transportation"
              icon={
                <svg
                  className="h-12 w-12 text-[#0043f8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              }
              description="Enhance route optimization, predict maintenance needs, and improve safety in transportation."
              useCases={[
                "Route optimization",
                "Predictive maintenance",
                "Safety monitoring",
                "Demand forecasting",
              ]}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Comparison Section */}
      <AnimatedSection className="py-24 bg-black relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-[#0043f8] mr-2" />
              <h2 className="text-2xl font-semibold text-gray-300">
                AI Advantage
              </h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why AI <span className="text-[#0043f8]">Outperforms</span>{" "}
              Traditional Solutions
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI-powered approach delivers superior results compared
              to conventional methods.
            </p>
          </div>

          <ComparisonTable />
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection
        className="py-24 bg-gradient-to-b from-black to-gray-900 relative"
        id="projects"
      >
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6 text-[#0043f8] mr-2" />
              <h2 className="text-2xl font-semibold text-gray-300">
                Our Projects
              </h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Transformative{" "}
              <span className="text-[#0043f8]">AI Solutions</span> in Action
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful AI implementations across
              various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Retail Demand Forecasting"
              description="Developed an AI-powered demand forecasting system for a major retail chain, reducing inventory costs by 23%."
              image="/pople.jpg"
              tags={["Predictive Analytics", "Machine Learning", "Retail"]}
            />
            <ProjectCard
              title="Healthcare Diagnostic Assistant"
              description="Created an AI assistant that helps doctors analyze medical images and patient data to improve diagnostic accuracy."
              image="/doctor.jpg"
              tags={["Computer Vision", "Healthcare", "Deep Learning"]}
            />
            <ProjectCard
              title="Financial Fraud Detection"
              description="Implemented a real-time fraud detection system for a financial institution, reducing fraud losses by 67%."
              image="/scam.jpg"
              tags={["Anomaly Detection", "Finance", "Real-time Processing"]}
            />
            <ProjectCard
              title="Smart Manufacturing Optimization"
              description="Developed an AI system that optimizes manufacturing processes, reducing waste and improving efficiency."
              image="/science.jpg"
              tags={["IoT", "Manufacturing", "Optimization"]}
            />
            <ProjectCard
              title="Customer Service Chatbot"
              description="Built an advanced NLP-powered chatbot that handles 80% of customer inquiries automatically."
              image="/chatbot.jpg"
              tags={["NLP", "Customer Service", "Chatbot"]}
            />
            <ProjectCard
              title="Personalized E-commerce Recommendations"
              description="Created a recommendation engine that increased average order value by 34% for an e-commerce platform."
              image="/digith.jpg"
              tags={["Recommendation Systems", "E-commerce", "Personalization"]}
            />
          </div>

          {/* <div className="text-center mt-12">
            <Button className="bg-[#0043f8] hover:bg-[#0036c5] text-white">
              View All Projects
            </Button>
          </div> */}
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <Teams></Teams>

      {/* AI Demo Section */}
      <AnimatedSection
        className="py-24 bg-gradient-to-b from-black to-gray-900 "
        id="demo"
      >
        <FloatingElements />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Experience Our <span className="text-[#0043f8]">AI</span> in
              Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Try our interactive demo to see how our AI technology can
              transform your business.
            </p>
          </div>

          <div className="max-w-4xl  mx-auto">
            <AIModelDemo />
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-24 bg-black relative" id="testimonials">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="h-6 w-6 text-[#0043f8] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <h2 className="text-2xl font-semibold text-gray-300">
                Client Testimonials
              </h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-[#0043f8]">Clients</span> Say
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from businesses that have transformed their operations with
              our AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="maxilef"
              company="United States."
              image="/team/maxllef.webp"
              quote="Join Venture AI revolutionized our customer service operations. Their NLP solution reduced response times by 60% while maintaining high customer satisfaction."
              rating={5}
            />
            <TestimonialCard
              name="imdjohirulfin01"
              company="United States"
              image="/team/imdjohirulfin01.webp"
              quote="The predictive analytics platform developed by Join Venture AI has transformed our inventory management. We've seen a 23% reduction in overstock and a 45% decrease in stockouts."
              rating={5}
            />
            <TestimonialCard
              name="davisdebard"
              company="United States"
              image="/team/davisdebard.jpg"
              quote="I’ve consistently been impressed with Shovon’s expertise and reliable execution. He continues to be a valuable asset to our AI projects, and I look forward to working with him again."
              rating={4}
            />
            <TestimonialCard
              name="miladali08"
              company="United Arab Emirates"
              image="/team/client.jpg"
              quote="The fraud detection system implemented by Join Venture AI has saved us millions. Their team's expertise and support throughout the process was exceptional."
              rating={5}
            />
            <TestimonialCard
              name="albertolorente"
              company="United States"
              image="/team/client.webp"
              quote="A remarkable expert who rapidly understands project goals with little direction. Shows great initiative, goes above and beyond expectations, and consistently delivers top-tier results. I wholeheartedly recommend their skills and commitment!"
              rating={5}
            />
            <TestimonialCard
              name="bradleymoore"
              company="United States"
              image="/team/client2.jpg"
              quote="Join Venture AI helped us optimize our production processes, resulting in a 15% increase in efficiency and significant cost savings."
              rating={4}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection
        className="py-24 bg-gradient-to-b from-black to-gray-900 relative"
        id="contact"
      >
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-[#0043f8] mr-2" />
              <h2 className="text-2xl font-semibold text-gray-300">
                Contact Us
              </h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Get in Touch with Our{" "}
              <span className="text-[#0043f8]">AI Experts</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our AI solutions? Reach out to us and
              discover how we can help transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
              <h4 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h4>
              <ContactForm />
            </div>

            <div>
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 mb-8">
                <h4 className="text-2xl font-bold text-white mb-6">
                  Our Office
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#0043f8]/10 p-3 rounded-lg mr-4">
                      <svg
                        className="h-6 w-6 text-[#0043f8]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-white font-medium">Address</h5>
                      <p className="text-gray-400">
                      Police Park, Besides Pizzaburg Restaurant (1st Floor), House 180/6/23/CAD, Road 14, Block C, Rampura, Banasree, Dhaka-1209, Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#0043f8]/10 p-3 rounded-lg mr-4">
                      <svg
                        className="h-6 w-6 text-[#0043f8]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-white font-medium">Email</h5>
                      <p className="text-gray-400">jvai76951@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#0043f8]/10 p-3 rounded-lg mr-4">
                      <svg
                        className="h-6 w-6 text-[#0043f8]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-white font-medium">Phone</h5>
                      <p className="text-gray-400">+880 1550-723640</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <h4 className="text-2xl font-bold text-white mb-6">
                  Business Hours
                </h4>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday:</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Saturday:</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Sunday:</span>
                    <span className="text-white">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 mr-2 text-[#0043f8]" />
                <span className="text-2xl font-bold">Join Venture AI</span>
              </div>
              <p className="text-gray-400 mb-4">Transforming businesses with intelligent AI solutions.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#0043f8]">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#0043f8]">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4\ */}
    </main>
  );
}
