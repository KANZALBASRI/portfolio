import SectionHeader from './SectionHeader';
import Button from './Button';
import { useInView } from 'react-intersection-observer';

const projectsData = [
  {
    title: "Automated Network Scanner",
    description: "Developed a Python-based network scanner using Scapy to discover active hosts, open ports, and identify services. Features include SYN scan, UDP scan, and OS detection.",
    technologies: ["Python", "Scapy", "Nmap", "Bash"],
    link: "https://github.com/kenzalbasri/network-scanner",
  },
  {
    title: "Web Vulnerability Exploitation Lab",
    description: "Setup a vulnerable web application (DVWA/OWASP Juice Shop) in a Dockerized environment and exploited common vulnerabilities like SQL Injection, XSS, and CSRF. Documented exploitation steps and mitigation strategies.",
    technologies: ["Docker", "OWASP Top 10", "SQLi", "XSS", "Burp Suite"],
    link: "https://github.com/kenzalbasri/web-exploitation-lab",
  },
  {
    title: "Linux Privilege Escalation Cheatsheet & Labs",
    description: "Curated a comprehensive cheatsheet for Linux privilege escalation techniques (e.g., SUID, cron jobs, kernel exploits) and built a series of vulnerable VMs to practice these methods.",
    technologies: ["Kali Linux", "Bash", "Kernel Exploits", "CTF Challenges"],
    link: "https://github.com/kenzalbasri/linux-privesc",
  },
  {
    title: "SIEM Log Analysis & Alerting",
    description: "Configured a mock SIEM (ELK Stack) to ingest logs from various sources, created custom dashboards for threat visualization, and setup alerting rules for suspicious activities.",
    technologies: ["Elasticsearch", "Logstash", "Kibana", "Syslog", "IDS/IPS"],
    link: "https://github.com/kenzalbasri/siem-project",
  }
];

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="bg-bg-primary text-text-light">
      <SectionHeader title="My Projects" subtitle="Hands-on Experience in Cybersecurity" />
      <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 ${inView ? 'animate-fade-in' : ''}`}>
        {projectsData.map((project, index) => (
          <div key={index} className="terminal-border p-6 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-lg flex flex-col justify-between hover:animate-border-pulse-blue">
            <div>
              <h3 className="text-2xl font-semibold text-neon-green mb-3 font-heading">
                {project.title}
              </h3>
              <p className="text-text-muted mb-4 text-lg">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-800 text-neon-blue text-sm px-3 py-1 rounded-full font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <Button href={project.link} variant="secondary" className="mt-auto">
              View Project
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
