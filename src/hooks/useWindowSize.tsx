import { useState, useEffect } from 'react';

interface WindowSize {
    size: number;
}
export default function useWindowSize(): WindowSize {
    const [size, setSize] = useState<number>(window.innerWidth);
        useEffect(() => {
            const handleResize = () => {
                setSize(window.innerWidth);
        };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return { size };
}