import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

// Project data array
const projectData = [
    {
        id: 1,
        title: "Transaction Management App with AI Insights",
        description: "A comprehensive financial management system where users can transfer money, view transaction history, and manage their accounts. Admin panel allows transaction monitoring, user management, and adding funds to user accounts with AI-powered insights.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
        technologies: ["MongoDB", "Express", "React", "Node.js", "AI/ML", "Chart.js"],
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        title: "MERN Blogging Site with Admin Panel",
        description: "A full-featured blogging platform with user authentication, rich text editor, comment system, and comprehensive admin panel for content management. Includes SEO optimization and responsive design.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
        technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Multer"],
        github: "#",
        demo: "#"
    },
    {
        id: 3,
        title: "Crop Management Android App",
        description: "A React Native mobile application for farmers to manage their crops, track growth stages, monitor weather conditions, and get farming recommendations. Features offline support and real-time notifications.",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
        technologies: ["React Native", "Firebase", "Weather API", "SQLite", "Push Notifications"],
        github: "#",
        demo: "#"
    }
];

const ProjectItem = ({ project, index }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false
    });

    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(30px)',
        config: { mass: 1, tension: 120, friction: 14 }
    });

    return (
        <animated.div
            ref={ref}
            style={animation}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-12 items-center`}
        >
            {/* Image Section with mobile-optimized 3D effect */}
            <div className='w-full lg:w-1/2 px-4 sm:px-0'>
                <div
                    className='relative group transition-all duration-500'
                    style={{
                        perspective: window.innerWidth < 768 ? '800px' : '1500px',
                        transformStyle: 'preserve-3d',
                        transform: window.innerWidth < 768
                            ? 'rotateY(0deg) rotateX(0deg)'
                            : index % 2 === 0
                                ? 'rotateY(-5deg) rotateX(2deg)'
                                : 'rotateY(5deg) rotateX(2deg)'
                    }}
                    onTouchStart={(e) => {
                        // Disable 3D effects on mobile for better performance
                        if (window.innerWidth < 768) return;
                    }}
                    onMouseMove={(e) => {
                        if (window.innerWidth < 768) return;

                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const rotateX = (y - centerY) / 30;
                        const rotateY = (x - centerX) / 30;

                        e.currentTarget.style.transform = `rotateY(${rotateY}deg) rotateX(${-rotateX}deg)`;
                    }}
                    onMouseLeave={(e) => {
                        if (window.innerWidth < 768) return;

                        e.currentTarget.style.transform = index % 2 === 0
                            ? 'rotateY(-5deg) rotateX(2deg)'
                            : 'rotateY(5deg) rotateX(2deg)';
                    }}
                >
                    {/* Main image container */}
                    <div className='relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500'>
                        <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-64 sm:h-72 lg:h-80 object-cover'
                            loading="lazy"
                        />
                        {/* Mobile-friendly overlay */}
                        <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent'></div>

                        {/* Project number overlay */}
                        <div className='absolute top-4 left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg'>
                            {String(index + 1).padStart(2, '0')}
                        </div>
                    </div>

                    {/* Simplified 3D layers for mobile */}
                    <div
                        className='absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl -z-10 opacity-30 hidden lg:block'
                        style={{
                            transform: 'translateZ(-20px)',
                        }}
                    ></div>
                    <div
                        className='absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl -z-20 opacity-20 hidden lg:block'
                        style={{
                            transform: 'translateZ(-40px)',
                        }}
                    ></div>
                </div>
            </div>

            {/* Content Section - Mobile optimized */}
            <div className='w-full lg:w-1/2 space-y-4 px-4 sm:px-0'>
                <div>
                    <span className='text-blue-500 font-semibold text-xs sm:text-sm uppercase tracking-wide'>
                        Project {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mt-2 text-gray-800 leading-tight'>
                        {project.title}
                    </h3>
                </div>

                <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
                    {project.description}
                </p>

                <div className='flex flex-wrap gap-2 pt-2'>
                    {project.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className='px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-700 bg-gray-50 rounded-full border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors'
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className='flex flex-col sm:flex-row gap-3 pt-4'>
                    <a
                        href={project.github}
                        className='flex-1 text-center px-4 sm:px-6 py-2.5 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 text-sm sm:text-base'
                    >
                        View Code
                    </a>
                    <a
                        href={project.demo}
                        className='flex-1 text-center px-4 sm:px-6 py-2.5 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base'
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
        <section id='projects' className='min-h-screen bg-white scroll-mt-20' ref={ref}>
            {/* Background decoration for mobile */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute top-20 -left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-xl'></div>
                <div className='absolute bottom-20 -right-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-xl'></div>
            </div>

            <div className='container mx-auto px-4 py-12 sm:py-16 relative z-10'>
                <animated.div style={headerAnimation} className='text-center mb-8 sm:mb-12'>
                    <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 underline'>
                        Projects
                    </h2>
                    <p className='text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto'>
                        Here are some of my recent projects showcasing different technologies and solutions
                    </p>
                </animated.div>
                <div className='max-w-6xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20'>
                    {projectData.map((project, index) => (
                        <ProjectItem key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};