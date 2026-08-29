export const portfolioData = {
  personal: {
    name: "Zaheer Abbas",
    title: "Full Stack Developer & Mobile App Developer",
    shortDescription: "Full Stack Developer focused on building scalable web applications, mobile applications, and real-world software solutions.",
    longDescription: "I build modern web and mobile applications with a focus on clean architecture, scalable backend systems, intuitive user experiences, and solving real-world business problems.",
    email: "zabbas092002@gmail.com", // Placeholder
    location: "Pakistan",
    github: "https://github.com/zaheerabbasdev", // Placeholder
    linkedin: "https://www.linkedin.com/in/zaheer-abbas-890a94240/", // Placeholder
    resume: "/Zaheer_Abbas_Resume.pdf",
    status: "Open to opportunities"
  },

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "JavaScript", level: "Advanced", icon: "js" },
        { name: "TypeScript", level: "Intermediate", icon: "ts" },
        { name: "React", level: "Advanced", icon: "react" },
        { name: "Next.js", level: "Advanced", icon: "nextjs" },
        { name: "HTML", level: "Advanced", icon: "html5" },
        { name: "CSS", level: "Advanced", icon: "css3-alt" },
        { name: "Tailwind CSS", level: "Advanced", icon: "css3" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: "Advanced", icon: "node-js" },
        { name: "Express.js", level: "Advanced", icon: "node" },
        { name: "REST APIs", level: "Advanced", icon: "server" },
        { name: "Authentication", level: "Advanced", icon: "lock" },
        { name: "JWT", level: "Advanced", icon: "key" }
      ]
    },
    {
      category: "Mobile",
      items: [
        { name: "Flutter", level: "Advanced", icon: "mobile-screen" },
        { name: "Dart", level: "Advanced", icon: "code" }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", level: "Advanced", icon: "database" },
        { name: "PostgreSQL", level: "Advanced", icon: "database" },
        { name: "MongoDB", level: "Advanced", icon: "envira" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", level: "Advanced", icon: "git-alt" },
        { name: "GitHub", level: "Advanced", icon: "github" },
        { name: "VS Code", level: "Advanced", icon: "code" },
        { name: "Postman", level: "Advanced", icon: "paper-plane" },
        { name: "Docker", level: "Intermediate", icon: "docker" }
      ]
    },
    {
      category: "Cloud / Deployment",
      items: [
        { name: "AWS", level: "Intermediate", icon: "aws" },
        { name: "Vercel", level: "Advanced", icon: "cloud" },
        { name: "Cloudinary", level: "Advanced", icon: "image" }
      ]
    }
  ],

  projects: [
    {
      id: "kaarkun",
      title: "Kaarkun",
      description: "AI-powered multi-platform service marketplace.",
      longDescription: "A multi-platform service marketplace designed to connect customers with skilled service providers. It leverages modern web and mobile frameworks to deliver an optimal experience for both users and service providers, integrating powerful backend features like authentication, secure transactions, and AI-powered recommendations.",
      category: "Full Stack / Mobile",
      technologies: ["Flutter", "Node.js", "MySQL", "REST API"],
      image: "/Kaarkun.png",
      github: "",
      live: "",
      featured: true,
      year: 2026,
      status: "Completed",
      problem: "Finding reliable skilled service providers quickly is challenging, and independent service providers struggle to find local clients.",
      solution: "Kaarkun bridges this gap with an intuitive platform matching local demand with verified skills, powered by scalable cloud architecture.",
      features: [
        "User & Provider Applications",
        "Real-time Service Tracking",
        "Secure Payment Integration",
        "AI-based Provider Recommendations"
      ]
    },
    {
      id: "zubair-tailors",
      title: "Zubair Tailors Management System",
      description: "Offline-first management system designed for tailoring businesses.",
      longDescription: "A mobile management application for managing customers, orders, measurements and tailoring operations. Built to operate reliably in low-connectivity environments with an offline-first architecture.",
      category: "Mobile Application",
      technologies: ["Flutter", "Dart", "Local Database"],
      image: "/zubairtalior.png",
      github: "",
      live: "",
      featured: true,
      year: 2026,
      status: "Completed",
      problem: "Traditional tailors rely on fragile paper-based systems for measurements and orders, leading to lost data and inefficient operations.",
      solution: "A robust mobile application that digitalizes the entire tailoring workflow while remaining functional offline.",
      features: [
        "Customer & Measurement Profiles",
        "Order Lifecycle Management",
        "Offline-First Data Sync",
        "Invoice Generation"
      ]
    },
    {
      id: "truck-management",
      title: "Truck Fleet Management System",
      description: "Management platform for trucking company operations.",
      longDescription: "A business management system for managing employees, trucks, trips, fuel, salaries, expenses, maintenance, customers, invoices, fines and reports.",
      category: "Full Stack Web",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL", "Prisma", "Cloudinary"],
      image: "/truck-management.png",
      github: "",
      live: "",
      featured: true,
      year: 2026,
      status: "In Development",
      problem: "Fleet management involves tracking complex variables including fuel, maintenance, and driver salaries, often handled via disparate spreadsheets.",
      solution: "A unified, role-based dashboard providing real-time insights and centralized control over all fleet operations.",
      features: [
        "Trip & Fuel Tracking",
        "Automated Salary & Expense Calculations",
        "Maintenance Scheduling & Alerts",
        "Comprehensive Analytics Dashboard"
      ]
    },
    {
      id: "mobile-shop-pos",
      title: "Mobile Shop POS",
      description: "Point-of-sale system designed for mobile phone shops.",
      longDescription: "A scalable POS system designed to manage products, sales, customers, inventory and business operations.",
      category: "Full Stack Web",
      technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Cloudinary"],
      image: "/mobile-shop-pos.png",
      github: "",
      live: "",
      featured: true,
      year: 2026,
      status: "In Development",
      problem: "Mobile shops need specialized inventory management to track unique identifiers like IMEIs alongside standard POS features.",
      solution: "A specialized POS system capable of granular inventory tracking, seamless checkout, and detailed business reporting.",
      features: [
        "IMEI & Serial Number Tracking",
        "Inventory Alerts",
        "Sales & Profit Reporting",
        "Customer Purchase History"
      ]
    }
  ],

  experience: [
    {
      id: 1,
      company: "Self-Employed / Freelancer",
      position: "Full Stack & Mobile App Developer",
      location: "Remote",
      type: "Freelance",
      startDate: "Jan 2024",
      endDate: "Present",
      current: true,
      description: "Designing, developing, and deploying full-stack web platforms and cross-platform mobile applications for diverse clients. Managing end-to-end project lifecycles from architecture to production deployment.",
      technologies: ["Next.js", "React", "Flutter", "Node.js", "MongoDB", "MySQL"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "",
      location: "Pakistan",
      startDate: "2022",
      endDate: "2026",
      description: "Focusing on software engineering, data structures, algorithms, and web development."
    }
  ],

  services: [
    {
      id: "full-stack",
      title: "Full Stack Web Development",
      description: "Building responsive, performant, and scalable web applications from frontend interfaces to backend databases.",
      icon: "laptop-code"
    },
    {
      id: "mobile-app",
      title: "Mobile App Development",
      description: "Creating cross-platform mobile applications with Flutter for seamless native-like experiences.",
      icon: "mobile-screen"
    },
    {
      id: "rest-api",
      title: "REST API Development",
      description: "Designing and developing robust, secure APIs to power web and mobile platforms.",
      icon: "server"
    },
    {
      id: "database",
      title: "Database Design",
      description: "Architecting efficient and scalable database schemas using SQL and NoSQL solutions.",
      icon: "database"
    },
    {
      id: "business-systems",
      title: "Business Management Systems",
      description: "Developing custom enterprise solutions to streamline complex business operations and workflows.",
      icon: "briefcase"
    },
    {
      id: "pos",
      title: "POS Systems",
      description: "Building specialized Point of Sale systems with inventory tracking and comprehensive reporting.",
      icon: "cash-register"
    },
    {
      id: "cloud",
      title: "Deployment & Cloud Integration",
      description: "Deploying applications securely and scaling them using modern cloud platforms like AWS and Vercel.",
      icon: "cloud"
    },
    {
      id: "ai-solutions",
      title: "AI-powered Solutions",
      description: "Integrating intelligent artificial intelligence capabilities and recommendations into web and mobile platforms.",
      icon: "robot"
    },
    {
      id: "google-ads",
      title: "Google Ads & Digital Solutions",
      description: "Driving growth through targeted Google Ads campaigns and comprehensive digital marketing strategies.",
      icon: "bullhorn"
    }
  ],

  process: [
    {
      id: 1,
      step: "01",
      title: "Understand",
      description: "Understand the business problem and requirements."
    },
    {
      id: 2,
      step: "02",
      title: "Plan",
      description: "Design architecture, database and application flow."
    },
    {
      id: 3,
      step: "03",
      title: "Build",
      description: "Develop the frontend, backend and integrations."
    },
    {
      id: 4,
      step: "04",
      title: "Test",
      description: "Test functionality, performance and edge cases."
    },
    {
      id: 5,
      step: "05",
      title: "Deploy",
      description: "Deploy the application and configure production infrastructure."
    },
    {
      id: 6,
      step: "06",
      title: "Improve",
      description: "Monitor, maintain and continuously improve the product."
    }
  ]
};
