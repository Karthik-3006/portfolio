import { ArrowUpRight } from 'lucide-react';
import DynamicIcon from '../components/DynamicIcon';
import SectionHeading from '../components/SectionHeading';
import { toolsList } from '../data/portfolioData';

export default function ToolsPage() {
  return (
    <section className="content-page page-container">
      <SectionHeading
        eyebrow="Lab Toolkit"
        title="Tools & Technologies Powering Our Work"
        description="Software, Python libraries, and dataset references used across our laboratory experiments."
      />

      <div className="three-col-grid">
        {toolsList.map((tool) => {
          const cardContent = (
            <>
              <span className="tool-clean-card__icon">
                <DynamicIcon name={tool.iconName} size={22} />
              </span>
              <h2>{tool.name}</h2>
              <p>{tool.description}</p>
              {tool.website && (
                <ArrowUpRight className="tool-clean-card__arrow" size={17} />
              )}
            </>
          );

          return tool.website ? (
            <a
              className="tool-clean-card"
              href={tool.website}
              target="_blank"
              rel="noreferrer"
              key={tool.name}
            >
              {cardContent}
            </a>
          ) : (
            <article className="tool-clean-card" key={tool.name}>
              {cardContent}
            </article>
          );
        })}
      </div>
    </section>
  );
}
