import React, { useState, useEffect, useRef, useCallback } from 'react';
import "./loop.css"

interface InfiniteLooperProps {
    speed: number;
    direction: 'right' | 'left';
    children: React.ReactNode;
}

const InfiniteLooper: React.FC<InfiniteLooperProps> = ({ speed, direction, children }) => {
    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    const resetAnimation = () => {
        if (innerRef.current) {
            innerRef.current.setAttribute('data-animate', 'false');
            setTimeout(() => {
                if (innerRef.current) {
                    innerRef.current.setAttribute('data-animate', 'true');
                }
            }, 10);
        }
    };

    const setupInstances = useCallback(() => {
        if (!innerRef.current || !outerRef.current) return;

        const { width } = innerRef.current.getBoundingClientRect();
        const { width: parentWidth } = outerRef.current.getBoundingClientRect();
        const widthDeficit = parentWidth - width;
        const instanceWidth = width / innerRef.current.children.length;

        if (widthDeficit > 0) {
            setLooperInstances(looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1);
        }

        resetAnimation();
    }, [looperInstances]);

    useEffect(() => {
        setupInstances();
    }, [setupInstances]);

    useEffect(() => {
        window.addEventListener('resize', setupInstances);
        return () => {
            window.removeEventListener('resize', setupInstances);
        };
    }, [setupInstances]);

    return (
        <div className="looper" ref={outerRef}>
            <div className="looper__innerList" ref={innerRef} data-animate="true">
                {[...Array(looperInstances)].map((_, ind) => (
                    <div
                        key={ind}
                        className="looper__listInstance"
                        style={{
                            animationDuration: `${speed}s`,
                            animationDirection: direction === 'right' ? 'reverse' : 'normal',
                        }}
                    >
                        {children}
                    </div>
                ))}
            </div>
        </div>
    );
};

const InfinityLoop: React.FC = () => (
    <div className="app pyContainer">
        <InfiniteLooper speed={8} direction="left">
            <img
                src='/img/text-loop.png'
                alt='Loop Text'
                className='ml-[18px] sm:ml-[26.5px]
                h-[42px] sm:h-[101px]'
            />
        </InfiniteLooper>
    </div>
);

export default InfinityLoop;
