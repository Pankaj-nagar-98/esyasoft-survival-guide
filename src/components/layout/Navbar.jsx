import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Fingerprint, 
  Milestone, 
  Building2, 
  Palmtree, 
  LifeBuoy, 
  Newspaper, 
  HelpCircle, 
  Menu, 
  X, 
  ShieldCheck, 
  User, 
  LogOut,
  LogIn,
  Sun,
  Moon
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useModal } from '../../context/ModalContext';

export default function Navbar({ onToggleMobileDrawer, isMobileDrawerOpen }) {
  const { user, logout, switchRole, isAdmin } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const { showToast } = useModal();
  const navigate = useNavigate();
  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const update = () => {
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
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    logout();
    showToast('Signed out of session successfully.', 'info');
    navigate('/login');
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/attendance', label: 'Attendance', icon: Fingerprint },
    { to: '/roadmap', label: 'Roadmap', icon: Milestone },
    { to: '/campus', label: 'Campus & Living', icon: Building2 },
    { to: '/escapes', label: 'Escapes', icon: Palmtree },
    { to: '/grievance', label: 'Grievance', icon: LifeBuoy },
    { to: '/insight', label: 'Insights & Deals', icon: Newspaper },
    { to: '/faqs', label: 'FAQs', icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-emerald-100 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Cohort Badge */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="relative">
            <img 
              src="assets/esyasoft-logo.png" 
              alt="Esyasoft" 
              className="h-7 sm:h-8 w-auto object-contain dark:brightness-110 group-hover:scale-105 transition-transform" 
              onError={(e) => { e.target.src = 'assets/header-hero-bg.jpg'; }}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                Batch 2026
              </span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
              GCC Mangaluru
            </span>
          </div>
        </Link>

        {/* Desktop Primary Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 font-bold border border-emerald-300 dark:border-emerald-800 shadow-2xs'
                    : 'text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-emerald-50/80 dark:hover:bg-slate-800'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-700 dark:text-emerald-400' : 'text-emerald-600 dark:text-emerald-500'}`} />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <div className="hidden xl:flex flex-col text-right font-mono pr-1">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">{timeStr || '--:--:-- --'}</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">{dateStr || 'Loading...'}</span>
          </div>

          {/* Theme Toggle Button (Light / Dark Mode) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-emerald-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-700 transition-all cursor-pointer shadow-xs active:scale-95 flex items-center justify-center"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme Mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 animate-spin-once" />
            ) : (
              <Moon className="w-4 h-4 text-emerald-700" />
            )}
          </button>

          {/* User Role Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => switchRole(isAdmin ? 'fresher' : 'admin')}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] font-mono font-semibold border transition-all cursor-pointer ${
                isAdmin 
                  ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100' 
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
              title="Click to toggle Admin / Engineer role"
            >
              {isAdmin ? (
                <>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Admin</span>
                </>
              ) : (
                <>
                  <User className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                  <span>Engineer</span>
                </>
              )}
            </button>

            {/* Prominent Logout / Login Button */}
            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50/80 dark:bg-red-950/40 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/60 text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
                title="Log out of session"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs active:scale-95"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={onToggleMobileDrawer}
            className="lg:hidden p-2 rounded-xl border border-emerald-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-emerald-800 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {isMobileDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>
    </header>
  );
}
