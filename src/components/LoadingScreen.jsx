import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ startExit, onExited }) => {
  const [isPanel1Exiting, setIsPanel1Exiting] = useState(false);
  const [isPanel2Exiting, setIsPanel2Exiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (startExit) {
      setIsPanel1Exiting(true);
      const panel2Timer = setTimeout(() => setIsPanel2Exiting(true), 50);
      const exitDuration = 1000;
      const unmountTimer = setTimeout(() => {
        setIsMounted(false);
        if (onExited) onExited();
      }, exitDuration + 100);
      return () => {
        clearTimeout(panel2Timer);
        clearTimeout(unmountTimer);
      };
    }
  }, [startExit, onExited]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {/* Panel 1 (Top-Left Blue Triangle that slides out to top-left) */}
      <div
        className={`fixed inset-0 bg-blue-700 transition-all duration-[1000ms] ease-in-out ${
          isPanel1Exiting
            ? 'opacity-0 -translate-x-full -translate-y-full rotate-[-25deg]'
            : 'opacity-100 translate-x-0 translate-y-0 rotate-0'
        }`}
        style={{
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
          transformOrigin: 'center center',
        }}
      />
      {/* Panel 2 (Bottom-Right Blue Triangle that slides out to bottom-right) */}
      <div
        className={`fixed inset-0 bg-blue-500 transition-all duration-[1000ms] ease-in-out ${
          isPanel2Exiting
            ? 'opacity-0 translate-x-full translate-y-full rotate-[25deg]'
            : 'opacity-100 translate-x-0 translate-y-0 rotate-0'
        }`}
        style={{
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
          transformOrigin: 'center center',
        }}
      />
    </div>
  );
};

export default LoadingScreen; 