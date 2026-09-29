import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  HelpCircle, 
  ChevronRight, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { MANGALURU_HUB_DATA } from '../../data/mangaluruHubData';

export default function CalendarHolidaysWidget() {
  const [activeTab, setActiveTab] = useState('events'); // 'events' | 'mandatory' | 'optional'

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-5">
      {/* Header with Tab Switcher */}
      <div className="space-y-3 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                Calendar &amp; Holidays
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Mangaluru GCC schedules, public holidays &amp; optional leaves
              </p>
            </div>
          </div>
        </div>

        {/* 3 Tab Switchers */}
        <div className="grid grid-cols-3 gap-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-2xl border border-slate-200 dark:border-slate-700/60 text-xs font-mono font-bold">
          <button
            type="button"
            onClick={() => setActiveTab('events')}
            className={`py-1.5 rounded-xl transition-all cursor-pointer truncate ${
              activeTab === 'events'
                ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Events &amp; Dates
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('mandatory')}
            className={`py-1.5 rounded-xl transition-all cursor-pointer truncate ${
              activeTab === 'mandatory'
                ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Holidays (9)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('optional')}
            className={`py-1.5 rounded-xl transition-all cursor-pointer truncate ${
              activeTab === 'optional'
                ? 'bg-white dark:bg-slate-900 text-purple-700 dark:text-purple-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Optional (RH)
          </button>
        </div>
      </div>

      {/* TAB 1: UPCOMING SCHEDULE & EVENTS */}
      {activeTab === 'events' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Upcoming Milestones</span>
            <span>Venue / Platform</span>
          </div>

          <div className="space-y-2.5">
            {MANGALURU_HUB_DATA.upcomingEvents.map(evt => (
              <div 
                key={evt.id}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-3 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-emerald-800 dark:text-emerald-400">
                      {evt.date}
                    </span>
                    <span className={`px-2 py-0.2 rounded text-[9px] font-mono font-bold uppercase ${evt.tagColor}`}>
                      {evt.tag}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {evt.title}
                  </h4>
                  <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {evt.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {evt.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: MANDATORY PUBLIC HOLIDAYS */}
      {activeTab === 'mandatory' && (
        <div className="space-y-3">
          <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
            <span className="font-medium">9 Official Paid Company Holidays (GCC Karnataka)</span>
            <span className="text-[10px] font-mono font-bold bg-emerald-200 dark:bg-emerald-900 px-2 py-0.5 rounded">
              All Employees
            </span>
          </div>

          <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
            {MANGALURU_HUB_DATA.mandatoryHolidays.map((hol, idx) => (
              <div 
                key={idx}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs"
              >
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{hol.name}</div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{hol.day} • {hol.type}</div>
                </div>
                <div className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs whitespace-nowrap">
                  {hol.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: OPTIONAL / RESTRICTED HOLIDAYS (RH) */}
      {activeTab === 'optional' && (
        <div className="space-y-3">
          {/* Important Policy Callout */}
          <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60 text-xs space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-purple-900 dark:text-purple-300">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Restricted Holiday Policy (Choose up to 2)</span>
            </div>
            <p className="text-[11px] text-purple-800/90 dark:text-purple-300/90 leading-relaxed">
              Full-time employees can choose <strong>any 2 Optional Holidays</strong> per calendar year. Apply at least 5 working days in advance via Zoho People under <em>'Restricted Holiday'</em>.
            </p>
          </div>

          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
            {MANGALURU_HUB_DATA.optionalHolidays.map((hol, idx) => (
              <div 
                key={idx}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs"
              >
                <div>
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>{hol.name}</span>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300">
                      RH
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{hol.day}</div>
                </div>
                <div className="font-mono text-xs font-bold text-purple-700 dark:text-purple-300 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs whitespace-nowrap">
                  {hol.date}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-1 text-center">
            <a
              href="https://people.zoho.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-700 dark:text-purple-400 hover:underline"
            >
              <span>Apply for Optional Holiday in Zoho People</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
