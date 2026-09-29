import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Milestone, 
  Check, 
  Circle, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Info, 
  Cpu, 
  Database, 
  Radio, 
  TrendingUp,
  Laptop,
  Zap,
  Code,
  Award,
  Terminal,
  Layers,
  Sparkles,
  CheckSquare,
  Square,
  Hash,
  ShieldCheck,
  Activity,
  ArrowRight
} from 'lucide-react';
import { ESYASOFT_DATA } from '../data/guideData';
import RoadmapCalendar from '../components/roadmap/RoadmapCalendar';

const ICON_MAP = {
  'laptop': Laptop,
  'zap': Zap,
  'database': Database,
  'cpu': Cpu,
  'trending-up': TrendingUp,
  'code': Code,
  'award': Award,
};

const THEME_MAP = {
  'laptop': {
    iconBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
    borderHover: 'hover:border-indigo-400/50',
    badgeBg: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
  },
  'zap': {
    iconBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    borderHover: 'hover:border-amber-400/50',
    badgeBg: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
  },
  'database': {
    iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    borderHover: 'hover:border-emerald-400/50',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
  },
  'cpu': {
    iconBg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    borderHover: 'hover:border-cyan-400/50',
    badgeBg: 'bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800'
  },
  'trending-up': {
    iconBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    borderHover: 'hover:border-purple-400/50',
    badgeBg: 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
  },
  'code': {
    iconBg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
    borderHover: 'hover:border-teal-400/50',
    badgeBg: 'bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800'
  },
  'award': {
    iconBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
    borderHover: 'hover:border-rose-400/50',
    badgeBg: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800'
  },
};

