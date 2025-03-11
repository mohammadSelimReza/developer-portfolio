import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  edusoftFront,
  edusoftApi,
  vaccineHubFront,
  vaccineHubApi,
  timekeeper,
  timekeeper2
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "EduSoft (A LMS Project)",
    feature1: "Student and instructor management",
    feature2: "Course creation and assignment management",
    feature3: "Real-time course updates",
    tags: [
      {
        name: "Django",
        color: "text-blue-500",
      },
      {
        name: "PostgreSQL",
        color: "text-green-500",
      },
      {
        name: "DRF",
        color: "text-red-500",
      },
      {
        name: "Swagger",
        color: "text-cyan-500",
      },
    ],
    image: edusoftFront,
    image2: edusoftApi,
    link: "https://edusoft-lms.netlify.app",
    link2:"https://learning-management-system-backend-pi.vercel.app/",
    btn: "View Site",
    btn2: "View API",
  },
  {
    name: "VaccineHub (A VMS Project)",
    feature1: "Manage vaccination data",
    feature2: "Admin panel for data updates",
    feature3: "Vaccine availability tracking",
    tags: [
      {
        name: "Django",
        color: "text-blue-500",
      },
      {
        name: "REST API",
        color: "text-yellow-500",
      },
      {
        name: "PostgreSQL",
        color: "text-green-500",
      },
      {
        name: "Swagger",
        color: "text-cyan-500",
      },
    ],
    image: vaccineHubApi,
    image2: vaccineHubFront,
    link2:"https://vaccine-hub.netlify.app/",
    link:"https://vaccinehub.vercel.app/",
    btn: "View API",
    btn2: "View Site",
  },
  {
    name: "TimeKeeper",
    feature1: "User login and registration",
    feature2: "Upload photos from Flickr URL",
    feature3: "Social media features like like, comment, and delete",
    tags: [
      {
        name: "Django Template",
        color: "text-indigo-500",
      },
      {
        name: "Data Scraping",
        color: "text-purple-500",
      },
      {
        name: "HTMX",
        color: "text-orange-500",
      },
      {
        name: "CSS",
        color: "text-pink-500",
      },
    ],
    image: timekeeper,
    image2:timekeeper2,
    link:"https://time-keeper-gfj21w38h-mohammadselimrezas-projects.vercel.app",
    link2:"https://time-keeper-gfj21w38h-mohammadselimrezas-projects.vercel.app",
    btn: "View Site",
    btn2: "View Site",
  },
];

export const techStack = [
  { name: "Python", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "PostgreSQL", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" },
  { name: "Git", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" },
  { name: "API", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-plain.svg" }, // you can add a custom API image or use a relevant image
  { name: "JWT", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" }, // Representing JWT with a custom logo or JSON
  // { name: "Redis", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  // { name: "Celery", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/celery/celery-original.svg" },
  { name: "Linux", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }, // You can add this for your command-line skills
  { name: "Heroku", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" },
  { name: "Firebase", link: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
  { name: "Docker", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" },
]
export { services, technologies, experiences, testimonials, projects};
