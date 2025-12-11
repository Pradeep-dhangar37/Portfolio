import { useTrail, animated, useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { SocialIcon } from 'react-social-icons';

export const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  // Text items to be animated
  const textItems = [
    "Let's Chat.",
    "Tell me About Your",
    "Project"
  ];

  const trail = useTrail(textItems.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(-20px)',
    from: { opacity: 0, transform: 'translateX(-20px)' },
    config: { mass: 5, tension: 2000, friction: 200 },
    delay: 200, // Delay between each item
  });

  return (
    <section id='contact' className='min-h-[50vh] scroll-mt-20' ref={ref}>
      <div className='container mx-auto px-4 py-16'>
        <animated.div className='text-center mb-12'>
          <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 underline'>
            Contact Me!
          </h2>
        </animated.div>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1 p-4'>
            {trail.map((style, index) => (
              <animated.p key={index} style={style} className='font-bold text-3xl md:text-4xl lg:text-5xl'>
                {textItems[index]}
              </animated.p>
            ))}
          </div>
          <animated.div style={trail[textItems.length - 1]} className='flex-1 p-4'>
            <p className='font-bold text-xl md:text-2xl lg:text-3xl text-center'>Send Me a Message</p>
            <div className='flex flex-wrap justify-center lg:justify-around mt-10'>
              <SocialIcon network="whatsapp" url="" className='m-2' />
              <SocialIcon network="telegram" url="" className='m-2' />
              <SocialIcon network="youtube" url="" className='m-2' />
              <SocialIcon network="github" url="" className='m-2' />
              <SocialIcon network="instagram" url="" className='m-2' />
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
};
