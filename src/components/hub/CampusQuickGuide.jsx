import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Clock, 
  Utensils, 
  Dumbbell, 
  Trophy, 
  Home, 
  Wifi, 
  Bus,
  CheckCircle2,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { MANGALURU_HUB_DATA } from '../../data/mangaluruHubData';
import { Link } from 'react-router-dom';

export default function CampusQuickGuide() {
  const [activeFloor, setActiveFloor] = useState('Level 0');

  const floorIcons = {
    "Level 0": Utensils,
    "Level 1": Dumbbell,
    "Level 2": Trophy,
    "Hostels": Home
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <span>Mangaluru Centre At-a-Glance</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 font-bold">
                Kolambe Campus
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Interactive floor directory, mess timings &amp; transit connections
            </p>
          </div>
        </div>

        <Link
          to="/campus"
          className="text-xs font-mono font-bold text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1 self-start sm:self-center"
        >
          <span>Full Campus Hub →</span>
        </Link>
      </div>

      {/* 4 Interactive Floor Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {MANGALURU_HUB_DATA.campusFloorGuide.map((floor) => {
          const Icon = floorIcons[floor.level] || Building2;
          const isActive = activeFloor === floor.level;
          return (
            <button
              key={floor.level}
              type="button"
              onClick={() => setActiveFloor(floor.level)}
              className={`p-3 rounded-2xl border transition-all text-left cursor-pointer ${
                isActive
                  ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-400 dark:border-teal-700 shadow-xs'
                  : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <Icon className={`w-4 h-4 ${isActive ? 'text-teal-600 dark:text-teal-400' : 'text-slate-400'}`} />
                <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-teal-700 dark:text-teal-300' : 'text-slate-400'}`}>
                  {floor.level}
                </span>
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                {floor.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Floor Content Display */}
      {(() => {
        const currentFloor = MANGALURU_HUB_DATA.campusFloorGuide.find(f => f.level === activeFloor) || MANGALURU_HUB_DATA.campusFloorGuide[0];
        return (
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                {currentFloor.level} Key Facilities
              </span>
              <span className="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-bold">
                {currentFloor.title}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {currentFloor.items.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 text-xs space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                    <span>{item.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })()}

      {/* Fast Facts Strip: Mess Timings & Transit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
        <div className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 text-xs space-y-1">
          <div className="text-[10px] font-mono uppercase text-slate-400 flex items-center gap-1">
            <Utensils className="w-3 h-3 text-amber-500" />
            <span>Foods Adya Breakfast</span>
          </div>
          <div className="font-bold text-slate-900 dark:text-white">{MANGALURU_HUB_DATA.campus.messTimings.breakfast}</div>
          <div className="text-[10px] text-slate-500">Lunch: {MANGALURU_HUB_DATA.campus.messTimings.lunch}</div>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 text-xs space-y-1">
          <div className="text-[10px] font-mono uppercase text-slate-400 flex items-center gap-1">
            <Clock className="w-3 h-3 text-emerald-500" />
            <span>Adya Dinner &amp; Tea</span>
          </div>
          <div className="font-bold text-slate-900 dark:text-white">{MANGALURU_HUB_DATA.campus.messTimings.dinner}</div>
          <div className="text-[10px] text-slate-500">Evening Tea: {MANGALURU_HUB_DATA.campus.messTimings.eveningTea}</div>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 text-xs space-y-1">
          <div className="text-[10px] font-mono uppercase text-slate-400 flex items-center gap-1">
            <Bus className="w-3 h-3 text-blue-500" />
            <span>Airport &amp; Transit</span>
          </div>
          <div className="font-bold text-slate-900 dark:text-white">{MANGALURU_HUB_DATA.campus.airportDistance}</div>
          <div className="text-[10px] text-slate-500">Railway: {MANGALURU_HUB_DATA.campus.railwayDistance}</div>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 text-xs space-y-1">
          <div className="text-[10px] font-mono uppercase text-slate-400 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-purple-500" />
            <span>Campus Gate &amp; Access</span>
          </div>
          <div className="font-bold text-slate-900 dark:text-white">Open 24/7 (Badge)</div>
          <div className="text-[10px] text-slate-500">{MANGALURU_HUB_DATA.campus.curfewWeekday}</div>
        </div>
      </div>
    </div>
  );
}
