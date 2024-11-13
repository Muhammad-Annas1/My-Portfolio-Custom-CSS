import React from 'react'
import '../app/styles/about.css'

const About = () => {
  return (
    <div id="about" className="about-container">
      <h2 
        className="about-heading" data-aos="zoom-in"
      >
        About Me
      </h2>
      <p 
        className="about-text" data-aos="zoom-in"
      >
        Hello! I am Muhammad Annas, a passionate front-end web developer with a deep interest in
        building visually appealing, responsive, and user-friendly websites. Currently, I am a student of
        GIAIC, learning web development. I’m well-versed in TypeScript, Tailwind CSS, and modern frameworks like
        ShadcnUI, enabling me to craft both functional and aesthetic designs. I am constantly exploring the latest trends in
        front-end development and have a keen eye for detail, which helps me bring creative ideas to life while ensuring code
        quality and performance. When I’m not coding, you will likely find me exploring new tools and improving my skills to
        stay ahead in this fast-evolving field.
      </p>
    </div>
  )
}

export default About
