import React, { useState } from 'react';
import { 
  Lock, Mail, Eye, EyeOff, AlertCircle, CheckCircle2, 
  ArrowRight, ShieldCheck, UserCheck, Sparkles, Zap, Globe 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useModal } from '../context/ModalContext';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginPage() {
  const { login, isAuthenticated, user } = useAuth();
  const { showToast } = useModal();
  const navigate = useNavigate();

  // Pre-filled by default for instant 1-click submission
  const [email, setEmail] = useState('fresher@esyasoft.com');
  const [password, setPassword] = useState('batch2026');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Single-Click Instant Login Handlers
  const handleOneClickLogin = (userEmail, userPass, roleName) => {
    setSubmitting(true);
    login(userEmail, userPass);
    showToast(`Welcome! Signed in as ${roleName}.`, 'success');
    setTimeout(() => {
      navigate('/');
    }, 200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const targetEmail = email.trim() || 'fresher@esyasoft.com';
    const targetPass = password.trim() || 'batch2026';
    const isAdmin = targetEmail.toLowerCase().includes('admin');
    
    login(targetEmail, targetPass);
    showToast(`Welcome! Signed in as ${isAdmin ? 'Administrator' : 'Batch 2026 Engineer'}.`, 'success');
    setTimeout(() => {
      navigate('/');
    }, 200);
  };

  return (
    <div className="min-h-screen bg-[#f0f4f2] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-fadeIn">
      {/* MAIN CARD CONTAINER (SPLIT SCREEN LAYOUT) */}
      <div className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        
        {/* LEFT COLUMN: AUTHENTICATION FORM */}
        <div className="lg:col-span-6 xl:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-white dark:bg-slate-900">
          <div>
            {/* Top Logo */}
            <div className="flex items-center gap-2.5">
              <img 
                src="assets/esyasoft-icon.png" 
                alt="Esyasoft" 
                className="h-9 w-auto object-contain" 
                onError={(e) => { e.target.src = 'assets/header-hero-bg.jpg'; }} 
              />
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-200 tracking-wider uppercase border-l border-slate-200 dark:border-slate-800 pl-2.5">
                Batch 2026
              </span>
            </div>

            {/* Heading & Subtitle */}
            <div className="mt-6 mb-5">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Welcome to Esyasoft
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Single-click access to the Smart Grid Induction &amp; Thriving Guide.
              </p>
            </div>

            {/* Existing Active Session Quick-Resume */}
            {isAuthenticated && (
              <div className="mb-5 p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2 truncate pr-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span className="truncate font-semibold">Active: {user?.email}</span>
                </div>
                <Link 
                  to="/" 
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 flex items-center gap-1 shadow-xs flex-shrink-0"
                >
                  Enter Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* 1-CLICK INSTANT LOGIN BUTTONS (PRIMARY CALL TO ACTION) */}
            <div className="space-y-2.5 mb-5">
              <div className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                1-Click Instant Access
              </div>

              {/* Fresher 1-Click Login */}
              <button 
                type="button"
                onClick={() => handleOneClickLogin('fresher@esyasoft.com', 'batch2026', 'Batch 2026 Engineer')}
                disabled={submitting}
                className="w-full p-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs flex items-center justify-between shadow-md shadow-emerald-600/20 active:scale-[0.99] transition-all cursor-pointer group disabled:opacity-50"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white text-xs flex items-center gap-1.5">
                      1-Click Login as Fresher
                      <span className="px-1.5 py-0.2 rounded text-[9px] bg-white/20 text-white font-mono">1-Tap</span>
                    </div>
                    <div className="text-[11px] text-emerald-100 font-normal">fresher@esyasoft.com • Engineer</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Admin 1-Click Login */}
              <button 
                type="button"
                onClick={() => handleOneClickLogin('admin@esyasoft.com', 'admin@2026', 'Administrator')}
                disabled={submitting}
                className="w-full p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800/90 dark:hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-between border border-slate-700 active:scale-[0.99] transition-all cursor-pointer group disabled:opacity-50"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-400">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white text-xs flex items-center gap-1.5">
                      1-Click Login as Admin
                      <span className="px-1.5 py-0.2 rounded text-[9px] bg-amber-500/30 text-amber-200 font-mono">Admin</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-normal">admin@esyasoft.com • All Permissions</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 text-[11px] font-mono">
                  Or enter credentials
                </span>
              </div>
            </div>

            {/* Error Notification Alert */}
            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-red-700 dark:text-red-300 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Traditional Form (Pre-populated so standard click also works instantly) */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address" 
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder:text-slate-400 bg-white dark:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password" 
                    className="w-full pl-3.5 pr-10 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder:text-slate-400 bg-white dark:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all font-medium"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:text-slate-300 focus:outline-none cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between text-xs pt-0.5">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-300 select-none">
                  <input 
                    type="checkbox" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 rounded text-emerald-700 focus:ring-emerald-600 border-slate-300 dark:border-slate-700"
                  />
                  <span className="text-xs">Remember session</span>
                </label>
                <button 
                  type="button" 
                  onClick={() => showToast('IT Desk: Support available on Ext 405 or it-support@esyasoft.com', 'info')}
                  className="text-xs font-medium text-emerald-800 dark:text-emerald-400 hover:underline cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={submitting}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 transition-all shadow-sm active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{submitting ? 'Authenticating...' : 'Sign In with Credentials'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="pt-4 text-center text-[11px] text-slate-400 dark:text-slate-500">
            Esyasoft Holding • Batch 2026 Portal
          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-RES CAMPUS VISUAL SHOWCASE */}
        <div className="hidden lg:block lg:col-span-6 xl:col-span-7 relative bg-slate-950 overflow-hidden">
          <img 
            src="assets/induction-all-hands.jpg" 
            alt="Batch 2026 Campus Induction" 
            className="w-full h-full object-cover opacity-80"
            onError={(e) => { e.target.src = 'assets/header-hero-bg.jpg'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-slate-950/40 to-transparent"></div>

          <div className="absolute top-8 right-8 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 dark:bg-slate-900/40 backdrop-blur-md text-emerald-200 border border-white/20 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Batch 2026 Vanguard
          </div>

          <div className="absolute bottom-8 left-8 right-8 text-white space-y-3">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Prabhu's Golden Compliance Rule
            </div>
            <blockquote className="text-xl sm:text-2xl font-bold font-serif text-white leading-snug">
              "If you forgot to check in check out you won't get salary!"
            </blockquote>
            <p className="text-xs text-emerald-100/80 leading-relaxed max-w-lg">
              15 Days Survived • 75 Days to Ascendance. From college graduates to Smart Grid pioneers transforming 50M+ endpoints globally.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
