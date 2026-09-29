import React from 'react';
import { 
  Milestone, 
  ArrowRight, 
  Flag, 
  Check, 
  Maximize2,
  Sparkles,
  Compass
} from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { BEYOND_DAY_30_DATA } from '../../data/calendarData';

export default function VisualMilestones() {
  const { openLightbox } = useModal();
  const data = BEYOND_DAY_30_DATA;

  const handleOpenPhoto = () => {
    openLightbox(
      data.image,
      "Beyond Day 30: What Comes Next? — Full Graduate Programme Roadmap",
      "Official Graduate Engineering Trainee (GET) transition map from 30-day foundational immersion into specialized business analysis, AI/ML smart grid analytics, and live Discom deployment squads."
    );
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-emerald-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-1 border border-emerald-200 dark:border-slate-800">
            <Compass className="w-3.5 h-3.5 text-emerald-600" /> Visual Milestones
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Beyond Day 30: What Comes Next?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
            Your first 30 days build the foundation. Your learning journey continues through technical and role-specific specialization.
          </p>
        </div>

        <button
          onClick={handleOpenPhoto}
          className="self-start sm:self-auto text-xs font-semibold px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-slate-700 hover:bg-emerald-100 dark:hover:bg-slate-700 transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
        >
          <Maximize2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Zoom Milestone Graphic</span>
        </button>
      </div>

      {/* Main Infographic Feature Card */}
      <div 
        onClick={handleOpenPhoto}
        className="group relative rounded-3xl overflow-hidden border border-emerald-200 dark:border-slate-800 shadow-lg cursor-pointer bg-slate-950 transition-all duration-300 hover:border-emerald-400 dark:hover:border-emerald-600"
      >
        <div className="max-h-[380px] sm:max-h-[460px] overflow-hidden flex items-center justify-center">
          <img 
            src={data.image} 
            alt="Beyond Day 30: What comes next?" 
            className="w-full h-full object-contain max-h-[460px] transition-transform duration-500 group-hover:scale-[1.02]" 
          />
        </div>

        {/* Overlay Hover Prompt */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between pointer-events-none">
          <div>
            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-600 text-white uppercase tracking-wider mb-1 inline-block">
              Official GET Transition Track
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white drop-shadow">
              Full Graduate Programme Milestone & Phase Architecture
            </h3>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono text-white">
            <Maximize2 className="w-3.5 h-3.5 text-emerald-300" /> Click to view full diagram
          </div>
        </div>
      </div>

      {/* Interactive Progression Stages matching Image 2 */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Progression Stages Architecture
          </h4>
          <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
            <span>Covered during your first 30 days</span>
          </div>
        </div>

        {/* Connected Horizontal Steps (Responsive Grid/Flex) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {data.stages.map((stage) => {
            const isCovered = stage.isCovered;
            return (
              <div
                key={stage.num}
                className={`p-3.5 rounded-2xl border transition-all relative flex flex-col justify-between ${
                  isCovered
                    ? 'bg-emerald-950/20 dark:bg-emerald-950/40 border-emerald-500/50 dark:border-emerald-600/60 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                      isCovered 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      {stage.num}
                    </span>
                    {isCovered && (
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                        ✓ First 30d
                      </span>
                    )}
                  </div>
                  <h5 className={`text-xs font-bold mb-1 leading-snug ${
                    isCovered ? 'text-emerald-900 dark:text-emerald-200' : 'text-slate-800 dark:text-slate-200'
                  }`}>
                    {stage.title}
                  </h5>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Completion Flag Card */}
          <div className="p-3.5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-100/70 dark:bg-slate-800/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs font-mono font-bold">
                  <Flag className="w-3.5 h-3.5" />
                </span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold">
                  Day 90
                </span>
              </div>
              <h5 className="text-xs font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                {data.completionStage.title}
              </h5>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                {data.completionStage.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Graduate Programme Phases Pills */}
      <div className="pt-4 border-t border-emerald-100 dark:border-slate-800 space-y-3">
        <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          FULL GRADUATE PROGRAMME PHASES
        </h4>
        <div className="flex flex-wrap gap-2">
          {data.fullPhases.map((phase, idx) => (
            <span
              key={idx}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                idx < 5
                  ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
                  : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              {phase}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
