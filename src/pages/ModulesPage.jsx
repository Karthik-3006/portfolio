import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';
import DynamicIcon from '../components/DynamicIcon';
import SectionHeading from '../components/SectionHeading';
import { modulesList } from '../data/portfolioData';

export default function ModulesPage() {
  return (
    <section className="content-page page-container">
      <SectionHeading
        eyebrow="Coursework Curriculum"
        title="What We Learn in the Lab & Theory"
        description="Explore the 5 comprehensive 30-page academic study modules covering Data Science foundations, interpretation, feature engineering, ensemble modeling, and dimensionality reduction."
      />

      <div className="two-col-grid">
        {modulesList.map((mod) => (
          <article className="clean-page-card" key={mod.number}>
            <div className="clean-page-card__top">
              <span className="eyebrow-pill">Module {mod.number}</span>
              <span className="clean-page-card__icon">
                <DynamicIcon name={mod.iconName} size={22} />
              </span>
            </div>
            <h2>{mod.title}</h2>
            <p className="clean-page-card__subtitle">{mod.subtitle}</p>
            <p>{mod.description}</p>
            <ul className="clean-topic-list">
              {mod.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <div className="clean-page-card__actions">
              <Link className="btn-clean btn-clean--primary" to={mod.route}>
                <BookOpen size={16} />
                <span>Read Module Guide</span>
                <ArrowRight size={15} />
              </Link>
              {mod.experimentRoute && (
                <Link
                  className="btn-clean btn-clean--outline"
                  to={mod.experimentRoute}
                >
                  <span>Related Lab Exp</span>
                  <ArrowUpRight size={14} />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
