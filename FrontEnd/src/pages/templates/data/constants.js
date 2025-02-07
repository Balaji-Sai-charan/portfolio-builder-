const user = JSON.parse(localStorage.getItem("sheyresume-user"));

export const Bio = {
  name: `${user.firstName} ${user.lastName}`,
  roles: user.roles ? user.roles.split(", ").map(role => role.trim()) : [],
  description: user.carrierObjective || "",
  github: user.github || "",
  resume: user.resume || "",
  linkedin: user.linkedin || "",
  twitter: user.twitter || "",
  insta: user.insta || "",
  facebook: user.facebook || "",
};
/*
export const skills = [
  {
    title: "Technical Expertise",
    skills: [
      {
        name: "Algorithms",
        image:
          "https://i.postimg.cc/Vdthnr7B/connection.png' border='0' alt='connection'",
      },
      {
        name: "Data Structures",
        image:
          "https://i.postimg.cc/2VPV9J7N/data-structures.png' border='0' alt='data-structures'",
      },
      {
        name: "Object Oriented Programming",
        image:
          "https://cdn4.iconfinder.com/data/icons/technology-83/1000/object_programming_development_oriented_developer_object-oriented_programming_software-512.png",
      },
      {
        name: "Competitive Programming",
        image:
          "https://w7.pngwing.com/pngs/707/85/png-transparent-computer-programming-computer-icons-programmer-software-development-computer-code-angle-text-rectangle-thumbnail.png",
      },
      {
        name: "Web Development",
        image: "https://cdn-icons-png.flaticon.com/512/9414/9414296.png",
      },
      
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Primary- C++",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png",
      },
      {
        name: "Secondary- Python",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
      },
      {
        name: "Secondary- Java",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
      },
      {
        name: "Secondary- JavaScript",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ4qe-TiNdb7kONl0a1C3a1R3H9TPWKSJeGg&s",
      },
            
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Three Js",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/1024px-Three.js_Icon.svg.png",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://www.luisllamas.es/img/tailwind-icon.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
      },
      {
        name: "JWT Tokens",
        image:
          "https://ik.imagekit.io/ably/ghost/prod/2019/05/Screenshot-2019-05-14-at-13.53.46.png?tr=w-1728,q-50",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      }
    ],
  },
  {
    title: "Data Science & Analysis",
    skills: [
      {
        name: "M S EXCEL",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png",
      },
      {
        name: "Tableau",
        image:
          "https://bsu-wpe-blogs.s3.amazonaws.com/wp-content/uploads/sites/38/2023/02/24133338/Tableau-Logo-1024x576.png",
      },
      {
        name: "microsoft sql",
        image:
          "https://cdn.prod.website-files.com/601064f495f4b4967f921aa9/632b60f8c1aa184a0e5766d9_202209-ms-sql-icon-3x.png",
      },
      {
        name: "Numpy",
        image:
          "https://logosandtypes.com/wp-content/uploads/2024/02/NumPy.png",
      },
      {
        name: "Pandas",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/449px-Pandas_mark.svg.png",
      },
      {
        name: "Matplotlib",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.svg.png",
      },
      {
        name: "Seaborn",
        image:
          "https://cdn.worldvectorlogo.com/logos/seaborn-1.svg",
      },
      {
        name: "Jupyter",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXrpPO3Izgbgjv8ytAxXeKIuWb9pQM74uPw&s",
      },
            
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "MS Office",
        image:
          "https://cdn-icons-png.flaticon.com/512/732/732222.png",
      },
      {
        name: "Adobe XD",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhPftuKPEqskRCfpWQeOQlBAI9ZgxXfOvr3w&s",
      },
      {
        name: "Figma",
        image:
          "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
      },
      {
        name: "Blender",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/939px-Blender_logo_no_text.svg.png",
      },
      {
        name: "Adobe editing tools",
        image:
          "https://i.pinimg.com/736x/56/3a/a2/563aa2189ef92dc242a7db5b91078804.jpg",
      },
      {
        name: "Solidworks",
        image:
          "https://e7.pngegg.com/pngimages/558/632/png-clipart-computer-icons-solidworks-e-miscellaneous-text-thumbnail.png",
      },
      {
        name: "Fusion 360",
        image:
          "https://seeklogo.com/images/A/autodesk-fusion-360-logo-7F72A76397-seeklogo.com.png",
      },
      {
        name: "Autocad",
        image:
          "https://seeklogo.com/images/A/autocad-logo-69326D7728-seeklogo.com.png",
      },
    ],
  },
];
*/

