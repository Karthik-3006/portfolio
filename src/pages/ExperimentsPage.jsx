import { Link } from 'react-router-dom';
import { ArrowRight, Download, FileQuestion } from 'lucide-react';
import DynamicIcon from '../components/DynamicIcon';
import SectionHeading from '../components/SectionHeading';
import { experimentsList } from '../data/portfolioData';

export default function ExperimentsPage() {
  return (
    <section className="content-page page-container">
      <SectionHeading
        eyebrow="Practical Work"
        title="Hands-On Lab Experiments"
        description="Open each experiment below to read the complete lab document and Python code directly on this site."
      />

      <div className="two-col-grid">
        {experimentsList.map((exp) => (
          <article
            className={`clean-page-card clean-page-card--experiment ${
              exp.isEmpty ? 'clean-page-card--empty' : ''
            }`}
            key={exp.id}
          >
            <div className="clean-page-card__top">
              <span className="eyebrow-pill">
                Experiment {exp.id.toString().padStart(2, '0')}
              </span>
              <span className="clean-page-card__icon">
                {exp.isEmpty ? (
                  <FileQuestion size={22} />
                ) : (
                  <DynamicIcon name={exp.iconName} size={22} />
                )}
              </span>
            </div>
            <h2>{exp.title}</h2>
            <p>{exp.description}</p>
            <div className="clean-page-card__actions">
              <Link className="btn-clean btn-clean--primary" to={exp.route}>
                <span>{exp.isEmpty ? 'View Slot' : 'Open Experiment'}</span>
                <ArrowRight size={16} />
              </Link>
              {!exp.isEmpty && exp.downloadUrl && (
                <a
                  className="btn-clean btn-clean--outline"
                  href={exp.downloadUrl}
                  download={exp.sourceFile}
                >
                  <Download size={15} />
                  <span>Download .docx</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
