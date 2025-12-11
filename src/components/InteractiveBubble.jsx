import { useSpring, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';

export const InteractiveBubble = () => {
    const [mousePos, setMousePos] = useState({ x: 150, y: 150 });
    const [isDragging, setIsDragging] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Only update scroll if not dragging
            if (!isDragging) {
                setScrollY(window.scrollY);
            }
        };

        const handleMouseMove = (e) => {
            if (isDragging) {
                e.preventDefault();
                setMousePos({ x: e.clientX, y: e.clientY });
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            // Re-enable text selection
            document.body.style.userSelect = '';
            document.body.style.webkitUserSelect = '';
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    // Calculate bubble size based on scroll position - only when not dragging
    const bubbleSize = isDragging ? 120 : Math.min(80 + (scrollY / 10), 200);

    const bubbleAnimation = useSpring({
        transform: `translate(${mousePos.x - bubbleSize / 2}px, ${mousePos.y - bubbleSize / 2}px)`,
        width: `${bubbleSize}px`,
        height: `${bubbleSize}px`,
        opacity: 0.7,
        config: { tension: 100, friction: 25 }
    });

    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setMousePos({ x: e.clientX, y: e.clientY });

        // Disable text selection while dragging
        document.body.style.userSelect = 'none';
        document.body.style.webkitUserSelect = 'none';
    };

    return (
        <animated.div
            style={bubbleAnimation}
            className="fixed pointer-events-auto z-40 cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onDragStart={(e) => e.preventDefault()}
        >
            <div
                className="w-full h-full rounded-full backdrop-blur-sm border border-white/10 shadow-lg select-none"
                style={{
                    background: `radial-gradient(circle at 30% 30%, 
            rgba(255,255,255,0.6) 0%, 
            rgba(147,197,253,0.5) 50%, 
            rgba(99,102,241,0.4) 100%)`,
                    boxShadow: `
            0 0 ${bubbleSize / 3}px rgba(59,130,246,0.2), 
            inset 0 0 ${bubbleSize / 4}px rgba(255,255,255,0.2)`,
                    animation: isDragging ? 'none' : 'bubble-float-smooth 4s ease-in-out infinite',
                    userSelect: 'none',
                    WebkitUserSelect: 'none'
                }}
            />
        </animated.div>
    );
};