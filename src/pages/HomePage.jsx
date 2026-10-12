import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Github, Linkedin, Sparkles } from 'lucide-react';
import DynamicIcon from '../components/DynamicIcon';
import {
  labDirectoryCards,
  studentDetails,
  studentProfile,
} from '../data/portfolioData';

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container page-container">
          <div className="intro-card">
            <div className="intro-card__top">
              <div className="intro-card__heading">
                <span className="eyebrow-pill">
                  Student Portfolio · {studentProfile.subjectCode}
                </span>
                <h1 className="intro-card__title">{studentProfile.name}</h1>
                <p className="intro-card__motto">
                  Data <span>•</span> Analysis <span>•</span> Insights{' '}
                  <span>•</span> Impact
                </p>
              </div>
              <div className="intro-card__cta">
                <Link to="/experiments" className="btn-clean btn-clean--primary">
                  <span>View Experiments</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={studentProfile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-clean btn-clean--outline"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href={studentProfile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-clean btn-clean--outline"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <dl className="intro-details">
              {studentDetails.map((detail) => (
                <div className="intro-detail-row" key={detail.label}>
                  <span className="intro-detail-row__icon">
                    <DynamicIcon name={detail.iconName} size={18} />
                  </span>
                  <div className="intro-detail-row__content">
                    <dt>{detail.label}</dt>
                    <dd>{detail.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section
        className="home-blogs-section page-container"
        aria-labelledby="explore-title"
      >
        <div className="home-blogs-header">
          <div>
            <span className="eyebrow-pill">
              <Sparkles size={13} /> Lab Directory
            </span>
            <h2 id="explore-title">Explore My Lab Workspace</h2>
          </div>
          <Link className="simple-link" to="/experiments">
            Browse experiments <ArrowRight size={16} />
          </Link>
        </div>

        <div className="simple-blogs-grid">
          {labDirectoryCards.map((card) => (
            <Link
              className="simple-blog-card"
              to={card.route}
              key={card.title}
            >
              <span className="simple-blog-card__icon">
                <DynamicIcon name={card.iconName} size={24} />
              </span>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <span className="simple-blog-card__arrow" aria-hidden="true">
                <ArrowRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