export const skills = [
  {
    title: "Technical Expertise",
    skills: user.skills
      ? user.skills.map((skill) => ({
          name: skill.technology, // Extracting technology name
          rating: `${skill.rating}/10`, // Formatting rating as "X/10"
          image: `https://api.dicebear.com/7.x/icons/svg?seed=${encodeURIComponent(skill.technology)}`,
        }))
      : [],
  },
];

/*

export const experiences = [
  {
    id: 0,
    img: "https://codeclause.com/assets/img/Main%20Logo.png",
    role: "Web Development Intern",
    company: "Code Clause",
    date: "Sept 2024 - Oct 2024",
    desc: "Developed a movie ticket booking application using ReactJS, ExpressJS, and the TMDB API, combining both frontend and backend functionalities for an interactive and seamless user experience. Integrated the TMDB API to fetch real-time movie data, including details, ratings, reviews, and trailers. Enhanced the user interface with dynamic and responsive features, utilizing React to improve user engagement. Implemented efficient state management and routing for smooth navigation across the application.",
    skills: [
      "ReactJS",
      "MongoDB",
      "NodeJs",
      "Express Js",
      "HTML",
      "CSS",
      "JavaScript",
      "TMDB API",
      "JWT Tokens",
    ],
    //doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Screenshot%20from%202024-01-25%2022-38-31.png?alt=media&token=2785903f-1a4e-41f5-afd2-6adcfe56d058",
  },
  {
    id: 1,
    img: "https://images.yourstory.com/cs/images/companies/62da27820aed-YBiLogo-1612288841628.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75",
    role: "Business Analyst Intern",
    company: "YBI Foundation",
    date: "aug 2024 - sept 2024",
    desc: "At YBI Foundation, I analyzed product performance data for a realtime store across sectors like laptops, mobiles, TVs, grinders, and refrigerators. I identified key trends in warranty claims, repairs, and exchanges, pinpointing high-loss products. Based on these insights, I recommended strategies such as adjusting warranty policies, renegotiating supplier contracts, optimizing stock management, and promoting more reliable brands. This project enhanced my data analysis skills and demonstrated the impact of data-driven decision-making on improving business operations.",
    skills: [
      "SQL",
      "MS EXCEL",
      "TABLEAU",
    ],
    //doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/1696514649120.jpeg?alt=media&token=e7f6757b-edfa-4138-a692-d6709eeef3e2",
  },
  {
    id: 2,
    img: "https://play-lh.googleusercontent.com/1sTzHHLUTeM6G3BQXF6IDQAne4JZkrEdj_vC3fNO_CCURe-O3UBQucjdg6lSXNsFoA",
    role: "Strategic Growth And Engagement Intern",
    company: "Mudrex",
    date: "May 2023 - Nov 2023",
    desc: "• At Mudrex, I began as part of the PR and Collaboration team for the 100th edition of their newsletter, where I secured partnerships with 100 Web3 protocols, amplifying our reach through cross-promotion. After a successful stint, I transitioned to Social Media Manager, increasing user engagement by 25% with creative content strategies. Later, I joined the SEO team, improving blog visibility by 12% through interlinking strategies. This experience culminated in a pre-placement offer, but I realized my passion lies in data analysis and visualization, prompting my pursuit of opportunities in that field.",
    skills: [
      "Excel",
      "SEO",
      "Social media algorithms",
      "Content Creation",
    ],
    //doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/WhatsApp%20Image%202023-05-05%20at%2012.07.39%20AM.jpeg?alt=media&token=9f0e1648-568b-422d-bd0b-1f125f722245",
  },
];
*/



export const experiences = user.experience
  ? user.experience.map((exp, index) => ({
      id: index,
      img: "https://via.placeholder.com/150", // Placeholder image, can be replaced with company logos dynamically
      role: exp.role || "Role Not Specified",
      company: exp.company,
      date: exp.range, // Using year range from input
      place: exp.place,
      desc: exp.description.length > 300 
        ? exp.description.substring(0, 300) + "..." // Truncate long descriptions
        : exp.description,
    }))
  : [];

