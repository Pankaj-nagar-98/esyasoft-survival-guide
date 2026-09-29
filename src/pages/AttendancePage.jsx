import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  Fingerprint, 
  ArrowDownRight, 
  ArrowUpRight, 
  RotateCcw, 
  Bell, 
  Clock, 
  AlertTriangle, 
  HelpCircle, 
  LifeBuoy, 
  Lightbulb, 
  Smartphone, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import { playChime } from '../utils/audio';

export default function AttendancePage() {
  const [punches, setPunches] = useState(() => {
    try {
      const saved = localStorage.getItem('esyasoft_punch_state');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Punch state parse error:', e);
    }
    return {
      punchedIn: false,
      punchedOut: false,
      inTime: null,
      outTime: null,
      history: []
    };
  });

  const [reminderActive, setReminderActive] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('esyasoft_punch_state', JSON.stringify(punches));
  }, [punches]);

  const handlePunchIn = () => {
    if (punches.punchedIn && !punches.punchedOut) {
      playChime('warning');
      setStatusMessage("You have already checked in today! Don't double punch.");
      return;
    }
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    playChime('success');
    setPunches(prev => ({
      ...prev,
      punchedIn: true,
      inTime: timeStr,
      history: [{ type: 'IN', time: timeStr, date: now.toLocaleDateString() }, ...prev.history.slice(0, 9)]
    }));
    setStatusMessage(`Biometric check-in recorded at ${timeStr}. Synchronized with Zoho People!`);
  };

  const handlePunchOut = () => {
    if (!punches.punchedIn) {
      playChime('warning');
      setStatusMessage("Please check in first before checking out!");
      return;
    }
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    playChime('success');
    setPunches(prev => ({
      ...prev,
      punchedOut: true,
      outTime: timeStr,
      history: [{ type: 'OUT', time: timeStr, date: now.toLocaleDateString() }, ...prev.history.slice(0, 9)]
    }));
    setStatusMessage(`Biometric departure recorded at ${timeStr}. Daily shift completed & salary secured!`);
  };

  const handleReset = () => {
    setPunches({
      punchedIn: false,
      punchedOut: false,
      inTime: null,
      outTime: null,
      history: []
    });
    setStatusMessage('Simulator reset for today.');
  };

  return (
    <div className="space-y-8">
      
      {/*  */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
        <Link to="/" className="hover:text-emerald-700 transition-colors">Home</Link>
        <span className="text-slate-300">/</span>
        <span className="text-emerald-800 font-bold">Biometric Attendance Terminal</span>
      </nav>

      {/*  */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white p-6 sm:p-8 shadow-xl border border-emerald-700/50">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="max-w-4xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" /> Mandatory Compliance Directive
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug">
            "If you forgot to check in check out you won't get salary!"
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 font-medium">
            — Manager Prabhu (Operations, Attendance & Compliance Directive, Batch 2026)
          </p>
          <p className="text-xs text-emerald-200/80 leading-relaxed pt-1">
            Terminal punches synchronize automatically with the Zoho People payroll engine. Every batch engineer must record biometric presence at 09:00 AM and departure at 06:30 PM.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/*  */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-emerald-100 dark:border-slate-800">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Fingerprint className="w-5 h-5 text-emerald-600" /> Biometric Station
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Live attendance simulator & verification.</p>
            </div>

            <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${
              punches.punchedOut 
                ? 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:border-slate-800'
                : punches.punchedIn 
                ? 'bg-teal-100 text-teal-800 border-teal-200' 
                : 'bg-amber-100 text-amber-800 border-amber-200'
            }`}>
              {punches.punchedOut ? 'Day Completed' : punches.punchedIn ? 'Shift Active (In)' : 'Not Punched Today'}
            </span>
          </div>

          {/*  */}
          <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-emerald-50 dark:bg-slate-800/80/60 border border-emerald-200 dark:border-slate-800 text-center">
            <div 
              onClick={!punches.punchedIn ? handlePunchIn : handlePunchOut}
              className="w-24 h-28 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 flex flex-col items-center justify-center relative overflow-hidden flex-shrink-0 cursor-pointer shadow-md hover:border-emerald-600 hover:shadow-lg transition-all active:scale-95" 
              title="Click here to Check In or Check Out"
            >
              <div className="scanner-line"></div>
              <Fingerprint className="w-12 h-12 text-emerald-600" />
              <span className="text-[9px] font-mono text-emerald-800 mt-1 uppercase font-bold tracking-wider">Tap Finger</span>
            </div>

            <div className="w-full space-y-3">
              <div className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium min-h-6">
                {statusMessage || (
                  punches.punchedIn
                    ? `Checked IN at ${punches.inTime}. Remember to Punch OUT at 06:30 PM!`
                    : "Tap the fingerprint pad above or click Check In to record arrival."
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <button 
                  onClick={handlePunchIn}
                  className="w-full px-4 py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-transform active:scale-95 cursor-pointer"
                >
                  <ArrowDownRight className="w-4 h-4" /> Check In (09:00 AM)
                </button>
                <button 
                  onClick={handlePunchOut}
                  className="w-full px-4 py-3 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-900 text-white flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95 cursor-pointer"
                >
                  <ArrowUpRight className="w-4 h-4" /> Check Out (06:30 PM)
                </button>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex items-center justify-between pt-2">
            <button 
              onClick={handleReset}
              className="px-3 py-1.5 rounded-xl text-xs font-medium bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-red-600" /> Reset Simulator
            </button>
            <button 
              onClick={() => setReminderActive(!reminderActive)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-colors cursor-pointer ${
                reminderActive 
                  ? 'bg-emerald-600 text-white border-emerald-600' 
                  : 'bg-emerald-50 dark:bg-slate-800/80 hover:bg-emerald-100 text-emerald-800 border-emerald-200 dark:border-slate-800'
              }`}
            >
              <Bell className="w-3.5 h-3.5" />
              <span>{reminderActive ? 'Reminder Set (08:50 AM)' : 'Set Daily Reminder'}</span>
            </button>
          </div>

          {/*  */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide block">Recent Biometric History:</span>
            <div className="bg-slate-50 dark:bg-slate-800/60/70 rounded-xl p-3 border border-emerald-100 dark:border-slate-800 space-y-1 max-h-48 overflow-y-auto">
              {punches.history.length === 0 ? (
                <p className="text-xs text-slate-400 text-center py-3">No biometric scans recorded yet today.</p>
              ) : (
                punches.history.map((log, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 shadow-2xs">
                    <span className={`font-mono font-bold px-2 py-0.5 rounded text-[10px] ${
                      log.type === 'IN' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-800 dark:text-slate-100'
                    }`}>
                      PUNCH {log.type}
                    </span>
                    <span className="font-mono text-slate-600 dark:text-slate-300">{log.time}</span>
                    <span className="text-[11px] text-slate-400">{log.date}</span>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>

        {/*  */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold font-mono text-sm border border-blue-200">
                  ZP
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Zoho People Biometric Synchronization</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">How your office finger scans protect your salary and regularisation.</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-50 text-blue-800 border border-blue-200">
                Sync: Real-Time
              </span>
            </div>

            {/*  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800/80/70 border border-emerald-200 dark:border-slate-800 space-y-1.5">
                <div className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-600" /> Morning Window: 08:45 AM - 09:00 AM
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Punch IN at the turnstile or office scanner. Lectures begin at 09:00 AM sharp. Late arrivals after 09:15 AM require supervisor approval.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-1.5">
                <div className="text-xs font-bold text-teal-950 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-teal-600" /> Evening Window: 06:30 PM - 06:45 PM
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Punch OUT upon concluding lab sessions or after evening sports. Leaving without punching out marks the session incomplete.
                </p>
              </div>
            </div>

            {/*  */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2.5">
              <h4 className="text-xs font-bold text-amber-950 flex items-center gap-2 uppercase tracking-wide">
                <AlertTriangle className="w-4 h-4 text-amber-600" /> Forgot to Punch IN or OUT? Regularisation Protocol:
              </h4>
              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">1.</span>
                  <span>Open <strong>Zoho People</strong> (web or mobile app) and navigate to <em>Attendance &gt; Apply Regularisation</em>.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">2.</span>
                  <span>Select the correct missing punch date and specify exact time (e.g. 09:00 AM) with a valid reason.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">3.</span>
                  <span>Notify Manager Prabhu or your lab mentor before 11:00 AM so the regularisation request can be formally approved.</span>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <Link to="/faqs" className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-emerald-600" /> Read Attendance FAQs
              </Link>
              <Link to="/grievance" className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5">
                <LifeBuoy className="w-4 h-4 text-emerald-600" /> Report Biometric Hardware Glitch
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold border border-emerald-200 dark:border-slate-800">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Zoho People Mobile App Onboarding</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Keep attendance regularisation in your pocket.</p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">
                Setup in 2 Mins
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-slate-800/80/70 border border-emerald-200 dark:border-slate-800 space-y-1">
                <span className="text-emerald-700 font-bold font-mono text-[10px] uppercase">Step 01</span>
                <div className="font-bold text-slate-900 dark:text-white">Download App</div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300">Install Zoho People from Google Play Store or Apple App Store on your smartphone.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-1">
                <span className="text-teal-700 font-mono font-bold text-[10px] uppercase">Step 02</span>
                <div className="font-bold text-slate-900 dark:text-white">Enterprise SSO</div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300">Sign in with your official <em>@esyasoft.com</em> corporate email address and 2FA authentication.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-slate-800/80/70 border border-emerald-200 dark:border-slate-800 space-y-1">
                <span className="text-emerald-700 font-mono font-bold text-[10px] uppercase">Step 03</span>
                <div className="font-bold text-slate-900 dark:text-white">Turn on Push Alerts</div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300">Enable reminders at 08:45 AM and 06:25 PM so you never miss an office punch window.</p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="glass-panel rounded-3xl p-6 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-emerald-600" /> Fresher Survival Pro-Tips
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-300">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1">Set 08:50 AM Alarm</strong>
                Label your phone alarm "RUN TO BIOMETRICS" so morning breakfast rush never causes a missed swipe.
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1">Pair Up With Roommate</strong>
                Keep an attendance buddy in your living quarters to ensure mutual biometric accountability.
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1">Monthly Zoho Audit</strong>
                Check your monthly attendance card on the 25th of every month to catch any stray unregularised marks.
              </div>
            </div>
          </div>

        </div>

      </div>

      {/*  */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-emerald-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-1 border border-emerald-200 dark:border-slate-800">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Campus Hardware Deployment
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Physical Biometric Terminals at GCC Bajpe</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Know exactly where to punch across all campus blocks.</p>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">
            3 Hardware Points Active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-emerald-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-800/60 flex flex-col justify-between shadow-2xs">
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">Terminal 01</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Online"></span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Main Reception Turnstiles</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Located at the Ground Floor Main Entrance atrium. Features high-throughput optical fingerprint sensors integrated with speed turnstiles.
              </p>
              <div className="text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Optimal Window: 08:45 AM - 08:58 AM
              </div>
            </div>
            <div className="p-3 bg-emerald-50 dark:bg-slate-800/80 border-t border-emerald-100 dark:border-slate-800 text-[11px] text-emerald-900 font-medium">
              Primary station for morning arrival from hostels.
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-800/60 flex flex-col justify-between shadow-2xs">
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">Terminal 02</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Online"></span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Level 1 Training Auditorium</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Directly outside the main lecture hall and executive presentation theatre. Perfect for quick checkout before evening recreation.
              </p>
              <div className="text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Optimal Window: 06:30 PM - 06:45 PM
              </div>
            </div>
            <div className="p-3 bg-emerald-50 dark:bg-slate-800/80 border-t border-emerald-100 dark:border-slate-800 text-[11px] text-emerald-900 font-medium">
              Primary station for evening lecture departure.
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-800/60 flex flex-col justify-between shadow-2xs">
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">Terminal 03</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Online"></span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">South Wing Smart Grid Lab</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Mounted at the access corridor to the AMI meter calibration testbed and cloud servers. Equipped with dual capacitive reader.
              </p>
              <div className="text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Fast-Track Lab Check-In
              </div>
            </div>
            <div className="p-3 bg-emerald-50 dark:bg-slate-800/80 border-t border-emerald-100 dark:border-slate-800 text-[11px] text-emerald-900 font-medium">
              Reserved for lab engineers & afternoon practical sprints.
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-emerald-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-1 border border-emerald-200 dark:border-slate-800">
              <Clock className="w-3.5 h-3.5 text-emerald-600" /> Daily Rhythm
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">The 24-Hour Graduate Engineer Cadence</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">The daily routine followed by high-performing Esyasoft trainees.</p>
          </div>
          <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
            Monday through Friday Schedule
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800/80/60 border border-emerald-200 dark:border-slate-800 space-y-1.5">
            <div className="text-xs font-mono font-bold text-emerald-700">07:15 AM – 08:45 AM</div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Morning Energy & Breakfast</div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300">Quick gym stretch or jog, followed by Foods Adya crispy pooris, upma, and hot cutting chai.</p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-100/70 border border-emerald-300 space-y-1.5">
            <div className="text-xs font-mono font-bold text-emerald-900">08:50 AM – 09:00 AM</div>
            <div className="text-xs font-bold text-emerald-950 flex items-center gap-1">
              <Fingerprint className="w-3.5 h-3.5 text-emerald-600" /> Biometric Punch IN
            </div>
            <p className="text-[11px] text-slate-700 dark:text-slate-200">Scan fingerprint at Reception turnstiles. Never cross 09:00 AM to preserve full attendance mark!</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div className="text-xs font-mono font-bold text-slate-700 dark:text-slate-200">09:00 AM – 05:30 PM</div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Domain Lectures & Sandbox Labs</div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300">Smart metering deep dive, DLMS decoding, VEE validation algorithms & mentor debugging sessions.</p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-100/70 border border-emerald-300 space-y-1.5">
            <div className="text-xs font-mono font-bold text-emerald-900">06:30 PM – 06:45 PM</div>
            <div className="text-xs font-bold text-emerald-950 flex items-center gap-1">
              <Fingerprint className="w-3.5 h-3.5 text-emerald-600" /> Biometric Punch OUT
            </div>
            <p className="text-[11px] text-slate-700 dark:text-slate-200">Scan fingerprint at Level 1 or Reception before heading to Table Tennis, Foosball, or dinner.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
