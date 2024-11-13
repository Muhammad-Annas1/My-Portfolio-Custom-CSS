import React from 'react';
import Card from './Card';
import Heading from './Heading';
import '../app/styles/project.css';

const data = [
  {
    id: 0,
    title: 'Simple Header Footer Template',
    description: 'This is a simple header footer template built using Next.js, Typescript, and Tailwind CSS.',
    img: "/Project_1.jpg",
    tags: ['React', 'Next.js', 'Typescript', 'Tailwind CSS'],
  },
  {
    id: 1,
    title: 'Countdown App',
    description: 'Countdown time application built using Next.js, Typescript, and Tailwind CSS.',
    img: "/Project_2.jpg",
    tags: ['React', 'Next.js', 'Typescript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Students ID Card',
    description: 'An ID card application powered by Next.js, Typescript, and Tailwind CSS.',
    img: "/Project_3.jpg",
    tags: ['React', 'Next.js', 'Typescript', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'A weather app powered by Next.js, Typescript, and Tailwind CSS.',
    img: "/Project_4.jpg",
    tags: ['React', 'Next.js', 'Typescript', 'Tailwind CSS'],
  },
];

const Project = () => {
  return (
    <div id='Projects' className='projects-container'>
      <Heading title="My Projects"  />
      <div className="projects-grid">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            description={el.description}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
