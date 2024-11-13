import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../app/styles/card.css';

interface propsType {
  title: string;
  description: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, description, img, tags }) => {
  const [isClient, setIsClient] = useState(false);  // State to track if it's the client side
  const [windowWidth, setWindowWidth] = useState(0); // State to track window width

  useEffect(() => {
    // This code runs only on the client side
    setIsClient(true);
    setWindowWidth(window.innerWidth);

    // Optional: Update window width on resize
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  // Only render window-based logic when it's the client side
  if (!isClient) return null; // Optionally return null or a loading state while the client is rendering

  return (
    <div className={`card ${windowWidth >= 640 ? 'card-sm' : ''}`} data-aos="zoom-in">
      <div>
        <Image
          className={`card-image ${windowWidth >= 640 ? 'card-image-sm' : ''}`}
          src={img}
          width={450}
          height={300}
          alt={title}
        />
      </div>

      <div className='card-content'>
        <div className='card-title'>{title}</div>
        <div>{description}</div>
        <div>
          {tags.map((el) => (
            <div className='card-tag' key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
