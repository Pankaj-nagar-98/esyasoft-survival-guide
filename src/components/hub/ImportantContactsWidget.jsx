import React, { useState } from 'react';
import { 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  Search,
  ShieldAlert,
  Headphones
} from 'lucide-react';
import { MANGALURU_HUB_DATA } from '../../data/mangaluruHubData';

export default function ImportantContactsWidget() {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const [copiedId, setCopiedId] = useState(null);

  const categories = [
    { id: 'all', label: 'All Contacts' },
    { id: 'hr', label: 'HR' },
    { id: 'it', label: 'IT Support' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'emergency', label: 'Medical' },
    { id: 'dining', label: 'Dining' }
  ];

  const filteredContacts = MANGALURU_HUB_DATA.importantContacts.filter(c => {
    if (selectedCat !== 'all' && c.category !== selectedCat) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        c.role.toLowerCase().includes(q) ||
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.desk.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              Important Contacts &amp; Help
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Direct campus extension lines, emails &amp; desk locations
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-48">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search contact..."
            className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Filter Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {categories.map(cat => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCat(cat.id)}
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedCat === cat.id
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Contacts List Grid */}
      <div className="grid grid-cols-1 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
        {filteredContacts.map(contact => {
          const isEmergency = contact.category === 'emergency';
          return (
            <div
              key={contact.id}
              className={`p-3.5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                isEmergency
                  ? 'bg-red-50/40 dark:bg-red-950/20 border-red-200 dark:border-red-900/60'
                  : 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {contact.role}
                  </span>
                  {isEmergency && (
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-red-600 text-white uppercase">
                      24/7 Hot
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
                  <span>{contact.desk} • {contact.hours}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
                {/* Phone Button */}
                <a
                  href={`tel:${contact.phone}`}
                  className="px-2.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 text-slate-700 dark:text-slate-200 text-xs font-mono font-bold flex items-center gap-1 transition-colors shadow-2xs"
                  title="Call contact"
                >
                  <Phone className="w-3 h-3 text-emerald-600" />
                  <span>{contact.phone}</span>
                </a>

                {/* Copy Email Button */}
                <button
                  type="button"
                  onClick={() => handleCopy(contact.email, contact.id)}
                  className="p-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 text-slate-600 dark:text-slate-300 text-xs font-mono flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                  title={`Copy ${contact.email}`}
                >
                  {copiedId === contact.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                  )}
                </button>
              </div>
            </div>
          );
        })}

        {filteredContacts.length === 0 && (
          <div className="py-6 text-center text-xs text-slate-400 font-mono">
            No contacts found matching "{search}".
          </div>
        )}
      </div>
    </div>
  );
}
