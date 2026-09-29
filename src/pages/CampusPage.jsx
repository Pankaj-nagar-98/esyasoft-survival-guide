import React, { useState } from 'react';
import { 
  Building2, Gamepad2, Home, Users, Trophy, Activity, Target, 
  Dumbbell, Compass, Pill, Landmark, Printer, Coffee, Camera, 
  PlusCircle, Video, CheckSquare, Square, ChevronRight, X, ExternalLink
} from 'lucide-react';
import { ESYASOFT_DATA } from '../data/guideData';
import { useModal } from '../context/ModalContext';
import { Link } from 'react-router-dom';

export default function CampusPage() {
  const { openLightbox, showToast } = useModal();
  const [activeTab, setActiveTab] = useState('inside-campus'); // 'inside-campus', 'survival-accom', 'networking'
  
  // Interactive checklist state for hostel living
  const [checkedItems, setCheckedItems] = useState({});

  // Campus memories state (supports local user additions)
  const [memories, setMemories] = useState(ESYASOFT_DATA.campusMemories);
  const [isMemoryModalOpen, setIsMemoryModalOpen] = useState(false);
  const [newMemory, setNewMemory] = useState({ title: '', location: 'Campus HQ', tag: 'Batch 2026', image: '', caption: '' });

  // Video URL state
  const [videoUrl, setVideoUrl] = useState('https://www.youtube-nocookie.com/embed/Gdd2IZvesjk');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [customVideoInput, setCustomVideoInput] = useState('');

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleAddMemory = (e) => {
    e.preventDefault();
    if (!newMemory.title || !newMemory.image) {
      showToast('Please provide a title and image link', 'error');
      return;
    }
    const created = {
      id: `mem-${Date.now()}`,
      title: newMemory.title,
      location: newMemory.location || 'GCC Mangaluru',
      tag: newMemory.tag || 'Community Memory',
      image: newMemory.image,
      caption: newMemory.caption || 'Captured by Batch 2026 Fresher'
    };
    setMemories([created, ...memories]);
    setIsMemoryModalOpen(false);
    setNewMemory({ title: '', location: 'Campus HQ', tag: 'Batch 2026', image: '', caption: '' });
    showToast('Batch memory added to community wall!', 'success');
  };

  const handleSaveVideo = (e) => {
    e.preventDefault();
    if (!customVideoInput) return;
    let embedUrl = customVideoInput;
    if (customVideoInput.includes('watch?v=')) {
      const videoId = customVideoInput.split('watch?v=')[1].split('&')[0];
      embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
    } else if (customVideoInput.includes('youtu.be/')) {
      const videoId = customVideoInput.split('youtu.be/')[1].split('?')[0];
      embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
    }
    setVideoUrl(embedUrl);
    setIsVideoModalOpen(false);
    setCustomVideoInput('');
    showToast('Accommodation video updated successfully!', 'success');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Breadcrumbs Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
        <Link to="/" className="hover:text-emerald-700 flex items-center gap-1 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-emerald-800 font-bold">Campus Life & Recreation</span>
      </nav>

      {/* Header Bar with Campus Tabs */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-2 border border-emerald-200 dark:border-slate-800">
              <Building2 className="w-3.5 h-3.5 text-emerald-600" /> Campus Lifestyle Hub
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Campus Life, Living Quarters & Recreation
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
              Inside campus recreation, hostel decompression pods, mess fuel, and peer learning networks.
            </p>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-emerald-100 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab('inside-campus')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'inside-campus'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-800'
            }`}
          >
            <Gamepad2 className="w-4 h-4" /> Inside Campus & Recreation
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('survival-accom')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'survival-accom'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-800'
            }`}
          >
            <Home className="w-4 h-4" /> Hostel Living & Food Checklists
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('networking')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'networking'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-800'
            }`}
          >
            <Users className="w-4 h-4" /> Cohort Networking & Mentors
          </button>
        </div>
      </div>

      {/* Dynamic Tab Content */}
      <div className="space-y-6">
        {/* TAB 1: INSIDE CAMPUS */}
        {activeTab === 'inside-campus' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ESYASOFT_DATA.campusHub.insideCampus.map((item) => (
              <div 
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-emerald-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {item.image && (
                    <div 
                      onClick={() => openLightbox(item.image, `${item.title} - ${item.category}`)}
                      className="h-48 overflow-hidden relative cursor-zoom-in group"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.target.src = 'assets/header-hero-bg.jpg'; }}
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white dark:bg-slate-900/95 backdrop-blur-sm text-emerald-800 border border-emerald-200 dark:border-slate-800 shadow-xs">
                        {item.tag}
                      </div>
                    </div>
                  )}

                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-bold">
                          {item.category}
                        </span>
                        {item.timing && (
                          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                            {item.timing}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {item.etiquette && (
                      <div className="space-y-1.5 pt-2 border-t border-emerald-50">
                        <span className="text-[11px] font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1">
                          Ground Etiquette:
                        </span>
                        <ul className="space-y-1">
                          {item.etiquette.map((rule, idx) => (
                            <li key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                              <span className="text-emerald-500 font-bold">•</span>
                              <span>{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {item.humor && (
                  <div className="p-4 bg-emerald-50 dark:bg-slate-800/80/60 border-t border-emerald-100 dark:border-slate-800 text-[11px] text-emerald-900 italic">
                    "{item.humor}"
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: SURVIVAL ACCOMMODATION & FOOD */}
        {activeTab === 'survival-accom' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {ESYASOFT_DATA.campusHub.survivalAccom.filter(item => item.id !== 'video-tour').map((item) => (
                <div 
                  key={item.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl border border-emerald-200 dark:border-slate-800 shadow-sm p-6 sm:p-7 space-y-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-bold">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                        {item.description}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800 flex-shrink-0">
                      {item.tag}
                    </span>
                  </div>

                  {item.image && (
                    <div 
                      onClick={() => openLightbox(item.image, item.title)}
                      className="h-44 rounded-2xl overflow-hidden cursor-zoom-in group border border-emerald-100 dark:border-slate-800"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Checklist with Interactive Checkboxes */}
                  {item.checklist && (
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-100 block">
                        Interactive Checklist:
                      </span>
                      <div className="space-y-2">
                        {item.checklist.map((task, idx) => {
                          const checkKey = `${item.id}-${idx}`;
                          const isDone = !!checkedItems[checkKey];
                          return (
                            <div 
                              key={idx}
                              onClick={() => toggleCheck(checkKey)}
                              className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 cursor-pointer transition-all ${
                                isDone 
                                  ? 'bg-emerald-50 dark:bg-slate-800/80 border-emerald-300 text-slate-500 dark:text-slate-400 line-through' 
                                  : 'bg-slate-50 dark:bg-slate-800/60/70 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:bg-slate-800/80/40 hover:border-emerald-200 dark:border-slate-800'
                              }`}
                            >
                              {isDone ? (
                                <CheckSquare className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                              ) : (
                                <Square className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                              )}
                              <span>{task}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Routine Timeline */}
                  {item.timeline && (
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-100 block">
                        Recommended Daily Cadence:
                      </span>
                      <div className="space-y-2 divide-y divide-emerald-50">
                        {item.timeline.map((slot, idx) => (
                          <div key={idx} className="pt-2 flex items-start justify-between gap-3 text-xs">
                            <span className="font-mono font-bold text-emerald-800 flex-shrink-0">{slot.time}</span>
                            <span className="text-slate-600 dark:text-slate-300 text-right">{slot.task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.proTip && (
                    <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-800 text-xs text-emerald-950 font-medium">
                      💡 <strong>Survival Tip:</strong> {item.proTip}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Video Showcase Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-100 text-red-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-1 border border-red-200">
                    <Video className="w-3.5 h-3.5 text-red-600" /> Accommodation Video Showcase
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Virtual Walkthrough of Living Quarters</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Take a virtual tour of our batch accommodation, dorms, mess hall, and grounds.</p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <a 
                    href={videoUrl.includes('embed/') ? `https://www.youtube.com/watch?v=${videoUrl.split('embed/')[1]}` : 'https://www.youtube.com/@EsyasoftTechnologies'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Watch on YouTube
                  </a>
                  <a 
                    href="https://www.youtube.com/@EsyasoftTechnologies" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 border border-slate-300 dark:border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    YouTube Channel
                  </a>
                  <button 
                    onClick={() => setIsVideoModalOpen(true)}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 dark:bg-slate-800/80 hover:bg-emerald-100 border border-emerald-200 dark:border-slate-800 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    Change Video Link
                  </button>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-emerald-200 dark:border-slate-800 bg-slate-950 shadow-inner aspect-video max-h-[500px] w-full">
                <iframe 
                  src={videoUrl}
                  title="Batch 2026 Accommodation Tour"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: NETWORKING */}
        {activeTab === 'networking' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ESYASOFT_DATA.campusHub.networking.map((item) => (
              <div 
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-emerald-200 dark:border-slate-800 shadow-sm p-6 sm:p-7 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  {item.image && (
                    <div 
                      onClick={() => openLightbox(item.image, item.title)}
                      className="h-40 rounded-xl overflow-hidden cursor-zoom-in group border border-emerald-100 dark:border-slate-800"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RECREATION LEAGUES & TOURNAMENT RULES */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-emerald-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-1 border border-emerald-200 dark:border-slate-800">
              <Trophy className="w-3.5 h-3.5 text-emerald-600" /> Batch Recreation Tournaments
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Indoor Sports Leagues & Code of Conduct</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Official ground rules for evening table tennis, foosball, and gym battles.</p>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">
            Level 1 & 2 Rec Hub
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Table Tennis */}
          <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-slate-800/80/60 border border-emerald-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold border border-emerald-200 dark:border-slate-800">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">11-Point Sets</span>
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Table Tennis Championship</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Matches follow standard ITTF rules: games to 11 points, serve alternates every 2 points. Winner stays on for a maximum of 3 consecutive games during peak hours (05:30 PM – 07:30 PM).
            </p>
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-slate-800 text-[11px] text-emerald-950 font-medium">
              Paddles and balls are stored in the locker beside the umpire counter.
            </div>
          </div>

          {/* Foosball */}
          <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold border border-teal-200">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800 border border-teal-200">2v2 Cohort Clash</span>
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Foosball & Billiards Arena</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Strictly no 360° spinning of rods to protect table bearings. Matches played to first team reaching 5 goals. Snooker table baize must never be touched with food or beverages.
            </p>
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-teal-200 text-[11px] text-teal-950 font-medium">
              Friday evening 2v2 knockout tournaments kick off at 06:45 PM sharp.
            </div>
          </div>

          {/* Gym Fitness */}
          <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-slate-800/80/60 border border-emerald-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold border border-emerald-200 dark:border-slate-800">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">Fitness Studio</span>
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Iron Gym & Wellness Etiquette</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Mandatory towel policy for all benches and cardio stations. Always re-rack dumbbells and Olympic plates back to their color-coded trees. Wipe down handles after treadmill runs.
            </p>
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-slate-800 text-[11px] text-emerald-950 font-medium">
              Open daily: 06:00 AM – 08:30 AM and 06:30 PM – 09:30 PM.
            </div>
          </div>
        </div>
      </div>

      {/* BAJPE LOCAL ESSENTIALS & EMERGENCY STORES */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-emerald-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-1 border border-emerald-200 dark:border-slate-800">
              <Compass className="w-3.5 h-3.5 text-emerald-600" /> Neighbourhood Basecamp
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Bajpe Local Essentials & Services Directory</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Everyday convenience spots within 5 to 10 minutes of campus.</p>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">
            Within 1.5 km Radius
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
              <Pill className="w-4 h-4" /> 24/7 Pharmacy
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Sanjivini Medicals</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300">Bajpe Main Junction (850m). Stocked with all basic OTC medicines, pain relief sprays, and ORS sachets.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
              <Landmark className="w-4 h-4" /> Cash & ATMs
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">SBI & Canara Bank ATMs</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300">Near Bajpe Police Station (900m). 24-hour operational cash dispensers accepting all major debit cards.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
              <Printer className="w-4 h-4" /> Print & Stationery
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Sri Sai Digital Printers</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300">Opposite Bajpe Bus Stand (1.1 km). Color xerox, document spiral binding, and passport photo prints.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
              <Coffee className="w-4 h-4" /> Refreshments
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Coastal Coconut & Tea Stall</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300">Right outside GCC Gate 2. Fresh tender coconuts, steaming ginger cardamom chai, and banana chips.</p>
          </div>
        </div>
      </div>

      {/* Campus Memories Community Photo Wall */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-emerald-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-1 border border-emerald-200 dark:border-slate-800">
              <Camera className="w-3.5 h-3.5 text-emerald-600" /> Shared Memories
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">Batch 2026 Campus Photo Gallery</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Unfiltered moments from the training rooms, canteen tea rounds, and recreation matches.</p>
          </div>
          
          <button 
            type="button" 
            onClick={() => setIsMemoryModalOpen(true)}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 shadow-md shadow-emerald-600/20 transition-transform active:scale-95 cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" /> Add Memory Photo
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {memories.map((mem) => (
            <div 
              key={mem.id}
              onClick={() => openLightbox(mem.image, `${mem.title} (${mem.location})`)}
              className="group bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-emerald-100 dark:border-slate-800 overflow-hidden cursor-zoom-in hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="h-44 overflow-hidden relative">
                <img 
                  src={mem.image} 
                  alt={mem.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.target.src = 'assets/header-hero-bg.jpg'; }}
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-white dark:bg-slate-900/90 backdrop-blur-xs text-emerald-900 border border-emerald-200 dark:border-slate-800 shadow-2xs">
                  {mem.tag}
                </span>
              </div>
              <div className="p-3.5 space-y-1">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-800 transition-colors truncate">
                  {mem.title}
                </h4>
                <div className="text-[10px] text-emerald-700 font-medium">
                  {mem.location}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {mem.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO URL CUSTOMIZATION MODAL */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-emerald-200 dark:border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-100 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Video className="w-5 h-5 text-emerald-600" /> Customize Video Link
              </h3>
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 dark:text-slate-200 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSaveVideo} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">YouTube Video Link or ID:</label>
                <input 
                  type="text" 
                  value={customVideoInput} 
                  onChange={(e) => setCustomVideoInput(e.target.value)} 
                  placeholder="e.g. https://www.youtube.com/watch?v=..." 
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Paste any standard YouTube link or video ID to embed.</p>
              </div>
              <button 
                type="submit" 
                className="w-full py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-transform active:scale-95"
              >
                Save & Embed Video
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MEMORY UPLOAD MODAL */}
      {isMemoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-emerald-200 dark:border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-100 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Camera className="w-5 h-5 text-emerald-600" /> Add Batch Memory
              </h3>
              <button 
                onClick={() => setIsMemoryModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 dark:text-slate-200 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddMemory} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">Moment Title:</label>
                <input 
                  type="text" 
                  value={newMemory.title}
                  onChange={(e) => setNewMemory({...newMemory, title: e.target.value})}
                  placeholder="e.g. Late night TT championship final" 
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs" 
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">Location:</label>
                <input 
                  type="text" 
                  value={newMemory.location}
                  onChange={(e) => setNewMemory({...newMemory, location: e.target.value})}
                  placeholder="e.g. Recreation Hub Level 2" 
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">Image URL or Local Asset:</label>
                <input 
                  type="text" 
                  value={newMemory.image}
                  onChange={(e) => setNewMemory({...newMemory, image: e.target.value})}
                  placeholder="assets/... or https://..." 
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs" 
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">Short Description:</label>
                <textarea 
                  rows="2" 
                  value={newMemory.caption}
                  onChange={(e) => setNewMemory({...newMemory, caption: e.target.value})}
                  placeholder="Tell the story behind this snap..." 
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-transform active:scale-95"
              >
                Post Memory to Wall
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
