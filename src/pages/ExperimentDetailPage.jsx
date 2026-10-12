import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import DocumentViewer from '../components/DocumentViewer';
import { experimentsList } from '../data/portfolioData';

export default function ExperimentDetailPage({ experimentId }) {
  const experiment = experimentsList.find((item) => item.id === experimentId);

  if (!experiment) return null;

  return (
    <section className="content-page experiment-page page-container">
      <Link className="back-link" to="/experiments">
        <ArrowLeft size={16} /> All experiments
      </Link>

      <header className="experiment-header-bar">
        <div>
          <span className="eyebrow-pill">Experiment 0{experiment.id}</span>
          <h1>{experiment.title}</h1>
        </div>
        <a
          className="btn-clean btn-clean--primary"
          href={experiment.downloadUrl}
          download={experiment.sourceFile}
        >
          <Download size={16} />
          <span>Download Experiment {experiment.id}</span>
        </a>
      </header>

      <article className="document-panel">
        <DocumentViewer source={experiment.htmlSource} />
      </article>
    </section>
  );
}
