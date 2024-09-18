import { useEffect, useRef, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/system';

interface Props {
    percentage: number;
}

const AnimatedLinearProgress = styled(LinearProgress)(() => ({
    transition: 'width 0.5s ease-linear',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    height: '16px',
    borderRadius: '16px',
    '& .MuiLinearProgress-bar': {
        backgroundColor: 'white',
        borderRadius: '16px',
    },
}));

export default function Line({ percentage }: Props) {
    const [progress, setProgress] = useState(0);
    const progressRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (progressRef.current) {
            const rect = progressRef.current.getBoundingClientRect();
            const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
            setIsVisible(inView);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const timer = setInterval(() => {
                setProgress((prevProgress) => (prevProgress >= percentage ? percentage : prevProgress + 2));
            }, 40);

            return () => {
                clearInterval(timer);
            };
        }
    }, [isVisible, percentage]);

    return <AnimatedLinearProgress ref={progressRef} variant="determinate" value={progress} />;
}
