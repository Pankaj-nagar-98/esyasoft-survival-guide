import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, 
  AlertCircle, 
  ArrowRight, 
  Clock, 
  ChevronRight, 
  Tag, 
  X,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { MANGALURU_HUB_DATA } from '../../data/mangaluruHubData';

export default function NoticeBoard() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeNotice, setActiveNotice] = useState(null);

  const categories = [
    { id: 'all', label: 'All Notices' },
    { id: 'urgent', label: 'Urgent Alerts' },
    { id: 'hr', label: 'HR & Onboarding' },
    { id: 'facilities', label: 'Facilities & Shuttle' },
    { id: 'training', label: 'Training & Labs' }
  ];

  const filteredNotices = MANGALURU_HUB_DATA.notices.filter(notice => {
    if (selectedCategory === 'all') return true;
    return notice.category === selectedCategory;
  });

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-5">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
            <Bell className="w-5 h-5 animate-bounce" style={{ animationDuration: '3s' }} />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <span>Notice Board</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                {filteredNotices.length} Active
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Campus updates, urgent operational alerts, and daily reminders
            </p>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Notice Cards List */}
      <div className="space-y-3">
        {filteredNotices.map((notice) => {
          const isUrgent = notice.priority === 'high';
          return (
            <div
              key={notice.id}
              onClick={() => setActiveNotice(notice)}
              className={`group p-4 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                isUrgent
                  ? 'bg-red-50/50 dark:bg-red-950/20 border-red-200 dark:border-red-900/60 hover:border-red-400'
                  : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700'
              }`}
            >
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  {isUrgent ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-red-600 text-white uppercase">
                      <AlertCircle className="w-3 h-3" />
                      <span>Action Required</span>
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {notice.categoryName}
                    </span>
                  )}
                  <span className="text-[11px] font-mono text-slate-400">
                    • {notice.date}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                  {notice.title}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                  {notice.summary}
                </p>
              </div>

              <div className="flex-shrink-0 flex items-center gap-2 self-end sm:self-center">
                {notice.actionLink && (
                  <Link
                    to={notice.actionLink}
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-emerald-800 dark:text-emerald-300 border border-slate-200 dark:border-slate-700 shadow-2xs flex items-center gap-1 transition-colors"
                  >
                    <span>{notice.actionLabel}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Notice Detail Modal (Progressive Disclosure) */}
      {activeNotice && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                {activeNotice.categoryName}
              </span>
              <button
                type="button"
                onClick={() => setActiveNotice(null)}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono text-slate-400">{activeNotice.date}</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {activeNotice.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-serif pt-1">
                {activeNotice.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <Link
                to={activeNotice.actionLink}
                onClick={() => setActiveNotice(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 shadow-xs"
              >
                <span>{activeNotice.actionLabel}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => setActiveNotice(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
