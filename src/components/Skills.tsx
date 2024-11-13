import React from 'react';
import "../app/styles/skills.css"

const Skills = () => {
  return (
    <div id="Skills" className="skills-container">
      <div className='skills-grid'>

        <div data-aos="zoom-in" className='skills-left'>
          <h2 className='skills-heading'>Technologies I work with</h2>
          <p className="skills-text">
            I am proficient in a wide range of front-end development tools and technologies, enabling me to create responsive, high-performance web applications. I’m always expanding my skill set, staying up-to-date with the latest web technologies, and ensuring that the solutions I create are both innovative and practical.
          </p>
        </div>


        <div className='skills-right'>
          <div className='skills-icons-grid'>
            <div className='skills-space'>
              <h2 data-aos="zoom-in">Typescript</h2>
              <h2 data-aos="zoom-in">Next.js</h2>
              <h2 data-aos="zoom-in">Tailwind CSS</h2>
            </div>

            <div className='skills-space'>
              <h2 data-aos="zoom-in">Shadcn UI</h2>
              <h2 data-aos="zoom-in">Node.js</h2>
              <h2 data-aos="zoom-in">CSS</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
