import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Sparkles, 
  PartyPopper,
  Clock,
  Layers,
  Award
} from 'lucide-react';
import { THREE_MONTH_CALENDAR_DATA } from '../../data/calendarData';

export default function RoadmapCalendar() {
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);

  const months = THREE_MONTH_CALENDAR_DATA;
  const currentMonth = months[activeMonthIndex];

  const handlePrev = () => {
    setActiveMonthIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveMonthIndex((prev) => Math.min(months.length - 1, prev + 1));
  };

  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-6">
      
      {/* Calendar Header with Month Selector & Arrow Navigation */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-emerald-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-1.5 border border-emerald-200 dark:border-slate-800">
            <CalendarIcon className="w-3.5 h-3.5 text-emerald-600" /> Daily Induction Curriculum
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <span>{currentMonth.monthName}: {currentMonth.phaseTitle}</span>
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
            {currentMonth.summary} • <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">{currentMonth.dateRange} ({currentMonth.dayRange})</span>
          </p>
        </div>

        {/* Arrow Navigation and Month Quick-Tabs */}
        <div className="flex items-center gap-2 self-start lg:self-auto flex-wrap">
          {/* Quick Month Tabs */}
          <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold">
            {months.map((m, idx) => (
              <button
                key={m.monthId}
                onClick={() => setActiveMonthIndex(idx)}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${
                  activeMonthIndex === idx
                    ? 'bg-emerald-600 text-white font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {m.monthName} ({m.dayRange})
              </button>
            ))}
          </div>

          {/* Previous / Next Arrow Buttons */}
          <div className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={handlePrev}
              disabled={activeMonthIndex === 0}
              className={`p-2 rounded-xl transition-colors ${
                activeMonthIndex === 0 
                  ? 'opacity-30 cursor-not-allowed text-slate-400' 
                  : 'hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 shadow-xs cursor-pointer'
              }`}
              title="Previous Month"
              aria-label="Previous Month"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-[11px] font-mono font-bold px-2 text-slate-700 dark:text-slate-300 select-none">
              {activeMonthIndex + 1} / {months.length}
            </span>

            <button
              onClick={handleNext}
              disabled={activeMonthIndex === months.length - 1}
              className={`p-2 rounded-xl transition-colors ${
                activeMonthIndex === months.length - 1 
                  ? 'opacity-30 cursor-not-allowed text-slate-400' 
                  : 'hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 shadow-xs cursor-pointer'
              }`}
              title="Next Month"
              aria-label="Next Month"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Month Weeks Container */}
      <div className="space-y-6">
        {currentMonth.weeks.map((week) => (
          <div key={week.weekNumber} className="space-y-2.5">
            {/* Week Header */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-white dark:bg-slate-800 text-[10px] font-mono font-bold tracking-wider uppercase">
                  {week.weekNumber}
                </span>
                <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                  {week.weekTitle}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  {week.dateRange}
                </span>
              </div>

              <div className="text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                {week.completedStatus}
              </div>
            </div>

            {/* 7-Day Row Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
              {week.days.map((day, dIdx) => {
                const isWeekend = day.isWeekend;
                const isHoliday = day.isHoliday;
                const isReflection = day.isReflection;
                const isCompleted = day.isCompleted;

                return (
                  <div
                    key={dIdx}
                    className={`rounded-2xl p-3 border transition-all duration-200 flex flex-col justify-between min-h-[96px] relative overflow-hidden group ${
                      isWeekend
                        ? 'bg-slate-50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 text-slate-400'
                        : isCompleted
                        ? 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-600 shadow-2xs'
                        : isHoliday
                        ? 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/60 shadow-2xs'
                        : isReflection
                        ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/80 shadow-2xs'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-slate-700 shadow-2xs'
                    }`}
                    style={
                      isWeekend
                        ? {
                            backgroundImage:
                              'repeating-linear-gradient(45deg, rgba(148, 163, 184, 0.08) 0, rgba(148, 163, 184, 0.08) 8px, transparent 8px, transparent 16px)'
                          }
                        : {}
                    }
                  >
                    {/* Top Row: DAY + Num, Date, Status Icon */}
                    <div className="flex items-start justify-between gap-1">
                      <div>
                        <div className="text-[9px] uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 leading-none">
                          DAY
                        </div>
                        <div className={`text-lg sm:text-xl font-black leading-none mt-0.5 ${
                          isWeekend 
                            ? 'text-slate-400 dark:text-slate-600' 
                            : 'text-slate-800 dark:text-white'
                        }`}>
                          {day.dayNum}
                        </div>
                      </div>

                      <div className="text-right flex flex-col items-end">
                        <span className={`text-[10px] font-mono leading-tight ${
                          isWeekend 
                            ? 'text-slate-400 dark:text-slate-600' 
                            : 'text-slate-500 dark:text-slate-400'
                        }`}>
                          {day.dateStr}
                        </span>

                        {/* Status Check / Icon */}
                        <div className="mt-1">
                          {isCompleted ? (
                            <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          ) : isHoliday ? (
                            <div className="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-xs" title={day.holidayName}>
                              <PartyPopper className="w-2.5 h-2.5" />
                            </div>
                          ) : isReflection ? (
                            <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs" title="Reflection">
                              <Sparkles className="w-2.5 h-2.5" />
                            </div>
                          ) : isWeekend ? (
                            <div className="w-4 h-4" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Area: Topic Name */}
                    <div className="mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
                      <p className={`text-[11px] font-semibold leading-tight line-clamp-2 ${
                        isWeekend 
                          ? 'text-slate-400 dark:text-slate-600 italic font-normal' 
                          : isHoliday
                          ? 'text-amber-700 dark:text-amber-400 font-bold'
                          : isReflection
                          ? 'text-emerald-700 dark:text-emerald-400 font-bold'
                          : 'text-slate-700 dark:text-slate-200'
                      }`}>
                        {day.topic}
                      </p>
                      {day.holidayName && (
                        <span className="text-[9px] font-mono text-amber-600 dark:text-amber-500 block mt-0.5">
                          {day.holidayName}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info Legend */}
      <div className="pt-3 border-t border-emerald-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 text-white inline-flex items-center justify-center text-[9px] font-bold">✓</span>
            <span>Completed Session</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 inline-block"></span>
            <span>Upcoming Topic</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded bg-amber-500 text-white inline-flex items-center justify-center text-[9px]">🎉</span>
            <span>Holiday</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded bg-emerald-500 text-white inline-flex items-center justify-center text-[9px]">✨</span>
            <span>Milestone Reflection</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 inline-block" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(148, 163, 184, 0.4) 0, rgba(148, 163, 184, 0.4) 2px, transparent 2px, transparent 4px)' }}></span>
            <span>Weekend</span>
          </div>
        </div>

        <div className="font-mono text-emerald-800 dark:text-emerald-300 font-bold">
          Batch 2026 Smart Grid Journey
        </div>
      </div>

    </div>
  );
}
