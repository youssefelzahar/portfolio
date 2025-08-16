import React from 'react';
import './AboutME.css';
import '../assets/me.png'
import ReactRoundedImage from "react-rounded-image"

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <section className="profile-image-section">
          <div className="profile-image-container">
            <ReactRoundedImage
              image={require("../assets/me.png")}
              roundedSize={0}
              imageWidth={200}
              imageHeight={200}
            />
          </div>
        </section>

        {/* Professional Summary */}
        
               <section className="about-summary">
          <p>
            Hello! I’m <strong>Youssef Elzahar</strong>, a passionate Full Data Sctientist| Good experience with Machine Learning and Data Science. Completed various projects using different 
algorithms and datasets. Skilled in Natural Language Processing (NLP), Transformer models, and 
finetuning. Proficient in Power BI, Pandas, and software engineering with a focus on backend using fastapi/ laravel 
and MySQL. Kaggle Notebook Expert and current full stack Data Scientist Intern at Fixed Solution.
          </p>
          <p>
            I enjoy solving real-world problems with technology and continuously exploring
            new frameworks and tools to enhance my skills.
          </p>
        </section>

        {/* Skills Section */}
        <section className="about-skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>React</li>
            <li>Laravel</li>
            <li>Python</li>
            <li>FastApi</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>Git</li>
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>NLP</li>
            <li>LLM</li>
            <li>RAG Systems</li>
            <li>Powerbi</li>
            <li>docker</li>


          </ul>
        </section>

        {/* Personal Story */}
        <section className="about-story">
          <h2>My Story</h2>
          <p>
            Outside of coding, I enjoy learning about AI, exploring new technologies, and
            building challenging projects. I believe in continuous learning and sharing
            knowledge with the community.
          </p>
        </section>

        {/* Optional Resume Button */}
        <section className="about-resume">
          <a
            href={`${process.env.PUBLIC_URL}/YOUSSEF_ELZAHAR_Data_scientist.pdf`}

            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
