import { ArrowUpRight, Github, GraduationCap, Linkedin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { studentDetails, studentProfile } from '../data/portfolioData';

export default function AboutPage() {
  return (
    <section className="content-page page-container">
      <SectionHeading
        eyebrow="Student Profile"
        title="About Me & This Lab Portfolio"
        description="My academic details at Mohan Babu University and an overview of our Data Science Laboratory coursework."
      />

      <div className="about-panel">
        <div className="about-panel__header">
          <div className="about-panel__identity">
            <div className="about-panel__monogram" aria-hidden="true">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3>{studentProfile.name}</h3>
              <span className="about-panel__badge">
                {studentProfile.rollNo} · Section {studentProfile.section}
              </span>
            </div>
          </div>

          <div className="about-panel__actions">
            <a
              href={studentProfile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-clean btn-clean--primary"
            >
              <Linkedin size={16} />
              <span>LinkedIn Profile</span>
              <ArrowUpRight size={14} />
            </a>
            <a
              href={studentProfile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-clean btn-clean--outline"
            >
              <Github size={16} />
              <span>GitHub Profile</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="about-panel__body">
          <p className="about-panel__bio">{studentProfile.shortBio}</p>

          <dl className="about-info-grid">
            {studentDetails.map((item) => (
              <div className="about-info-item" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
