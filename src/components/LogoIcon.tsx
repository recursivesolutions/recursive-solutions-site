import React from 'react';

interface LogoIconProps {
  className?: string;
  size?: number;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ className = 'w-9 h-9', size = 32 }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#09090b" />
      {/* Outer recursive frame */}
      <rect
        x="7"
        y="7"
        width="18"
        height="18"
        rx="3"
        stroke="#22d3ee"
        strokeWidth="1.5"
        className="transition-transform duration-500 origin-[16px_16px] group-hover:rotate-45"
      />
      {/* Inner recursive diamond frame */}
      <rect
        x="11"
        y="11"
        width="10"
        height="10"
        rx="2"
        stroke="#60a5fa"
        strokeWidth="1.5"
        transform="rotate(45 16 16)"
        className="transition-transform duration-500 origin-[16px_16px] group-hover:rotate-90"
      />
      {/* Centered concentric core circle */}
      <circle cx={16} cy={16} r={2} fill="#67e8f9" />
    </svg>
  );
};
