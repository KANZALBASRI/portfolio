import Button from './Button';
import TypewriterEffect from 'react-typewriter-effect';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary to-gray-900 opacity-70"></div>
      <div className="relative z-10 max-w-4xl px-4 animate-fade-in" ref={ref}>
        <h1 className="text-5xl md:text-7xl font-bold text-text-light font-heading mb-4 leading-tight">
          Hi, I'm <span className="text-neon-green animate-pulse-light">Kenza Lbasri</span>
        </h1>
        <h2 className="text-2xl md:text-4xl text-neon-blue font-mono mb-6">
          <TypewriterEffect
            textStyle={{ fontFamily: 'Roboto Mono', fontSize: '1em' }}
            startDelay={1000}
            cursorColor="#39FF14"
            multiText={[
              'Cybersecurity Student | Ethical Hacker',
              'Securing the digital frontier, one vulnerability at a time.'
            ]}
            multiTextDelay={3000}
            typeSpeed={50}
            hideCursorAfterText={false}
          />
        </h2>
        <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          Passionate about offensive & defensive security, eager to protect and innovate in the digital realm.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button onClick={() => document.getElementById('projects').scrollIntoView()}>
            View Projects
          </Button>
          <Button variant="secondary" onClick={() => document.getElementById('contact').scrollIntoView()}>
            Contact Me
          </Button>
        </div>
      </div>
      {/* Subtle cyber grid/lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#222" strokeWidth="1"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"></rect>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
