import React from 'react';

const AnimatedTriangle = ({
  size,
  rotation,
  opacity,
  className = '',
  fillColor = 'currentColor',
}) => {
  // Calculate height of an equilateral triangle given side length (size)
  const height = (Math.sqrt(3) / 2) * size;

  // Points for an upward-pointing equilateral triangle
  const points = `${size / 2},0 ${size},${height} 0,${height}`;

  return (
    <svg
      width={size}
      height={height}
      viewBox={`0 0 ${size} ${height}`}
      className={className}
      style={{
        opacity: opacity,
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center center',
      }}
      fill={fillColor}
    >
      <polygon points={points} />
    </svg>
  );
};

export default AnimatedTriangle; 