import { useSpring, animated } from '@react-spring/web';
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

// Individual Skill Component with smooth scroll animation
const SkillItem = ({ skill, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '-50px 0px'
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    config: { mass: 1, tension: 200, friction: 20 },
    delay: index * 50,
  });

  return (
    <animated.div
      ref={ref}
      style={animation}
      className='group flex flex-col items-center justify-between border border-gray-300 rounded-lg p-8 text-center bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-700 hover:scale-105 cursor-pointer'
    >
      <div className="mb-4 relative">
        <img
          src={skill.src}
          alt={skill.alt}
          width='80'
          height='80'
          className='group-hover:scale-110 transition-transform duration-500 drop-shadow-sm group-hover:drop-shadow-lg'
        />
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150"></div>
      </div>

      <p className='text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-500'>
        {skill.label}
      </p>

      {/* Animated underline */}
      <div className="w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-700 mt-2 rounded-full"></div>
    </animated.div>
  );
};

export const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const headerAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(-30px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <section id='skills' className='min-h-screen bg-gray-100 scroll-mt-20' ref={ref}>
      <div className='container mx-auto px-4 py-16'>
        <animated.div style={headerAnimation} className='text-center mb-16'>
          <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 underline mb-4'>
            Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </animated.div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto'>
          {skillData.map((skill, index) => (
            <SkillItem key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};