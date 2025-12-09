import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

// Project data array
const projectData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce application with payment integration, user authentication, and admin dashboard. Built with modern technologies to provide seamless shopping experience.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management tool with real-time updates and drag-and-drop functionality. Perfect for teams to stay organized and productive.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        technologies: ["React", "Firebase", "Tailwind CSS"],
        github: "#",
        demo: "#"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "A responsive weather application that provides real-time weather data and forecasts using external APIs. Features interactive maps and detailed analytics.",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
        technologies: ["React", "OpenWeather API", "Chart.js"],
        github: "#",
        demo: "#"
    },
    {
        id: 4,
        title: "Social Media App",
        description: "A modern social media platform with real-time messaging, post sharing, and user profiles. Connect with friends and share your moments.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
        technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
        github: "#",
        demo: "#"
    }
];

const ProjectItem = ({ project, index }) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: false
    });

    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(50px)',
        config: { mass: 1, tension: 120, friction: 14 }
    });

    return (
        <animated.div
            ref={ref}
            style={animation}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
        >
            {/* Image Section with enhanced 3D effect */}
            <div className='w-full md:w-1/2' style={{ perspective: '1500px' }}>
                <div
                    className='relative group transition-all duration-700'
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: index % 2 === 0
                            ? 'rotateY(-8deg) rotateX(3deg)'
                            : 'rotateY(8deg) rotateX(3deg)'
                    }}
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const rotateX = (y - centerY) / 20;
                        const rotateY = (x - centerX) / 20;

                        e.currentTarget.style.transform = `rotateY(${rotateY}deg) rotateX(${-rotateX}deg)`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = index % 2 === 0
                            ? 'rotateY(-8deg) rotateX(3deg)'
                            : 'rotateY(8deg) rotateX(3deg)';
                    }}
                >
                    {/* Main image with 3D depth */}
                    <div className='relative overflow-hidden rounded-lg shadow-2xl transition-all duration-500'>
                        <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-72 md:h-80 object-cover'
                        />
                        {/* Shine effect on hover */}
                        <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500'></div>
                    </div>

                    {/* Enhanced 3D depth layers */}
                    <div
                        className='absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg -z-10 opacity-40'
                        style={{
                            transform: 'translateZ(-30px)',
                        }}
                    ></div>
                    <div
                        className='absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg -z-20 opacity-30'
                        style={{
                            transform: 'translateZ(-60px)',
                        }}
                    ></div>
                    <div
                        className='absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg -z-30 opacity-20'
                        style={{
                            transform: 'translateZ(-90px)',
                        }}
                    ></div>
                </div>
            </div>

            {/* Content Section */}
            <div className='w-full md:w-1/2 space-y-4'>
                <div>
                    <span className='text-blue-500 font-semibold text-sm uppercase tracking-wide'>
                        Project {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className='text-2xl md:text-3xl font-bold mt-2 text-gray-800'>
                        {project.title}
                    </h3>
                </div>

                <p className='text-gray-600 leading-relaxed text-base'>
                    {project.description}
                </p>

                <div className='flex flex-wrap gap-2 pt-2'>
                    {project.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className='px-3 py-1 text-sm text-gray-700 bg-gray-50 rounded-full border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors'
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className='flex gap-4 pt-4'>
                    <a
                        href={project.github}
                        className='inline-flex items-center px-6 py-2.5 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300'
                    >
                        View Code
                    </a>
                    <a
                        href={project.demo}
                        className='inline-flex items-center px-6 py-2.5 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg'
                    >
                        Live Demo →
                    </a>
                </div>
            </div>
        </animated.div>
    );
};

export const Projects = () => {
    const { ref, inView } = useInView({ threshold: 0.1 });

    const headerAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(-20px)',
        config: { mass: 1, tension: 120, friction: 14 }
    });

    return (
        <section id='projects' className='min-h-screen bg-white' ref={ref}>
            <div className='container mx-auto px-4 py-16'>
                <animated.div style={headerAnimation} className='text-center mb-12'>
                    <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 underline'>
                        Projects
                    </h2>
                </animated.div>
                <div className='max-w-6xl mx-auto space-y-20'>
                    {projectData.map((project, index) => (
                        <ProjectItem key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
