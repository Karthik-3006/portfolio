import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, User } from 'lucide-react';
import { studentProfile } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner page-container">
        <p>
          <strong>{studentProfile.subjectTitle}</strong> <span>·</span>{' '}
          {studentProfile.name} ({studentProfile.rollNo})
        </p>
        <div className="social-links">
          <Link to="/about" className="social-link">
            <User size={15} />
            <span>About</span>
          </Link>
          <a
            href={studentProfile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="GitHub profile"
          >
            <Github size={15} />
            <span>GitHub</span>
            <ArrowUpRight size={13} />
          </a>
          <a
            href={studentProfile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={15} />
            <span>LinkedIn</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
