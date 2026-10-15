import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ModulesPage from './pages/ModulesPage';
import ModuleDetailPage from './pages/ModuleDetailPage';
import ExperimentsPage from './pages/ExperimentsPage';
import ExperimentDetailPage from './pages/ExperimentDetailPage';
import ToolsPage from './pages/ToolsPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/modules/:id" element={<ModuleDetailPage />} />
          <Route path="/experiments" element={<ExperimentsPage />} />
          <Route path="/experiments/:id" element={<ExperimentDetailPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
