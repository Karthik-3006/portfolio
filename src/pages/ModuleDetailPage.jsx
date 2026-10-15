import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import DocumentViewer from '../components/DocumentViewer';
import NotFoundPage from './NotFoundPage';
import { modulesList } from '../data/portfolioData';

export default function ModuleDetailPage({ moduleId }) {
  const params = useParams();
  const id = moduleId ?? (params.id ? parseInt(params.id, 10) : null);
  const moduleItem = modulesList.find((item) => item.id === id);

  if (!moduleItem) return <NotFoundPage />;

  return (
    <section className="content-page experiment-page page-container">
      <Link className="back-link" to="/modules">
        <ArrowLeft size={16} /> All modules
      </Link>

      <header className="experiment-header-bar">
        <div>
          <span className="eyebrow-pill">
            Module {moduleItem.number} · Curriculum Guide
          </span>
          <h1>{moduleItem.title}</h1>
          <p style={{ margin: '6px 0 0', color: 'var(--text-muted)', fontSize: '14px' }}>
            {moduleItem.subtitle}
          </p>
        </div>
        {moduleItem.experimentRoute && (
          <Link
            className="btn-clean btn-clean--primary"
            to={moduleItem.experimentRoute}
          >
            <span>Related Lab Experiment</span>
            <ArrowUpRight size={15} />
          </Link>
        )}
      </header>

      <article className="document-panel">
        <DocumentViewer source={moduleItem.htmlSource} />
      </article>
    </section>
  );
}
