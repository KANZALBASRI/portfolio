import SectionHeader from './SectionHeader';
import { useInView } from 'react-intersection-observer';

const experienceData = [
  {
    title: "CompTIA Security+",
    status: "In Progress (Studying for SY0-601)",
    description: "Actively studying for the CompTIA Security+ certification to validate foundational cybersecurity skills in risk management, incident response, forensics, enterprise networks, and hybrid/cloud operations.",
    icon: "🎓"
  },
  {
    title: "TryHackMe & Hack The Box Labs",
    status: "Ongoing Engagements (Various Completions)",
    description: "Regularly participating in hands-on labs on platforms like TryHackMe and Hack The Box to practice penetration testing, reverse engineering, exploit development, and defensive security techniques.",
    icon: "💻"
  },
  {
    title: "University Coursework",
    status: "Cybersecurity Program",
    description: "Core academic studies include Network Security, Cryptography, Operating Systems, Database Security, and Secure Software Development.",
    icon: "📚"
  },
  {
    title: "Capture The Flag (CTF) Events",
    status: "Participant",
    description: "Engaging in local and online CTF competitions to sharpen problem-solving skills in cryptography, web exploitation, forensics, and binary analysis.",
    icon: "🏆"
  }
];

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="bg-gray-900 text-text-light">
      <SectionHeader title="Experience & Learning" subtitle="My Journey in Cybersecurity" />
      <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0 ${inView ? 'animate-fade-in' : ''}`}>
        {experienceData.map((item, index) => (
          <div key={index} className="terminal-border p-6 bg-bg-primary bg-opacity-80 backdrop-blur-sm rounded-lg hover:animate-border-pulse-green">
            <div className="flex items-center mb-3">
              <span className="text-4xl mr-4">{item.icon}</span>
              <div>
                <h3 className="text-xl font-semibold text-neon-blue font-heading">{item.title}</h3>
                <p className="text-sm text-neon-green font-mono">{item.status}</p>
              </div>
            </div>
            <p className="text-text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
