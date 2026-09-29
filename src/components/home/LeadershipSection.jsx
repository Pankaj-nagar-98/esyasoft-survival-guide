import React, { useState } from 'react';
import { 
  Users, 
  Mail, 
  ExternalLink, 
  Search, 
  Briefcase, 
  Globe2, 
  Building2,
  Copy,
  Check,
  Award,
  Sparkles,
  ChevronRight,
  X
} from 'lucide-react';
import { LEADERS_DATA, LEADERSHIP_CATEGORIES } from '../../data/leadersData';

function LinkedInIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

export default function LeadershipSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(null);
  const [selectedLeader, setSelectedLeader] = useState(null);

  const handleCopyEmail = (email) => {
    if (!email) return;
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const filteredLeaders = LEADERS_DATA.filter((leader) => {
    const matchesTab = activeTab === 'all' || leader.category === activeTab;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = !q || 
      leader.name.toLowerCase().includes(q) ||
      leader.role.toLowerCase().includes(q) ||
      leader.categoryLabel.toLowerCase().includes(q);
    return matchesTab && matchesSearch;
  });

  const executiveBoard = LEADERS_DATA.filter(l => l.category === 'executive');

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <section className="space-y-8 pt-4">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 uppercase tracking-wider mb-2">
            <Users className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Global Executive Council</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <span>Leadership &amp; Global Executive Team</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            The visionary executives, business unit directors, and regional heads steering Esyasoft Holding across smart grids, IoT utilities, and clean energy transitions worldwide.
          </p>
        </div>

        {/* Search input for leaders */}
        <div className="relative min-w-[260px] self-start md:self-auto">
          <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search leaders by name or title..."
            className="w-full pl-9 pr-3 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs transition-all"
          />
        </div>
      </div>

      {/* Category Tabs Bar */}
      <div className="flex flex-wrap items-center gap-2">
        {LEADERSHIP_CATEGORIES.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs font-bold'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                isActive 
                  ? 'bg-white/20 text-white' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Leaders Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredLeaders.map((leader) => {
          const isCEO = leader.id === 'bipin-chandra';
          return (
            <div
              key={leader.id}
              onClick={() => setSelectedLeader(leader)}
              className={`group bg-white dark:bg-slate-900 rounded-3xl p-5 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden cursor-pointer ${
                isCEO
                  ? 'border-amber-400/80 dark:border-amber-500/60 shadow-md hover:shadow-xl ring-1 ring-amber-400/20'
                  : 'border-slate-200/90 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600 shadow-xs hover:shadow-lg'
              }`}
            >
              <div>
                {/* Photo or Initials Monogram Frame */}
                <div className="relative mb-4 h-52 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center group-hover:shadow-inner transition-all">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextElementSibling) {
                          e.target.nextElementSibling.style.display = 'flex';
                        }
                      }}
                    />
                  ) : null}

                  {/* Fallback Monogram Avatar */}
                  <div 
                    className={`w-full h-full bg-gradient-to-br from-emerald-800 to-slate-900 text-white flex flex-col items-center justify-center p-4 text-center ${leader.image ? 'hidden' : 'flex'}`}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-600/40 border border-emerald-400/30 flex items-center justify-center text-xl font-bold font-mono tracking-widest text-emerald-200 mb-2 shadow-inner">
                      {getInitials(leader.name)}
                    </div>
                    <span className="text-[11px] font-mono text-emerald-300/80">Executive Leadership</span>
                  </div>

                  {/* Category Pill Tag Overlay */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-950/85 backdrop-blur-md text-emerald-300 border border-emerald-500/30 shadow-xs flex items-center gap-1">
                    {isCEO && <Sparkles className="w-3 h-3 text-amber-400" />}
                    <span>{leader.categoryLabel}</span>
                  </div>
                </div>

                {/* Identity & Role */}
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono">
                    {leader.role}
                  </div>
                </div>
              </div>

              {/* Action Links Bar */}
              <div 
                className="pt-3 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Email Action */}
                {leader.email ? (
                  <button
                    type="button"
                    onClick={() => handleCopyEmail(leader.email)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-mono bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-emerald-700 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700 shadow-2xs"
                    title={`Copy ${leader.email}`}
                  >
                    {copiedEmail === leader.email ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-[10px] font-bold text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-3 h-3 text-slate-400" />
                        <span className="text-[10px] truncate max-w-[120px]">Email</span>
                      </>
                    )}
                  </button>
                ) : (
                  <span className="text-[10px] font-mono text-slate-400 italic">Official Inquiries</span>
                )}

                {/* LinkedIn Action */}
                {leader.linkedin && (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-[#0077b5] dark:text-[#38a0dc] transition-all border border-[#0077b5]/30 cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
                    title={`${leader.name} on LinkedIn`}
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 text-[#0077b5]" />
                    <span className="text-[11px] font-bold">LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredLeaders.length === 0 && (
        <div className="py-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2">
          <Users className="w-8 h-8 text-slate-400 mx-auto" />
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200">No leaders found</div>
          <p className="text-[11px] text-slate-500 font-mono">Try searching with a different name or role.</p>
        </div>
      )}

      {/* Leader Focus Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-5 animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                {selectedLeader.categoryLabel}
              </span>
              <button
                type="button"
                onClick={() => setSelectedLeader(null)}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex-shrink-0">
                {selectedLeader.image ? (
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'assets/header-hero-bg.jpg'; }}
                  />
                ) : (
                  <div className="w-full h-full bg-emerald-800 text-white flex items-center justify-center font-bold text-lg">
                    {getInitials(selectedLeader.name)}
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {selectedLeader.name}
                </h3>
                <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 font-mono">
                  {selectedLeader.role}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  Esyasoft Holding Limited
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
              {selectedLeader.email && (
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Official Email</span>
                    <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">{selectedLeader.email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyEmail(selectedLeader.email)}
                    className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-xs font-mono font-bold flex items-center gap-1 cursor-pointer"
                  >
                    {copiedEmail === selectedLeader.email ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                    <span>{copiedEmail === selectedLeader.email ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              )}

              {selectedLeader.linkedin && (
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Executive Profile</span>
                    <span className="font-mono text-xs font-bold text-[#0077b5]">LinkedIn Verified</span>
                  </div>
                  <a
                    href={selectedLeader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-lg bg-[#0077b5] text-white text-xs font-mono font-bold flex items-center gap-1"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>

            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setSelectedLeader(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
