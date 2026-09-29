import React, { useEffect } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function LightboxModal() {
  const { lightboxData, closeLightbox } = useModal();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (lightboxData) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxData]);

  if (!lightboxData) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={closeLightbox}
    >
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden border border-emerald-200 dark:border-slate-800 relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-5 border-b border-emerald-100 dark:border-slate-800 flex items-center justify-between bg-emerald-50/50 dark:bg-slate-900/80">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">
              {lightboxData.title || 'Photo Preview'}
            </h3>
          </div>
          <button 
            onClick={closeLightbox}
            className="p-1.5 rounded-xl hover:bg-white dark:hover:bg-slate-800 text-slate-400 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer"
            title="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner bg-slate-900 max-h-[60vh] flex items-center justify-center">
            <img 
              src={lightboxData.imgSrc} 
              alt={lightboxData.title} 
              className="w-full h-full max-h-[60vh] object-contain"
            />
          </div>
          {lightboxData.caption && (
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium bg-slate-50 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
              {lightboxData.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
