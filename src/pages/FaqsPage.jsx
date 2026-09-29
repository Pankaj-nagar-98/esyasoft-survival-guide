import React, { useState } from 'react';
import { 
  HelpCircle, Search, Filter, MessageSquare, Fingerprint, 
  Zap, LifeBuoy, Clock, ShieldCheck, ChevronDown, ChevronRight, 
  ChevronUp, Mail, ShieldAlert, Shirt, Utensils, Users, Wifi, 
  Bus, HeartPulse
} from 'lucide-react';
import { ESYASOFT_DATA } from '../data/guideData';
import { Link } from 'react-router-dom';

export default function FaqsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFaqId, setExpandedFaqId] = useState(null);

  const getFaqIcon = (iconName) => {
    switch (iconName) {
      case 'fingerprint': return <Fingerprint className="w-4 h-4 text-emerald-600" />;
      case 'mail': return <Mail className="w-4 h-4 text-emerald-600" />;
      case 'shield-alert': return <ShieldAlert className="w-4 h-4 text-emerald-600" />;
      case 'shirt': return <Shirt className="w-4 h-4 text-emerald-600" />;
      case 'utensils': return <Utensils className="w-4 h-4 text-emerald-600" />;
      case 'users': return <Users className="w-4 h-4 text-emerald-600" />;
      case 'wifi': return <Wifi className="w-4 h-4 text-emerald-600" />;
      case 'bus': return <Bus className="w-4 h-4 text-emerald-600" />;
      case 'heart-pulse': return <HeartPulse className="w-4 h-4 text-emerald-600" />;
      default: return <HelpCircle className="w-4 h-4 text-emerald-600" />;
    }
  };

  const toggleFaq = (id) => {
    setExpandedFaqId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = ESYASOFT_DATA.faqs.filter(faq => {
    if (activeCategory !== 'all' && faq.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match = 
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.categoryName.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Breadcrumbs Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
        <Link to="/" className="hover:text-emerald-700 flex items-center gap-1 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-emerald-800 font-bold">Fresher Knowledge Base & FAQs</span>
      </nav>

      {/* Header & Search Grid */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800 uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-600" /> Essential Operations Playbook
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Fresher FAQs & Knowledge Base
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Direct answers to everyday questions: Zoho People regularisation, Microsoft Teams & Outlook etiquette, IT support, canteen timings, and Prabhu's compliance rules.
            </p>
          </div>

          {/* Instant Search Box */}
          <div className="lg:col-span-5">
            <div className="relative">
              <Search className="w-4 h-4 text-emerald-600 absolute left-3.5 top-3.5" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs by keyword (e.g. Zoho, Wi-Fi, salary, leaves, bus)..." 
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-emerald-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:bg-slate-900 transition-all shadow-inner"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1.5 pl-1">
              Realtime keyword filtering across all categories and answers.
            </p>
          </div>

        </div>

        {/* Category Filter Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-emerald-100 dark:border-slate-800">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-200 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-emerald-600" /> Filter Topics:
          </span>
          {[
            { id: 'all', label: 'All FAQs' },
            { id: 'zoho', label: 'Zoho & Attendance' },
            { id: 'tools', label: 'Outlook & Teams' },
            { id: 'campus', label: 'Campus & Canteen' },
            { id: 'training', label: 'Domain & Mentorship' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-emerald-800 border border-emerald-200 dark:border-slate-800 hover:bg-emerald-50 dark:bg-slate-800/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Layout: Accordion FAQs (8 cols) + Fast Shortcuts Sidebar (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT: Dynamic FAQs Accordion (lg:col-span-8) */}
        <div className="lg:col-span-8 space-y-4">
          
          <div className="space-y-3.5">
            {filteredFaqs.map((faq) => {
              const isExpanded = expandedFaqId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-emerald-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-emerald-50 dark:bg-slate-800/80/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200 dark:border-slate-800">
                        {getFaqIcon(faq.icon)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-bold block mb-1">
                          {faq.categoryName}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:text-slate-200 flex-shrink-0 mt-1">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-emerald-700" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-emerald-50 bg-emerald-50 dark:bg-slate-800/80/20">
                      <div 
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                        className="space-y-2 text-slate-700 dark:text-slate-200"
                      />
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="py-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-emerald-200 dark:border-slate-800 space-y-2">
                <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 dark:text-slate-400 flex items-center justify-center mx-auto">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-100">No matching questions found</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Try adjusting your search terms or filter selection.</p>
              </div>
            )}
          </div>

          {/* Helpful Assistance Callout Card */}
          <div className="p-6 rounded-3xl bg-emerald-50 dark:bg-slate-800/80/80 border border-emerald-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200 dark:border-slate-800 flex-shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Have an unlisted question or stuck on an internal tool?</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">Drop a message in our Batch 2026 Microsoft Teams channel or catch Prabhu at 11:00 AM on the training floor!</p>
              </div>
            </div>
            <Link 
              to="/attendance" 
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 flex items-center gap-1.5 flex-shrink-0 transition-colors shadow-sm"
            >
              <Fingerprint className="w-4 h-4" /> Check Biometrics
            </Link>
          </div>

        </div>

        {/* RIGHT: Quick Reference Toolbars & Escalation Links (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Quick Escalations Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-emerald-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>Quick Escalation Action</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              If your issue involves broken hardware, hostel room maintenance, cafeteria quality, or safety emergencies, file an official ticket directly:
            </p>
            <Link 
              to="/grievance" 
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"
            >
              <LifeBuoy className="w-4 h-4" />
              <span>Open Grievance Desk</span>
            </Link>
          </div>

          {/* Everyday Timings & Golden Rules Cheat-Sheet */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-emerald-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Campus Timings Cheat-Sheet</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-700 dark:text-slate-200 divide-y divide-emerald-50">
              <li className="pt-2 flex items-center justify-between">
                <span className="font-medium text-slate-600 dark:text-slate-300">Biometric Check-In</span>
                <span className="font-mono font-bold text-emerald-800">Before 09:00 AM</span>
              </li>
              <li className="pt-2 flex items-center justify-between">
                <span className="font-medium text-slate-600 dark:text-slate-300">Morning Coffee / Tea</span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-100">11:00 AM - 11:15 AM</span>
              </li>
              <li className="pt-2 flex items-center justify-between">
                <span className="font-medium text-slate-600 dark:text-slate-300">Cafeteria Lunch</span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-100">01:00 PM - 02:00 PM</span>
              </li>
              <li className="pt-2 flex items-center justify-between">
                <span className="font-medium text-slate-600 dark:text-slate-300">Evening Snacks & Chai</span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-100">04:30 PM - 04:45 PM</span>
              </li>
              <li className="pt-2 flex items-center justify-between">
                <span className="font-medium text-slate-600 dark:text-slate-300">Biometric Check-Out</span>
                <span className="font-mono font-bold text-emerald-800">After 06:00 PM</span>
              </li>
              <li className="pt-2 flex items-center justify-between">
                <span className="font-medium text-slate-600 dark:text-slate-300">Hostel Gates Curfew</span>
                <span className="font-mono font-bold text-amber-700">10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Golden Rule Callout */}
          <div className="bg-gradient-to-br from-emerald-800 to-teal-900 rounded-3xl p-6 text-white space-y-3 shadow-md">
            <div className="flex items-center gap-2 text-emerald-300 font-mono text-[10px] uppercase font-bold tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> The Golden Compliance Rule
            </div>
            <blockquote className="text-sm font-semibold italic text-emerald-100 leading-snug">
              "If you forgot to check in check out you won't get salary!"
            </blockquote>
            <p className="text-[11px] text-emerald-200/90 leading-relaxed">
              Biometric records sync daily to the Zoho People backend. Maintain a 100% clean punch sheet to avoid mandatory regularisation approvals.
            </p>
            <div className="pt-1">
              <Link 
                to="/attendance" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-emerald-200 underline underline-offset-2"
              >
                Launch Attendance Terminal →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
