import React from 'react';
import { useTrail, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

// Skill data array
const skillData = [
  { src: 'https://www.softwaredevelopersinc.com/images-2022/react-development.png', alt: 'React', label: 'React Js' },
  { src: 'https://www.svgrepo.com/show/376337/node-js.svg', alt: 'Node.js', label: 'Node.js' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png', alt: 'C', label: 'C' },
  { src: 'https://download.logo.wine/logo/C%2B%2B/C%2B%2B-Logo.wine.png', alt: 'C++', label: 'C++' },
  { src: 'https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png', alt: 'MongoDB', label: 'MongoDB' },
  { src: 'https://toppng.com/uploads/preview/mysql-logo-png-image-11660514413jvwkcjh4av.png', alt: 'MySQL', label: 'MySQL' },
  { src: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png', alt: 'JavaScript', label: 'JavaScript' },
  { src: 'https://www.svgrepo.com/show/374144/typescript.svg', alt: 'TypeScript', label: 'TypeScript' },
  { src: 'https://toppng.com/uploads/preview/logo-google-firebase-logo-11563634544aqdbqci3yp.png', alt: 'Firebase', label: 'Firebase' },
];

export const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const trail = useTrail(skillData.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(20px)',
    config: { mass: 5, tension: 2000, friction: 200 },
    delay: 200, // Delay between each item
  });

  return (
    <section id='skills' className='min-h-screen bg-gray-100' ref={ref}>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-12'>
          <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 underline'>
            Skills
          </h2>
        </div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {trail.map((style, index) => (
            <animated.div
              key={index}
              className='skill flex flex-col items-center justify-between border border-gray-300 rounded-md p-6 text-center'
              style={style}
            >
              <img
                src={skillData[index].src}
                alt={skillData[index].alt}
                width='80'
                height='80'
                className='mb-2'
              />
              <p className='text-lg font-semibold'>{skillData[index].label}</p>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
};
