import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export const Home = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  return (
    <main className="flex justify-center items-center min-h-screen bg-white">
      <section id='Home' ref={ref}>
        <animated.div style={fadeIn} className="flex flex-col md:flex-row items-center">
          <div className="text-center md:text-center p-4 md:p-8">
            <h1 className="text-2xl font-bold mb-4 text-blue-500">Hey, I'm Pradeep</h1>
            <p className="text-lg">A Full Stack Web & Android Developer</p>
          </div>
          <div className="relative w-64 h-64 md:w-96 md:h-96 mt-4 md:mt-0">
            <img 
              src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg" 
              alt="Pradeep"
              className="w-full h-full object-cover rounded-full border-4 border-gray-300 shadow-lg"
            />
          </div>
        </animated.div>
      </section>
    </main>
  );
};
