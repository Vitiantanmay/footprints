
import React from 'react';

export const LogoIcon = ({ className }: { className?: string }): React.ReactNode => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L13.85 7.15L19 9L15.5 12.5L16.5 18L12 15.25L7.5 18L8.5 12.5L5 9L10.15 7.15L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2V22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12H22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.92969 4.92969L19.0718 19.0718"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.0703 4.92969L4.92822 19.0718"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SearchIcon = ({ className }: { className?: string }): React.ReactNode => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);


export const ArrowRightIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg 
        className={className}
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ChevronLeftIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const CheckIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

export const SparkleIcon = ({ className }: { className?: string }): React.ReactNode => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2.25c.39 0 .75.24.9.6l1.2 2.45 2.7.4a.9.9 0 01.5 1.55l-1.95 1.9.45 2.7a.9.9 0 01-1.3.95L12 11.3l-2.4 1.25a.9.9 0 01-1.3-.95l.45-2.7-1.95-1.9a.9.9 0 01.5-1.55l2.7-.4 1.2-2.45c.15-.36.51-.6.9-.6zM3.75 12a.9.9 0 01.9-.9h.01c.4 0 .76.24.9.6l.6 1.2 1.35.2a.9.9 0 01.5 1.55l-1 .95.2 1.35c.1.5-.25.95-.75.95h-.01a.9.9 0 01-.9-.6l-.6-1.2-1.35-.2a.9.9 0 01-.5-1.55l1-.95-.2-1.35a.9.9 0 01.75-.95zm16.5 0a.9.9 0 01.9.9h-.01c-.4 0-.76-.24-.9-.6l-.6-1.2-1.35-.2a.9.9 0 01-.5-1.55l1-.95-.2-1.35c-.1-.5.25-.95.75-.95h.01c.4 0 .76.24.9.6l.6 1.2 1.35.2a.9.9 0 01.5 1.55l-1 .95.2 1.35c.1.5-.25.95-.75.95z"/>
  </svg>
);

export const MinusIcon = ({ className }: { className?: string }): React.ReactNode => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
);

export const PlusIcon = ({ className }: { className?: string }): React.ReactNode => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

export const StarIcon = ({ className, filled = true }: { className?: string; filled?: boolean }): React.ReactNode => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path 
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
            fill={filled ? "currentColor" : "none"} 
            stroke="currentColor" 
            strokeWidth="1.5"
        />
    </svg>
);

export const ShoppingCartIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

export const TrashIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);