# 🚀 Portfolio Builder (MERN Stack)  

A **dynamic and customizable Portfolio Builder** that allows users to create and share a professional portfolio effortlessly. Built with the **MERN stack (MongoDB, Express.js, React.js, Node.js)**, this application helps users **generate a unique portfolio, customize templates, and store data securely in MongoDB.**  

🌟 **Why use this?**  
✅ **No coding required** – Just fill out a form!  
✅ **Generate a shareable portfolio URL** 📩  
✅ **Multiple templates** – Choose your style 🎨  
✅ **Securely store data in MongoDB** 🔐  
✅ **Fully responsive design** – Mobile & desktop-friendly 📱💻  
✅ **Fast and seamless experience** 🚀  

---

## 🛠️ Tech Stack  

**Frontend:**  
- React.js (SPA)  
- React Router  
- Tailwind CSS (for a sleek UI)  
- Axios (API requests)
- Three.js

**Backend:**  
- Node.js  
- Express.js  
- MongoDB + Mongoose (database)  
- JSON Web Token (JWT) authentication  
- bcrypt.js (password hashing)  


---

## 🎯 Unique Features  

✅ **User Authentication** – Secure login & signup with JWT  
✅ **Customizable Themes** – Multiple portfolio templates 🎨  
✅ **Real-time Data Saving** – No need to re-enter details  
✅ **Fast & Lightweight** – Optimized for performance  
✅ **SEO-Friendly** – Portfolios can be indexed by search engines  
✅ **Dark Mode Support** 🌙  
✅ **Live Preview** – See changes instantly before publishing  
✅ **Easy-to-Share Profile** – Get a unique portfolio link  


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


