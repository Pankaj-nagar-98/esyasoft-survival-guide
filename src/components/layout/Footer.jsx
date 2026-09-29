import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  X, 
  FileText, 
  ShieldCheck, 
  Award, 
  Building2, 
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { useModal } from '../../context/ModalContext';

function InstagramIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function YoutubeIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function LinkedinIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function TwitterIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useModal();

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'downloads' | 'media-kit' | 'epc' | 'awards' | 'policy'
  const [activePolicyType, setActivePolicyType] = useState('privacy'); // 'privacy' | 'disclaimer' | 'governance' | 'terms' | 'cookies'

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Invalid Email', 'Please enter a valid business email address.');
      return;
    }
    setSubscribed(true);
    showToast('Subscribed!', 'Thank you for subscribing to Esyasoft Global Intelligence Wire.');
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const handleScrollToSection = (sectionId, targetPath = '/') => {
    if (location.pathname !== targetPath) {
      navigate(targetPath);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPolicy = (type) => {
    setActivePolicyType(type);
    setActiveModal('policy');
  };

  return (
    <footer className="bg-[#0e1326] text-slate-300 border-t border-slate-800 transition-colors">
      <div className="max-w-[1550px] mx-auto px-5 sm:px-10 lg:px-12 py-8 sm:py-9 space-y-7">
        
        {/* TOP ROW: LOGO & 3 LINK COLUMNS */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-12">
          
          {/* Left: Brand Identity */}
          <div className="space-y-3 max-w-sm">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <img 
                src="assets/esyasoft-icon.png" 
                alt="Esyasoft" 
                className="w-8 h-8 object-contain group-hover:scale-105 transition-transform" 
              />
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans lowercase">
                esyasoft
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Solution for a smart and connected world. Pioneering clean energy, smart grids, and utility AI across 50M+ endpoints globally.
            </p>
          </div>

          {/* Right: 3 Columns (Our Business, Insights, About us) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 lg:gap-14 flex-shrink-0 text-xs sm:text-[13px]">
            
            {/* Column 1: Our Business */}
            <div className="space-y-2.5">
              <h4 className="text-sm font-bold text-white tracking-tight">Our Business</h4>
              <ul className="space-y-1.5 text-slate-300">
                <li>
                  <button 
                    onClick={() => handleScrollToSection('verticals')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Smart Utility Solutions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleScrollToSection('verticals')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Software, Analytics &amp; AI
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleScrollToSection('verticals')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Energy as a Service
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleScrollToSection('verticals')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Battery Energy Storage Systems (BESS)
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleScrollToSection('verticals')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    e-Mobility
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Insights */}
            <div className="space-y-2.5">
              <h4 className="text-sm font-bold text-white tracking-tight">Insights</h4>
              <ul className="space-y-1.5 text-slate-300">
                <li>
                  <Link to="/insight" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/insight#jvs-section" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/insight#feed-section" className="hover:text-white transition-colors">
                    Articles
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveModal('downloads')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Download Center
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveModal('media-kit')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Media Kit
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveModal('epc')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Engineering, Procurement &amp; Construction (EPC)
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: About us */}
            <div className="space-y-2.5 col-span-2 sm:col-span-1">
              <h4 className="text-sm font-bold text-white tracking-tight">About us</h4>
              <ul className="space-y-1.5 text-slate-300">
                <li>
                  <button 
                    onClick={() => handleScrollToSection('pillars')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Vision
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleScrollToSection('pillars')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Commitments
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveModal('awards')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Awards &amp; Recognitions
                  </button>
                </li>
                <li>
                  <Link to="/campus" className="hover:text-white transition-colors">
                    Innovation Hubs
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* MIDDLE SECTION: SUBSCRIBE TO OUR NEWSLETTER */}
        <div className="space-y-3 py-1">
          <h3 className="text-base sm:text-lg font-bold text-white text-center tracking-tight">
            Subscribe to our newsletter
          </h3>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto relative flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address*"
              required
              className="w-full pl-5 pr-36 py-2.5 rounded-full bg-[#161d36] border border-slate-700/80 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#8cb83a] focus:ring-1 focus:ring-[#8cb83a] transition-all shadow-inner"
            />
            <button
              type="submit"
              className="absolute right-1 px-5 py-2 rounded-full bg-[#8cb83a] hover:bg-[#7ba333] text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <span>{subscribed ? 'Subscribed' : 'Subscribe'}</span>
              <span className="w-4 h-4 rounded-full border border-white/60 flex items-center justify-center">
                <ArrowRight className="w-2.5 h-2.5" />
              </span>
            </button>
          </form>

          {subscribed && (
            <p className="text-center text-[11px] font-mono text-emerald-400 animate-fadeIn">
              ✓ You are now subscribed to the official Esyasoft Intelligence Wire.
            </p>
          )}
        </div>

        {/* CONNECT WITH US STRIP */}
        <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
          <span className="text-slate-300 font-bold">Connect with us:</span>
          <div className="flex items-center gap-2.5">
            <a 
              href="https://www.linkedin.com/company/esyasoft-technologies/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-slate-800/90 hover:bg-[#0077b5] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-sm"
              title="Official Esyasoft LinkedIn Page"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://www.youtube.com/@EsyasoftTechnologies" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-slate-800/90 hover:bg-[#ff0000] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-sm"
              title="Official Esyasoft YouTube Channel"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://twitter.com/esyasoft" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-slate-800/90 hover:bg-[#1da1f2] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-sm"
              title="Official Esyasoft Twitter / X Profile"
              aria-label="Twitter / X"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/esyasoft/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-slate-800/90 hover:bg-[#e4405f] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-sm"
              title="Official Esyasoft Instagram Page"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://www.facebook.com/esyasoft/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-slate-800/90 hover:bg-[#1877f2] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-sm"
              title="Official Esyasoft Facebook Page"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* DIVIDER LINE */}
        <div className="border-t border-slate-800/80" />

        {/* BOTTOM POLICY & COPYRIGHT BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 font-sans">
          
          {/* Left: Policy links */}
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <button 
              onClick={() => openPolicy('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => openPolicy('disclaimer')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
            <button 
              onClick={() => openPolicy('governance')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Reports, Policies &amp; Governance
            </button>
            <button 
              onClick={() => openPolicy('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <button 
              onClick={() => openPolicy('cookies')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cookie settings
            </button>
          </div>

          {/* Right: Copyright notice (Exact from user reference photo) */}
          <div className="font-mono text-slate-400 text-center md:text-right">
            Copyrights © 2026. All Rights Reserved by Esyasoft. VU.1.1.7
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* WORKING MODALS: DOWNLOAD CENTER, MEDIA KIT, EPC, AWARDS & POLICIES */}
      {/* ========================================================================= */}

      {/* 1. DOWNLOAD CENTER MODAL */}
      {activeModal === 'downloads' && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full border border-slate-200 dark:border-slate-800 p-6 space-y-5 shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Download Center</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Esyasoft Corporate Profile 2026', desc: 'Global transactions, IHC Abu Dhabi backing & JV architectures', size: '4.2 MB PDF' },
                { title: 'AMI & DLMS/COSEM Engineering Whitepaper', desc: 'Technical telemetry architecture for 50M+ smart endpoints', size: '6.8 MB PDF' },
                { title: 'Tesla 15 GWh BESS Global Deployment Brief', desc: 'Grid firming, battery management & frequency regulation', size: '3.1 MB PDF' },
                { title: 'Batch 2026 Induction & Campus Operations Handbook', desc: '90-day learning roadmap, Mangaluru centre logistics & IT policies', size: '2.5 MB PDF' }
              ].map((doc, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">{doc.title}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{doc.desc}</p>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">{doc.size}</span>
                  </div>
                  <button
                    onClick={() => showToast('Download Started', `Downloading: ${doc.title}`)}
                    className="p-2 rounded-xl bg-white dark:bg-slate-700 hover:bg-emerald-600 hover:text-white text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 transition-colors cursor-pointer shadow-2xs"
                    title="Download document"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. MEDIA KIT MODAL */}
      {activeModal === 'media-kit' && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Media Kit &amp; Brand Assets</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Access official Esyasoft vector logotypes, brand color guidelines, executive portraits, and approved corporate boilerplate copy for global press.
            </p>
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2 text-xs">
              <div className="font-bold text-emerald-900 dark:text-emerald-300">Global Press Inquiries</div>
              <div className="text-slate-600 dark:text-slate-400 font-mono text-[11px]">press@esyasoft.com • corporate.comms@esyasoft.com</div>
            </div>
            <button
              onClick={() => showToast('Media Kit Downloaded', 'Official Esyasoft Brand Assets Package (ZIP) downloaded.')}
              className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Brand Package (18 MB ZIP)</span>
            </button>
          </div>
        </div>
      )}

      {/* 3. EPC & UTILITY CAPABILITIES MODAL */}
      {activeModal === 'epc' && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Engineering, Procurement &amp; Construction</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Esyasoft EPC delivers turnkey utility infrastructure—ranging from national smart meter rollouts and substation automation to high-voltage battery storage installations and DC fast-charging plazas across India, GCC, and the UK.
            </p>
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 text-xs font-mono space-y-1">
              <div className="text-slate-400 uppercase text-[10px]">Scale &amp; Coverage</div>
              <div className="font-bold text-emerald-600 dark:text-emerald-400">Over 50M endpoints contracted under RDSS &amp; global utility concessions.</div>
            </div>
          </div>
        </div>
      )}

      {/* 4. AWARDS & RECOGNITIONS MODAL */}
      {activeModal === 'awards' && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Awards &amp; Recognitions</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="font-bold text-slate-900 dark:text-white">Baku Energy Week Gen-AI Alliance Citation (2024)</div>
                <div className="text-slate-500 text-[11px] mt-0.5">Honored alongside Presight AI for pioneering Gen-AI in gas and electricity utility operations.</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="font-bold text-slate-900 dark:text-white">Smart Metering Company of the Year</div>
                <div className="text-slate-500 text-[11px] mt-0.5">Recognized for deploying multi-million DLMS/COSEM endpoint solutions across Indian Discoms.</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="font-bold text-slate-900 dark:text-white">International Holding Company (IHC) Portfolio Star</div>
                <div className="text-slate-500 text-[11px] mt-0.5">Sirius International strategic backing for cross-border clean tech and BESS scalability.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. LEGAL & COMPLIANCE MODAL */}
      {activeModal === 'policy' && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white capitalize">
                  {activePolicyType === 'privacy' && 'Privacy Policy'}
                  {activePolicyType === 'disclaimer' && 'Disclaimer'}
                  {activePolicyType === 'governance' && 'Reports, Policies & Governance'}
                  {activePolicyType === 'terms' && 'Terms of Use'}
                  {activePolicyType === 'cookies' && 'Cookie Settings'}
                </h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans space-y-3 max-h-[60vh] overflow-y-auto pr-1">
              {activePolicyType === 'privacy' && (
                <>
                  <p>Esyasoft Holding Limited is committed to protecting your personal data and confidentiality across all international operational jurisdictions including the UAE, UK, EU, and India.</p>
                  <p>Telemetry collected through our smart metering and IoT endpoints adheres to strict ISO/IEC 27001 data protection standards and GDPR protocols. We do not sell or monetize employee or customer telemetry.</p>
                </>
              )}
              {activePolicyType === 'disclaimer' && (
                <>
                  <p>The information on this employee portal is provided for internal onboarding, training, and operational coordination for Batch 2026 and visiting delegates at GCC Mangaluru.</p>
                  <p>Financial and transaction metrics are accurate as of corporate filings in September 2026. Forward-looking project statements are subject to utility concession milestones.</p>
                </>
              )}
              {activePolicyType === 'governance' && (
                <>
                  <p>Esyasoft operates with highest standards of transparency, backed by International Holding Company (IHC) via Sirius International Holding.</p>
                  <p>Our audit and ethics committee ensures strict ESG adherence, anti-bribery governance, and full compliance with regional utility regulatory boards.</p>
                </>
              )}
              {activePolicyType === 'terms' && (
                <>
                  <p>Access to the Esyasoft Survival &amp; Smart Employee Hub is granted exclusively to authorized personnel, engineers, and registered partners.</p>
                  <p>Misuse of biometric simulators, network credentials, or proprietary DLMS/COSEM test beds is strictly prohibited under employee conduct agreements.</p>
                </>
              )}
              {activePolicyType === 'cookies' && (
                <>
                  <p>We use essential functional cookies to preserve your theme preference (Dark/Light), active onboarding role, and biometric simulation state.</p>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <span>Essential Functional Cookies:</span>
                    <span className="font-bold text-emerald-600">Enabled (Mandatory)</span>
                  </div>
                </>
              )}
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
