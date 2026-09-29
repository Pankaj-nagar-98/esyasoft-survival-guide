import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import MobileDrawer from './components/layout/MobileDrawer';
import Footer from './components/layout/Footer';
import LightboxModal from './components/common/LightboxModal';
import CertificateModal from './components/common/CertificateModal';
import Chatbot from './components/common/Chatbot';

import HomePage from './pages/HomePage';
import AttendancePage from './pages/AttendancePage';
import RoadmapPage from './pages/RoadmapPage';
import CampusPage from './pages/CampusPage';
import EscapesPage from './pages/EscapesPage';
import GrievancePage from './pages/GrievancePage';
import InsightsPage from './pages/InsightsPage';
import FaqsPage from './pages/FaqsPage';
import LoginPage from './pages/LoginPage';

import { useModal } from './context/ModalContext';
import { useAuth } from './context/AuthContext';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const location = useLocation();
  const { toast } = useModal();
  const { isAuthenticated } = useAuth();

  const isLoginPage = location.pathname === '/login';

  // Standalone Login page view
  if (isLoginPage) {
    return (
      <>
        <ScrollToTop />
        <LoginPage />
        {/* Toast Notification Container */}
        {toast && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-slideIn">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div className="text-xs">
              <div className="font-bold">{toast.title}</div>
              {toast.message && <div className="text-slate-300 text-[11px]">{toast.message}</div>}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="bg-[#f6fbf8] dark:bg-[#080e0d] text-slate-800 dark:text-slate-100 min-h-screen relative antialiased selection:bg-emerald-500 selection:text-white flex flex-col justify-between transition-colors duration-200">
      <ScrollToTop />

      {/* Ambient Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 ambient-glow-1 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] ambient-glow-2 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-40 left-1/4 w-[35rem] h-[35rem] ambient-glow-1 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Enterprise Top Navigation */}
        <Navbar 
          onToggleMobileDrawer={() => setIsMobileDrawerOpen(prev => !prev)}
          isMobileDrawerOpen={isMobileDrawerOpen}
        />

        {/* Mobile Navigation Drawer */}
        <MobileDrawer 
          isOpen={isMobileDrawerOpen} 
          onClose={() => setIsMobileDrawerOpen(false)} 
        />

        {/* Main Application Container */}
        <main className="flex-1 pb-24">
          <div className="max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-6 sm:py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/attendance" element={<AttendancePage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/campus" element={<CampusPage />} />
              <Route path="/escapes" element={<EscapesPage />} />
              <Route path="/grievance" element={<GrievancePage />} />
              <Route path="/insight" element={<InsightsPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/faqs" element={<FaqsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>

        {/* Universal Modals & Helpers */}
        <LightboxModal />
        <CertificateModal />
        <Chatbot />

        {/* Toast Notification Container */}
        {toast && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-slideIn">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div className="text-xs">
              <div className="font-bold">{toast.title}</div>
              {toast.message && <div className="text-slate-300 text-[11px]">{toast.message}</div>}
            </div>
          </div>
        )}

        {/* Enterprise Footer */}
        <Footer />
      </div>
    </div>
  );
}
