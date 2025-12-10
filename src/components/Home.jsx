import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export const Home = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  const floatAnimation = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(-10px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
    config: { duration: 2000 },
  });

  return (
    <main className="flex justify-center items-center min-h-screen bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-pink-100 rounded-full opacity-40"></div>

      <section id='Home' ref={ref} className="relative z-10">
        <animated.div style={fadeIn} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content */}
          <div className="text-center md:text-left p-4 md:p-8 max-w-lg">
            <div className="mb-6">
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wide">
                Welcome to my portfolio
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
                Hey, I'm <span className="text-blue-500">Pradeep</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                A Full Stack Web & Android Developer passionate about creating amazing digital experiences
              </p>
            </div>

            {/* Quick stats */}
            <div className="flex justify-center md:justify-start gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">2+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">10+</div>
                <div className="text-sm text-gray-600">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">5+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Image Section */}
          <animated.div style={floatAnimation} className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-200 opacity-30 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border-2 border-purple-200 opacity-50"></div>

              <img
                src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg"
                alt="Pradeep"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10"
              />

              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                JS
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                ⚛️
              </div>
              <div className="absolute top-1/2 -right-8 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                N
              </div>
            </div>
          </animated.div>
        </animated.div>

        {/* Scroll indicator */}
        <animated.div
          style={fadeIn}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <div className="text-gray-400 text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </animated.div>
      </section>
    </main>
  );
};