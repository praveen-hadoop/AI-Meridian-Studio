import React from 'react';

interface LogoProps {
  inverted?: boolean;
  className?: string;
}

export const LogoMark: React.FC<{ size?: number; className?: string; inverted?: boolean }> = ({
  size = 32,
  className = '',
  inverted = false,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <rect
        width="32"
        height="32"
        rx="8"
        fill={inverted ? '#8FD3FF' : '#0E1E3A'}
      />
      <path
        d="M7 23V9h4.5l4.5 7.5L20.5 9H25v14h-3.5V14.2L17.2 21h-2.4L10.5 14.2V23H7z"
        fill={inverted ? '#0E1E3A' : '#8FD3FF'}
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({ inverted = false, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <LogoMark size={32} inverted={inverted} />
      <span
        className={`font-heading font-bold text-lg tracking-tight ${
          inverted ? 'text-white' : 'text-[#0E1E3A]'
        }`}
      >
        Meridian Growth Studio
      </span>
    </div>
  );
};
