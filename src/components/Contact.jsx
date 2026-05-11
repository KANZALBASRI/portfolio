import SectionHeader from './SectionHeader';
import Button from './Button';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="bg-bg-primary text-text-light">
      <SectionHeader title="Contact Me" subtitle="Let's Connect & Collaborate" />
      <div ref={ref} className={`flex flex-col items-center gap-8 opacity-0 ${inView ? 'animate-fade-in' : ''}`}>
        <p className="text-lg md:text-xl text-text-muted text-center max-w-2xl">
          I'm always open to discussing new projects, collaboration opportunities, or cybersecurity challenges. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Button href="mailto:kenza.lbasri@example.com" variant="primary">
            <FaEnvelope className="inline-block mr-2" /> Email Me
          </Button>
          <Button href="https://github.com/kenzalbasri" variant="secondary">
            <FaGithub className="inline-block mr-2" /> GitHub
          </Button>
          <Button href="https://linkedin.com/in/kenzalbasri" variant="secondary">
            <FaLinkedin className="inline-block mr-2" /> LinkedIn
          </Button>
        </div>

        <div className="mt-8 p-6 terminal-border bg-gray-900 bg-opacity-70 backdrop-blur-sm animate-border-pulse-blue max-w-lg text-center">
          <h3 className="text-xl font-semibold text-neon-green mb-3 font-heading">
            Drop a Line
          </h3>
          <p className="text-lg text-text-light font-mono mb-2">
            Email: <span className="text-neon-blue">kenza.lbasri@example.com</span>
          </p>
          <p className="text-lg text-text-light font-mono">
            GitHub: <span className="text-neon-blue">github.com/kenzalbasri</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
