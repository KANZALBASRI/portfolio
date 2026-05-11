import SectionHeader from './SectionHeader';
import { useInView } from 'react-intersection-observer';

const skillsData = {
  "Networking": ["TCP/IP", "Firewalls", "Wireshark", "Nmap"],
  "Linux Systems": ["Bash Scripting", "Ubuntu", "Kali Linux", "System Hardening"],
  "Penetration Testing": ["Metasploit", "Burp Suite", "OWASP Top 10", "OSINT"],
  "Vulnerability Research": ["CVE Analysis", "Exploit Development (basic)"],
  "Tools & Languages": ["Python", "SIEM", "VirtualBox", "Docker", "Git"]
};

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="bg-gray-900 text-text-light">
      <SectionHeader title="My Skills" subtitle="Tools & Technologies in My Arsenal" />
      <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 ${inView ? 'animate-fade-in' : ''}`}>
        {Object.entries(skillsData).map(([category, skills], index) => (
          <div
            key={category}
            className="terminal-border p-6 bg-bg-primary bg-opacity-80 backdrop-blur-sm rounded-lg hover:animate-border-pulse-green"
          >
            <h3 className="text-xl font-semibold text-neon-blue mb-4 font-heading flex items-center">
              <span className="mr-2 text-neon-green">{`0${index + 1}.`}</span> {category}
            </h3>
            <ul className="list-disc list-inside text-text-light space-y-2 font-mono">
              {skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center">
                  <span className="text-neon-green mr-2">{'>'}</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
