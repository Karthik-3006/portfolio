import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import DocumentViewer from '../components/DocumentViewer';
import NotFoundPage from './NotFoundPage';
import { experimentsList } from '../data/portfolioData';

export default function ExperimentDetailPage({ experimentId }) {
  const params = useParams();
  const id = experimentId ?? (params.id ? parseInt(params.id, 10) : null);
  const experiment = experimentsList.find((item) => item.id === id);

  if (!experiment) return <NotFoundPage />;

  return (
    <section className="content-page experiment-page page-container">
      <Link className="back-link" to="/experiments">
        <ArrowLeft size={16} /> All experiments
      </Link>

      <header className="experiment-header-bar">
        <div>
          <span className="eyebrow-pill">
            Experiment {experiment.id.toString().padStart(2, '0')}
          </span>
          <h1>{experiment.title}</h1>
        </div>
        {!experiment.isEmpty && experiment.downloadUrl && (
          <a
            className="btn-clean btn-clean--primary"
            href={experiment.downloadUrl}
            download={experiment.sourceFile}
          >
            <Download size={16} />
            <span>Download Experiment {experiment.id}</span>
          </a>
        )}
      </header>

      <article className="document-panel">
        {experiment.isEmpty ? (
          <div className="empty-experiment-state">
            <span className="empty-experiment-icon">
              <FileText size={42} />
            </span>
            <h2>Experiment Slot Empty</h2>
            <p>
              Experiment {experiment.id.toString().padStart(2, '0')} is currently
              empty. No lab documents or solution programs have been uploaded
              yet for this practical session.
            </p>
            <Link className="btn-clean btn-clean--primary" to="/experiments">
              <ArrowLeft size={16} /> Back to Experiments
            </Link>
          </div>
        ) : (
          <DocumentViewer source={experiment.htmlSource} />
        )}
      </article>
    </section>
  );
}