export default function RoadmapPage() {
  const [filter, setFilter] = useState('all');
  const [expandedIds, setExpandedIds] = useState(['day-3-6', 'day-7-10']);
  const [completedIds, setCompletedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('esyasoft_milestones');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Milestones parse error:', e);
    }
    return ['day-1-2', 'day-3-6', 'day-7-10', 'day-11-13', 'day-14-15'];
  });

  const [completedDeliverables, setCompletedDeliverables] = useState(() => {
    try {
      const saved = localStorage.getItem('esyasoft_roadmap_deliverables');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Deliverables parse error:', e);
    }
    return {};
  });

  useEffect(() => {
    try {
      localStorage.setItem('esyasoft_milestones', JSON.stringify(completedIds));
    } catch (e) {
      console.warn('Milestones save error:', e);
    }
  }, [completedIds]);

  useEffect(() => {
    try {
      localStorage.setItem('esyasoft_roadmap_deliverables', JSON.stringify(completedDeliverables));
    } catch (e) {
      console.warn('Deliverables save error:', e);
    }
  }, [completedDeliverables]);

  const toggleExpand = (id) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleComplete = (id) => {
    setCompletedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleDeliverable = (milestoneId, detailIndex) => {
    const key = `${milestoneId}-${detailIndex}`;
    setCompletedDeliverables(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const allItems = ESYASOFT_DATA.roadmap;
  const filteredItems = allItems.filter(item => {
    if (filter === 'phase1') return item.id.startsWith('day-');
    if (filter === 'upcoming') return item.id.startsWith('month-');
    return true;
  });

  const total = allItems.length;
  const count = completedIds.length;
  const pct = Math.round((count / total) * 100);

  return (
    <div className="space-y-8">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
        <Link to="/" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Home</Link>
        <span className="text-slate-300 dark:text-slate-700">/</span>
        <span className="text-emerald-800 dark:text-emerald-300 font-bold">90-Day Induction Roadmap</span>
      </nav>

      {/* Header Banner */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider mb-2 border border-emerald-200 dark:border-emerald-800/80">
              <Milestone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Induction Journey Track
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              90-Day Induction &amp; Capability Roadmap
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl leading-relaxed">
              From foundational smart grid architecture to hands-on deployment, high-throughput VEE engines, and mission-critical MDM capstones.
            </p>
          </div>

          {/* Progress Tracker Pill */}
          <div className="flex-shrink-0">
            <div className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-mono font-bold text-xs shadow-md shadow-emerald-600/20 inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-200" />
              <span>{count} of {total} Milestones Tracked ({pct}%)</span>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-emerald-100 dark:border-slate-800">
          <div className="inline-flex rounded-xl bg-slate-100 dark:bg-slate-800/80 p-1 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === 'all' ? 'bg-emerald-600 text-white shadow-xs font-bold' : 'text-slate-700 dark:text-slate-200 hover:text-emerald-800 dark:hover:text-emerald-300'
              }`}
            >
              All Milestones ({total})
            </button>
            <button
              onClick={() => setFilter('phase1')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === 'phase1' ? 'bg-emerald-600 text-white shadow-xs font-bold' : 'text-slate-700 dark:text-slate-200 hover:text-emerald-800 dark:hover:text-emerald-300'
              }`}
            >
              Phase 1 (Days 1 – 15)
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === 'upcoming' ? 'bg-emerald-600 text-white shadow-xs font-bold' : 'text-slate-700 dark:text-slate-200 hover:text-emerald-800 dark:hover:text-emerald-300'
              }`}
            >
              Months 2 – 3 (Advanced Horizon)
            </button>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:flex items-center gap-1.5">
            <Info className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Milestones &amp; deliverables auto-sync to your local profile.
          </div>
        </div>
      </div>

      {/* 3-Month Interactive Calendar with Month Selector & Arrow Navigation */}
      <RoadmapCalendar />

      {/* Timeline List of Milestones */}
      <div className="relative space-y-7 pt-2">
        {filteredItems.map((item, index) => {
          const isDone = completedIds.includes(item.id);
          const isExpanded = expandedIds.includes(item.id);
          const IconComponent = ICON_MAP[item.icon] || Layers;
          const theme = THEME_MAP[item.icon] || THEME_MAP['database'];

          const milestoneDetailsCount = item.details ? item.details.length : 0;
          const completedDetailCount = item.details 
            ? item.details.filter((_, i) => completedDeliverables[`${item.id}-${i}`]).length 
            : 0;

          return (
            <div key={item.id} className="relative pl-8 md:pl-10 group transition-all duration-300">
              
              {/* Vertical connecting timeline bar */}
              {index !== filteredItems.length - 1 && (
                <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-teal-300/40 to-slate-200 dark:to-slate-800"></div>
              )}

              {/* Status Indicator Node */}
              <div 
                onClick={() => toggleComplete(item.id)}
                className={`absolute left-0 top-2 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 cursor-pointer z-10 ${
                  isDone 
                    ? 'bg-emerald-600 border-emerald-500 text-white shadow-md shadow-emerald-500/40 scale-105' 
                    : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-400 hover:border-emerald-500 hover:text-emerald-600'
                }`}
                title={isDone ? 'Mark milestone incomplete' : 'Mark milestone complete'}
              >
                {isDone ? <Check className="w-3.5 h-3.5" /> : <Circle className="w-3 h-3 text-slate-400" />}
              </div>

              {/* Milestone Card Container */}
              <div className={`glass-panel rounded-2xl p-5 sm:p-6 border transition-all duration-300 relative shadow-sm ${
                isDone 
                  ? 'border-emerald-300/80 dark:border-emerald-900/60 bg-white/95 dark:bg-slate-900/95' 
                  : 'border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-slate-900/90 hover:border-slate-300 dark:hover:border-slate-700'
              }`}>
                
                {/* Header Row: Badge & Days */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md border ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {item.phase}
                    </span>
                  </div>
                  <span className="text-xs text-emerald-800 dark:text-emerald-400 font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60">
                    {item.days}
                  </span>
                </div>

                {/* Title and Domain Icon */}
                <div className="flex items-start gap-3.5 mb-2.5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${theme.iconBg}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Domain Architecture & Technical Blueprint Spec Box (Replaces Photos) */}
                {item.architectureSpecs && item.architectureSpecs.length > 0 && (
                  <div className="my-4 rounded-2xl bg-gradient-to-b from-[#0c1322] to-[#070b14] border border-slate-800 shadow-xl overflow-hidden relative">
                    {/* Top Accent Gradient Line */}
                    <div className="h-0.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500"></div>

                    <div className="p-4 sm:p-5 space-y-4">
                      {/* Console Subheader */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                            <Terminal className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
                            Domain Architecture &amp; Protocol Blueprint
                          </span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Production Spec
                        </div>
                      </div>

                      {/* 4 Architecture Spec Cards Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {item.architectureSpecs.map((spec, sIdx) => (
                          <div 
                            key={sIdx}
                            className="p-3.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group/spec"
                          >
                            <div>
                              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1 group-hover/spec:text-slate-300 transition-colors">
                                {spec.label}
                              </div>
                              <div className="text-xs font-bold text-emerald-400 font-mono tracking-tight mb-1.5">
                                {spec.value}
                              </div>
                            </div>
                            <div className="text-[11px] text-slate-300 leading-snug">
                              {spec.detail}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Module Topic Tags */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="pt-2 flex flex-wrap items-center gap-1.5">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mr-1">Modules:</span>
                          {item.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx}
                              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-800/90 hover:bg-slate-800 text-teal-300 border border-slate-700/80 text-[11px] font-mono transition-colors"
                            >
                              <Hash className="w-3 h-3 text-teal-400/70" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Deep-Dive Collapsible Drawer */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-emerald-100 dark:border-slate-800 space-y-4 animate-in fade-in duration-200">
                    
                    {/* Interactive Competency Deliverables Checklist */}
                    {item.details && item.details.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h5 className="text-[11px] font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Key Competencies &amp; Deliverables
                          </h5>
                          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                            {completedDetailCount} of {milestoneDetailsCount} Completed
                          </span>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                          {item.details.map((d, i) => {
                            const isChecked = !!completedDeliverables[`${item.id}-${i}`];
                            return (
                              <div 
                                key={i} 
                                onClick={() => toggleDeliverable(item.id, i)}
                                className={`flex items-start gap-2.5 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                                  isChecked 
                                    ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60 text-slate-600 dark:text-slate-400' 
                                    : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 hover:border-emerald-300 dark:hover:border-emerald-600 shadow-2xs'
                                }`}
                              >
                                <div className="mt-0.5 flex-shrink-0">
                                  {isChecked ? (
                                    <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                  ) : (
                                    <Square className="w-4 h-4 text-slate-400 hover:text-emerald-500" />
                                  )}
                                </div>
                                <span className={`text-xs leading-relaxed ${isChecked ? 'line-through opacity-85' : 'font-medium'}`}>
                                  {d}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Fresher Pro Tip Card */}
                    {item.survivalTip && (
                      <div className="rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-4 border-amber-500 dark:border-amber-400 p-3.5 text-xs text-slate-800 dark:text-slate-200 flex items-start gap-3 shadow-xs">
                        <div className="p-1 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider text-[10px] font-mono mb-0.5">
                            Fresher Operational Tip
                          </div>
                          <div className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                            {item.survivalTip}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Milestone Footer Actions */}
                <div className="flex items-center justify-between pt-3.5 mt-2 border-t border-emerald-100 dark:border-slate-800">
                  <button
                    onClick={() => toggleComplete(item.id)}
                    className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                      isDone 
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20' 
                        : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-300'
                    }`}
                  >
                    {isDone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Milestone Conquered</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-3.5 h-3.5 text-slate-400" />
                        <span>Mark as Completed</span>
                      </>
                    )}
                  </button>

                  <button 
                    onClick={() => toggleExpand(item.id)}
                    className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-slate-800/80 hover:bg-emerald-100 dark:hover:bg-slate-700 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-slate-700 flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Architecture & Specs' : 'Deep Dive Architecture & Specs'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <ChevronDown className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />}
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Core Engineering Stack & Domain Matrix 4-Pillars Section */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-emerald-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider mb-1 border border-emerald-200 dark:border-emerald-800">
              <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Core Engineering Stack
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Smart Grid Deliverables &amp; Domain Matrix</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Technical competencies mastered during the 90-day graduate program.</p>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            4 Pillars
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2 hover:border-emerald-300 dark:hover:border-emerald-600/50 transition-all">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold border border-cyan-500/20">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">DLMS/COSEM &amp; OBIS</h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Standard communication protocol for smart electricity meters. Decoding OBIS codes (e.g., 1.0.1.8.0.255 for active energy registers) and High-Level Security (HLS).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2 hover:border-emerald-300 dark:hover:border-emerald-600/50 transition-all">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold border border-emerald-500/20">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">MDM &amp; VEE Pipeline</h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Validation, Estimation, and Editing algorithms. Ingesting 15-minute interval loads, detecting clock drift, and preparing billing-grade data for Discom CIS engines.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2 hover:border-emerald-300 dark:hover:border-emerald-600/50 transition-all">
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold border border-teal-500/20">
              <Radio className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">HES &amp; Telemetry</h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Head-End Systems managing bidirectional RF Mesh and Cellular (4G/NB-IoT) meter connectivity. Firmware over-the-air updates and remote disconnect/reconnect commands.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2 hover:border-emerald-300 dark:hover:border-emerald-600/50 transition-all">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold border border-purple-500/20">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">AT&amp;C Loss Reduction</h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              AI/ML transformer-level energy auditing, power theft analytics, magnetic tamper alert routing, and predictive peak load management for commercial utilities.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
