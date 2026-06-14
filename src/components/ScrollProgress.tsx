import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setWidth((window.scrollY / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#0E7490] via-[#14B8A6] to-[#0891B2] z-[60] transition-all duration-100 ease-out"
      style={{ width: `${width}%` }}
    />
  );
}
