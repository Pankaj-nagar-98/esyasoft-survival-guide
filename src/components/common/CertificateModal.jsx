import React, { useState, useEffect } from 'react';
import { X, Award, Printer, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useModal } from '../../context/ModalContext';
import { useAuth } from '../../context/AuthContext';

export default function CertificateModal() {
  const { showCertificate, closeCertificate } = useModal();
  const { user } = useAuth();
  const [recipientName, setRecipientName] = useState(user?.displayName || 'Batch 2026 Engineer');

  useEffect(() => {
    if (showCertificate) {
      document.body.style.overflow = 'hidden';
      // Trigger festive confetti explosion
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#047857', '#34d399', '#f59e0b']
        });
      } catch (e) {
        console.warn('Confetti error:', e);
      }
    } else {
      document.body.style.overflow = '';
    }
  }, [showCertificate]);

  if (!showCertificate) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={closeCertificate}
    >
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-emerald-300 dark:border-slate-800 relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/*  */}
        <div className="p-4 border-b border-emerald-100 dark:border-slate-800 flex items-center justify-between bg-emerald-50/70 dark:bg-slate-900/90">
          <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-300 font-bold text-sm">
            <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>Official 15-Day Induction Survival Certificate</span>
          </div>
          <button 
            onClick={closeCertificate}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-5">
          {/*  */}
          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/80 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">Your Name:</label>
            <input 
              type="text" 
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              className="flex-1 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-slate-700 text-xs text-slate-800 dark:text-white bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your full name"
            />
          </div>

          {/*  */}
          <div id="certificate-print-area" className="p-8 rounded-3xl border-4 border-double border-emerald-600 bg-gradient-to-b from-[#fbfdfc] to-[#f0fdf4] text-center space-y-4 relative shadow-inner">
            <div className="flex items-center justify-center gap-2">
              <img src="assets/esyasoft-logo.png" alt="Esyasoft" className="h-8 object-contain" />
            </div>

            <div className="text-[10px] font-mono tracking-widest text-emerald-700 uppercase font-bold">
              ESYASOFT HOLDING • GLOBAL CAPABILITY CENTRE
            </div>

            <h2 className="text-2xl font-black text-slate-900 font-serif tracking-tight">
              CERTIFICATE OF 15-DAY SURVIVAL
            </h2>

            <p className="text-xs text-slate-500">This official document hereby certifies that</p>

            <div className="text-xl font-black text-emerald-800 font-serif border-b-2 border-emerald-400 pb-1 max-w-sm mx-auto">
              {recipientName || 'Batch 2026 Graduate'}
            </div>

            <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed">
              has successfully survived the foundational 15 days of smart grid immersion, DLMS/COSEM hex frames, VEE validations, and achieved 100% biometric attendance compliance under Manager Prabhu's directive.
            </p>

            <blockquote className="text-[11px] font-mono text-emerald-900 bg-emerald-100/70 p-2.5 rounded-xl border border-emerald-300 max-w-md mx-auto italic">
              "If you forgot to check in check out you won't get salary!" — Manager Prabhu
            </blockquote>

            <div className="pt-4 flex items-center justify-between text-left text-[10px] font-mono text-slate-600 border-t border-emerald-200 max-w-md mx-auto">
              <div>
                <span className="block font-bold text-slate-900">Batch 2026 Vanguard</span>
                <span>Smart Grid Engineering</span>
              </div>
              <div className="text-right">
                <span className="block font-bold text-emerald-800">Prabhu (Operations)</span>
                <span>Verified Compliance</span>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button 
              onClick={closeCertificate}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
            <button 
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 shadow-md shadow-emerald-600/20 transition-transform active:scale-95 cursor-pointer"
            >
              <Printer className="w-4 h-4" /> Print / Save PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
