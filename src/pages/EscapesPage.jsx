import React, { useState } from 'react';
import { 
  Palmtree, Compass, MapPin, Map, Navigation, Waves, Ship, 
  LifeBuoy, Utensils, Car, Sun, Sparkles, Camera, Trees, 
  ShieldCheck, Coffee, Music, Film, Gamepad2, ShoppingBag, 
  Wifi, Bus, Bike, Heart, ChevronRight, PlusCircle, X
} from 'lucide-react';
import { ESYASOFT_DATA } from '../data/guideData';
import { useModal } from '../context/ModalContext';
import { Link } from 'react-router-dom';

export default function EscapesPage() {
  const { openLightbox, showToast } = useModal();
  
  // Selected location for the Google Maps & Facilities Inspector
  const [selectedLocId, setSelectedLocId] = useState('esyasoft-gcc');
  const [customSpots, setCustomSpots] = useState(ESYASOFT_DATA.coastalEscapes);
  const [isSpotModalOpen, setIsSpotModalOpen] = useState(false);
  const [newSpot, setNewSpot] = useState({ title: '', location: '', distance: '', tag: 'Weekend Getaway', image: '', caption: '' });

  const activeLocation = ESYASOFT_DATA.gccMapLocations.find(l => l.id === selectedLocId) || ESYASOFT_DATA.gccMapLocations[0];

  const getFacilityIcon = (iconName) => {
    switch (iconName) {
      case 'waves': return <Waves className="w-4 h-4 text-emerald-600" />;
      case 'ship': return <Ship className="w-4 h-4 text-emerald-600" />;
      case 'life-buoy': return <LifeBuoy className="w-4 h-4 text-emerald-600" />;
      case 'utensils': return <Utensils className="w-4 h-4 text-emerald-600" />;
      case 'car': return <Car className="w-4 h-4 text-emerald-600" />;
      case 'sun': return <Sun className="w-4 h-4 text-emerald-600" />;
      case 'sparkles': return <Sparkles className="w-4 h-4 text-emerald-600" />;
      case 'camera': return <Camera className="w-4 h-4 text-emerald-600" />;
      case 'trees': return <Trees className="w-4 h-4 text-emerald-600" />;
      case 'shield-check': return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case 'coffee': return <Coffee className="w-4 h-4 text-emerald-600" />;
      case 'music': return <Music className="w-4 h-4 text-emerald-600" />;
      case 'film': return <Film className="w-4 h-4 text-emerald-600" />;
      case 'gamepad-2': return <Gamepad2 className="w-4 h-4 text-emerald-600" />;
      case 'shopping-bag': return <ShoppingBag className="w-4 h-4 text-emerald-600" />;
      case 'wifi': return <Wifi className="w-4 h-4 text-emerald-600" />;
      default: return <Compass className="w-4 h-4 text-emerald-600" />;
    }
  };

  const handleAddSpot = (e) => {
    e.preventDefault();
    if (!newSpot.title || !newSpot.image) {
      showToast('Please provide a title and image URL', 'error');
      return;
    }
    const created = {
      id: `spot-${Date.now()}`,
      title: newSpot.title,
      location: newSpot.location || 'Coastal Karnataka',
      distance: newSpot.distance || 'Near Mangaluru',
      tag: newSpot.tag || 'Escape Destination',
      image: newSpot.image,
      caption: newSpot.caption || 'Added by Trainee'
    };
    setCustomSpots([created, ...customSpots]);
    setIsSpotModalOpen(false);
    setNewSpot({ title: '', location: '', distance: '', tag: 'Weekend Getaway', image: '', caption: '' });
    showToast('Weekend spot added to collection!', 'success');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Breadcrumbs Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
        <Link to="/" className="hover:text-emerald-700 flex items-center gap-1 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-emerald-800 font-bold">Coastal & Weekend Escapes</span>
      </nav>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800 uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-emerald-600" /> Coastal Sanctuaries & Rejuvenation
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Weekend Escapes & Coastal Exploration
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">
            Golden beaches, rocky sunset points, roadside dhabas, and late-night coastal drives. Smart grid innovators need sea breeze and good food to recharge!
          </p>
        </div>

        <button 
          onClick={() => setIsSpotModalOpen(true)}
          className="px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 shadow-md shadow-emerald-600/20 transition-transform active:scale-95 cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" /> Add Weekend Spot
        </button>
      </div>

      {/* INTERACTIVE GCC MANGALURU GOOGLE MAP & FACILITIES EXPLORER */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-emerald-200 dark:border-slate-800 shadow-md overflow-hidden">
        
        {/* Header Bar with Location Selector Pills */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-400 text-slate-950 uppercase tracking-wide">
                Interactive Google Maps Guide
              </span>
              <span className="text-xs text-emerald-200 font-mono">GCC Mangaluru & Coastal Hub</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold mt-1 text-white flex items-center gap-2">
              <span>Esyasoft Global Capability Centre & Coastal Escapes</span>
            </h2>
            <p className="text-xs text-emerald-100/90 mt-0.5">
              Click any destination below to inspect facilities, see real-time distance from Bajpe GCC, and get directions.
            </p>
          </div>

          {/* External Navigation Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <a 
              href={activeLocation.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 text-emerald-900 hover:bg-emerald-50 dark:bg-slate-800/80 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <Map className="w-4 h-4 text-emerald-700" /> Open in Google Maps ↗
            </a>
            <a 
              href={activeLocation.directionsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-700/80 hover:bg-emerald-600 text-white border border-emerald-500/50 transition-all flex items-center gap-1.5"
            >
              <Navigation className="w-3.5 h-3.5 text-emerald-200" /> Directions
            </a>
          </div>
        </div>

        {/* Location Selector Chips Bar */}
        <div className="px-4 sm:px-6 py-3 bg-emerald-50 dark:bg-slate-800/80/70 border-b border-emerald-100 dark:border-slate-800 overflow-x-auto scrollbar-none flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap mr-1 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Select Spot:
          </span>
          <div className="flex items-center gap-2">
            {ESYASOFT_DATA.gccMapLocations.map((loc) => {
              const isSelected = loc.id === selectedLocId;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocId(loc.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-emerald-100/70 border border-emerald-200 dark:border-slate-800'
                  }`}
                >
                  {loc.shortName || loc.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Map & Facilities Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
          
          {/* Left: Google Map Iframe (lg:col-span-6) */}
          <div className="lg:col-span-6 relative bg-slate-100 min-h-[380px] sm:min-h-[540px] border-b lg:border-b-0 lg:border-r border-emerald-100 dark:border-slate-800">
            <iframe 
              title={activeLocation.name}
              className="w-full h-full min-h-[380px] sm:min-h-[540px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(activeLocation.query)}&t=&z=${activeLocation.mapZoom || 15}&ie=UTF8&iwloc=&output=embed`}
            ></iframe>

            {/* Floating Map Overlay Badge */}
            <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/95 backdrop-blur-md border border-emerald-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-100 shadow-md flex items-center gap-1.5 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{activeLocation.name}</span>
            </div>
          </div>

          {/* Right: Section about the Selected Place with Actual Image & Facilities (lg:col-span-6) */}
          <div className="lg:col-span-6 p-6 sm:p-7 flex flex-col justify-between bg-white dark:bg-slate-900 overflow-y-auto space-y-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">
                    {activeLocation.tag}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">
                    {activeLocation.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{activeLocation.address}</span>
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-slate-800/80 text-emerald-800 border border-emerald-200 dark:border-slate-800 block">
                    ⭐ {activeLocation.rating}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">
                    {activeLocation.reviewsCount}
                  </span>
                </div>
              </div>

              {/* High-res Image preview with lightbox trigger */}
              <div 
                onClick={() => openLightbox(activeLocation.image || activeLocation.webImage, `${activeLocation.name} - ${activeLocation.distanceFromGCC}`)}
                className="h-48 rounded-2xl overflow-hidden cursor-zoom-in relative group border border-emerald-100 dark:border-slate-800 shadow-inner"
              >
                <img 
                  src={activeLocation.image || activeLocation.webImage} 
                  alt={activeLocation.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.target.src = 'assets/header-hero-bg.jpg'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-xs font-bold flex items-center gap-2">
                    <span>🚗 {activeLocation.distanceFromGCC}</span>
                    <span>•</span>
                    <span>⏱ {activeLocation.travelTime}</span>
                  </div>
                  <div className="text-[10px] text-emerald-300 font-mono">
                    {activeLocation.openStatus}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeLocation.summary}
              </p>

              {/* Facilities Grid */}
              <div className="space-y-2 pt-2 border-t border-emerald-50">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Key Features & Facilities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeLocation.facilities.map((fac, idx) => (
                    <div 
                      key={idx} 
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-200 flex items-center gap-2"
                    >
                      {getFacilityIcon(fac.icon)}
                      <span className="truncate">{fac.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pro Tip */}
            {activeLocation.tips && (
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-800 text-xs text-emerald-950 font-medium mt-4">
                💡 <strong>Explorer Note:</strong> {activeLocation.tips}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* COASTAL WEEKEND ESCAPES GALLERY */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800 uppercase tracking-wider">
              Coastal Getaways
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-2 flex items-center gap-2">
              <Palmtree className="w-5 h-5 text-emerald-600" />
              <span>Weekend Coastal Escapes & Adventures</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
              Pristine beaches, geological basalt islands, sunset ocean walks, and seaside lounges along the Karnataka coast.
            </p>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono hidden md:inline-block">Curated Coastal Escapes</span>
        </div>

        {/* Coastal Escapes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {customSpots.map((spot) => (
            <div 
              key={spot.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-emerald-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div 
                  onClick={() => openLightbox(spot.image, `${spot.title} - ${spot.location}`)}
                  className="h-48 overflow-hidden relative cursor-zoom-in group"
                >
                  <img 
                    src={spot.image} 
                    alt={spot.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.src = 'assets/header-hero-bg.jpg'; }}
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white dark:bg-slate-900/95 backdrop-blur-sm text-emerald-800 border border-emerald-200 dark:border-slate-800 shadow-xs">
                    {spot.tag}
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold bg-slate-900/80 backdrop-blur-sm text-white">
                    📍 {spot.distance}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold block">
                    {spot.location}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {spot.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {spot.caption}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 dark:bg-slate-800/80/50 border-t border-emerald-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-800">
                <button 
                  onClick={() => {
                    const match = ESYASOFT_DATA.gccMapLocations.find(l => spot.title.toLowerCase().includes(l.shortName.toLowerCase()));
                    if (match) {
                      setSelectedLocId(match.id);
                      window.scrollTo({ top: 350, behavior: 'smooth' });
                    } else {
                      openLightbox(spot.image, spot.title);
                    }
                  }}
                  className="hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
                >
                  Inspect on Map →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COASTAL TRANSIT & TRAVEL LOGISTICS GUIDE */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-emerald-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-1 border border-emerald-200 dark:border-slate-800">
              <Bus className="w-3.5 h-3.5 text-emerald-600" /> Trainee Mobility Playbook
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Coastal Transit & Travel Logistics Guide</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">How to travel from Bajpe GCC to Mangaluru city, Udupi beaches, and back smoothly.</p>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">
            Reliable Transit
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800/80/60 border border-emerald-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
              <Bus className="w-4 h-4" /> Local City Buses
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Buses #13, #15, #17</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Board from Bajpe Bus Stand to State Bank / Hampankatta. Departs every 12 to 15 mins. Ticket fare: Rs. 25-30 per passenger.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-2">
            <div className="flex items-center gap-2 text-teal-700 font-bold text-xs">
              <Car className="w-4 h-4" /> Auto Rickshaws
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Bajpe Auto Stand</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              24/7 auto stand near Police Station junction. Meter rates apply during day, 1.5x after 10:00 PM. Bajpe to Airport: Rs. 150-180.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800/80/60 border border-emerald-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
              <Navigation className="w-4 h-4" /> Coastal Highway NH 66
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Drive to Udupi & Malpe</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Scenic 4-lane highway via Mulki and Padubidri. Approx. 55 minutes to Padubidri Blue Flag beach, 70 minutes to Malpe Sea Walk.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-2">
            <div className="flex items-center gap-2 text-teal-700 font-bold text-xs">
              <Bike className="w-4 h-4" /> Scooter & Bike Rentals
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Royal Brothers & Drivezy</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Available near Mangaluru Central Railway Station and Jyothi Circle. Requires valid driving licence and original ID proof.
            </p>
          </div>
        </div>
      </div>

      {/* ICONIC COASTAL CUISINES & SEAFOOD HAVENS */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-emerald-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-1 border border-emerald-200 dark:border-slate-800">
              <Utensils className="w-3.5 h-3.5 text-emerald-600" /> Culinary Exploration
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Must-Try Coastal Delicacies & Legendary Food Spots</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Authentic Tulu Nadu flavors you must try during weekend trips to Mangaluru & Udupi.</p>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">
            Foodie Bucket List
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="text-[10px] font-mono font-bold text-emerald-700 uppercase">Seafood Legend</div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Machali (Kodialbail)</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Famous for Kingfish (Anjal) Tawa Fry, Crab Ghee Roast, Squid Sukka, and hearty coastal Fish Curry Meals.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="text-[10px] font-mono font-bold text-teal-700 uppercase">Traditional Mess</div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Narayana Mess (Bunder)</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Rustic harbour joint serving piping-hot fish fry straight from the morning catch on authentic banana leaves.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="text-[10px] font-mono font-bold text-emerald-700 uppercase">Coastal Breakfast</div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Neer Dosa & Ghee Roast</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Feathery soft rice crepes paired with fiery Kundapura Chicken or Paneer Ghee Roast at Shetty Lunch Home.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="text-[10px] font-mono font-bold text-teal-700 uppercase">Sweet Celebration</div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Ideal Ice Cream / Pabbas</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">The legendary Mangaluru institution! Order the iconic Gadbad, Dilkush, or Tiramisu sundae to celebrate week-end milestones.</p>
          </div>
        </div>
      </div>

      {/* ADD WEEKEND SPOT MODAL */}
      {isSpotModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-emerald-200 dark:border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-100 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Palmtree className="w-5 h-5 text-emerald-600" /> Add Weekend Spot
              </h3>
              <button 
                onClick={() => setIsSpotModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 dark:text-slate-200 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddSpot} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">Spot Name:</label>
                <input 
                  type="text" 
                  value={newSpot.title}
                  onChange={(e) => setNewSpot({...newSpot, title: e.target.value})}
                  placeholder="e.g. Kapu Lighthouse & Rocky Beach" 
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs" 
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">Location / District:</label>
                <input 
                  type="text" 
                  value={newSpot.location}
                  onChange={(e) => setNewSpot({...newSpot, location: e.target.value})}
                  placeholder="e.g. Kapu, Udupi Coast" 
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">Distance from GCC:</label>
                <input 
                  type="text" 
                  value={newSpot.distance}
                  onChange={(e) => setNewSpot({...newSpot, distance: e.target.value})}
                  placeholder="e.g. 42 km from GCC" 
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">Image URL:</label>
                <input 
                  type="text" 
                  value={newSpot.image}
                  onChange={(e) => setNewSpot({...newSpot, image: e.target.value})}
                  placeholder="assets/... or https://..." 
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs" 
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">Short Description:</label>
                <textarea 
                  rows="2" 
                  value={newSpot.caption}
                  onChange={(e) => setNewSpot({...newSpot, caption: e.target.value})}
                  placeholder="Why is this a great spot for the cohort?..." 
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-transform active:scale-95"
              >
                Save Spot
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
