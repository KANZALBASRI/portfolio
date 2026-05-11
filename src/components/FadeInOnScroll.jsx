// src/components/FadeInOnScroll.jsx
import { useInView } from 'react-intersection-observer';
import React from 'react';

const FadeInOnScroll = ({ children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`${className || ''} opacity-0 ${inView ? 'animate-fade-in' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
