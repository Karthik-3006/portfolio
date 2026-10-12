import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="not-found page-container">
      <span className="eyebrow-pill">Page not found</span>
      <h1>This page isn&apos;t in the lab notebook.</h1>
      <Link className="btn-clean btn-clean--primary" to="/">
        Return home
      </Link>
    </section>
  );
}
