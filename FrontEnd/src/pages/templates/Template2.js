import React, { useState } from "react";
import "../../resources/templates.css";

function Template2() {
  const user = JSON.parse(localStorage.getItem("sheyresume-user"));

  // State to store the selected color
  const [bgColor, setBgColor] = useState("#808080"); // Default is gray

  // Handle color change from color picker
  const handleColorChange = (event) => {
    setBgColor(event.target.value);
  };

  return (
    <div className="template1-parent">
      <div className="color-picker-container">
        <label htmlFor="color-picker">Choose a Background Color: </label>
        <input
          type="color"
          id="color-picker"
          value={bgColor}
          onChange={handleColorChange}
        />
      </div>

      <div className="resume-content">
        <div className="top d-flex flex-column">
          <h1>
            {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
          </h1>
          <div>
            <p>{user.email}</p>
            <p>{user.address}</p>
            <p>{user.mobileNumber}</p>
          </div>
        </div>

        <div className="divider mt-3"></div>
        <div className="divider mt-1"></div>

        <div className="objective mt-3">
          <h3 style={{ backgroundColor: bgColor, padding: 10 }}>Objective</h3>
          <hr />
          <p>{user.carrierObjective}</p>
        </div>

        <div className="divider mt-3"></div>

        <div className="education mt-3">
          <h3 style={{ backgroundColor: bgColor, padding: 10 }}>Education</h3>
          <hr />
          {user.education.map((education) => {
            return (
              <div className="d-flex align-items-center">
                <h6 style={{ width: 120 }}>
                  <b>{education.range} : </b>
                </h6>
                <p>
                  <b>{education.qualification}</b> with{" "}
                  <b>{education.percentage}%</b> in {education.institution}
                </p>
              </div>
            );
          })}
        </div>

        <div className="divider mt-3"></div>

        <div className="experience mt-3">
          <h3 style={{ backgroundColor: bgColor, padding: 10 }}>Experience</h3>
          <hr />
          {user.experience.map((exp) => {
            return (
              <div className="d-flex align-items-center">
                <h6 style={{ width: 120 }}>
                  <b>{exp.range} : </b>
                </h6>
                <p style={{ marginRight: '50px' }}>
                  <b>{exp.company}</b> in <b>{exp.place}</b>
                </p>
                <hr />
                <p style={{ marginTop: '10px' }}>
                  {exp.description ? exp.description : 'No description available'}
                </p>

              </div>
            );
          })}
        </div>

        <div className="divider mt-3"></div>

        <div className="projects mt-3">
          <h3 style={{ backgroundColor: bgColor, padding: 10 }}>Projects</h3>
          <hr />
          {user.projects.map((project) => {
            return (
              <div className="d-flex flex-column mb-3">
                <h6 style={{ marginRight: '10px' }}>
                  <b style={{ marginRight: '10px' }}>{project.title}</b><b style={{ marginRight: '10px' }}> [{project.range}]</b>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="ms-2" style={{ marginRight: '10px' }}>
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="ms-2" style={{ marginRight: '10px' }}>
                      Live
                    </a>
                  )}
                </h6>

                <p>{project.description}</p>
              </div>
            );
          })}
        </div>

        <div className="divider mt-3"></div>

        <div className="projects mt-3">
          <h3 style={{ backgroundColor: bgColor, padding: 10 }}>Skills</h3>
          <hr />
          {user.skills.map((skill) => {
            return <p>{skill.technology}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Template2;

/*
import React, { useState } from "react";
import "../../resources/templates.css";

function Template2() {
  const user = JSON.parse(localStorage.getItem("sheyresume-user"));

  // State to store the selected color
  const [bgColor, setBgColor] = useState("#808080"); // Default gray

  // Handle color change from color picker
  const handleColorChange = (event) => {
    setBgColor(event.target.value);
  };

  return (
    <div className="template1-parent">
      <div className="color-picker-container">
        <label htmlFor="color-picker">Choose a Background Color: </label>
        <input
          type="color"
          id="color-picker"
          value={bgColor}
          onChange={handleColorChange}
        />
      </div>

      <div className="resume-content">
        <div className="top d-flex flex-column">
          <h1>{`${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`}</h1>
          <div>
            <p>{user.email}</p>
            <p>{user.address}</p>
            <p>{user.mobileNumber}</p>
          </div>
        </div>

        <div className="divider mt-3"></div>

        <div className="section">
          <h3 style={{ backgroundColor: bgColor, padding: "10px" }}>Objective</h3>
          <p>{user.carrierObjective}</p>
        </div>

        <div className="divider mt-3"></div>

        <div className="section">
          <h3 style={{ backgroundColor: bgColor, padding: "10px" }}>Education</h3>
          {user.education.map((education, index) => (
            <div key={index} className="d-flex align-items-center">
              <h6 style={{ width: 120 }}>
                <b>{education.range}:</b>
              </h6>
              <p>
                <b>{education.qualification}</b> with <b>{education.percentage}%</b> in {education.institution}
              </p>
            </div>
          ))}
        </div>

        <div className="divider mt-3"></div>

        <div className="section">
          <h3 style={{ backgroundColor: bgColor, padding: "10px" }}>Experience</h3>
          {user.experience.map((exp, index) => (
            <div key={index} className="mb-3">
              <div className="d-flex align-items-center">
                <h6 style={{ width: 120 }}>
                  <b>{exp.range}:</b>
                </h6>
                <p style={{ marginRight: "50px" }}>
                  <b>{exp.company}</b> in <b>{exp.place}</b>
                </p>
              </div>
              <p>{exp.description || "No description available"}</p>
            </div>
          ))}
        </div>

        <div className="divider mt-3"></div>

        <div className="section">
          <h3 style={{ backgroundColor: bgColor, padding: "10px" }}>Projects</h3>
          {user.projects.map((project, index) => (
            <div key={index} className="d-flex flex-column mb-3">
              <h6>
                <b>{project.title}</b> <b>[{project.range}]</b>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="ms-2">
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="ms-2">
                    Live
                  </a>
                )}
              </h6>
              <p>{project.description}</p>
            </div>
          ))}
        </div>

        <div className="divider mt-3"></div>

        <div className="section">
          <h3 style={{ backgroundColor: bgColor, padding: "10px" }}>Skills</h3>
          {user.skills.map((skill, index) => (
            <p key={index}>{skill.technology}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Template2;
*/