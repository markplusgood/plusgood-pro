'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function AsciiAnimation404() {
  const [frames, setFrames] = useState<string[]>([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const resolvedTheme = theme || 'dark'; // Default to dark theme for SSR

  useEffect(() => {
    fetch('/404.json')
      .then((response) => response.json())
      .then((data) => {
        // Trim every other frame to reduce animation size and improve performance
        const trimmedFrames = data.filter((frame, index) => index % 2 === 0);
        setFrames(trimmedFrames);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading 404.json:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (frames.length === 0) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 128); // Change frame every 128ms for 0.65 Hz frequency (quarter speed)

    return () => clearInterval(interval);
  }, [frames]);

  const isLightTheme = resolvedTheme === 'light';

  if (loading) {
    return (
      <div
        className="w-full h-full flex items-center justify-center font-mono text-xs"
        style={{
          backgroundColor: isLightTheme ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 0%)',
          color: isLightTheme ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 100%)'
        }}
        suppressHydrationWarning
      >
        Loading...
      </div>
    );
  }

  if (frames.length === 0) {
    return (
      <div
        className="w-full h-full flex items-center justify-center font-mono text-xs"
        style={{
          backgroundColor: isLightTheme ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 0%)',
          color: isLightTheme ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 100%)'
        }}
        suppressHydrationWarning
      >
        No frames available
      </div>
    );
  }

  const processedFrame = Array.isArray(frames[currentFrame])
    ? frames[currentFrame]
      .filter((line, index) => index % 2 === 0) // Take every other line to reduce height
      .map(line => line.replace(/(.{2})/g, '$1')) // Keep all characters but could reduce if needed
      .join('\n')
    : frames[currentFrame];

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="font-mono overflow-auto"
        style={{
          fontSize: 'clamp(2px, 0.5vw, 4px)',
          lineHeight: 1.0,
          maxWidth: '95vw',
          maxHeight: '95vh',
          minWidth: '200px',
          minHeight: '200px',
          backgroundColor: 'hsl(240, 10%, 3.9%)',
          color: isLightTheme ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 100%)'
        }}
        suppressHydrationWarning
      >
        <pre
          style={{
            margin: 0,
            padding: 0,
            textAlign: 'center',
            whiteSpace: 'pre',
            fontFamily: 'monospace',
            fontSize: 'inherit',
            lineHeight: 'inherit'
          }}
        >
          {processedFrame}
        </pre>
      </div>
    </div>
  );
}