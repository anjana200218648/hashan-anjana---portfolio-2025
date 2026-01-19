
import React from 'react';
import { Project, Experience, SkillCategory } from './types';

export const PROJECTS = {
  recent: [
    {
      id: 1,
      title: "Paradise Bolgoda",
      description: "Luxury waterfront property showcase with immersive virtual tours and booking system for premium residences in Sri Lanka.",
      link: "https://paradisebolgoda.com/",
      github: null,
      image: "https://images.unsplash.com/photo-1570129477492-45c003d96192?w=800&h=600&fit=crop",
      tech: ["PHP", "JavaScript", "Tailwind CSS", "Framer Motion", "MariaDB"],
      status: "Under Maintenance"
    },
    {
      id: 2,
      title: "SMS Enanayake & Sons",
      description: "Corporate website for a leading business conglomerate with multi-service portfolio and client management systems.",
      link: "https://smsenanayakeandsons.com/",
      github: null,
      image: "/images/sms-enanayake.png",
      tech: ["PHP", "JavaScript", "Tailwind CSS", "GSAP", "PostgreSQL"],
      status: "Live"
    },
    {
      id: 3,
      title: "Bon Voyage Trails",
      description: "Travel curation platform with personalized itinerary planning, destination discovery, and booking management.",
      link: "https://bon-voyage-trails-curated-main.vercel.app/",
      github: null,
      image: "/images/bon-voyage.png",
      tech: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
      status: "Developing"
    }
  ],
  collaborative: [
    {
      id: 4,
      title: "Gurugedara.lk",
      description: "Educational platform connecting students with tutors across Sri Lanka with scheduling and payment integration.",
      link: "https://www.gurugedara.lk/",
      github: null,
      image: "https://images.unsplash.com/photo-1522202176988-bf30c06b0055?w=800&h=600&fit=crop",
      tech: ["PHP", "JavaScript", "Tailwind", "Moodle", "MySQL"],
      role: "Web Developer"
    },
    {
      id: 5,
      title: "Digigo.lk",
      description: "Digital solutions platform offering web development, marketing, and business digitalization services.",
      link: "https://digigo.lk/en/",
      github: null,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      tech: ["React", "Bootstrap", "PHP", "MySQL", "REST API"],
      role: "Full Stack Developer"
    },
    {
      id: 6,
      title: "Hithawathi.lk",
      description: "Financial services platform providing loan management, financial advisory, and customer support solutions.",
      link: "https://www.hithawathi.lk/",
      github: null,
      image: "https://images.unsplash.com/photo-1460925895917-adf4e7f1dd5d?w=800&h=600&fit=crop",
      tech: ["WordPress", "PHP", "MySQL", "Tailwind CSS", "AWS"],
      role: "Web Developer"
    },
    {
      id: 7,
      title: "Sarvodaya Finance",
      description: "Corporate website for a leading financial institution with loan calculators, branch locator, and services portal.",
      link: "https://www.sarvodayafinance.lk/en",
      github: null,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["JavaScript", "Vue.js", "jQuery", "Custom CSS"],
      role: "Web Developer"
    },
    {
      id: 8,
      title: "Lion Royal Tourism",
      description: "Tourism agency website with booking system, package customization, and multi-language support.",
      link: "https://lionroyaltourisme.com/",
      github: null,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP", "Bootstrap"],
      role: "Web Developer"
    }
  ],
  softwares: [
    {
      id: 9,
      title: "Real Estate Price Tracker",
      description: "Real estate price tracking system with property listings, price history monitoring, trend analysis, and interactive dashboard.",
      link: null,
      github: "https://github.com/anjana200218648/real-estate-ai-1.git",
      image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop",
      tech: ["Python", "ML", "Rest-api", "HTML"],
      category: "Web Application"
    },
    {
      id: 10,
      title: "Background Removal Tool",
      description: "Background removal tool with AI-based image processing, automatic subject detection, and high-quality transparent output.",
      link: null,
      github: "https://github.com/anjana200218648/background-remover.git",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["Python", "OpenCV", "Tkinter", "PIL"],
      category: "Desktop Application"
    },
    {
      id: 11,
      title: "3D Tour site",
      description: "Interactive 3D virtual tour website with immersive navigation, smooth transitions, and real-time environment rendering.",
      link: null,
      github: "https://github.com/anjana200218648/3d-tour-site.git",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tech: ["three.js", "JavaScript", "WebSocket"],
      category: "Web Application"
    },
    {
      id: 12,
      title: "API Checker",
      description: "Middleware platform for seamless API integration with monitoring, logging, and analytics features.",
      link: null,
      github: null,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      tech: ["Python", "FastAPI", "Redis", "Docker"],
      category: "Backend System"
    }
  ]
};

export const RESEARCH_PROJECT = {
  title: 'Addictive Content Analysis (IMPACT-Component)',
  subtitle: 'Image Processing & ML based system',
  problem: 'Difficulty in rapid identification and classification of complex visual patterns in industrial environments.',
  solution: 'Developed a proprietary ML model integrated with high-speed image processing pipelines to automate classification with 98% accuracy.',
  tech: ['Python', 'TensorFlow', 'OpenCV', 'React'],
  impact: 'Reduced human error by 60% and increased throughput by 4x in tested scenarios.'
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Software Developer & IT Officer',
    company: 'Sarvodaya Development Foundation',
    period: '2025 - Present',
    description: [
      'Provided daily IT support and technical assistance while contributing to large-scale software and web development projects.',
      'Supported project management activities using project management tools to track tasks, timelines, and progress.',
      'Supporting project management through data analysis and technical reporting.'
    ]
  },
  {
    id: 'exp2',
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2024 - Present',
    description: [
      'Delivered 15+ successful commercial projects globally.',
      'Specialized in custom WordPress themes and high-performance UI components.',
      'Collaborated with designers to bridge the gap between Figma and production code.'
    ]
  },
  {
    id: 'exp3',
    role: 'Web Developer & IT Officer ',
    company: 'Dream Enlight',
    period: '2024 - 2025',
    description: [
      'Developed, tested, and deployed websites, including website hosting and production-level maintenance.',
      'Built and maintained websites using Content Management Systems (CMS) and contributed to software development tasks.',
      'Worked efficiently under defined timelines, ensuring timely delivery of assigned projects.'
    ]
  },
  {
    id: 'exp4',
    role: 'Intern Software Developer',
    company: 'LK Domain Registry',
    period: '2024',
    description: [
      'Worked on the full lifecycle of a live .lk domain website, from planning to deployment, applying real-world web development practices.',
      'Maintained and updated production websites to ensure performance, functionality, and reliability.',
      'Collaborated with team members and communicated with clients to gather requirements and deliver effective solutions.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 80 }
    ]
  },
  {
    title: 'Backend & CMS',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'WordPress / PHP', level: 90 },
      { name: 'MySQL / PostgreSQL', level: 80 },
      { name: 'Python', level: 80 },
      { name: 'Moodle', level: 70 }
    ]
  },
  {
    title: 'Specialized',
    skills: [
      { name: 'UI/UX Design', level: 85 },
      { name: 'Git', level: 85 },
      { name: 'Image Processing', level: 70 },
      { name: 'Linux', level: 70 },
      { name: 'Machine Learning (Basics)', level: 65 },
      { name: 'Artificial Intelligence', level: 40 },
    ]
  }
];
