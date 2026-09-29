import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Gauge, 
  Cpu, 
  Leaf, 
  BatteryCharging, 
  PlugZap,
  ArrowRight,
  Sparkles,
  Info,
  CheckCircle2,
  ChevronRight,
  Activity,
  Layers,
  Zap,
  ExternalLink,
  ShieldCheck,
  X,
  TrendingUp,
  LayoutGrid,
  Radio,
  Sliders,
  Orbit
} from 'lucide-react';

export default function BusinessVerticals() {
  const [activeVerticalId, setActiveVerticalId] = useState('smart-utility');
  const [activeSubPill, setActiveSubPill] = useState(null);
  const [viewMode, setViewMode] = useState('planet'); // 'planet' | 'interactive' | 'matrix'
  const [showGlossary, setShowGlossary] = useState(false);

  const verticalsData = [
    {
      id: 'smart-utility',
      num: '01',
      title: 'Smart Utility Solutions',
      shortTitle: 'Smart Utility',
      tagline: 'End-to-end digital metering infrastructure & telemetry',
      theme: {
        accent: 'from-cyan-500 to-teal-600',
        badge: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
        ring: 'border-cyan-500/30 text-cyan-600 dark:text-cyan-400',
        border: 'hover:border-cyan-400 dark:hover:border-cyan-600',
        indicator: 'bg-cyan-500'
      },
      icon: Gauge,
      subTags: [
        { 
          satelliteLabel: 'Smart Metering',
          label: 'Smart Metering', 
          desc: 'Polyphase, single-phase, and CT-operated smart meters capturing real-time active (kWh) and reactive (kVAh) power, voltage quality, and load profiles.',
          acronym: 'High-precision solid-state energy measurement',
          protocols: 'DLMS/COSEM, OBIS 1.0.1.8.0.255'
        },
        { 
          satelliteLabel: 'AMI',
          label: 'AMI Telemetry', 
          desc: 'Advanced Metering Infrastructure providing two-way cellular (NB-IoT/4G) and RF Mesh telemetry between edge meters and utility command centers.',
          acronym: 'Advanced Metering Infrastructure',
          protocols: 'Cellular NB-IoT, CyanConnode RF Mesh'
        },
        { 
          satelliteLabel: 'IoT',
          label: 'IoT Gateways', 
          desc: 'Edge-to-cloud connectivity gateways handling sub-second event alarms, power quality telemetry, and remote firmware-over-the-air (FOTA) upgrades.',
          acronym: 'Internet of Things Industrial Gateways',
          protocols: 'MQTT, CoAP, Sub-GHz Mesh'
        },
        { 
          satelliteLabel: 'MDMS',
          label: 'MDMS Platform', 
          desc: 'Meter Data Management System running high-throughput Validation, Estimation & Editing (VEE) rules and generating settlement billing determinants.',
          acronym: 'Meter Data Management System',
          protocols: 'Automated VEE, CIS/Billing Ingestion'
        }
      ],
      mission: 'Pioneering end-to-end digital metering infrastructure and telemetry ingestion across electric, gas, and water utilities worldwide.',
      leader: 'Amit Ghulani (Chief Solutions Officer) / Abdul Karim Sawan',
      metrics: '50M+ Connected Smart Meters Across 40+ Utilities',
      roadmapDays: 'Days 3, 5, 8, 12 & 14 (DLMS/COSEM, HES & VEE)',
      realWorldAnchor: 'Adani Esyasoft JV (51:49) & £36.5M CyanConnode RF Mesh Integration'
    },
    {
      id: 'software-ai',
      num: '02',
      title: 'Software, Analytics & AI',
      shortTitle: 'Software & AI',
      tagline: 'Predictive utility intelligence & AT&C loss mitigation',
      theme: {
        accent: 'from-blue-500 to-indigo-600',
        badge: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800',
        ring: 'border-blue-500/30 text-blue-600 dark:text-blue-400',
        border: 'hover:border-blue-400 dark:hover:border-blue-600',
        indicator: 'bg-blue-500'
      },
      icon: Cpu,
      subTags: [
        { 
          satelliteLabel: 'Analytics',
          label: 'Grid Analytics', 
          desc: 'Feeder-level energy balancing, distribution transformer secondary load profiling, and automated commercial billing reconciliation.',
          acronym: 'Grid Analytics & Load Disaggregation',
          protocols: 'Time-Series DB, Energy Balance VEE'
        },
        { 
          satelliteLabel: 'AI',
          label: 'AI Loss Detection', 
          desc: 'Deep learning models analyzing 15-minute interval consumption curves to detect meter tampering, unmetered taps, and anomalous bypass signatures.',
          acronym: 'Artificial Intelligence & Loss Detection',
          protocols: 'Neural Pattern Recognition, Anomaly Scores'
        },
        { 
          satelliteLabel: 'Digital Twins',
          label: 'Digital Twins', 
          desc: 'Real-time virtual simulation of utility distribution networks, forecasting transformer thermal stress, phase imbalance, and fault propagation.',
          acronym: 'Grid Digital Twin Modeling',
          protocols: 'GIS Geospatial Layering, Thermal Models'
        },
        { 
          satelliteLabel: 'Forecasting',
          label: 'Load Forecasting', 
          desc: 'Machine-learning load and generation forecasting accounting for meteorological variables, day-ahead wholesale prices, and industrial shifts.',
          acronym: 'Predictive Load & Price Forecasting',
          protocols: 'LSTM / Transformer Weather Modeling'
        }
      ],
      mission: 'Transforming raw telemetry into high-value operational intelligence, slashing AT&C commercial losses and optimizing utility power dispatch.',
      leader: 'Jamal Najem (Chief Transformation Officer) & AI Data Pod',
      metrics: '18% Commercial Loss Reduction Across Tier-1 Discoms',
      roadmapDays: 'Days 6, 9, 13 & 15 (AI Analytics & Anomaly Detection)',
      realWorldAnchor: 'IntelliGrid JV with Presight AI (Baku Energy Week Gen-AI Alliance)'
    },
    {
      id: 'eaas',
      num: '03',
      title: 'Energy as a Service (EaaS)',
      shortTitle: 'Energy as a Service',
      tagline: 'Decarbonized energy subscriptions & decentralized retail power',
      theme: {
        accent: 'from-emerald-500 to-green-600',
        badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
        ring: 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
        border: 'hover:border-emerald-400 dark:hover:border-emerald-600',
        indicator: 'bg-emerald-500'
      },
      icon: Leaf,
      subTags: [
        { 
          satelliteLabel: 'Optimization',
          label: 'Energy Optimization', 
          desc: 'Commercial and industrial energy efficiency management, smart thermostat coordination, and peak consumption demand mitigation.',
          acronym: 'Behind-the-Meter Energy Optimization',
          protocols: 'BACnet, Modbus, Smart Building IoT'
        },
        { 
          satelliteLabel: 'Renewables',
          label: '100% Renewables', 
          desc: 'Pure green power retail supply contracts, decentralized rooftop solar PV installations, and localized clean generation.',
          acronym: 'Decentralized Clean Generation',
          protocols: 'PPA Contracts, Net-Metering Settlement'
        },
        { 
          satelliteLabel: 'Flexibility',
          label: 'Demand Flexibility', 
          desc: 'Automated demand response (ADR) aggregation, dynamically shifting flexible loads away from high-tariff peak grid windows.',
          acronym: 'Demand Side Response & Flexibility',
          protocols: 'OpenADR 2.0b, Virtual Power Plant (VPP)'
        }
      ],
      mission: 'Delivering turnkey decarbonized energy solutions, enabling commercial, industrial, and residential consumers to transition to clean power with zero upfront capital.',
      leader: 'Nigel Pocklington (Head of Energy as a Service)',
      metrics: '£99.4M Good Energy Group PLC Acquisition (100% Equity)',
      roadmapDays: 'Month 2 & Month 3 (Discom Shadowing & Green Power Tariffs)',
      realWorldAnchor: 'Good Energy UK Retail Power Supply & Zapmap EV Integration'
    },
    {
      id: 'bess',
      num: '04',
      title: 'Battery Energy Storage (BESS)',
      shortTitle: 'Battery Storage',
      tagline: 'Grid stabilization, frequency regulation & renewable firming',
      theme: {
        accent: 'from-purple-500 to-violet-600',
        badge: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-200 dark:border-purple-800',
        ring: 'border-purple-500/30 text-purple-600 dark:text-purple-400',
        border: 'hover:border-purple-400 dark:hover:border-purple-600',
        indicator: 'bg-purple-500'
      },
      icon: BatteryCharging,
      subTags: [
        { 
          satelliteLabel: 'Grid Stability',
          label: 'Grid Stability', 
          desc: 'Sub-second frequency containment reserves, synthetic inertia injection, and rapid voltage support to counter solar and wind intermittency.',
          acronym: 'Dynamic Grid Frequency Regulation',
          protocols: 'Sub-second Inverter Ingestion, FCR/aFRR'
        },
        { 
          satelliteLabel: 'Peak Management',
          label: 'Peak Shaving', 
          desc: 'Charging during low-cost mid-day renewable surplus and discharging during extreme evening grid peaks, avoiding costly peaker plants.',
          acronym: 'Peak Shaving & Energy Arbitrage',
          protocols: 'Day-Ahead Price Dispatch, State-of-Charge VEE'
        },
        { 
          satelliteLabel: 'Resilience',
          label: 'Renewable Firming & Resilience', 
          desc: 'Smoothing volatile solar farm and offshore wind outputs to supply guaranteed flat baseload capacity to regional utility off-takers.',
          acronym: 'Renewable Output Smoothing',
          protocols: 'Ramp-Rate Limiting, BESS Megapack Telemetry'
        }
      ],
      mission: 'Deploying utility-scale battery storage hardware and predictive energy management software to stabilize national macro-grids and power AI data centers.',
      leader: 'Alfred Manohar (Head of Battery Storage Solutions)',
      metrics: '15 GWh+ Global Deployment Alliance with Tesla Megapack',
      roadmapDays: 'Month 3 (Battery Degradation Modeling & Dispatch Schedulers)',
      realWorldAnchor: 'Esyasoft Energy Storage Powered by Tesla (UK, Europe, GCC, India)'
    },
    {
      id: 'ev-infra',
      num: '05',
      title: 'EV Infrastructure & Mobility',
      shortTitle: 'E-Mobility',
      tagline: 'Smart charging networks, fleet electrification & roaming hubs',
      theme: {
        accent: 'from-amber-500 to-orange-600',
        badge: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-800',
        ring: 'border-amber-500/30 text-amber-600 dark:text-amber-400',
        border: 'hover:border-amber-400 dark:hover:border-amber-600',
        indicator: 'bg-amber-500'
      },
      icon: PlugZap,
      subTags: [
        { 
          satelliteLabel: 'EV Charging',
          label: 'Charging Stations', 
          desc: 'AC Level 2 destination chargers and ultra-fast DC fast chargers (50 kW to 360 kW) for residential complexes, tech parks, and highway plazas.',
          acronym: 'Public & Private EV Chargepoints',
          protocols: 'OCPP 1.6J / 2.0.1, ISO 15118 Plug & Charge'
        },
        { 
          satelliteLabel: 'CPMS',
          label: 'Smart Charging & CPMS', 
          desc: 'Vehicle-to-Grid (V2G) bidirectional power flow, automated dynamic load balancing, and time-of-use tariff synchronization.',
          acronym: 'Dynamic Load Balancing & CPMS',
          protocols: 'OCPP Cloud Controller, Dynamic Load Curvilinear Controls'
        },
        { 
          satelliteLabel: 'Fleet',
          label: 'Fleet Management', 
          desc: 'Turnkey depot charging management for commercial transit buses, parcel delivery vans, and corporate taxi fleets.',
          acronym: 'Turnkey Commercial Fleet Depots',
          protocols: 'ABB High-Power Depots, Telematics API'
        }
      ],
      mission: 'Engineering turnkey eMobility architectures, combining ultra-fast DC hardware with cloud-native charge point management and roaming settlement apps.',
      leader: 'Abdul Karim Sawan (Head of eMobility)',
      metrics: '10,000 EV Charging Spaces Under ₹100 Crore Park+ Initiative',
      roadmapDays: 'Month 2 & 3 (OCPP Protocol Testing & EV Load Curtailment)',
      realWorldAnchor: 'ABB E-mobility Fleet MoU (LATAM & MEA) & Zapmap EV Network'
    }
  ];

  // Coordinates and Geometry for the Interactive Planet Network Diagram (ViewBox: 0 0 1100 620)
  const planetNodes = [
    {
      id: 'smart-utility',
      num: '01',
      cx: 320,
      cy: 135,
      r: 52,
      icon: Gauge,
      title1: 'SMART UTILITY',
      title2: 'SOLUTIONS',
      color: '#06b6d4', // cyan-500
      glowColor: 'rgba(6, 182, 212, 0.45)',
      connector: {
        from: { x: 495, y: 245 },
        to: { x: 360, y: 160 }
      },
      satellites: [
        { key: 0, label: 'Smart Metering', pillX: 45, pillY: 55, width: 125, dot: { x: 170, y: 69 }, path: 'M 270,122 C 220,110 185,69 170,69' },
        { key: 1, label: 'AMI', pillX: 95, pillY: 100, width: 75, dot: { x: 170, y: 114 }, path: 'M 268,130 C 225,128 185,114 170,114' },
        { key: 2, label: 'IoT', pillX: 95, pillY: 145, width: 75, dot: { x: 170, y: 159 }, path: 'M 268,140 C 225,145 185,159 170,159' },
        { key: 3, label: 'MDMS', pillX: 80, pillY: 190, width: 90, dot: { x: 170, y: 204 }, path: 'M 270,148 C 220,165 185,204 170,204' }
      ]
    },
    {
      id: 'software-ai',
      num: '02',
      cx: 780,
      cy: 135,
      r: 52,
      icon: Cpu,
      title1: 'SOFTWARE,',
      title2: 'ANALYTICS & AI',
      color: '#3b82f6', // blue-500
      glowColor: 'rgba(59, 130, 246, 0.45)',
      connector: {
        from: { x: 605, y: 245 },
        to: { x: 740, y: 160 }
      },
      satellites: [
        { key: 0, label: 'Analytics', pillX: 930, pillY: 55, width: 105, dot: { x: 930, y: 69 }, path: 'M 830,122 C 880,110 915,69 930,69' },
        { key: 1, label: 'AI', pillX: 930, pillY: 100, width: 65, dot: { x: 930, y: 114 }, path: 'M 832,130 C 875,128 915,114 930,114' },
        { key: 2, label: 'Digital Twins', pillX: 930, pillY: 145, width: 120, dot: { x: 930, y: 159 }, path: 'M 832,140 C 875,145 915,159 930,159' },
        { key: 3, label: 'Forecasting', pillX: 930, pillY: 190, width: 115, dot: { x: 930, y: 204 }, path: 'M 830,148 C 880,165 915,204 930,204' }
      ]
    },
    {
      id: 'eaas',
      num: '03',
      cx: 260,
      cy: 410,
      r: 50,
      icon: Leaf,
      title1: 'ENERGY AS',
      title2: 'A SERVICE',
      color: '#10b981', // emerald-500
      glowColor: 'rgba(16, 185, 129, 0.45)',
      connector: {
        from: { x: 495, y: 305 },
        to: { x: 305, y: 390 }
      },
      satellites: [
        { key: 0, label: 'Optimization', pillX: 55, pillY: 355, width: 120, dot: { x: 175, y: 369 }, path: 'M 215,400 C 185,395 180,369 175,369' },
        { key: 1, label: 'Renewables', pillX: 65, pillY: 398, width: 110, dot: { x: 175, y: 412 }, path: 'M 210,410 C 185,410 180,412 175,412' },
        { key: 2, label: 'Flexibility', pillX: 75, pillY: 442, width: 100, dot: { x: 175, y: 456 }, path: 'M 215,420 C 185,428 180,456 175,456' }
      ]
    },
    {
      id: 'bess',
      num: '04',
      cx: 550,
      cy: 450,
      r: 52,
      icon: BatteryCharging,
      title1: 'BATTERY',
      title2: 'ENERGY STORAGE',
      title3: '(BESS)',
      color: '#8b5cf6', // purple-500
      glowColor: 'rgba(139, 92, 246, 0.45)',
      connector: {
        from: { x: 550, y: 345 },
        to: { x: 550, y: 398 }
      },
      satellites: [
        { key: 0, label: 'Grid Stability', pillX: 375, pillY: 550, width: 120, dot: { x: 495, y: 550 }, path: 'M 535,500 C 510,520 495,535 495,550' },
        { key: 1, label: 'Peak Management', pillX: 505, pillY: 550, width: 140, dot: { x: 575, y: 550 }, path: 'M 550,502 C 550,520 575,535 575,550' },
        { key: 2, label: 'Resilience', pillX: 655, pillY: 550, width: 105, dot: { x: 655, y: 550 }, path: 'M 565,500 C 590,520 655,535 655,550' }
      ]
    },
    {
      id: 'ev-infra',
      num: '05',
      cx: 840,
      cy: 410,
      r: 50,
      icon: PlugZap,
      title1: 'E-MOBILITY',
      title2: '(EV INFRA)',
      color: '#f59e0b', // amber-500
      glowColor: 'rgba(245, 158, 11, 0.45)',
      connector: {
        from: { x: 605, y: 305 },
        to: { x: 795, y: 390 }
      },
      satellites: [
        { key: 0, label: 'EV Charging', pillX: 925, pillY: 355, width: 115, dot: { x: 925, y: 369 }, path: 'M 885,400 C 915,395 920,369 925,369' },
        { key: 1, label: 'CPMS', pillX: 925, pillY: 398, width: 80, dot: { x: 925, y: 412 }, path: 'M 890,410 C 915,410 920,412 925,412' },
        { key: 2, label: 'Fleet', pillX: 925, pillY: 442, width: 80, dot: { x: 925, y: 456 }, path: 'M 885,420 C 915,428 920,456 925,456' }
      ]
    }
  ];

  const currentVertical = verticalsData.find(v => v.id === activeVerticalId) || verticalsData[0];
  const CurrentIcon = currentVertical.icon;

  return (
    <section className="space-y-6 pt-2">
      {/* Header with Title and Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider mb-1.5">
            <Orbit className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Integrated Value Chain Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Five business verticals
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5 max-w-2xl leading-relaxed">
            Esyasoft builds solutions across the energy and utility value chain. These are areas you'll explore throughout your training.
          </p>
        </div>

        {/* Action Controls: Acronym Guide & View Mode Switcher */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setShowGlossary(!showGlossary)}
            className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            title="Open Terminology Glossary"
          >
            <Info className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="hidden sm:inline">Acronym Guide</span>
            <span className="sm:hidden">Glossary</span>
          </button>

          <div className="bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl flex items-center gap-1 border border-slate-200 dark:border-slate-700 text-xs font-bold font-mono">
            <button
              type="button"
              onClick={() => setViewMode('planet')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'planet'
                  ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>Planet Network</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('interactive')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'interactive'
                  ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Deck View</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('matrix')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'matrix'
                  ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Value Chain Matrix</span>
              <span className="sm:hidden">Matrix</span>
            </button>
          </div>
        </div>
      </div>

      {/* QUICK ACRONYM GLOSSARY MODAL / ACCORDION */}
      {showGlossary && (
        <div className="p-5 rounded-3xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
                Utility &amp; Smart Grid Acronym Decoder
              </h4>
            </div>
            <button 
              onClick={() => setShowGlossary(false)} 
              className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900 text-xs">
              <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">AMI:</span>{' '}
              <span className="text-slate-700 dark:text-slate-300">Advanced Metering Infrastructure (2-way smart meter communications).</span>
            </div>
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900 text-xs">
              <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">MDMS:</span>{' '}
              <span className="text-slate-700 dark:text-slate-300">Meter Data Management System (validation, billing, settlement).</span>
            </div>
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900 text-xs">
              <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">BESS:</span>{' '}
              <span className="text-slate-700 dark:text-slate-300">Battery Energy Storage Systems (Megapack grid stabilizing batteries).</span>
            </div>
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900 text-xs">
              <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">CPMS:</span>{' '}
              <span className="text-slate-700 dark:text-slate-300">Charge Point Management System (OCPP EV charger orchestration).</span>
            </div>
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900 text-xs">
              <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">EaaS:</span>{' '}
              <span className="text-slate-700 dark:text-slate-300">Energy as a Service (managed green energy subscription model).</span>
            </div>
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900 text-xs">
              <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">HES:</span>{' '}
              <span className="text-slate-700 dark:text-slate-300">Head-End System (telemetry collector communicating with smart meters).</span>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 0: PLANET NETWORK DIAGRAM (FEATURED / DEFAULT VIEW) */}
      {viewMode === 'planet' && (
        <div className="space-y-6">
          {/* Mobile Quick-Tap Pill Bar */}
          <div className="flex lg:hidden items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs font-mono">
            {verticalsData.map((v) => {
              const isActive = activeVerticalId === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => { setActiveVerticalId(v.id); setActiveSubPill(null); }}
                  className={`px-3 py-1.5 rounded-full flex-shrink-0 transition-all font-bold ${
                    isActive 
                      ? 'bg-emerald-600 text-white shadow-xs' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {v.num} {v.shortTitle}
                </button>
              );
            })}
          </div>

          {/* Planet Network Interactive Canvas */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-800/90 bg-[#070e1b] shadow-2xl p-2 sm:p-6 select-none">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Instruction Badge */}
            <div className="absolute top-4 left-6 z-10 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-[11px] font-mono text-emerald-400">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
              <span>Interactive Constellation • Click any planet or satellite capability</span>
            </div>

            {/* SVG Diagram Canvas */}
            <svg 
              viewBox="0 0 1100 620" 
              className="w-full h-auto max-h-[640px] relative z-10 transition-all duration-300"
              style={{ minHeight: '360px' }}
            >
              <defs>
                {/* Blur filter for glowing halos */}
                <filter id="blur-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Central Hub Gradient */}
                <radialGradient id="centerHubGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#059669" />
                  <stop offset="60%" stopColor="#064e3b" />
                  <stop offset="100%" stopColor="#022c22" />
                </radialGradient>

                {/* Inactive Planet Gradient */}
                <radialGradient id="planetGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0d9488" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#0f172a" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#090d16" stopOpacity="1" />
                </radialGradient>

                {/* Active Planet Gradient */}
                <radialGradient id="activePlanetGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#047857" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#064e3b" stopOpacity="1" />
                </radialGradient>
              </defs>

              {/* Decorative 4-pointed Star on Bottom Right (matches user reference image) */}
              <path 
                d="M 1030,510 Q 1030,530 1010,530 Q 1030,530 1030,550 Q 1030,530 1050,530 Q 1030,530 1030,510 Z" 
                fill="#34d399" 
                opacity="0.5" 
                className="animate-pulse"
              />

              {/* CONNECTING RADIANT LINES (Center to Planets) */}
              {planetNodes.map((p) => {
                const isActive = activeVerticalId === p.id;
                return (
                  <g key={`conn-${p.id}`}>
                    {/* Glowing underlay line */}
                    <line 
                      x1={p.connector.from.x} 
                      y1={p.connector.from.y} 
                      x2={p.connector.to.x} 
                      y2={p.connector.to.y} 
                      stroke={isActive ? p.color : '#047857'} 
                      strokeWidth={isActive ? '3' : '1.5'} 
                      strokeOpacity={isActive ? '0.9' : '0.35'}
                      strokeDasharray={isActive ? 'none' : '4 3'}
                      className="transition-all duration-300"
                    />

                    {/* Active moving energy pulse bead */}
                    {isActive && (
                      <circle 
                        r="4" 
                        fill="#34d399" 
                        filter="url(#blur-glow)"
                      >
                        <animateMotion 
                          path={`M ${p.connector.from.x},${p.connector.from.y} L ${p.connector.to.x},${p.connector.to.y}`} 
                          dur="2.5s" 
                          repeatCount="indefinite" 
                        />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* SATELLITE BRANCH LINES & PILLS */}
              {planetNodes.map((p) => {
                const isActive = activeVerticalId === p.id;
                return (
                  <g key={`satellites-${p.id}`} className="transition-all duration-300">
                    {p.satellites.map((sat) => {
                      const isSelectedSub = isActive && activeSubPill === sat.key;
                      return (
                        <g 
                          key={sat.key} 
                          className="cursor-pointer group"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveVerticalId(p.id);
                            setActiveSubPill(sat.key);
                          }}
                        >
                          {/* Curved bezier connecting path */}
                          <path 
                            d={sat.path} 
                            fill="none" 
                            stroke={isSelectedSub ? '#34d399' : (isActive ? p.color : '#1e3a34')} 
                            strokeWidth={isSelectedSub ? '2.5' : (isActive ? '1.8' : '1.2')} 
                            strokeOpacity={isActive ? '0.9' : '0.4'}
                            className="transition-all duration-300"
                          />

                          {/* Glowing Dot Anchor */}
                          <circle 
                            cx={sat.dot.x} 
                            cy={sat.dot.y} 
                            r={isSelectedSub ? 4.5 : 3.5} 
                            fill={isSelectedSub ? '#34d399' : (isActive ? p.color : '#10b981')} 
                            opacity={isActive ? 1 : 0.6}
                          />

                          {/* Satellite Pill Box */}
                          <rect 
                            x={sat.pillX} 
                            y={sat.pillY} 
                            width={sat.width} 
                            height="28" 
                            rx="14" 
                            fill={isSelectedSub ? '#064e3b' : (isActive ? '#0b192c' : '#08101e')}
                            stroke={isSelectedSub ? '#34d399' : (isActive ? p.color : '#1e293b')}
                            strokeWidth={isSelectedSub ? '2' : (isActive ? '1.5' : '1')}
                            strokeOpacity={isActive ? '0.95' : '0.6'}
                            className="transition-colors duration-200 group-hover:stroke-emerald-400"
                          />

                          {/* Satellite Pill Text */}
                          <text 
                            x={sat.pillX + sat.width / 2} 
                            y={sat.pillY + 17.5} 
                            textAnchor="middle" 
                            fill={isSelectedSub ? '#6ee7b7' : (isActive ? '#ffffff' : '#94a3b8')}
                            fontSize="11" 
                            fontWeight={isSelectedSub || isActive ? '700' : '500'}
                            fontFamily="ui-sans-serif, system-ui, sans-serif"
                            className="select-none pointer-events-none group-hover:fill-emerald-300"
                          >
                            {sat.label}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                );
              })}

              {/* CENTRAL SUN / HUB (ESYASOFT ENERGY & UTILITY VALUE CHAIN) */}
              <g 
                className="cursor-pointer"
                onClick={() => {
                  setActiveSubPill(null);
                }}
              >
                {/* Outer Dashed Orbit Ring */}
                <circle 
                  cx="550" 
                  cy="280" 
                  r="85" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="1.5" 
                  strokeDasharray="5 5" 
                  strokeOpacity="0.35" 
                />

                {/* Orbit Connector Anchor Dots */}
                <circle cx="495" cy="245" r="3.5" fill="#34d399" />
                <circle cx="605" cy="245" r="3.5" fill="#34d399" />
                <circle cx="495" cy="305" r="3.5" fill="#34d399" />
                <circle cx="550" cy="345" r="3.5" fill="#34d399" />
                <circle cx="605" cy="305" r="3.5" fill="#34d399" />

                {/* Center Hub Halo Glow */}
                <circle 
                  cx="550" 
                  cy="280" 
                  r="72" 
                  fill="rgba(16, 185, 129, 0.25)" 
                  filter="url(#blur-glow)" 
                />

                {/* Center Hub Body */}
                <circle 
                  cx="550" 
                  cy="280" 
                  r="64" 
                  fill="url(#centerHubGrad)" 
                  stroke="#34d399" 
                  strokeWidth="2.5" 
                  strokeOpacity="0.8" 
                />

                {/* Central Brand Typography */}
                <text 
                  x="550" 
                  y="266" 
                  textAnchor="middle" 
                  fill="#ffffff" 
                  fontSize="14.5" 
                  fontWeight="900" 
                  letterSpacing="2.5px"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  className="select-none pointer-events-none"
                >
                  ESYASOFT
                </text>
                <text 
                  x="550" 
                  y="283" 
                  textAnchor="middle" 
                  fill="#94a3b8" 
                  fontSize="9.5" 
                  fontWeight="700" 
                  letterSpacing="1px"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  className="select-none pointer-events-none"
                >
                  ENERGY &amp; UTILITY
                </text>
                <text 
                  x="550" 
                  y="297" 
                  textAnchor="middle" 
                  fill="#34d399" 
                  fontSize="9.5" 
                  fontWeight="800" 
                  letterSpacing="1.5px"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  className="select-none pointer-events-none"
                >
                  VALUE CHAIN
                </text>
              </g>

              {/* THE FIVE PLANET NODES */}
              {planetNodes.map((p) => {
                const isActive = activeVerticalId === p.id;
                const Icon = p.icon;

                return (
                  <g 
                    key={p.id} 
                    className="cursor-pointer group"
                    onClick={() => {
                      setActiveVerticalId(p.id);
                      setActiveSubPill(null);
                    }}
                  >
                    {/* Active Pulsing Halo Ring */}
                    {isActive && (
                      <circle 
                        cx={p.cx} 
                        cy={p.cy} 
                        r={p.r + 10} 
                        fill="none" 
                        stroke={p.color} 
                        strokeWidth="2" 
                        strokeDasharray="6 4" 
                        strokeOpacity="0.85" 
                      />
                    )}

                    {/* Ambient Glow */}
                    <circle 
                      cx={p.cx} 
                      cy={p.cy} 
                      r={p.r + 5} 
                      fill={p.glowColor} 
                      filter="url(#blur-glow)" 
                      opacity={isActive ? 0.95 : 0.3} 
                    />

                    {/* Planet Sphere */}
                    <circle 
                      cx={p.cx} 
                      cy={p.cy} 
                      r={p.r} 
                      fill={isActive ? 'url(#activePlanetGrad)' : 'url(#planetGrad)'} 
                      stroke={isActive ? p.color : '#0f766e'} 
                      strokeWidth={isActive ? '2.5' : '1.5'} 
                      strokeOpacity={isActive ? '1' : '0.6'} 
                      className="transition-all duration-300 group-hover:stroke-emerald-300"
                    />

                    {/* Number Badge */}
                    <circle 
                      cx={p.cx + 26} 
                      cy={p.cy - 24} 
                      r="10" 
                      fill="#0f172a" 
                      stroke={p.color} 
                      strokeWidth="1.2" 
                    />
                    <text 
                      x={p.cx + 26} 
                      y={p.cy - 20.5} 
                      textAnchor="middle" 
                      fill={p.color} 
                      fontSize="9" 
                      fontWeight="800" 
                      fontFamily="ui-monospace, monospace"
                      className="select-none pointer-events-none"
                    >
                      {p.num}
                    </text>

                    {/* Embedded Lucide Icon */}
                    <foreignObject 
                      x={p.cx - 15} 
                      y={p.cy - 34} 
                      width="30" 
                      height="30" 
                      className="pointer-events-none"
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-emerald-300'}`} />
                      </div>
                    </foreignObject>

                    {/* Planet Title Text */}
                    <text 
                      x={p.cx} 
                      y={p.title3 ? p.cy + 2 : p.cy + 6} 
                      textAnchor="middle" 
                      fill="#ffffff" 
                      fontSize="9.5" 
                      fontWeight="800" 
                      letterSpacing="0.4px"
                      fontFamily="ui-sans-serif, system-ui, sans-serif"
                      className="select-none pointer-events-none"
                    >
                      {p.title1}
                    </text>
                    <text 
                      x={p.cx} 
                      y={p.title3 ? p.cy + 15 : p.cy + 19} 
                      textAnchor="middle" 
                      fill={isActive ? '#a7f3d0' : '#cbd5e1'} 
                      fontSize="8.5" 
                      fontWeight="700" 
                      letterSpacing="0.4px"
                      fontFamily="ui-sans-serif, system-ui, sans-serif"
                      className="select-none pointer-events-none"
                    >
                      {p.title2}
                    </text>
                    {p.title3 && (
                      <text 
                        x={p.cx} 
                        y={p.cy + 27} 
                        textAnchor="middle" 
                        fill={isActive ? '#6ee7b7' : '#94a3b8'} 
                        fontSize="8" 
                        fontWeight="700" 
                        fontFamily="ui-sans-serif, system-ui, sans-serif"
                        className="select-none pointer-events-none"
                      >
                        {p.title3}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* ACTIVE VERTICAL CAPABILITY EXPLORER CARD */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
            
            {/* Top Row: Title, Tagline & BU Leadership */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    Vertical {currentVertical.num} Focused
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Curriculum Alignment: {currentVertical.roadmapDays}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight flex items-center gap-3">
                  <CurrentIcon className="w-7 h-7 text-emerald-600 flex-shrink-0" />
                  <span>{currentVertical.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                  {currentVertical.mission}
                </p>
              </div>

              {/* BU Head & Primary Metric Strip */}
              <div className="lg:w-80 flex-shrink-0 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-2">
                <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                  Business Unit Leadership
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {currentVertical.leader}
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">Scale / Metric:</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">{currentVertical.metrics}</span>
                </div>
              </div>
            </div>

            {/* Sub-Domains Interactive Pills Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold uppercase tracking-wider text-slate-400">
                  Sub-Domains &amp; Specialized Engineering Modules
                </span>
                <span className="text-slate-400 text-[11px] hidden sm:inline">
                  Select a module to view technical protocols
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {currentVertical.subTags.map((sub, idx) => {
                  const isSelected = activeSubPill === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveSubPill(isSelected ? null : idx)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                        isSelected
                          ? 'bg-emerald-50/90 dark:bg-emerald-950/50 border-emerald-500 dark:border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs'
                          : 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`} />
                            <span>{sub.label}</span>
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">{sub.satelliteLabel}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                          {sub.desc}
                        </p>
                      </div>

                      {sub.protocols && (
                        <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-[10px] font-mono text-emerald-800 dark:text-emerald-400 truncate">
                          Protocol: {sub.protocols}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Real-World Industry Anchor Strip */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className="font-bold text-slate-900 dark:text-white">Active Corporate Anchor:</span>
                <span className="text-slate-600 dark:text-slate-300">{currentVertical.realWorldAnchor}</span>
              </div>
              <Link
                to="/insight"
                className="inline-flex items-center gap-1 font-mono font-bold text-emerald-700 dark:text-emerald-400 hover:underline whitespace-nowrap self-start sm:self-auto"
              >
                <span>Read Deals &amp; Wire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* VIEW MODE 1: INTERACTIVE DECK (FOCUSED & DEEP-DIVE) */}
      {viewMode === 'interactive' && (
        <div className="space-y-5">
          {/* 5-Button Segmented Selector Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {verticalsData.map((v) => {
              const Icon = v.icon;
              const isActive = activeVerticalId === v.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => { setActiveVerticalId(v.id); setActiveSubPill(null); }}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                      : 'bg-white/80 dark:bg-slate-900/80 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                      {v.num}
                    </span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-xs sm:text-sm font-bold leading-tight line-clamp-1 ${
                      isActive ? 'text-slate-900 dark:text-white font-extrabold' : 'text-slate-700 dark:text-slate-300'
                    }`}>
                      {v.title}
                    </h3>
                    <p className="text-[10px] text-slate-400 truncate mt-0.5">
                      {v.subTags.length} Core Sub-Domains
                    </p>
                  </div>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Featured Showcase Card for Selected Vertical */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
            
            {/* Top Row: Title, Tagline & BU Head */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    Vertical {currentVertical.num}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Curriculum Alignment: {currentVertical.roadmapDays}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight flex items-center gap-3">
                  <CurrentIcon className="w-7 h-7 text-emerald-600 flex-shrink-0" />
                  <span>{currentVertical.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                  {currentVertical.mission}
                </p>
              </div>

              {/* BU Head & Lead Anchor Card */}
              <div className="lg:w-80 flex-shrink-0 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-2">
                <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                  Business Unit Leadership
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {currentVertical.leader}
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">Primary Metric:</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">{currentVertical.metrics}</span>
                </div>
              </div>
            </div>

            {/* Sub-Domains Interactive Pills Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold uppercase tracking-wider text-slate-400">
                  Sub-Domains &amp; Specialized Engineering Modules
                </span>
                <span className="text-slate-400 text-[11px] hidden sm:inline">
                  Click any sub-domain to view protocol architecture
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {currentVertical.subTags.map((sub, idx) => {
                  const isSelected = activeSubPill === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveSubPill(isSelected ? null : idx)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                        isSelected
                          ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-600 shadow-2xs'
                          : 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-600' : 'text-slate-400'}`} />
                            <span>{sub.label}</span>
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">{sub.protocols.split(',')[0]}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                          {sub.desc}
                        </p>
                      </div>

                      {sub.protocols && (
                        <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-[10px] font-mono text-emerald-800 dark:text-emerald-400 truncate">
                          Protocol: {sub.protocols}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Real-World Industry Anchor Strip */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className="font-bold text-slate-900 dark:text-white">Active Corporate Anchor:</span>
                <span className="text-slate-600 dark:text-slate-300">{currentVertical.realWorldAnchor}</span>
              </div>
              <Link
                to="/insight"
                className="inline-flex items-center gap-1 font-mono font-bold text-emerald-700 dark:text-emerald-400 hover:underline whitespace-nowrap self-start sm:self-auto"
              >
                <span>Read Deals &amp; Wire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* VIEW MODE 2: FULL VALUE CHAIN MATRIX (5-COLUMN COMPARATIVE GRID) */}
      {viewMode === 'matrix' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {verticalsData.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {v.num}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      {v.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                      {v.tagline}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                      Sub-Domains:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {v.subTags.map((st, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700">
                          {st.satelliteLabel || st.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1 text-[11px] font-mono">
                  <div className="text-slate-400 truncate">Lead: {v.leader.split('(')[0]}</div>
                  <div className="text-emerald-600 font-bold truncate">{v.metrics}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </section>
  );
}
