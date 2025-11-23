import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import MeridianDetail from './pages/MeridianDetail';
import HandbookDetail from './pages/HandbookDetail';
import WorkshopDetail from './pages/WorkshopDetail';
import Themes from './pages/Themes';
import GalangalDetail from './pages/GalangalDetail';
import Shop from './pages/Shop';
import About from './pages/About';
import HerbPassport from './pages/HerbPassport';
import { LanguageProvider } from './contexts/LanguageContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
        <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans text-gray-800 selection:bg-herb-primary selection:text-white">
            <Navbar />
            <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/experience/handbook" element={<HandbookDetail />} />
                <Route path="/experience/meridian" element={<MeridianDetail />} />
                <Route path="/experience/workshop" element={<WorkshopDetail />} />
                <Route path="/themes" element={<Themes />} />
                <Route path="/themes/galangal" element={<GalangalDetail />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/herb-passport" element={<HerbPassport />} />
            </Routes>
            </main>
            <Footer />
        </div>
        </Router>
    </LanguageProvider>
  );
};

export default App;