import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, ShieldCheck, LifeBuoy, Wrench, Utensils, Flame, 
  Cpu, HelpCircle, ClipboardPen, Send, UploadCloud, FileText, 
  X, UserCheck, Globe, FileSpreadsheet, Search, CheckCircle2, 
  GitCommit, Clock, Copy, ChevronRight, PhoneCall
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useModal } from '../context/ModalContext';
import { Link } from 'react-router-dom';

const CATEGORIES = {
  'Maintenance': {
    authority: 'Campus Facilities & Maintenance Department',
    icon: 'wrench',
    badgeClass: 'bg-emerald-50 dark:bg-slate-800/80 text-emerald-800 border-emerald-300',
    description: 'Hostel rooms, AC units, plumbing, electrical circuits, furniture, gym & recreation equipment.'
  },
  'Food': {
    authority: 'Cafeteria & Catering Oversight Committee',
    icon: 'utensils',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-300',
    description: 'Cafeteria dining hall, food quality, Adya Foods canteen counters, meal timings & breakfast supply.'
  },
  'PHO': {
    authority: 'Sanitation & Housekeeping Department',
    icon: 'shield-alert',
    badgeClass: 'bg-teal-50 text-teal-800 border-teal-300',
    description: 'Public Health & Sanitation, washroom cleanliness, sanitizer refills, waste segregation & hygiene.'
  },
  'Fire and Safety': {
    authority: 'Campus Safety & EHS Officer',
    icon: 'flame',
    badgeClass: 'bg-red-50 text-red-800 border-red-300',
    description: 'Fire extinguishers, emergency stairway exits, electrical hazard prevention & safety compliance.'
  },
  'Technical': {
    authority: 'IT Infrastructure & Systems Desk',
    icon: 'cpu',
    badgeClass: 'bg-blue-50 text-blue-800 border-blue-300',
    description: 'Laptops, Zoho People synchronization, Wi-Fi networks, VPN credentials, and AMI simulation testbeds.'
  },
  'Other': {
    authority: 'HR & Employee Relations Grievance Cell',
    icon: 'help-circle',
    badgeClass: 'bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-100 border-slate-300 dark:border-slate-700',
    description: 'Administrative queries, policy clarifications, cohort welfare, and general mentorship guidance.'
  }
};

const DEFAULT_COMPLAINTS = [
  {
    id: 1,
    ticket_id: 'ESY-GRV-1001',
    subject: 'Executive Training Hall AC temperature erratic and dripping condensation',
    category: 'Maintenance',
    description: 'The central split AC unit in Room 204 near the podium is fluctuating between 16C and 28C with water droplets dripping near electrical raceways.',
    priority: 'High',
    status: 'In Progress',
    assigned_authority: CATEGORIES['Maintenance'].authority,
    reporter_name: 'Batch 2026 Engineer',
    reporter_email: 'fresher@esyasoft.com',
    reporter_role: 'fresher',
    created_at: '2026-03-24 10:15:00',
    timeline: [
      { status: 'Pending', note: 'Grievance ticket created by fresher@esyasoft.com', timestamp: '2026-03-24 10:15:00' },
      { status: 'In Progress', note: 'Technician dispatched from GCC estate office for thermal sensor inspection.', timestamp: '2026-03-24 11:30:00' }
    ]
  },
  {
    id: 2,
    ticket_id: 'ESY-GRV-1002',
    subject: 'Adya Foods breakfast shortage on boiled eggs & poori batches at 8:30 AM',
    category: 'Food',
    description: 'By 08:30 AM before the morning lecture, the hot counter had run out of poori batches and boiled eggs, leading to morning sprint delays.',
    priority: 'Medium',
    status: 'Resolved',
    assigned_authority: CATEGORIES['Food'].authority,
    reporter_name: 'Batch 2026 Engineer',
    reporter_email: 'fresher@esyasoft.com',
    reporter_role: 'fresher',
    created_at: '2026-03-23 08:45:00',
    timeline: [
      { status: 'Pending', note: 'Grievance ticket created by fresher@esyasoft.com', timestamp: '2026-03-23 08:45:00' },
      { status: 'In Progress', note: 'Catering supervisor briefed regarding batch headcount surge at 08:25 AM.', timestamp: '2026-03-23 09:30:00' },
      { status: 'Resolved', note: 'Buffer quantity increased by 35% starting immediately. Extra warm trays added.', timestamp: '2026-03-23 14:00:00' }
    ]
  },
  {
    id: 3,
    ticket_id: 'ESY-GRV-1003',
    subject: 'Port 4059 blocked on Campus Wi-Fi for AMI DLMS sandbox testbed',
    category: 'Technical',
    description: 'Unable to establish TCP socket connection to the simulated DLMS server IP 192.168.10.45:4059 over Esyasoft_Secure_5G Wi-Fi network.',
    priority: 'High',
    status: 'Pending',
    assigned_authority: CATEGORIES['Technical'].authority,
    reporter_name: 'Pankaj Kumar',
    reporter_email: 'pankaj@esyasoft.com',
    reporter_role: 'fresher',
    created_at: '2026-03-25 14:20:00',
    timeline: [
      { status: 'Pending', note: 'Grievance ticket created by pankaj@esyasoft.com', timestamp: '2026-03-25 14:20:00' }
    ]
  }
];

