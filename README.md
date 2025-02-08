# 🚀 Portfolio Builder (MERN Stack)

A dynamic **Portfolio Builder** web application where users can enter their details, generate a professional portfolio, and share it via a unique link. Built with the **MERN stack (MongoDB, Express.js, React.js, Node.js)** and deployed on **Netlify & Render**.

---

## 📂 Project Structure
└── balaji-sai-charan-portfolio-builder-/
├── README.md
├── FrontEnd/
│ ├── README.md
│ ├── package-lock.json
│ ├── package.json
│ ├── webpack.config.js
│ ├── .gitignore
│ ├── public/
│ │ ├── index.html
│ │ ├── manifest.json
│ │ ├── robots.txt
│ │ └── planet/
│ │ ├── license.txt
│ │ ├── scene.bin
│ │ ├── scene.gltf
│ │ └── textures/
│ ├── src/
│ │ ├── App.css
│ │ ├── App.js
│ │ ├── App.test.js
│ │ ├── Data.js
│ │ ├── index.css
│ │ ├── index.js
│ │ ├── reportWebVitals.js
│ │ ├── setupTests.js
│ │ ├── components/
│ │ │ ├── DefaultLayout.js
│ │ │ ├── ExperienceProjects.js
│ │ │ ├── PersonalInfo.js
│ │ │ └── SkillsEducation.js
│ │ ├── pages/
│ │ │ ├── Home.js
│ │ │ ├── Login.js
│ │ │ ├── Profile.js
│ │ │ ├── Register.js
│ │ │ ├── Templateshome.js
│ │ │ └── templates/
│ │ │ ├── Template1.js
│ │ │ ├── Template2.js
│ │ │ ├── Template3.js
│ │ │ ├── Templates.js
│ │ │ ├── index.css
│ │ │ ├── index.js
│ │ │ ├── components/
│ │ │ │ ├── Navbar.jsx
│ │ │ │ ├── HeroBgAnimation/
│ │ │ │ │ ├── HeroBgAnimationStyle.js
│ │ │ │ │ └── index.js
│ │ │ │ ├── canvas/
│ │ │ │ │ ├── Earth.jsx
│ │ │ │ │ └── Stars.jsx
│ │ │ │ ├── cards/
│ │ │ │ │ ├── EducationCard.jsx
│ │ │ │ │ ├── ExperienceCard.jsx
│ │ │ │ │ └── ProjectCard.jsx
│ │ │ │ └── sections/
│ │ │ │ ├── Contact.jsx
│ │ │ │ ├── Education.jsx
│ │ │ │ ├── Experience.jsx
│ │ │ │ ├── Footer.jsx
│ │ │ │ ├── Hero.jsx
│ │ │ │ ├── Projects.jsx
│ │ │ │ └── Skills.jsx
│ │ │ ├── data/
│ │ │ │ └── constants.js
│ │ │ ├── images/
│ │ │ └── utils/
│ │ │ ├── Themes.js
│ │ │ └── motion.js
│ │ └── resources/
│ │ ├── Home.css
│ │ ├── Navbar.css
│ │ ├── authentication.css
│ │ ├── defaultlayout.css
│ │ └── templates.css
│ └── .vscode/
│ └── settings.json
└── backend/
├── package-lock.json
├── package.json
├── server.js
├── .gitignore
├── controllers/
│ └── user.js
├── data/
│ └── dbConnect.js
├── middleware/
│ ├── auth.js
│ └── error.js
├── models/
│ └── userModel.js
├── routes/
│ └── userRoute.js
└── utils/
└── features.js


---

## 🎯 **Features**
✅ **User Authentication** (JWT-based login & signup)  
✅ **Create & Update Portfolio** (Personal Info, Experience, Projects, Skills, Education)  
✅ **Unique Shareable Portfolio Link**  
✅ **MongoDB Storage** (User data stored & retrieved dynamically)  
✅ **Fully Responsive UI**  
✅ **Multi-Template Support** (Select from different templates)  


---

## 🛠️ **Tech Stack**
- **Frontend:** React.js, Axios, React Router, Tailwind CSS  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT  
- **Database:** MongoDB Atlas  
- **Deployment:** Netlify (Frontend), Render (Backend)  

---

## 🚀 **Getting Started**

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/balaji-sai-charan-portfolio-builder.git
cd balaji-sai-charan-portfolio-builder

## **Backend Setup**
cd backend
npm install  # Install dependencies

## **Configure MongoDB Connection**
- Create a .env file in the backend/ directory and add:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

**Start Backend Server
**npm start  # Runs on http://localhost:5000

## **Frontend Setup**
cd ../FrontEnd
npm install  # Install dependencies


