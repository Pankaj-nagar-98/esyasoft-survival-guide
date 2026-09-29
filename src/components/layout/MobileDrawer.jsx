import React from 'react';
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

export default function MobileDrawer({ isOpen, onClose }) {
  const { user, logout, switchRole, isAdmin } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const { showToast } = useModal();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogout = () => {
    logout();
    onClose();
    showToast('Signed out of session successfully.', 'info');
    navigate('/login');
  };

  const navLinks = [
    { to: '/', label: 'Home Dashboard', icon: Home },
    { to: '/attendance', label: 'Biometric Attendance Terminal', icon: Fingerprint },
    { to: '/roadmap', label: '90-Day Induction Roadmap', icon: Milestone },
    { to: '/campus', label: 'Campus Life & Living Quarters', icon: Building2 },
    { to: '/escapes', label: 'Coastal & Weekend Escapes', icon: Palmtree },
    { to: '/grievance', label: 'Campus Grievance Desk', icon: LifeBuoy },
    { to: '/insight', label: 'Corporate Insights & Deals', icon: Newspaper },
    { to: '/faqs', label: 'Fresher Knowledge Base & FAQs', icon: HelpCircle },
  ];

  return (
    <div className="lg:hidden border-t border-emerald-100 dark:border-slate-800 bg-white/98 dark:bg-slate-900/98 backdrop-blur-md px-4 py-3 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-200">
      {navLinks.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
              isActive
                ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 font-bold border border-emerald-300 dark:border-emerald-800'
                : 'text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800'
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

      {/* Role Switcher & Dark Mode Controls */}
      <div className="pt-2.5 mt-2 border-t border-emerald-100 dark:border-slate-800 flex items-center justify-between px-1">
        <button
          onClick={() => switchRole(isAdmin ? 'fresher' : 'admin')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 cursor-pointer"
        >
          {isAdmin ? <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <User className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />}
          <span>Role: {isAdmin ? 'Admin' : 'Engineer'}</span>
        </button>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl border border-emerald-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
          title="Toggle theme"
        >
          {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-emerald-700" />}
        </button>
      </div>

      {/* Prominent Full-Width Logout / Login Button */}
      <div className="pt-2">
        {user ? (
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50/80 dark:bg-red-950/40 text-red-600 dark:text-red-400 hover:bg-red-100 text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out of Portal</span>
          </button>
        ) : (
          <Link
            to="/login"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
          >
            <LogIn className="w-4 h-4" />
            <span>Login to Portal</span>
          </Link>
        )}
      </div>
    </div>
  );
}
