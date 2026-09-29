import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Fingerprint, 
  CalendarCheck, 
  LifeBuoy, 
  Milestone, 
  Wifi, 
  PhoneCall, 
  Copy, 
  Check, 
  ExternalLink,
  X
} from 'lucide-react';
import { MANGALURU_HUB_DATA } from '../../data/mangaluruHubData';

export default function QuickActionsBar() {
  const [showWifiModal, setShowWifiModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyWifiPassword = () => {
    navigator.clipboard.writeText(MANGALURU_HUB_DATA.campus.wifi.password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const actionItems = [
    {
      label: "Mark Attendance",
      sub: "Biometric Punch",
      icon: Fingerprint,
      to: "/attendance",
      badge: "08:59 AM",
      badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
    },
    {
      label: "Zoho Regularisation",
      sub: "Attendance & Leave",
      icon: CalendarCheck,
      to: "/faqs",
      badge: "Before 11 AM",
      badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
    },
    {
      label: "Raise Grievance",
      sub: "Hostel & Maintenance",
      icon: LifeBuoy,
      to: "/grievance",
      badge: "24/7 SLA",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
    },
    {
      label: "90-Day Roadmap",
      sub: "Topics & Phases",
      icon: Milestone,
      to: "/roadmap",
      badge: "Curriculum",
      badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300"
    },
    {
      label: "Campus Wi-Fi",
      sub: "SSID & Credentials",
      icon: Wifi,
      onClick: () => setShowWifiModal(true),
      badge: "Esya-Training",
      badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300"
    }
  ];

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {actionItems.map((item, idx) => {
          const Icon = item.icon;
          const Content = (
            <div className="group h-full p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600 shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer">
              <div className="flex items-center justify-between mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-emerald-500/10 text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                {item.badge && (
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                )}
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                  {item.sub}
                </div>
              </div>
            </div>
          );

          if (item.to) {
            return (
              <Link key={idx} to={item.to} className="block">
                {Content}
              </Link>
            );
          }

          return (
            <button key={idx} type="button" onClick={item.onClick} className="text-left w-full h-full block">
              {Content}
            </button>
          );
        })}
      </div>

      {/* Campus Wi-Fi Modal */}
      {showWifiModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-sm w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-emerald-600" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Campus High-Speed Wi-Fi</h4>
              </div>
              <button
                type="button"
                onClick={() => setShowWifiModal(false)}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 space-y-1">
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Wi-Fi Network (SSID)</span>
                <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                  {MANGALURU_HUB_DATA.campus.wifi.ssid}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Wi-Fi Password</span>
                  <span className="font-mono text-sm font-bold text-emerald-700 dark:text-emerald-400">
                    {MANGALURU_HUB_DATA.campus.wifi.password}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyWifiPassword}
                  className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-xs font-mono font-bold flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-serif">
                Available in training labs, quiet library, and residential hostel flats. For static IP or VPN support, contact {MANGALURU_HUB_DATA.campus.wifi.supportDesk}.
              </p>
            </div>

            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setShowWifiModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
