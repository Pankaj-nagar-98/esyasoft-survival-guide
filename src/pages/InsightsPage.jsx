import React, { useState } from 'react';
import { 
  Newspaper, Sparkles, RefreshCw, Search, ChevronRight, X, 
  ExternalLink, Calendar, Clock, User, Tag, Share2, Handshake,
  Building2, ShieldCheck, ArrowUpRight, Cpu, Zap, ChevronDown, ChevronsUpDown
} from 'lucide-react';
import { INSIGHTS_DATA } from '../data/insightsData';
import { useModal } from '../context/ModalContext';
import { Link } from 'react-router-dom';

export default function InsightsPage() {
  const { openLightbox, showToast } = useModal();
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStory, setSelectedStory] = useState(null);
  const [syncedTime, setSyncedTime] = useState(INSIGHTS_DATA.last_synced || 'Recent');
  const [expandedStoryIds, setExpandedStoryIds] = useState({});

  const toggleStoryExpand = (storyId) => {
    setExpandedStoryIds(prev => ({
      ...prev,
      [storyId]: !prev[storyId]
    }));
  };

  const handleExpandAll = (stories) => {
    const allExpanded = {};
    stories.forEach(s => {
      allExpanded[s.id] = true;
    });
    setExpandedStoryIds(allExpanded);
  };

  const handleCollapseAll = () => {
    setExpandedStoryIds({});
  };

  const leadStory = INSIGHTS_DATA.stories.find(s => s.featured) || INSIGHTS_DATA.stories[0];
  const otherStories = INSIGHTS_DATA.stories.filter(s => s.id !== leadStory.id);
  const leftColStories = otherStories.slice(0, 2); // CyanConnode, Good Energy
  const rightColStories = otherStories.slice(2, 4); // Float IoT, Adani

  const handleSyncFeeds = () => {
    const now = new Date().toLocaleTimeString();
    setSyncedTime(`Today at ${now}`);
    showToast('Corporate wire and feeds synchronized!', 'success');
  };

  // Filter feed stories
  const filteredFeedStories = INSIGHTS_DATA.stories.filter(story => {
    if (selectedCategory !== 'all' && story.category_slug !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match = 
        story.title.toLowerCase().includes(q) ||
        story.excerpt.toLowerCase().includes(q) ||
        story.author.toLowerCase().includes(q) ||
        story.tags.some(t => t.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Breadcrumbs Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
        <Link to="/" className="hover:text-emerald-700 flex items-center gap-1 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-emerald-800 font-bold">Corporate Insights &amp; Global Wire</span>
      </nav>

      {/* Broadsheet Sub-Header Masthead Row */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-6 lg:px-8 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-50 dark:bg-slate-800/50">
          
          {/* Left: Social Media Channel Links */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-slate-700 dark:text-slate-200 flex-wrap">
            <span className="text-[10px] font-mono uppercase font-bold text-slate-400 hidden xl:inline mr-1">Official Wire:</span>
            <a 
              href={INSIGHTS_DATA.social_channels.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-[#0077b5]/10 hover:bg-[#0077b5] text-[#0077b5] hover:text-white transition-all border border-[#0077b5]/20 cursor-pointer shadow-2xs" 
              title="Esyasoft on LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href={INSIGHTS_DATA.social_channels.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-[#ff0000]/10 hover:bg-[#ff0000] text-[#ff0000] hover:text-white transition-all border border-[#ff0000]/20 cursor-pointer shadow-2xs" 
              title="Esyasoft on YouTube"
            >
              YouTube
            </a>
            <a 
              href={INSIGHTS_DATA.social_channels.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900/10 dark:bg-slate-700/40 hover:bg-slate-900 text-slate-800 dark:text-slate-200 hover:text-white transition-all border border-slate-300 dark:border-slate-700 cursor-pointer shadow-2xs" 
              title="Esyasoft on X / Twitter"
            >
              X
            </a>
            <a 
              href={INSIGHTS_DATA.social_channels.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-[#e4405f]/10 hover:bg-[#e4405f] text-[#e4405f] hover:text-white transition-all border border-[#e4405f]/20 cursor-pointer shadow-2xs" 
              title="Esyasoft on Instagram"
            >
              Instagram
            </a>
            <a 
              href={INSIGHTS_DATA.social_channels.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-[#1877f2]/10 hover:bg-[#1877f2] text-[#1877f2] hover:text-white transition-all border border-[#1877f2]/20 cursor-pointer shadow-2xs" 
              title="Esyasoft on Facebook"
            >
              Facebook
            </a>
          </div>

          {/* Center: Broadsheet Masthead Logotype */}
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-none font-serif">
              ins<span className="text-emerald-600 font-serif">/</span>ght
            </div>
            <div className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-slate-500 dark:text-slate-400 mt-1">
              Esyasoft Technologies • Global Capability Centre
            </div>
          </div>

          {/* Right: Sync Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              type="button" 
              onClick={handleSyncFeeds}
              className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-emerald-800 border border-slate-300 dark:border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <RefreshCw className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sync Wire</span>
            </button>
          </div>
        </div>

        {/* Editorial Navigation Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-100">
          <div className="flex items-center gap-5 sm:gap-7 overflow-x-auto scrollbar-none">
            <a href="#broadsheet-section" className="hover:text-emerald-700 transition-colors whitespace-nowrap">Broadsheet Front Page</a>
            <a href="#jvs-section" className="hover:text-emerald-700 transition-colors whitespace-nowrap text-blue-700 dark:text-blue-400 flex items-center gap-1">
              <Handshake className="w-3.5 h-3.5" />
              <span>Major Joint Ventures</span>
            </a>
            <a href="#feed-section" className="hover:text-emerald-700 transition-colors whitespace-nowrap">All Curated Dispatches</a>
            <button onClick={() => { setSelectedCategory('acquisitions'); document.getElementById('feed-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-emerald-700 transition-colors whitespace-nowrap cursor-pointer">Mergers &amp; Acquisitions</button>
            <button onClick={() => { setSelectedCategory('partnerships'); document.getElementById('feed-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-emerald-700 transition-colors whitespace-nowrap cursor-pointer">Partnerships &amp; MoUs</button>
          </div>
        </div>

        {/* Breaking News Ticker */}
        <div className="bg-slate-900 text-white text-[11px] py-2 px-4 sm:px-6 lg:px-8 flex items-center gap-3 overflow-hidden border-t border-slate-800 font-mono">
          <span className="px-2 py-0.5 rounded bg-red-600 text-white font-bold text-[10px] uppercase flex-shrink-0 animate-pulse">
            Breaking Wire
          </span>
          <div className="truncate text-slate-300">
            TESLA &amp; ESYASOFT 15 GWh+ BESS DEPLOYMENT ALLIANCE • CYANCONNODE £36.5M ACQUISITION APPROVED BY &gt;96% SHAREHOLDERS • GOOD ENERGY £99.4M DIGITAL EAAS TAKEOVER • ADANI ESYASOFT SMART SOLUTIONS 51:49 JV • PRESIGHT AI INTELLIGRID ALLIANCE • LANDIS+GYR INDIA MDM &amp; MANUFACTURING ALLIANCE • FLOAT IOT (NETHERLANDS) 70% STAKE • ABB E-MOBILITY FLEET ALLIANCE • PARK+ ₹100 CR 10,000 EV CHARGERS
          </div>
          <span className="text-slate-400 text-[10px] hidden lg:inline flex-shrink-0 ml-auto">
            Synced: {syncedTime}
          </span>
        </div>
      </div>

      {/* Corporate Profile & Global Transactions Summary Banner */}
      <section className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border border-slate-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-emerald-500/30">
            <Building2 className="w-3 h-3" />
            <span>Corporate Profile &amp; Global Transactions</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold font-serif text-white tracking-tight">
            Backed by Abu Dhabi's International Holding Company (IHC) via Sirius International Holding
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed font-serif">
            {INSIGHTS_DATA.corporate_summary.description}
          </p>
        </div>
        <a
          href="https://www.ihcuae.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-white text-slate-900 hover:bg-slate-100 flex items-center gap-1.5 transition-colors shadow-sm whitespace-nowrap self-start md:self-center"
        >
          <span>IHC Abu Dhabi</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-700" />
        </a>
      </section>

      {/* 1. BROADSHEET 3-COLUMN NEWSPAPER FRONT PAGE */}
      <section id="broadsheet-section" className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stacked M&A Stories (md:col-span-3) */}
          <div className="md:col-span-3 border-r-0 md:border-r border-slate-200 dark:border-slate-800 pr-0 md:pr-6 space-y-6">
            <div className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider pb-2 border-b border-slate-100 dark:border-slate-800">
              Mergers &amp; Acquisitions Wire
            </div>
            {leftColStories.map((story) => (
              <div 
                key={story.id} 
                onClick={() => setSelectedStory(story)}
                className="group cursor-pointer space-y-2 border-b border-slate-100 dark:border-slate-800/80 pb-5 last:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${story.category_color}`}>
                    {story.category}
                  </span>
                  {story.bureau && (
                    <span className="text-[9px] font-mono text-slate-400 truncate max-w-[120px]">
                      {story.bureau}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 transition-colors font-serif leading-snug">
                  {story.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {story.excerpt}
                </p>
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1">
                  <span>{story.date}</span>
                  {story.source_url ? (
                    <a
                      href={story.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 hover:underline"
                    >
                      <span className="truncate max-w-[110px]">{story.source_name || 'Source'}</span>
                      <ExternalLink className="w-2.5 h-2.5 flex-shrink-0" />
                    </a>
                  ) : (
                    <span>{story.read_time}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Lead Featured Story with Hero Photo (md:col-span-6) */}
          <div className="md:col-span-6 px-0 md:px-2 space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 uppercase tracking-wider">
                  Lead Story • {leadStory.category}
                </span>
                {leadStory.bureau && (
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                    Dateline: {leadStory.bureau}
                  </span>
                )}
              </div>
              
              <h2 
                onClick={() => setSelectedStory(leadStory)}
                className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 dark:text-white hover:text-emerald-700 transition-colors font-serif leading-tight cursor-pointer"
              >
                {leadStory.title}
              </h2>
              
              <div className="flex items-center justify-between flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono border-y border-slate-100 dark:border-slate-800 py-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-700 dark:text-slate-200">{leadStory.author}</span>
                  <span>•</span>
                  <span>{leadStory.date}</span>
                </div>
                {leadStory.source_url && (
                  <a
                    href={leadStory.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                  >
                    <span>{leadStory.source_name || 'Source Wire'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            <div 
              onClick={() => openLightbox(leadStory.image, leadStory.title)}
              className="rounded-2xl overflow-hidden cursor-zoom-in group border border-slate-200 dark:border-slate-800 relative aspect-video shadow-sm"
            >
              <img 
                src={leadStory.image} 
                alt={leadStory.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.target.src = 'assets/header-hero-bg.jpg'; }}
              />
              <div className="absolute bottom-2 left-2 right-2 p-2 rounded-xl bg-slate-950/85 backdrop-blur-sm text-white text-[11px] font-mono truncate">
                {leadStory.image_caption}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-serif">
              {leadStory.excerpt}
            </p>

            <div className="flex items-center gap-3 pt-1">
              <button 
                type="button" 
                onClick={() => setSelectedStory(leadStory)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white flex items-center gap-2 shadow-sm transition-transform active:scale-95 cursor-pointer"
              >
                <span>Read Full Dispatch</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              {leadStory.source_url && (
                <a
                  href={leadStory.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 flex items-center gap-1.5 transition-colors"
                >
                  <span>Direct Source</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Stacked Utility & Strategic Articles (md:col-span-3) */}
          <div className="md:col-span-3 border-l-0 md:border-l border-slate-200 dark:border-slate-800 pl-0 md:pl-6 space-y-6">
            <div className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider pb-2 border-b border-slate-100 dark:border-slate-800">
              Joint Ventures &amp; IoT Wire
            </div>
            {rightColStories.map((story) => (
              <div 
                key={story.id} 
                onClick={() => setSelectedStory(story)}
                className="group cursor-pointer space-y-2 border-b border-slate-100 dark:border-slate-800/80 pb-5 last:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${story.category_color}`}>
                    {story.category}
                  </span>
                  {story.bureau && (
                    <span className="text-[9px] font-mono text-slate-400 truncate max-w-[120px]">
                      {story.bureau}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 transition-colors font-serif leading-snug">
                  {story.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {story.excerpt}
                </p>
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1">
                  <span>{story.date}</span>
                  {story.source_url ? (
                    <a
                      href={story.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 hover:underline"
                    >
                      <span className="truncate max-w-[110px]">{story.source_name || 'Source'}</span>
                      <ExternalLink className="w-2.5 h-2.5 flex-shrink-0" />
                    </a>
                  ) : (
                    <span>{story.read_time}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. MAJOR JOINT VENTURES (JVS) INTERACTIVE MATRIX */}
      <section id="jvs-section" className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-[10px] font-mono font-bold uppercase tracking-wider mb-1">
              <Handshake className="w-3 h-3 text-blue-600" />
              <span>Strategic Alliances</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Major Joint Ventures (JVs) Matrix
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Core corporate joint ventures co-engineered with premier utility leaders and artificial intelligence pioneers.
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden md:inline">3 Tier-1 Joint Ventures</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {INSIGHTS_DATA.joint_ventures.map((jv) => (
            <div 
              key={jv.id}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between space-y-4 hover:border-blue-400 dark:hover:border-blue-600 transition-colors shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                    {jv.badge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{jv.framework_date}</span>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400 font-bold">Venture Partner</div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{jv.partner}</h3>
                </div>

                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">JV Entity Created</div>
                  <div className="text-xs font-bold text-emerald-800 dark:text-emerald-400 font-serif">{jv.entity}</div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold">{jv.ownership}</div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {jv.focus}
                </p>
              </div>

              {jv.source_url && (
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={jv.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <span>View Press Announcement</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. COMPREHENSIVE CATEGORIZED NEWS FEED & SEARCH */}
      <section id="feed-section" className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-emerald-800 dark:text-emerald-400 tracking-wider">
              Curated Wire Dispatches
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Explore All Corporate Insights &amp; Deals
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 max-w-xl font-serif">
              Filter by Mergers &amp; Acquisitions, Major Joint Ventures, Strategic Partnerships &amp; MoUs, or Leadership profiles.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by partner, keyword, tag..." 
              className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs"
            />
          </div>
        </div>

        {/* Category Filter Pills & Expand/Collapse Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-bold">
            {[
              { id: 'all', label: 'All Dispatches' },
              { id: 'acquisitions', label: 'Mergers & Acquisitions (M&A)' },
              { id: 'jvs', label: 'Major Joint Ventures' },
              { id: 'partnerships', label: 'Strategic Partnerships & MoUs' },
              { id: 'leadership', label: 'Corporate Backing & Leadership' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white border border-slate-900 dark:bg-emerald-600 dark:border-emerald-600'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filteredFeedStories.length > 0 && (
            <div className="flex items-center gap-2 flex-shrink-0 self-start sm:self-auto">
              {filteredFeedStories.some(s => !!expandedStoryIds[s.id]) ? (
                <button
                  type="button"
                  onClick={handleCollapseAll}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronsUpDown className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Collapse All</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleExpandAll(filteredFeedStories)}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronsUpDown className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Expand All</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Text-Based Feed Grid (No Images • Progressive Disclosure on Click) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFeedStories.map((story) => {
            const isExpanded = !!expandedStoryIds[story.id];
            return (
              <div 
                key={story.id}
                className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all overflow-hidden ${
                  isExpanded 
                    ? 'border-emerald-500/70 dark:border-emerald-500/60 shadow-md ring-1 ring-emerald-500/20' 
                    : 'border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs hover:shadow-xs'
                }`}
              >
                {/* Clickable Header Area */}
                <div 
                  onClick={() => toggleStoryExpand(story.id)}
                  className="p-5 cursor-pointer space-y-2.5 select-none"
                >
                  {/* Category, Date & Bureau */}
                  <div className="flex items-center justify-between gap-2 flex-wrap text-[10px] font-mono">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2 py-0.5 rounded-md font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 ${story.category_color || 'text-emerald-700 dark:text-emerald-400'}`}>
                        {story.category}
                      </span>
                      {story.bureau && (
                        <span className="text-slate-500 dark:text-slate-400">
                          • {story.bureau}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="w-3 h-3" />
                      <span>{story.date}</span>
                    </div>
                  </div>

                  {/* Headline */}
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-serif leading-snug hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                    {story.title}
                  </h4>

                  {/* Metadata and Click-to-Expand Indicator */}
                  <div className="flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-800/80 text-xs">
                    <span className="text-[11px] font-mono text-slate-400">
                      {story.read_time} • {story.author}
                    </span>
                    <div className="flex items-center gap-1 font-mono font-bold text-xs text-emerald-700 dark:text-emerald-400">
                      <span>{isExpanded ? 'Hide details' : 'Show details'}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
                    </div>
                  </div>
                </div>

                {/* EXPANDED DETAILS (Shown ONLY when clicked) */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800/80 space-y-4 animate-fadeIn bg-slate-50/50 dark:bg-slate-800/30">
                    {/* Story Excerpt / Brief */}
                    <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-serif">
                      {story.excerpt}
                    </div>

                    {/* Tags */}
                    {story.tags && story.tags.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <Tag className="w-3 h-3 text-slate-400 flex-shrink-0" />
                        {story.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Toolbar */}
                    <div className="flex items-center justify-between gap-3 pt-1 flex-wrap">
                      <button
                        type="button"
                        onClick={() => setSelectedStory(story)}
                        className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                      >
                        <span>Read Full Dispatch</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      {story.source_url && (
                        <a
                          href={story.source_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-400 hover:border-emerald-500 transition-colors shadow-2xs"
                        >
                          <span className="truncate max-w-[150px]">{story.source_name || 'Official Source'}</span>
                          <ExternalLink className="w-3 h-3 text-emerald-600" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFeedStories.length === 0 && (
          <div className="py-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center mx-auto">
              <Newspaper className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-100">No articles found</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-serif">Try searching for keywords like "Tesla", "CyanConnode", "Adani", "Presight", "ABB", or "Park+".</p>
          </div>
        )}
      </section>

      {/* FULL ARTICLE READ MODAL */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-[90vh] flex flex-col">
            <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/60">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 uppercase">
                  {selectedStory.category}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">• {selectedStory.read_time}</span>
              </div>
              <button 
                onClick={() => setSelectedStory(null)}
                className="text-slate-400 hover:text-slate-700 dark:text-slate-200 p-1.5 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <h2 className="text-xl sm:text-2xl font-black font-serif text-slate-950 dark:text-white leading-tight">
                {selectedStory.title}
              </h2>

              <div className="flex items-center justify-between flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-700 dark:text-slate-200">{selectedStory.author}</span>
                  {selectedStory.bureau && (
                    <>
                      <span>•</span>
                      <span>{selectedStory.bureau}</span>
                    </>
                  )}
                </div>
                <span>{selectedStory.date}</span>
              </div>

              {/* Direct Source Banner */}
              {selectedStory.source_url && (
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs">
                  <div className="space-y-0.5">
                    <span className="font-mono text-[10px] uppercase text-emerald-800 dark:text-emerald-400 font-bold tracking-wider block">
                      Verified External Source Wire
                    </span>
                    <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                      {selectedStory.source_name || 'Official Corporate Wire'}
                    </span>
                  </div>
                  <a 
                    href={selectedStory.source_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-bold shadow-xs transition-colors whitespace-nowrap"
                  >
                    <span>Read Original Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {selectedStory.image && (
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 aspect-video relative max-h-[380px] bg-slate-950">
                  <img 
                    src={selectedStory.image} 
                    alt={selectedStory.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'assets/header-hero-bg.jpg'; }}
                  />
                  {selectedStory.image_caption && (
                    <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 backdrop-blur-sm p-2 text-white text-[11px] font-mono">
                      {selectedStory.image_caption}
                    </div>
                  )}
                </div>
              )}

              <div 
                className="prose dark:prose-invert prose-sm max-w-none text-slate-700 dark:text-slate-200 leading-relaxed font-serif space-y-4"
                dangerouslySetInnerHTML={{ __html: selectedStory.content || `<p>${selectedStory.excerpt}</p>` }}
              />

              {selectedStory.tags && (
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-1">Tags:</span>
                  {selectedStory.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-lg text-[10px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between">
              {selectedStory.source_url ? (
                <a
                  href={selectedStory.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{selectedStory.source_name || 'Open Link'}</span>
                </a>
              ) : <div />}
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 transition-colors cursor-pointer"
              >
                Close Dispatch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
