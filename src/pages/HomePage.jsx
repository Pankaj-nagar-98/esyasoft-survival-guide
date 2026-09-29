import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Users, 
  Cpu, 
  Check, 
  ArrowRight, 
  Image as ImageIcon,
  Fingerprint,
  Milestone,
  Building2,
  Palmtree,
  LifeBuoy,
  Newspaper,
  HelpCircle,
  Clock,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  Maximize2,
  HeartHandshake
} from 'lucide-react';
import { useModal } from '../context/ModalContext';
import LeadershipSection from '../components/home/LeadershipSection';
import BusinessVerticals from '../components/home/BusinessVerticals';
import NoticeBoard from '../components/hub/NoticeBoard';
import CalendarHolidaysWidget from '../components/hub/CalendarHolidaysWidget';
import QuickActionsBar from '../components/hub/QuickActionsBar';
import ImportantContactsWidget from '../components/hub/ImportantContactsWidget';
import CampusQuickGuide from '../components/hub/CampusQuickGuide';
import { MANGALURU_HUB_DATA } from '../data/mangaluruHubData';

export default function HomePage() {
  const { openLightbox } = useModal();
  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      setTimeStr(`${displayHours}:${minutes}:${seconds} ${ampm}`);

      const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
      setDateStr(now.toLocaleDateString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const launchpadCards = [
    {
      to: '/attendance',
      img: 'assets/induction-all-hands.jpg',
      badge: 'Simulator',
      icon: Fingerprint,
      title: 'Biometric Attendance',
      desc: 'Simulate physical terminal punches, understand Zoho sync cadence, and maintain 100% compliance.',
      actionText: 'Open Simulator →'
    },
    {
      to: '/roadmap',
      img: 'assets/header-hero-bg.jpg',
      badge: '90-Day Plan',
      icon: Milestone,
      title: 'Induction Roadmap',
      desc: 'Track foundational smart grid milestones, from Day 1 tools setup to AMI architecture and Discom capstone.',
      actionText: 'View Roadmap →'
    },
    {
      to: '/campus',
      img: 'assets/table-tennis-room.jpg',
      badge: 'Facilities',
      icon: Building2,
      title: 'Campus Living Hub',
      desc: 'Recreation arena, gym etiquette, Adya mess meal hours, quiet library pods, and living quarters.',
      actionText: 'Explore Campus →'
    },
    {
      to: '/escapes',
      img: 'assets/malpe-beach.jpg',
      badge: 'Weekend',
      icon: Palmtree,
      title: 'Coastal Escapes',
      desc: 'Interactive Google Maps guide for Malpe Beach, St. Mary\'s Island basalt rocks, and coastal transit.',
      actionText: 'Discover Spots →'
    },
    {
      to: '/grievance',
      img: 'assets/accommodation-room.jpg',
      badge: 'Help Desk',
      icon: LifeBuoy,
      title: 'Grievance Portal',
      desc: 'Log accommodation, IT, or cafeteria maintenance tickets with automated department SLA routing.',
      actionText: 'Raise Ticket →'
    },
    {
      to: '/insight',
      img: 'assets/header-hero-bg.jpg',
      badge: 'Global Wire',
      icon: Newspaper,
      title: 'Corporate Insights',
      desc: 'Esyasoft global dispatches: Tesla 15 GWh BESS partnership, Good Energy £99.4M acquisition, and news.',
      actionText: 'Read Wire →'
    },
    {
      to: '/faqs',
      img: 'assets/cafeteria-breakfast.jpg',
      badge: 'Quick Search',
      icon: HelpCircle,
      title: 'Master Onboarding FAQs',
      desc: 'Instant answers for Zoho profiles, Outlook/Teams etiquette, bank accounts, dress code, and local transit.',
      actionText: 'Search FAQs →'
    }
  ];

  return (
    <div className="space-y-8 sm:space-y-10 animate-fadeIn">
      
      {/* 1. DAILY PULSE & WELCOME MASTHEAD WITH FEATURED PHOTO */}
      <section className="space-y-4">
        {/* Top Status Pulse Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:px-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>MANGALURU CENTRE</span>
            </span>
            <span className="text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400" />
              <span>Kolambe Proper, Bajpe</span>
            </span>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
            <span className="text-slate-600 dark:text-slate-300 font-mono font-semibold flex items-center gap-1">
              <Clock className="w-3 h-3 text-emerald-600" />
              <span>{dateStr} • {timeStr}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 font-mono text-[11px] font-bold">
              Biometric Punch: Before 08:59 AM
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Batch 2026 • 90-Day Induction</span>
            </div>
          </div>
        </div>

        {/* Featured Photo Banner: 'Esyasoft Leadership & Batch 2026 Cohort' */}
        <div 
          onClick={() => openLightbox('assets/header-hero-bg.jpg', 'Esyasoft Leadership & Batch 2026 Cohort', 'Executive leadership, mentors, and the Batch 2026 engineers gathered together at Esyasoft Holding.')}
          className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-sm group cursor-pointer aspect-[16/7] sm:aspect-[21/8] lg:aspect-[24/8] max-h-[360px] w-full bg-slate-950"
        >
          <img 
            src="assets/header-hero-bg.jpg" 
            alt="Esyasoft Leadership & Batch 2026 Cohort" 
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/10"></div>
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/80 shadow-md flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-600" />
              <span>Esyasoft Leadership &amp; Batch 2026 Cohort</span>
            </span>

            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900/80 backdrop-blur-md text-white border border-white/20 shadow-md flex items-center gap-1.5 group-hover:bg-emerald-600 transition-colors">
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Click to Enlarge</span>
            </span>
          </div>

          {/* Bottom Heading & Subtitle Overlay */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Mangaluru GCC • Centre of Excellence
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight drop-shadow-sm">
                Welcome to Mangaluru Smart Employee Hub
              </h1>
              <p className="text-xs sm:text-sm text-slate-200/90 max-w-2xl drop-shadow-sm leading-relaxed">
                Your daily operational command: access campus notices, upcoming training schedules, biometric compliance, amenities, and essential contacts at a glance.
              </p>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openLightbox('assets/header-hero-bg.jpg', 'Esyasoft Leadership & Batch 2026 Cohort', 'Executive leadership, mentors, and the Batch 2026 engineers gathered together at Esyasoft Holding.');
              }}
              className="flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 flex items-center gap-1.5 transition-all shadow-sm self-start sm:self-auto cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full-Screen Photo</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE 3 PILLARS OF ESYASOFT */}
      <section id="pillars" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              <span>Esyasoft Core Foundation</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              The 3 Pillars of Esyasoft
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Our guiding principles shaping global utility transformation, culture, and delivery excellence.
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden md:inline">Core Principles</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Pillar 1: People First */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Pillar 01
                </span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  People First
                </h3>
                <span className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                  Culture, Mentorship &amp; Growth
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                People are at the core of everything we do. We empower engineers, champion open mentorship, foster work-life harmony, and cultivate collective growth across all our global centres.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span>Empowerment &amp; Empathy</span>
              <span className="text-emerald-600 font-bold">1,000+ Innovators</span>
            </div>
          </div>

          {/* Pillar 2: Technology Excellence */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Pillar 02
                </span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Technology Excellence
                </h3>
                <span className="text-xs font-mono font-semibold text-blue-700 dark:text-blue-400">
                  Smart Grid &amp; IoT Innovation
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Relentless innovation and product quality. From DLMS/COSEM and AMI telemetry to AI-driven MDM platforms and Tesla BESS integrations, we engineer world-class utility technology.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span>Carrier-Grade Architecture</span>
              <span className="text-blue-600 font-bold">50M+ Endpoints</span>
            </div>
          </div>

          {/* Pillar 3: Delivery Excellence */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-600 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  Pillar 03
                </span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Delivery Excellence
                </h3>
                <span className="text-xs font-mono font-semibold text-purple-700 dark:text-purple-400">
                  Agility, SLAs &amp; Reliability
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Agility, nimbleness, and execution discipline. We meet stringent utility SLAs, deliver billing-grade accuracy, and deploy complex Discom solutions on time with uncompromising integrity.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span>SLA Rigor &amp; Compliance</span>
              <span className="text-purple-600 font-bold">99.9% Reliability</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FREQUENTLY USED QUICK ACTIONS TOOLBAR */}
      <section className="space-y-2.5">
        <div className="flex items-center justify-between text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
          <span>Quick Launch Actions</span>
          <span>Instant Access</span>
        </div>
        <QuickActionsBar />
      </section>

      {/* 3. CORE DAILY OPERATIONS GRID (2-COLUMN SPLIT) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (8 of 12): Notice Board & Campus Guide */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-8">
          {/* Notice Board Widget */}
          <NoticeBoard />

          {/* Campus Quick Guide (Floor & Amenities Navigator) */}
          <CampusQuickGuide />
        </div>

        {/* Right Column (4 of 12): Calendar/Holidays & Contacts */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-8">
          {/* Calendar & Holidays Widget (Events, Mandatory, Optional) */}
          <CalendarHolidaysWidget />

          {/* Important Contacts & Escalation Directory */}
          <ImportantContactsWidget />
        </div>

      </section>

      {/* 4. FIVE BUSINESS VERTICALS (INTERACTIVE CONSTELLATION) */}
      <div id="verticals">
        <BusinessVerticals />
      </div>

      {/* 5. DEDICATED OPERATIONS PORTALS (STREAMLINED LAUNCHPAD) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider mb-1">
              <Layers className="w-3 h-3 text-emerald-600" />
              <span>Dedicated Portals</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Campus Operations &amp; Learning Portals
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Deep-dive into individual specialized tools and modules for Batch 2026.
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden md:inline">7 Dedicated Modules</span>
        </div>

        {/* Launchpad Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {launchpadCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                to={card.to}
                className="group bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="h-28 -mx-5 -mt-5 mb-3.5 overflow-hidden relative bg-slate-900">
                    <img 
                      src={card.img} 
                      alt={card.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                      onError={(e) => { e.target.src = 'assets/header-hero-bg.jpg'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent dark:from-slate-900 dark:via-slate-900/30 dark:to-transparent"></div>
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs text-emerald-800 dark:text-emerald-300 border border-slate-200 dark:border-slate-700 shadow-2xs">
                      {card.badge}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  <span>{card.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 6. GLOBAL EXECUTIVE COUNCIL & LEADERSHIP */}
      <div id="leadership">
        <LeadershipSection />
      </div>

    </div>
  );
}
