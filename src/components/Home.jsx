import { useSpring, animated, useTrail } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export const Home = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const floatAnimation = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(-10px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
    config: { duration: 3000 },
  });

  // Trail animation for stats
  const statsItems = [
    { number: "2+", label: "Years Experience" },
    { number: "10+", label: "Projects Done" },
    { number: "5+", label: "Technologies" }
  ];

  const statsTrail = useTrail(statsItems.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.8)',
    config: { mass: 1, tension: 120, friction: 14 },
    delay: 800,
  });

  // Trail animation for buttons
  const buttonTrail = useTrail(2, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0px)' : 'translateX(-30px)',
    config: { mass: 1, tension: 120, friction: 14 },
    delay: 1200,
  });

  // Animation for tech icons
  const techIconsTrail = useTrail(3, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(180deg)',
    config: { mass: 1, tension: 200, friction: 20 },
    delay: 1000,
  });

  return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">






      <section id='Home' ref={ref} className="relative z-10">
        <animated.div style={fadeIn} className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto px-4">
          {/* Text Content */}
          <div className="text-center lg:text-left p-4 md:p-8 max-w-lg lg:max-w-2xl">
            <div className="mb-6">
              <animated.span
                style={fadeIn}
                className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4 px-4 py-2 bg-blue-100 rounded-full"
              >
                Welcome to my portfolio
              </animated.span>
              <animated.h1
                style={{
                  ...fadeIn,
                  transform: fadeIn.transform.to(t => `${t} scale(${inView ? 1 : 0.9})`),
                }}
                className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight"
              >
                Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">Pradeep</span>
              </animated.h1>
              <animated.p
                style={{
                  ...fadeIn,
                  transform: fadeIn.transform.to(t => `${t} translateX(${inView ? 0 : -20}px)`),
                }}
                className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              >
                A Full Stack Web & Android Developer passionate about creating amazing digital experiences that make a difference
              </animated.p>
            </div>

            {/* Quick stats with trail animation */}
            <div className="flex justify-center lg:justify-start gap-6 md:gap-8 mb-8">
              {statsTrail.map((style, index) => (
                <animated.div key={index} style={style} className="text-center group">
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-110 transition-transform duration-300">
                    {statsItems[index].number}
                  </div>
                  <div className="text-sm text-gray-600">{statsItems[index].label}</div>
                </animated.div>
              ))}
            </div>

            {/* CTA Buttons with trail animation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {buttonTrail.map((style, index) => (
                <animated.a
                  key={index}
                  style={style}
                  href={index === 0 ? "#projects" : "#contact"}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center group ${index === 0
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl hover:scale-105"
                    : "border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:scale-105"
                    }`}
                >
                  <span className="group-hover:animate-pulse">
                    {index === 0 ? "View My Work ✨" : "Get In Touch 👋"}
                  </span>
                </animated.a>
              ))}
            </div>
          </div>

          {/* Image Section with enhanced animations */}
          <animated.div style={floatAnimation} className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Animated decorative rings */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-200 opacity-30 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border-2 border-purple-200 opacity-50 animate-pulse"></div>
              <div className="absolute inset-8 rounded-full border border-pink-200 opacity-40 animate-ping" style={{ animationDuration: '3s' }}></div>

              <img
                src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg"
                alt="Pradeep"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
              />

              {/* Floating tech icons with trail animation */}
              {techIconsTrail.map((style, index) => {
                const icons = [
                  { content: "JS", bg: "bg-yellow-500", position: "-top-4 -right-4" },
                  { content: "⚛️", bg: "bg-blue-500", position: "-bottom-4 -left-4" },
                  { content: "N", bg: "bg-green-500", position: "top-1/2 -right-8" }
                ];
                return (
                  <animated.div
                    key={index}
                    style={style}
                    className={`absolute ${icons[index].position} w-12 h-12 ${icons[index].bg} rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:scale-125 transition-transform duration-300 cursor-pointer`}
                  >
                    {icons[index].content}
                  </animated.div>
                );
              })}
            </div>
          </animated.div>
        </animated.div>

        {/* Enhanced scroll indicator */}
        <animated.div
          style={{
            ...fadeIn,
            transform: fadeIn.transform.to(t => `${t} translateY(${inView ? 0 : 20}px)`),
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <div className="text-gray-400 text-sm mb-2 animate-pulse">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center hover:border-blue-400 transition-colors duration-300">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </animated.div>
      </section>
    </main>
  );
};