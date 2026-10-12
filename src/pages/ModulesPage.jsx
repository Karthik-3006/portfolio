import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import DynamicIcon from '../components/DynamicIcon';
import SectionHeading from '../components/SectionHeading';
import { modulesList } from '../data/portfolioData';

export default function ModulesPage() {
  return (
    <section className="content-page page-container">
      <SectionHeading
        eyebrow="Coursework"
        title="What We Learn in the Lab"
        description="The topics below follow our Data Wrangling and Data Visualization laboratory modules."
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
            <p>{mod.description}</p>
            <ul className="clean-topic-list">
              {mod.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <Link className="clean-card-link" to={mod.experimentRoute}>
              Read related experiment <ArrowUpRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
