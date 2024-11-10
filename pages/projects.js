import React from 'react'
import "../src/app/globals.css";
import Navbar from '../components/Navbar';

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Project One</h3>
          <p>A detailed project on web application development with Java and Next.js.</p>
        </div>
        <div className="project-card">
          <h3>Project Two</h3>
          <p>An AI-driven solution leveraging machine learning algorithms for data analysis.</p>
        </div>
      </div>
    </>
  )
}

export default Projects