/*
export const education = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/en/8/8e/IIT_%28ISM%29_Dhanbad_Logo.svg",
    school: "Indian Institute of Technology (Indian School of Mines), Dhanbad",
    date: "Dec 2021 - May 2025",
    grade: "7.19 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Mechanical Engineering at Indian Institute of Technology (Indian School of Mines), Dhanbad. I have completed 7 semesters and have a CGPA of 7.19. I am also a head of Operations and Sponsorship team of the club Mechismu at ISM, where I am towards administative skills and communication skills learning and working on exciting projects with a team of talented People.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4f3szxe4WVLRtZ6kEPWvnnMs-gEfAm0Lmg&s",
    school: "Bhashyam Junior College, Guntur",
    date: "Jun 2019 - Apr 2021",
    grade: "957/1000 marks",
    desc: "I completed my class 12 high school education at Bhashyam College, Guntur, where I studied Mathematics, Physics, Chemistry.",
    degree: "XII- Intermediate, Mathematics, Physics, Chemistry",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4f3szxe4WVLRtZ6kEPWvnnMs-gEfAm0Lmg&s",
    school: "Bhashyam School, Rajahmundry",
    date: "Apr 2018 - Apr 2019",
    grade: "10.00 CGPA",
    desc: "I completed my class 10 education at Bhashyam School, Rajahmundry.",
    degree: "X- Secondary School",
  },
];
*/


