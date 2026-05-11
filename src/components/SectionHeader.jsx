import { useInView } from 'react-intersection-observer';

const SectionHeader = ({ title, subtitle }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`text-center mb-12 opacity-0 ${inView ? 'animate-fade-in' : ''}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-neon-green font-heading mb-3">
        {title}
      </h2>
      <p className="text-xl md:text-2xl text-text-muted font-mono">
        {subtitle}
      </p>
      <div className="w-24 h-1 bg-neon-blue mx-auto mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionHeader;
