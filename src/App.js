import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight, FaGithub } from "react-icons/fa";
import data from "./data";
import { AiFillGithub } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const newJobs = data;
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

  const { company, duties, title, demoLink, githubLink, img } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>projects</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.title}{" "}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
          <div className="img">
            <img src={img} alt={title} />
          </div>
          <a href={demoLink} target="_blank">
            <MdOpenInNew /> View Demo
          </a>
          <a href={githubLink} target="_blank">
            <MdOpenInNew /> View on GitHub
          </a>
        </article>
      </div>
    </section>
  );
}

export default App;