export default function GrievancePage() {
  const { user, isAdmin } = useAuth();
  const { showToast } = useModal();

  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter state
  const [scope, setScope] = useState(isAdmin ? 'all' : 'mine');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Form state
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('Maintenance');
  const [priority, setPriority] = useState('Medium');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Slide-over drawer state
  const [activeTicket, setActiveTicket] = useState(null);
  const [adminStatusInput, setAdminStatusInput] = useState('Pending');
  const [adminNoteInput, setAdminNoteInput] = useState('');
  const [updatingStatus, setUpdatingStatus] = useState(false);

  // Success modal state
  const [successModalData, setSuccessModalData] = useState(null);

  // Load complaints from backend
  const fetchComplaints = async () => {
    try {
      const res = await fetch('/api/complaints');
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.complaints)) {
          setComplaints(data.complaints);
          localStorage.setItem('esyasoft_complaints_cache', JSON.stringify(data.complaints));
          setLoading(false);
          return;
        }
      }
    } catch (e) {
      console.warn('API unavailable, checking localStorage fallback');
    }

    const cached = localStorage.getItem('esyasoft_complaints_cache');
    if (cached) {
      try {
        setComplaints(JSON.parse(cached));
      } catch {
        setComplaints(DEFAULT_COMPLAINTS);
      }
    } else {
      setComplaints(DEFAULT_COMPLAINTS);
      localStorage.setItem('esyasoft_complaints_cache', JSON.stringify(DEFAULT_COMPLAINTS));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  // Update scope when role changes
  useEffect(() => {
    if (isAdmin) {
      setScope('all');
    }
  }, [isAdmin]);

  // Handle file drop / select
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      showToast('File size must be under 5MB', 'error');
      return;
    }
    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      showToast('File size must be under 5MB', 'error');
      return;
    }
    setSelectedFile(file);
  };

  // Submit Complaint
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (description.length < 15) {
      showToast('Description must be at least 15 characters', 'error');
      return;
    }

    setSubmitting(true);
    const assignedAuth = CATEGORIES[category]?.authority || 'General Support';

    try {
      // Create FormData for multipart submission
      const formData = new FormData();
      formData.append('subject', subject);
      formData.append('category', category);
      formData.append('priority', priority);
      formData.append('description', description);
      formData.append('assigned_authority', assignedAuth);
      formData.append('reporter_name', user?.name || 'Batch 2026 Fresher');
      formData.append('reporter_email', user?.email || 'fresher@esyasoft.com');
      formData.append('reporter_role', user?.role || 'fresher');

      if (selectedFile) {
        formData.append('attachment', selectedFile);
      }

      const res = await fetch('/api/complaints', {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          const newTicket = data.complaint;
          const updatedList = [newTicket, ...complaints];
          setComplaints(updatedList);
          localStorage.setItem('esyasoft_complaints_cache', JSON.stringify(updatedList));

          setSuccessModalData({
            ticketId: newTicket.ticket_id,
            authority: newTicket.assigned_authority
          });

          // Reset form
          setSubject('');
          setDescription('');
          setSelectedFile(null);
          showToast('Ticket filed and dispatched successfully!', 'success');
          setSubmitting(false);
          return;
        }
      }
    } catch (err) {
      console.warn('API error, handling locally:', err);
    }

    // Local fallback
    const newId = `ESY-GRV-${Math.floor(1000 + Math.random() * 9000)}`;
    const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const fallbackTicket = {
      id: Date.now(),
      ticket_id: newId,
      subject,
      category,
      priority,
      description,
      status: 'Pending',
      assigned_authority: assignedAuth,
      reporter_name: user?.name || 'Batch 2026 Fresher',
      reporter_email: user?.email || 'fresher@esyasoft.com',
      reporter_role: user?.role || 'fresher',
      created_at: nowStr,
      attachment_name: selectedFile ? selectedFile.name : null,
      attachment_size: selectedFile ? selectedFile.size : null,
      timeline: [
        { status: 'Pending', note: `Grievance ticket created by ${user?.email || 'fresher@esyasoft.com'}`, timestamp: nowStr }
      ]
    };

    const updatedList = [fallbackTicket, ...complaints];
    setComplaints(updatedList);
    localStorage.setItem('esyasoft_complaints_cache', JSON.stringify(updatedList));

    setSuccessModalData({
      ticketId: newId,
      authority: assignedAuth
    });

    setSubject('');
    setDescription('');
    setSelectedFile(null);
    showToast('Ticket recorded in local database!', 'success');
    setSubmitting(false);
  };

  // Supervisor Status Update (Admin)
  const handleUpdateStatus = async () => {
    if (!activeTicket) return;
    setUpdatingStatus(true);

    const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const newEntry = {
      status: adminStatusInput,
      note: adminNoteInput.trim() || `Status updated to ${adminStatusInput} by supervisor.`,
      timestamp: nowStr
    };

    try {
      const res = await fetch(`/api/complaints/${activeTicket.id || activeTicket.ticket_id}/status`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: adminStatusInput,
          note: adminNoteInput
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success && data.complaint) {
          const updated = complaints.map(c => (c.ticket_id === activeTicket.ticket_id ? data.complaint : c));
          setComplaints(updated);
          setActiveTicket(data.complaint);
          localStorage.setItem('esyasoft_complaints_cache', JSON.stringify(updated));
          showToast('Status updated successfully!', 'success');
          setAdminNoteInput('');
          setUpdatingStatus(false);
          return;
        }
      }
    } catch (e) {
      console.warn('API update failed, updating locally:', e);
    }

    // Local update
    const updatedTicket = {
      ...activeTicket,
      status: adminStatusInput,
      timeline: [...(activeTicket.timeline || []), newEntry]
    };

    const updated = complaints.map(c => (c.ticket_id === activeTicket.ticket_id ? updatedTicket : c));
    setComplaints(updated);
    setActiveTicket(updatedTicket);
    localStorage.setItem('esyasoft_complaints_cache', JSON.stringify(updated));
    showToast('Status updated locally!', 'success');
    setAdminNoteInput('');
    setUpdatingStatus(false);
  };

  // Export to Excel / CSV
  const handleExport = () => {
    // Generate clean CSV content
    const headers = ['Grievance ID', 'Created Date', 'Category', 'Subject', 'Priority', 'Status', 'Assigned Authority', 'Reporter Name', 'Reporter Email', 'Description'];
    const rows = complaints.map(c => [
      `"${c.ticket_id}"`,
      `"${c.created_at}"`,
      `"${c.category}"`,
      `"${(c.subject || '').replace(/"/g, '""')}"`,
      `"${c.priority}"`,
      `"${c.status}"`,
      `"${c.assigned_authority}"`,
      `"${c.reporter_name}"`,
      `"${c.reporter_email}"`,
      `"${(c.description || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `esyasoft_grievance_export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Grievance report exported to CSV successfully!', 'success');
  };

  // Filter complaints
  const filteredComplaints = complaints.filter(c => {
    if (scope === 'mine') {
      const userEmail = (user?.email || 'fresher@esyasoft.com').toLowerCase();
      if ((c.reporter_email || '').toLowerCase() !== userEmail) return false;
    }
    if (statusFilter !== 'all' && c.status !== statusFilter) return false;
    if (categoryFilter !== 'all' && c.category !== categoryFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match = 
        c.ticket_id?.toLowerCase().includes(q) ||
        c.subject?.toLowerCase().includes(q) ||
        c.description?.toLowerCase().includes(q) ||
        c.assigned_authority?.toLowerCase().includes(q) ||
        c.reporter_name?.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  // Metrics
  const metricTotal = complaints.length;
  const metricPending = complaints.filter(c => c.status === 'Pending').length;
  const metricProgress = complaints.filter(c => c.status === 'In Progress').length;
  const metricResolved = complaints.filter(c => c.status === 'Resolved').length;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
        <Link to="/" className="hover:text-emerald-700 flex items-center gap-1 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-emerald-800 font-bold">Campus Grievance & Maintenance Portal</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800 uppercase tracking-wider mb-2">
            <ShieldAlert className="w-3.5 h-3.5 text-emerald-600" /> Operational Governance & Campus Helpdesk
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
            <LifeBuoy className="w-8 h-8 text-emerald-600" />
            <span>Grievance & Maintenance Escalation Portal</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">
            Official campus ticketing portal with automated departmental routing. File tickets for hostel maintenance, cafeteria catering, hygiene & sanitation (PHO), fire safety, or technical IT issues with guaranteed SLA tracking.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-slate-800 text-emerald-800 shadow-sm flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>6 Designated Department Authorities</span>
          </span>
        </div>
      </div>

      {/* Category Overview Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-3.5 border border-emerald-200 dark:border-slate-800 shadow-sm hover:border-emerald-300 transition-colors">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs mb-1">
            <Wrench className="w-4 h-4" /> Maintenance
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">Hostel rooms, AC units, electrical, plumbing & gym.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-3.5 border border-amber-200 shadow-sm hover:border-amber-300 transition-colors">
          <div className="flex items-center gap-2 text-amber-700 font-bold text-xs mb-1">
            <Utensils className="w-4 h-4" /> Food & Mess
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">Cafeteria food quality, breakfast delays & Adya canteen.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-3.5 border border-teal-200 shadow-sm hover:border-teal-300 transition-colors">
          <div className="flex items-center gap-2 text-teal-700 font-bold text-xs mb-1">
            <ShieldAlert className="w-4 h-4" /> PHO Sanitation
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">Public health, washroom hygiene & housekeeping.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-3.5 border border-red-200 shadow-sm hover:border-red-300 transition-colors">
          <div className="flex items-center gap-2 text-red-700 font-bold text-xs mb-1">
            <Flame className="w-4 h-4" /> Fire & Safety
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">Fire exit latches, extinguishers & safety gear.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-3.5 border border-blue-200 shadow-sm hover:border-blue-300 transition-colors">
          <div className="flex items-center gap-2 text-blue-700 font-bold text-xs mb-1">
            <Cpu className="w-4 h-4" /> Technical IT
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">Laptops, Zoho sync, Wi-Fi networks & AMI testbeds.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-3.5 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:border-slate-700 transition-colors">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-bold text-xs mb-1">
            <HelpCircle className="w-4 h-4" /> HR & General
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">Policy inquiries, cohort welfare & mentorship.</p>
        </div>
      </div>

      {/* Main Portal 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: COMPLAINT SUBMISSION FORM (5 cols) */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-7 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ClipboardPen className="w-5 h-5 text-emerald-600" />
                <span>File a Campus Grievance</span>
              </h3>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">
                Direct Dispatch
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Your ticket will be assigned a unique Grievance Number and routed instantly to the designated supervisor.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Subject Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                Issue Summary / Subject <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
                required 
                minLength={5} 
                placeholder="e.g. AC thermostat leaking in Hall 204, Wi-Fi block on port 4059" 
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 dark:bg-slate-800/60/50"
              />
            </div>

            {/* Category Dropdown with Automatic Authority Dispatch Indicator */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                Category & Operational Domain <span className="text-red-500">*</span>
              </label>
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                required 
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-slate-900 cursor-pointer font-medium"
              >
                <option value="Maintenance">Maintenance (Hostel, AC, Electrical, Plumbing, Gym)</option>
                <option value="Food">Food (Cafeteria, Meal Quality, Canteen Schedules)</option>
                <option value="PHO">PHO (Public Health, Sanitation, Washrooms, Hygiene)</option>
                <option value="Fire and Safety">Fire and Safety (Extinguishers, Emergency Exits, Hazards)</option>
                <option value="Technical">Technical (IT, Laptops, Zoho People, Network, VPN)</option>
                <option value="Other">Other (General Grievance, HR, Cohort Welfare)</option>
              </select>

              {/* Dynamic Authority Dispatch Callout */}
              <div className="mt-2 p-3 rounded-xl bg-emerald-50 dark:bg-slate-800/80/80 border border-emerald-200 dark:border-slate-800">
                <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold mb-0.5">
                  Assigned Authority Destination:
                </div>
                <div className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{CATEGORIES[category]?.authority}</span>
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {CATEGORIES[category]?.description}
                </div>
              </div>
            </div>

            {/* Priority Selector (Pills) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                Priority Level <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Low', 'Medium', 'High'].map((p) => {
                  const isChecked = priority === p;
                  let checkedClass = 'bg-emerald-600 text-white border-emerald-600';
                  if (p === 'Medium') checkedClass = 'bg-amber-500 text-white border-amber-500';
                  if (p === 'High') checkedClass = 'bg-red-600 text-white border-red-600';

                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPriority(p)}
                      className={`px-3 py-2 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                        isChecked ? checkedClass : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:bg-slate-800/60'
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detailed Description */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                Detailed Description & Location <span className="text-red-500">*</span>
              </label>
              <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                required 
                minLength={15} 
                rows={4} 
                placeholder="Specify exact campus location (e.g. Room 204, Floor 2, Cafeteria East counter) and detailed observations..." 
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 dark:bg-slate-800/60/50 resize-y"
              ></textarea>
              <span className="text-[10px] text-slate-400 block text-right mt-0.5">Minimum 15 characters ({description.length}/15)</span>
            </div>

            {/* Drag-and-Drop File Attachment Area */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                Supporting Evidence / Attachment <span className="text-slate-400 font-normal">(Optional, Max 5MB)</span>
              </label>
              
              <div 
                onDragOver={(e) => e.preventDefault()} 
                onDrop={handleDrop}
                className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 rounded-2xl p-4 text-center cursor-pointer bg-slate-50 dark:bg-slate-800/60/60 transition-all flex flex-col items-center justify-center min-h-[96px] relative overflow-hidden"
              >
                {!selectedFile ? (
                  <label htmlFor="file-upload" className="cursor-pointer space-y-1">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <UploadCloud className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-100">
                      <span>Click to upload or drag & drop</span>
                    </div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Supports PNG, JPG, WebP, PDF or Logs up to 5MB</p>
                    <input 
                      id="file-upload" 
                      type="file" 
                      onChange={handleFileChange} 
                      className="hidden" 
                      accept="image/*,.pdf,.txt,.log"
                    />
                  </label>
                ) : (
                  <div className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 shadow-sm text-left">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-slate-900 dark:text-white truncate">{selectedFile.name}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">{(selectedFile.size / 1024).toFixed(1)} KB</div>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => setSelectedFile(null)} 
                      className="p-1 rounded-lg text-red-600 hover:bg-red-50 transition-colors flex-shrink-0 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit" 
                disabled={submitting}
                className="w-full px-5 py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25 transition-transform active:scale-95 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? 'Dispatching...' : 'File Grievance & Dispatch to Authority'}</span>
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: TRACKER DASHBOARD & DATA TABLE (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Metric Summary Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-emerald-200 dark:border-slate-800 shadow-sm">
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Total Filed</span>
              <span className="text-2xl font-black text-slate-900 dark:text-white">{metricTotal}</span>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-amber-200 shadow-sm">
              <span className="text-[10px] font-mono text-amber-700 uppercase tracking-wider block">Pending</span>
              <span className="text-2xl font-black text-amber-700">{metricPending}</span>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-blue-200 shadow-sm">
              <span className="text-[10px] font-mono text-blue-700 uppercase tracking-wider block">In Progress</span>
              <span className="text-2xl font-black text-blue-700">{metricProgress}</span>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-emerald-200 dark:border-slate-800 shadow-sm">
              <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-wider block">Resolved</span>
              <span className="text-2xl font-black text-emerald-700">{metricResolved}</span>
            </div>
          </div>

          {/* Dashboard Card Container */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-emerald-200 dark:border-slate-800 shadow-md space-y-4">
            
            {/* Scope Tabs & Excel Export Button */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-emerald-100 dark:border-slate-800">
              <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 dark:border-slate-800 text-xs font-bold">
                <button 
                  type="button" 
                  onClick={() => setScope('mine')}
                  className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    scope === 'mine' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-200'
                  }`}
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>My Filed Grievances</span>
                </button>
                <button 
                  type="button" 
                  onClick={() => setScope('all')}
                  className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    scope === 'all' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-200'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>All Campus Notices</span>
                </button>
              </div>

              <button 
                type="button" 
                onClick={handleExport}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 hover:bg-emerald-50 dark:bg-slate-800/80 text-emerald-800 border border-emerald-300 shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                <span>Export to Excel</span>
              </button>
            </div>

            {/* Search Bar & Filters Toolbar */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              <div className="sm:col-span-6 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by ID, keyword, location, or authority..." 
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 dark:bg-slate-800/60/50"
                />
              </div>

              <div className="sm:col-span-3">
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                >
                  <option value="all">All Statuses</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <select 
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                >
                  <option value="all">All Categories</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Food">Food</option>
                  <option value="PHO">PHO</option>
                  <option value="Fire and Safety">Fire and Safety</option>
                  <option value="Technical">Technical</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Data Table Count */}
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span className="font-mono font-bold text-emerald-800">
                Showing {filteredComplaints.length} records
              </span>
              <span className="text-[11px] text-slate-400">Click "View Timeline" for complete inspection history</span>
            </div>

            {/* Responsive Grievance Data Table */}
            <div className="overflow-x-auto rounded-xl border border-emerald-100 dark:border-slate-800 shadow-inner max-h-[520px] overflow-y-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-emerald-50 dark:bg-slate-800/80/70 sticky top-0 z-10 text-[11px] font-mono uppercase text-emerald-950 border-b border-emerald-200 dark:border-slate-800">
                  <tr>
                    <th className="px-4 py-3 font-bold">Grievance ID</th>
                    <th className="px-4 py-3 font-bold">Date</th>
                    <th className="px-4 py-3 font-bold">Category</th>
                    <th className="px-4 py-3 font-bold">Subject & Reporter</th>
                    <th className="px-4 py-3 font-bold">Priority</th>
                    <th className="px-4 py-3 font-bold">Status</th>
                    <th className="px-4 py-3 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-900 divide-y divide-emerald-100/60 text-xs">
                  {filteredComplaints.map((c) => {
                    let priorityBadge = 'bg-slate-100 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-800';
                    if (c.priority === 'Medium') priorityBadge = 'bg-amber-100 text-amber-800 border-amber-200';
                    if (c.priority === 'High') priorityBadge = 'bg-red-100 text-red-800 border-red-200';

                    let statusBadge = 'bg-amber-50 text-amber-800 border-amber-200';
                    if (c.status === 'In Progress') statusBadge = 'bg-blue-50 text-blue-800 border-blue-200';
                    if (c.status === 'Resolved') statusBadge = 'bg-emerald-50 dark:bg-slate-800/80 text-emerald-800 border-emerald-200 dark:border-slate-800';

                    return (
                      <tr key={c.ticket_id} className="hover:bg-slate-50 dark:bg-slate-800/60/70 transition-colors">
                        <td className="px-4 py-3 font-mono font-bold text-emerald-900 whitespace-nowrap">
                          {c.ticket_id}
                        </td>
                        <td className="px-4 py-3 text-slate-500 dark:text-slate-400 whitespace-nowrap font-mono text-[11px]">
                          {c.created_at ? c.created_at.slice(0, 10) : 'Recent'}
                        </td>
                        <td className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">
                          {c.category}
                        </td>
                        <td className="px-4 py-3 max-w-xs">
                          <div className="font-bold text-slate-900 dark:text-white truncate" title={c.subject}>
                            {c.subject}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono truncate">
                            {c.reporter_name} ({c.reporter_email})
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${priorityBadge}`}>
                            {c.priority}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${statusBadge}`}>
                            {c.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => {
                              setActiveTicket(c);
                              setAdminStatusInput(c.status);
                            }}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-bold text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-800 transition-colors cursor-pointer"
                          >
                            View Timeline →
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {filteredComplaints.length === 0 && (
                <div className="py-12 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-slate-800/80 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 dark:border-slate-800">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-100">No grievances found matching this view</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                    All campus systems in this filter category are fully operational with zero pending escalations.
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* DEPARTMENT ESCALATION DIRECTORY & DESK EXTENSIONS */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-emerald-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-1 border border-emerald-200 dark:border-slate-800">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" /> Direct Campus Contact Points
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Campus Department Escalation Directory</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">For urgent issues requiring immediate on-ground physical presence at GCC Bajpe.</p>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">
            GCC Internal Exts
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800/80/60 border border-emerald-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">Ext 401</span>
              <span className="text-xs font-semibold text-emerald-700">Desk 101</span>
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-emerald-600" /> Facilities & Hostel Estate
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Hostel room keys, AC servicing, bathroom plumbing, room electrical fixtures, and furniture repairs.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">Ext 402</span>
              <span className="text-xs font-semibold text-amber-700">Mess Office</span>
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-amber-600" /> Adya Foods Cafeteria Desk
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Breakfast/lunch availability, meal quality feedback, dietary allergy requests, and pantry supplies.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800 border border-teal-200">Ext 403</span>
              <span className="text-xs font-semibold text-teal-700">Level 1 South</span>
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-teal-600" /> PHO Hygiene & Sanitation
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Washroom sanitization, daily hostel housekeeping, pest control, and drinking water dispenser filters.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-red-100 text-red-800 border border-red-200">Ext 404</span>
              <span className="text-xs font-semibold text-red-700">Control Room</span>
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-red-600" /> Fire & Occupational Safety
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Emergency evacuation routes, fire extinguishers, first aid replenishments, and lab safety protocol compliance.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">Ext 405</span>
              <span className="text-xs font-semibold text-blue-700">Server Lab</span>
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-blue-600" /> Technical IT & Infrastructure
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Enterprise laptop hardware, Wi-Fi connectivity, Zoho People syncing, VPN tokens, and AMI testbed access.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700">Ext 406</span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">HR Wing</span>
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" /> HR & Cohort Welfare
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Program policies, leave permissions, stipend queries, mentor allocations, and fresher wellness support.
            </p>
          </div>
        </div>
      </div>

      {/* RESOLUTION SLA PROTOCOL MATRIX */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-emerald-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-1 border border-emerald-200 dark:border-slate-800">
              <Clock className="w-3.5 h-3.5 text-emerald-600" /> Service Level Agreements
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Standard Resolution SLA Protocol Matrix</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Turnaround benchmarks for ticket investigation, assignment, and on-ground closure.</p>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">
            Guaranteed Windows
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 space-y-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-100 text-red-800 border border-red-300">P1 Critical</span>
            <div className="text-sm font-black text-slate-900 dark:text-white">&lt; 2 Hours</div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300">Power outage, total water disruption, active safety or fire risk.</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-800 border border-amber-300">P2 High</span>
            <div className="text-sm font-black text-slate-900 dark:text-white">&lt; 6 Hours</div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300">Room AC breakdown, campus Wi-Fi failure, trainee laptop malfunction.</p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800/80/70 border border-emerald-200 dark:border-slate-800 space-y-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">P3 Medium</span>
            <div className="text-sm font-black text-slate-900 dark:text-white">&lt; 24 Hours</div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300">Catering requests, gym equipment tune-ups, hostel door lock adjustments.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700">P4 Low</span>
            <div className="text-sm font-black text-slate-900 dark:text-white">&lt; 48 Hours</div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300">General facility suggestions, extra hangers, non-urgent maintenance.</p>
          </div>
        </div>
      </div>

      {/* SLIDE-OVER DRAWER: GRIEVANCE TIMELINE & RESOLUTION */}
      {activeTicket && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div 
            onClick={() => setActiveTicket(null)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
          ></div>

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white dark:bg-slate-900 shadow-2xl border-l border-emerald-200 dark:border-slate-800 flex flex-col z-10 animate-slideIn">
              
              {/* Drawer Header */}
              <div className="px-6 py-5 border-b border-emerald-100 dark:border-slate-800 bg-gradient-to-r from-emerald-50/80 to-white flex items-center justify-between flex-shrink-0">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono font-black text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-lg border border-emerald-200 dark:border-slate-800">
                      {activeTicket.ticket_id}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-100 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700">
                      {activeTicket.priority} Priority
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-1">
                    Filed on {activeTicket.created_at}
                  </p>
                </div>

                <button 
                  type="button" 
                  onClick={() => setActiveTicket(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:text-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {/* Subject & Status */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 font-bold">Issue Status</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 dark:border-slate-800">
                      {activeTicket.status}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {activeTicket.subject}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    {activeTicket.description}
                  </p>
                </div>

                {/* Authority Destination */}
                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-slate-800/80/70 border border-emerald-200 dark:border-slate-800 space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Assigned Authority Desk:
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{activeTicket.assigned_authority}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    Reported by: <span className="font-medium text-slate-700 dark:text-slate-200">{activeTicket.reporter_name}</span>
                  </div>
                </div>

                {/* Attachment Box */}
                {activeTicket.attachment_name && (
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 truncate">
                      <FileText className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="font-medium text-slate-800 dark:text-slate-100 truncate">{activeTicket.attachment_name}</span>
                    </div>
                    {activeTicket.attachment_path && (
                      <a 
                        href={activeTicket.attachment_path} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-emerald-700 font-bold hover:underline ml-2 flex-shrink-0"
                      >
                        View File ↗
                      </a>
                    )}
                  </div>
                )}

                {/* Step-by-Step Live Timeline */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                      <GitCommit className="w-4 h-4 text-emerald-600" />
                      <span>Live Activity & SLA Timeline</span>
                    </h4>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 dark:bg-slate-800/80 px-2 py-0.5 rounded border border-emerald-200 dark:border-slate-800">Real-Time</span>
                  </div>

                  <div className="pt-2 space-y-4">
                    {(activeTicket.timeline || [
                      { status: activeTicket.status, note: 'Ticket registered into campus system.', timestamp: activeTicket.created_at }
                    ]).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 relative">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white ring-2 ring-emerald-200 flex-shrink-0 mt-1"></div>
                        <div className="space-y-0.5 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 dark:text-white">{item.status}</span>
                            <span className="text-[10px] text-slate-400 font-mono">{item.timestamp}</span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">{item.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Supervisor Resolution Panel (Available to Admin) */}
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-amber-600" /> Supervisor Resolution Action
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-bold">
                      {isAdmin ? 'Admin Mode' : 'Evaluation Mode'}
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-200 mb-1">
                      Advance Ticket Status:
                    </label>
                    <select 
                      value={adminStatusInput}
                      onChange={(e) => setAdminStatusInput(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-amber-300 text-xs bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-bold"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-200 mb-1">
                      Official Action / Inspection Note:
                    </label>
                    <textarea 
                      rows={2} 
                      value={adminNoteInput}
                      onChange={(e) => setAdminNoteInput(e.target.value)}
                      placeholder="e.g. Technician dispatched, parts replaced, SLA completed..." 
                      className="w-full px-3 py-1.5 rounded-lg border border-amber-300 text-xs bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 resize-none focus:outline-none focus:ring-1 focus:ring-amber-500"
                    ></textarea>
                  </div>

                  <button 
                    type="button" 
                    onClick={handleUpdateStatus}
                    disabled={updatingStatus}
                    className="w-full py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95 cursor-pointer disabled:opacity-50"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{updatingStatus ? 'Updating...' : 'Update Status & Post Log'}</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* SUBMISSION CONFIRMATION MODAL */}
      {successModalData && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-emerald-200 dark:border-slate-800 max-w-md w-full shadow-2xl p-6 sm:p-7 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-200 dark:border-slate-800">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                Grievance Dispatched
              </span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">Ticket Filed Successfully!</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Your campus grievance has been recorded and transmitted to the responsible department.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-800 space-y-1 text-left">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 font-bold">Your Grievance Number</span>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(successModalData.ticketId);
                    showToast('Ticket ID copied to clipboard!', 'success');
                  }} 
                  className="text-emerald-700 hover:text-emerald-900 text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" /> Copy
                </button>
              </div>
              <div className="text-lg font-mono font-black text-emerald-900">{successModalData.ticketId}</div>
              <div className="text-[11px] text-emerald-800 pt-1">
                Routed to: <strong>{successModalData.authority}</strong>
              </div>
            </div>

            <button 
              type="button" 
              onClick={() => setSuccessModalData(null)}
              className="w-full py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/25 transition-transform active:scale-95 cursor-pointer"
            >
              View in Grievance Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
