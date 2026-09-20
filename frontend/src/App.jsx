import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import RohitPhoto from "./assets/RohitPhoto2.png"
import "./App.css"
import {
  FiBriefcase as Briefcase,
  FiMapPin as MapPin,
  FiArrowRight as ArrowRight,
  FiMail as Mail,
  FiPhone as Phone,
  FiCode as Code2,
  FiUsers as Users,
  FiZap as Zap,
  FiExternalLink as ExternalLink,
  FiDownload as Download,
  FiCheckCircle as CheckCircle,
  FiMenu as Menu,
  FiX as X,
  FiDatabase as Database,
  FiGlobe as Globe,
  FiTerminal as Terminal,
  FiLayers as Layers,
  FiCpu as Cpu
} from 'react-icons/fi';

import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";

import { 
  FaLinkedin as Linkedin, 
  FaTwitter as Twitter 
} from 'react-icons/fa6';

const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Reenie+Beanie&display=swap');  
`;

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rohit@example.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const techStack = [
    {
      name: 'MongoDB',
      icon: <Database className="w-8 h-8 text-emerald-400 mb-2 mx-auto" />,
      color: '#10aa50'
    },
    {
      name: 'Express.js',
      icon: (
        <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center font-bold text-xs mb-2 mx-auto text-gray-200">
          ex
        </div>
      ),
      color: '#ffffff'
    },
    {
      name: 'React.js',
      icon: <Globe className="w-8 h-8 text-cyan-400 mb-2 mx-auto animate-spin-slow" />,
      color: '#61dafb'
    },
    {
      name: 'Node.js',
      icon: <Terminal className="w-8 h-8 text-green-500 mb-2 mx-auto" />,
      color: '#68a063'
    },
    {
      name: 'JavaScript',
      icon: (
        <div className="w-8 h-8 bg-yellow-400 text-black font-extrabold flex items-center justify-end pr-1 pb-1 rounded text-xs mb-2 mx-auto">
          JS
        </div>
      ),
      color: '#f7df1e'
    },
    {
      name: 'HTML5',
      icon: (
        <IoLogoHtml5 className="w-8 h-8 bg-orange-600 text-white font-bold flex items-center justify-center rounded text-xs mb-2 mx-auto" />
        // <div >
        //   5
        // </div>
      ),
      color: '#e34f26'
    },
    {
      name: 'CSS3',
      icon: (
        <FaCss3Alt className="w-8 h-8 bg-blue-600 text-white font-bold flex items-center justify-center rounded text-xs mb-2 mx-auto" />
        // <div >
        //   3
        // </div>
      ),
      color: '#1572b6'
    },
    {
      name: 'Git',
      icon: (
        <FaGitAlt className="w-8 h-8 bg-orange-500 text-white font-bold flex items-center justify-center rounded-full text-xs mb-2 mx-auto" />
      ),
      color: '#f05032'
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'MERN Stack',
      tags: ['React', 'Node.js', 'MongoDB'],
      description: 'Full-featured online shopping platform with user auth, cart management, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      category: 'MERN Stack',
      tags: ['React', 'Node.js', 'MongoDB'],
      description: 'Kanban-style task tracking app featuring drag-and-drop cards, team collaboration tools, and progress analytics.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Chat Application',
      category: 'MERN Stack',
      tags: ['React', 'Node.js', 'MongoDB'],
      description: 'Real-time messaging platform with Socket.io, direct messaging, channels, file sharing, and online status.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-dark-navy text-slate-200">
      <style>{customStyles}</style>

      <Navbar />
      
      <section id="home" className="pt-8 pb-16 md:py-24 px-4 sm:px-8 max-w-7xl mx-auto main">
        <div className="items-center home-box">
          
          {/* Left Text Column */}
          <div className=" space-y-6 text-left">
            <div>
              <span className="text-cyan-accent font-semibold tracking-wide text-lg sm:text-xl block mb-2">
                Hi, I'm
              </span>
              <h1 className="sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
                Rohit
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 leading-snug">
                MERN Stack Full Stack <br className="hidden sm:inline" />
                <span className="text-cyan-accent">Web Developer</span>
              </h2>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              I build modern, scalable and user-friendly web applications using MongoDB, Express.js, React and Node.js. With 16 months of hands-on experience in React and Node.js, I turn ideas into real products.
            </p>

            {/* Feature Stat Badges */}
            <div className="">
              <div className="">
                {/* <Briefcase className="w-5 h-5 text-cyan-accent flex-shrink-0" /> */}
                <div>
                  <div className="text-white font-bold">16 Months</div>
                  <div className="text-slate-400 text-xs">Experience (React & Node.js)</div>
                </div>
              </div>

              <div className="">
                {/* <MapPin className="w-5 h-5 text-cyan-accent flex-shrink-0" /> */}
                <div>
                  <div className="text-white font-bold">India</div>
                  <div className="text-slate-400 text-xs">(Available for remote work)</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-cyan-glow inline-flex items-center space-x-2 px-6 py-3.5 bg-cyan-accent text-slate-950 font-bold rounded-full text-sm sm:text-base cursor-pointer projects-btn"
              >
                <span>View My Projects</span>
                {/* <ArrowRight className="w-4 h-4" /> */}
              </button>
            </div>
          </div>

          {/* Right Hero Image / Avatar Frame */}
          <div className=" flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              {/* Background Accent Blob Shape */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/30 to-blue-600/20 rounded-3xl blur-2xl transform -rotate-6"></div>

              {/* Main Photo Card Container */}
              <div className="d-flex align-items-center">
                <div className="bg-gradient-to-b from-teal-900/60 to-slate-950 rounded-2xl overflow-hidden pt-6 px-4 flex justify-center items-end min-h-[360px] sm:min-h-[420px]">
                  {/* Photo Avatar Representation */}
                  <img
                    src={RohitPhoto}
                    alt="Rohit Developer"
                    className="w-full h-80 sm:h-96 object-cover object-top rounded-t-2xl transform hover:scale-105 transition-transform duration-500 rohit-photo"
                  />
                </div>
              </div>

              {/* Tilted Handcrafted Badge Overlay */}
              {/* <div className="absolute -bottom-4 -right-2 sm:right-2 bg-transparent pointer-events-none">
                <div className="transform rotate-12 text-cyan-accent text-right">
                  <div className="font-handwriting text-3xl sm:text-4xl font-bold tracking-wider leading-none drop-shadow-md">
                    Code<br />Build<br />Solve
                  </div>
                  <svg className="w-20 h-6 text-cyan-accent ml-auto" viewBox="0 0 100 20" fill="none">
                    <path d="M5 10 Q 50 18, 95 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                </div>
              </div> */}
            </div>
          </div>

        </div>
      </section>

      <section id="about" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-navy-light/40">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: About Me Info */}
          <div id="skills" className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent block mb-1">
                ABOUT ME
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Who I Am
              </h2>
            </div>

            <p className="text-slate-300 leading-relaxed text-base">
              I'm <strong className="text-cyan-accent font-semibold">Rohit</strong>, a passionate MERN stack developer with 16 months of experience in React and Node.js. I enjoy building responsive web applications, solving real-world problems, and constantly learning new technologies to grow as a developer.
            </p>

            {/* Trait Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-card-navy border border-navy-light rounded-xl p-4 flex flex-col hover:border-cyan-accent/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-cyan-accent/10 flex items-center justify-center text-cyan-accent mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <div className='strengths'>
                  <h4 className="text-white font-bold text-sm mb-1">Problem Solver</h4>
                  <p className="text-slate-400 text-xs">Finds the best solutions</p>
                </div>
              </div>

              <div className="bg-card-navy border border-navy-light rounded-xl p-4 flex flex-col hover:border-cyan-accent/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-cyan-accent/10 flex items-center justify-center text-cyan-accent mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <div className='strengths'>
                  <h4 className="text-white font-bold text-sm mb-1">Team Player</h4>
                  <p className="text-slate-400 text-xs">Collaborates effectively</p>
                </div>
              </div>

              <div className="bg-card-navy border border-navy-light rounded-xl p-4 flex flex-col hover:border-cyan-accent/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-cyan-accent/10 flex items-center justify-center text-cyan-accent mb-3">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className='strengths'>
                  <h4 className="text-white font-bold text-sm mb-1">Strong technical communicator</h4>
                  <p className="text-slate-400 text-xs">Bridges technical challenges and business solutions through clear, cross-functional communication.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Tech Stack Grid */}
          <div className="lg:col-span-6 bg-card-navy border border-navy-light rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex justify-between">
              <span>My Tech Stack</span>
              <span className="text-xs text-slate-400 font-normal flex items-center">Core Technologies</span>
            </h3>

            <br />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {techStack.map((tech, idx) => (
                <div key={idx} className="tech-card group">
                  {tech.icon}
                  <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-accent transition-colors">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section id="experience" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-navy-light/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Work Experience Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent block mb-1">
                WORK EXPERIENCE
              </span>
              <h2 className="text-3xl font-bold text-white">
                Experience
              </h2>
            </div>

            {/* Timeline Experience Card */}
            <div className="bg-card-navy border border-navy-light rounded-2xl p-6 relative">
              <div className="flex items-start space-x-4">
                {/* Accent Vertical Bar */}
                <div className="w-1.5 bg-cyan-accent rounded-full h-24 flex-shrink-0 mt-1"></div>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold text-cyan-accent tracking-wide uppercase bg-cyan-accent/10 px-2.5 py-1 rounded-full inline-block mb-1">
                      16 Months
                    </span>
                    <h3 className="text-slate-300 font-medium text-xs">React & Node.js</h3>
                  </div>

                  <h4 className="text-xl font-bold text-white">
                    Full Stack Web Developer
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    Worked on building and maintaining web applications using React.js and Node.js. Developed RESTful APIs, implemented new features, and worked with databases like MongoDB.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Projects Column */}
          <div id="projects" className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent block mb-1">
                  MY WORK
                </span>
                <h2 className="text-3xl font-bold text-white">
                  Featured Projects
                </h2>
              </div>

              <a
                href="https://github.com/geniusHit"
                target="_blank" 
                rel="noreferrer"
                className="no-underline2 text-xs text-slate-400 hover:text-cyan-accent flex items-center space-x-1 font-medium transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {projects.map((project, idx) => (
                <div 
                  key={idx} 
                  className="bg-card-navy border border-navy-light rounded-xl overflow-hidden card-hover flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative h-32 overflow-hidden bg-slate-900">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 opacity-80 hover:opacity-100"
                      />
                      <div className="absolute top-2 right-2 bg-dark-navy/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-cyan-accent font-semibold border border-navy-light">
                        {project.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-2">
                      <h4 className="text-white font-bold text-sm tracking-tight hover:text-cyan-accent transition-colors cursor-pointer">
                        {project.title}
                      </h4>
                      <p className="text-slate-400 text-xs line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tags & Action Footer */}
                  <div className="p-4 pt-0">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="bg-cyan-accent/10 text-cyan-accent text-[10px] px-2 py-0.5 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2 pt-2 border-t border-navy-light/60">
                      <a 
                        href={project.demoUrl} 
                        className="no-underline2 text-xs font-semibold text-slate-300 hover:text-cyan-accent flex items-center space-x-1"
                        onClick={(e) => { e.preventDefault(); alert(`Opening live demo for ${project.title}`); }}
                      >
                        <span>Open</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {}
      <section id="contact" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-navy-light/40">
        <div className="bg-card-navy border border-navy-light rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Contact Heading & Text */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-accent block">
                LET'S WORK TOGETHER
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Get In Touch
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-md">
                I'm always open to discussing new opportunities, exciting projects, or just a friendly chat.
              </p>
            </div>

            {/* Contact Details & Social Links */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row lg:flex-row items-start sm:items-center justify-between gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-navy-light">
              
              {/* Contact Info Items */}
              <div className="space-y-3 text-sm">
                <div 
                  onClick={handleCopyEmail}
                  className="flex items-center space-x-3 text-slate-300 hover:text-cyan-accent cursor-pointer transition-colors group"
                >
                  {/* <Mail className="w-4 h-4 text-cyan-accent group-hover:scale-110 transition-transform" /> */}
                  <span className="font-medium">rohitthakur792002@gmail.com</span>
                  {copiedEmail && <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">Copied!</span>}
                </div>

                <div className="flex items-center space-x-3 text-slate-300">
                  {/* <Phone className="w-4 h-4 text-cyan-accent" /> */}
                  <span className="font-medium">+91 88474 82208</span>
                </div>

                <div className="flex items-center space-x-3 text-slate-300">
                  {/* <MapPin className="w-4 h-4 text-cyan-accent" /> */}
                  <span className="font-medium">Punjab, India</span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/rohit-thakur-370778240/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-card-inner border border-navy-light flex items-center justify-center text-slate-300 hover:text-cyan-accent hover:border-cyan-accent/60 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://github.com/geniusHit"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-card-inner border border-navy-light flex items-center justify-center text-slate-300 hover:text-cyan-accent hover:border-cyan-accent/60 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <FaGitAlt className="w-5 h-5" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}