import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../resources/templates.css";
function Template1() {
  const user = JSON.parse(localStorage.getItem("sheyresume-user"));
  return (
    <>
      

      <div className="template1-parent">
        <div className="top d-flex justify-content-between">
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

        <div className="objective mt-3">
          <h3>Objective</h3>
          <hr />
          <p>{user.carrierObjective}</p>
        </div>
        <div className="divider mt-3"></div>

        <div className="education mt-3">
          <h3>Education</h3>
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
          <h3>Experience</h3>
          <hr />
          {user.experience.map((exp) => {
            return (
              <div className="d-flex align-items-center">
                <h6>
                  <h6 style={{ width: 120 }}>
                    <b>{exp.range} : </b>
                  </h6>
                  <p style={{ marginRight: '50px' }}>
                    <b>{exp.company}</b> in <b>{exp.place}</b>
                  </p>
                </h6>
                <p style={{ marginTop: '10px' }}>
                  {exp.description ? exp.description : 'No description available'}
                </p>

              </div>
            );
          })}
        </div>

        <div className="divider mt-3"></div>

        <div className="projects mt-3">
          <h3>Projects</h3>
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
          <h3>Skills</h3>
          <hr />
          {user.skills.map((skill) => {
            return <p>{skill.technology}</p>;
          })}
        </div>
      </div>
    </>
  );
}

export default Template1;

/*
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // ✅ Import axios
import "../../resources/templates.css";

function Template1() {
  const { resumeId } = useParams(); // ✅ Get resumeId from URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/resume/${resumeId}`);
        setUser(response.data);
      } catch (err) {
        setError("Failed to load resume.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [resumeId]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!user) return <h2>No data available</h2>;

  return (
    <div className="template1-parent">
      <div className="top d-flex justify-content-between">
        <h1>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h1>
        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobileNumber}</p>
        </div>
      </div>

      <div className="divider mt-3"></div>

      <div className="objective mt-3">
        <h3>Objective</h3>
        <hr />
        <p>{user.carrierObjective}</p>
      </div>

      <div className="divider mt-3"></div>

      <div className="education mt-3">
        <h3>Education</h3>
        <hr />
        {user.education.map((education, index) => (
          <div key={index} className="d-flex align-items-center">
            <h6 style={{ width: 120 }}><b>{education.range} :</b></h6>
            <p><b>{education.qualification}</b> with <b>{education.percentage}%</b> in {education.institution}</p>
          </div>
        ))}
      </div>

      <div className="divider mt-3"></div>

      <div className="experience mt-3">
        <h3>Experience</h3>
        <hr />
        {user.experience.map((exp, index) => (
          <div key={index} className="d-flex align-items-center">
            <h6 style={{ width: 120 }}><b>{exp.range} :</b></h6>
            <p style={{ marginRight: '50px' }}><b>{exp.company}</b> in <b>{exp.place}</b></p>
            <p style={{ marginTop: '10px' }}>{exp.description || 'No description available'}</p>
          </div>
        ))}
      </div>

      <div className="divider mt-3"></div>

      <div className="projects mt-3">
        <h3>Projects</h3>
        <hr />
        {user.projects.map((project, index) => (
          <div key={index} className="d-flex flex-column mb-3">
            <h6 style={{ marginRight: '10px' }}>
              <b style={{ marginRight: '10px' }}>{project.title}</b>
              <b style={{ marginRight: '10px' }}> [{project.range}]</b>
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
        ))}
      </div>

      <div className="divider mt-3"></div>

      <div className="projects mt-3">
        <h3>Skills</h3>
        <hr />
        {user.skills.map((skill, index) => (
          <p key={index}>{skill.technology}</p>
        ))}
      </div>
    </div>
  );
}

export default Template1;
*/
