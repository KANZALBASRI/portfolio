import SectionHeader from './SectionHeader';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="bg-bg-primary text-text-light">
      <SectionHeader title="About Me" subtitle="A Glimpse into My World" />
      <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0 ${inView ? 'animate-fade-in' : ''}`}>
        <div className="terminal-border p-8 bg-gray-900 bg-opacity-70 backdrop-blur-sm animate-border-pulse-green">
          <h3 className="text-2xl font-semibold text-neon-green mb-4 font-heading">
            Who is Kenza Lbasri?
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Motivated Cybersecurity student with a deep passion for offensive and defensive security. Proficient in ethical hacking, penetration testing, and network security. Eager to contribute to innovative projects and secure complex systems.
          </p>
          <p className="text-lg leading-relaxed text-text-muted">
            My journey into cybersecurity is driven by a curiosity for how systems work and a strong desire to protect digital assets from evolving threats. I thrive on challenges and continuously expand my knowledge through hands-on labs and real-world scenarios.
          </p>
        </div>
        <div className="text-center md:text-left">
          <img
            src="https://via.placeholder.com/400x400?text=Kenza+Lbasri" // Placeholder image
            alt="Kenza Lbasri"
            className="rounded-full mx-auto md:mx-0 border-4 border-neon-blue shadow-neon-blue max-w-xs transition-all duration-300 hover:scale-105"
          />
          <p className="mt-4 text-neon-blue text-lg font-mono">
            {'>_'} _
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
