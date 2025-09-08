'use client';

import { useEffect } from 'react';

const AsciiArt = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'http://www.qqpr.com/ascii/js/1018.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="responsive-container">
    </div>
  );
};

export default AsciiArt;