export const education = user.education
  ? user.education.map((edu, index) => ({
      id: index,
      img: "https://upload.wikimedia.org/wikipedia/en/8/8e/IIT_%28ISM%29_Dhanbad_Logo.svg",
      school: edu.institution || "Institution Not Specified",
      date: edu.range || "Date Not Available",
      grade: edu.percentage || "Not Provided",
      desc: edu.description && edu.description.length > 250
        ? edu.description.substring(0, 250) + "..."
        : edu.description || "No description available.",
      degree: edu.qualification || "Degree Not Specified",
    }))
  : [];


  /*
export const projects = [
  {
    id: 1,
    title: "Learning manament system",
    description:
      "A comprehensive Learning Management System (LMS) built using the MERN stack. This application provides functionality similar to popular platforms like Udemy and Coursera, enabling users to manage, purchase, and access online courses.",
    image:
      "https://i.ibb.co/Jn4HLJk/lms.png",
    tags: [
      "React Js",
      "Three Js",
      "Node Js",
      "Express Js",
      "Redux",
      "React Flow",
      "MongoDB",
    ],
    category: "web app",
    github: "https://github.com/Balaji-Sai-charan/LMS",
    webapp: "https://github.com/Balaji-Sai-charan/LMS",
  },
  {
    id: 2,
    title: "My 3-d Portfolio",
    description:
      "A visually stunning 3D portfolio website showcasing projects, skills, education, and experience. Built to create an engaging and interactive platform for personal branding.",
    image:
      "https://i.ibb.co/8rG6Q82/image.png",
    tags: [
      "React Js",
      "Three Js",
      "Node Js",
      "Express Js",
      "Redux",
      "React Flow",
    ],
    category: "web app",
    github: "https://github.com/Balaji-Sai-charan/My-3d-portfolio",
    webapp: "https://balajisaicharanportfolio.netlify.app/",
  },
  {
    id: 3,
    title: "Movie Ticket Booking",
    description:
      "This project is a comprehensive Movie Ticket Booking System with a separate frontend and backend designed to offer an intuitive and interactive booking experience for users.",
    image:
      "https://i.ibb.co/qkXzLDb/image.png",
    tags: [
      "React Js",
      "Three Js",
      "Node Js",
      "Express Js",
      "TMDB API",
      "JWT TOKENS",
    ],
    category: "web app",
    github: "https://github.com/Balaji-Sai-charan/frontend-of-ticketbooking",
    webapp: "https://movie-booking-online.netlify.app/",
  },
  {
    id: 4,
    title: "My 2d Portfolio",
    description:
      "This project is a personal portfolio website built to showcase skills, projects, and achievements. It is a full-stack implementation with a React.js frontend and a Node.js + Express backend, ensuring a dynamic and scalable platform for users to explore the portfolio content.",
    image:
      "https://i.ibb.co/WKCvMVC/image.png",
    tags: [
      "React Js",
      "Three Js",
      "Node Js",
      "Express Js",
      "MongoDB",
    ],
    category: "web app",
    github: "https://github.com/Balaji-Sai-charan/frontend-of-portfolio",
    webapp: "https://frontend-of-portfolio.vercel.app/",
  },
  {
    id: 5,
    title: "Interactive Data Analytics Dashboard Development in Bike Stores",
    description:
      "Engineered end-to-end data analytics solutions, transforming raw data into actionable insights through Microsoft SQL Server, MS Excel dashboards, and executive Tableau visualizations for strategic decision-making.",
    image:
      "https://i.ibb.co/PYS7g2C/image.png",
    tags: ["Microsoft SQL Server", " MS Excel", "Tableau"],
    category: "Data Analysis and Visualization",
    github: "https://github.com/Balaji-Sai-charan/BikeStores-Dashboard",
  },
  {
    id: 6,
    title: "Exploratory Data Analysis on Retail Data",
    description:
      "Conducted exploratory analysis on an online retail dataset, including data cleaning, visualization, feature engineering, and deriving sales trends to support business decision-making.",
    image:
      "https://i.ibb.co/5j8LgzX/image.png",
    tags: ["Numpy", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    category: "Data Analysis and Visualization",
    github: "https://github.com/Balaji-Sai-charan/Exploratory-Data-Analysis-on-Retail-Data",
  },
  {
    id: 7,
    title: " Procurement Strategy for PI-EV National Electric Vehicle Competition (3rd Place, National Ranking)",
    description:
      "Developed a comprehensive procurement strategy for Team Mechismu, securing a 3rd place national ranking in the PI-EV event by optimizing cost-effective sourcing, inventory management, and logistics for enhanced team performance.",
    image:
      "https://i.ibb.co/dMNJMj2/image.png",
    tags: ["MS Excel", "Tableau", "Slack"],
    category: "Others",
    github: "https://github.com/Balaji-Sai-charan/procurement-strategy",
  },
  {
    id: 7,
    title: "Exploria",
    description:
      "A fully mobile responsive and captivating online tour booking landing page that brings the joy of travel closer to users.",
    image:
      "https://i.ibb.co/zHwSP8z/image.png",
    tags: [
      "Javascript",
      "Bootsrap",
      "Media queries",
      "CSS",
      "HTML",
    ],
    category: "web app",
    github: "https://github.com/Balaji-Sai-charan/exploria",
    webapp: "https://balaji-sai-charan.github.io/exploria/",
  },
  {
    id: 8,
    title: "To-Do-List",
    description:
      "A simple and intuitive to-do app that allows users to create, manage, and prioritize tasks for enhanced productivity and organization.",
    image:
      "https://i.ibb.co/BCwCsnz/image.png",
    tags: [
      "Javascript",
      "Bootsrap",
      "Media queries",
      "CSS",
      "HTML",
    ],
    category: "web app",
    github: "https://github.com/Balaji-Sai-charan/to-do-list",
    webapp: "https://balaji-sai-charan.github.io/to-do-list/",
  },
  {
    id: 9,
    title: "Snake Game",
    description:
      "Console Snake Game in C++ This project is a classic implementation of the Snake game, built using C++ and designed to run in the console. The game is structured to simulate the movement of a snake that grows in length as it eats food and navigates around the screen. The objective is to achieve the highest score by consuming as much food as possible without colliding with the screen edges or the snake's own body.",
    image:
      "https://i.ibb.co/ByZV68x/image.png",
    tags: [
      "C++",
    ],
    category: "Others",
    github: "https://github.com/Balaji-Sai-charan/snake-game",
    //webapp: "https://balaji-sai-charan.github.io/to-do-list/",
  },
  {
    id: 8,
    title: "Tic-Tac-Toe",
    description:
      "A classic Tic-Tac-Toe game allowing two players to compete in a grid-based challenge with interactive features and win detection.",
    image:
      "https://i.ibb.co/fQ2M7bC/image.png",
    tags: [
      "Javascript",
      "Bootsrap",
      "Media queries",
      "CSS",
      "HTML",
    ],
    category: "web app",
    github: "https://github.com/Balaji-Sai-charan/tic-tac-toe",
    webapp: "https://balaji-sai-charan.github.io/tic-tac-toe/",
  },
];
*/

export const projects = user.projects
  ? user.projects.map((project, index) => ({
      id: index,
      title: project.title || "Untitled Project",
      description:
        project.description && project.description.length > 250
          ? project.description.substring(0, 250) + "..."
          : project.description || "No description available.",
      image: project.image || "https://via.placeholder.com/150",
      tags: project.tags || [],
      category: project.category || "Others",
      github: project.github || "",
      webapp: project.live || "",
      range: project.range || "Year Not Specified",
    }))
  : [];


