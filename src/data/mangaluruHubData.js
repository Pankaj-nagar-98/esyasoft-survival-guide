/**
 * Mangaluru Centre Smart Employee Hub Data Store
 * Structured data for Notices, Calendar, Mandatory & Optional Holidays,
 * Contacts Directory, Quick Links, and Campus Fast Facts.
 */

export const MANGALURU_HUB_DATA = {
  campus: {
    name: "Esyasoft Global Capability Centre (GCC)",
    location: "Kolambe Proper, Bajpe, Mangaluru, Karnataka 574142",
    shortLocation: "Bajpe, Mangaluru",
    airportDistance: "10 km (~15 mins drive)",
    railwayDistance: "20 km (~35 mins drive)",
    gateTimings: "Open 24/7 with RFID Badge & Biometric Access",
    curfewWeekday: "10:00 PM Sign-in Required",
    messTimings: {
      breakfast: "08:00 AM – 09:30 AM",
      lunch: "01:00 PM – 02:30 PM",
      eveningTea: "05:00 PM – 05:45 PM",
      dinner: "08:00 PM – 09:30 PM"
    },
    wifi: {
      ssid: "Esya-Training",
      password: "P@$$w0rd@123",
      supportDesk: "Ext. 204 (IT Support Room, Level 1)"
    }
  },

  notices: [
    {
      id: "notice-01",
      category: "urgent",
      categoryName: "Urgent Alert",
      priority: "high",
      date: "Today, 08:30 AM",
      title: "Daily Biometric Punch-In & 11:00 AM Regularisation Cutoff",
      summary: "Ensure biometric terminal check-in before 09:00 AM. Any missed punch from the prior day must be submitted via Zoho People regularisation before 11:00 AM.",
      actionLabel: "Launch Attendance Terminal",
      actionLink: "/attendance",
      isInternal: true
    },
    {
      id: "notice-02",
      category: "hr",
      categoryName: "HR & Onboarding",
      priority: "medium",
      date: "Yesterday",
      title: "Zoho Profile & Bank Account Verification Reminder",
      summary: "Complete pending personal details, emergency contact numbers, and bank account IFSC proof in Zoho People to prevent payroll processing delays.",
      actionLabel: "Open Zoho Checklist",
      actionLink: "/faqs",
      isInternal: true
    },
    {
      id: "notice-03",
      category: "facilities",
      categoryName: "Facilities & Transport",
      priority: "medium",
      date: "Sep 26, 2026",
      title: "Weekend Coastal Shuttle to Mangaluru City & Malpe",
      summary: "Complimentary campus shuttle operates on Saturdays at 09:30 AM to Mangaluru Central / City Centre Mall and Malpe Beach. Sign up at the Reception desk.",
      actionLabel: "View Escapes Route",
      actionLink: "/escapes",
      isInternal: true
    },
    {
      id: "notice-04",
      category: "training",
      categoryName: "Training & Labs",
      priority: "low",
      date: "Sep 24, 2026",
      title: "Smart Grid AMI & DLMS/COSEM Sandbox Lab Access",
      summary: "Level 1 Smart Metering simulation bays are now open for evening self-practice (06:00 PM – 08:30 PM). Virtual meters and HES consoles are active.",
      actionLabel: "Check Roadmap Topics",
      actionLink: "/roadmap",
      isInternal: true
    },
    {
      id: "notice-05",
      category: "facilities",
      categoryName: "Facilities & Living",
      priority: "low",
      date: "Sep 22, 2026",
      title: "Recreation Hub Level 2 Table Tennis Tournament",
      summary: "Singles and 2v2 doubles tournament registration is open at the Level 2 Sports Desk. Matches scheduled daily post-05:30 PM.",
      actionLabel: "Explore Campus Hub",
      actionLink: "/campus",
      isInternal: true
    }
  ],

  upcomingEvents: [
    {
      id: "event-01",
      date: "Wed, 30 Sep",
      time: "03:00 PM – 05:00 PM",
      title: "Smart Grid DLMS/COSEM Protocol Evaluation",
      location: "Academic Bay 1, Level 1",
      tag: "Assessment",
      tagColor: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
    },
    {
      id: "event-02",
      date: "Fri, 02 Oct",
      time: "All Day",
      title: "Gandhi Jayanti (Mandatory Public Holiday)",
      location: "Campus Offices Closed",
      tag: "Holiday",
      tagColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
    },
    {
      id: "event-03",
      date: "Tue, 06 Oct",
      time: "10:00 AM – 12:30 PM",
      title: "Month 1 Foundation Wrap-Up & Milestone Pitch",
      location: "GCC Auditorium",
      tag: "Milestone",
      tagColor: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300"
    },
    {
      id: "event-04",
      date: "Mon, 12 Oct",
      time: "02:00 PM – 04:30 PM",
      title: "Discom MDMS & VEE Rules Deep-Dive Workshop",
      location: "Training Lab 2",
      tag: "Workshop",
      tagColor: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
    }
  ],

  mandatoryHolidays: [
    { date: "Jan 26, 2026", day: "Monday", name: "Republic Day", type: "National Holiday" },
    { date: "Mar 19, 2026", day: "Thursday", name: "Ugadi (Kannada New Year)", type: "State Holiday" },
    { date: "May 01, 2026", day: "Friday", name: "May Day / Labor Day", type: "Public Holiday" },
    { date: "Aug 15, 2026", day: "Saturday", name: "Independence Day", type: "National Holiday" },
    { date: "Oct 02, 2026", day: "Friday", name: "Gandhi Jayanti", type: "National Holiday" },
    { date: "Oct 20, 2026", day: "Tuesday", name: "Vijayadashami (Dussehra)", type: "State Holiday" },
    { date: "Nov 01, 2026", day: "Sunday", name: "Kannada Rajyotsava", type: "State Holiday" },
    { date: "Nov 09, 2026", day: "Monday", name: "Deepavali (Diwali)", type: "National Holiday" },
    { date: "Dec 25, 2026", day: "Friday", name: "Christmas Day", type: "Public Holiday" }
  ],

  optionalHolidays: [
    { date: "Jan 14, 2026", day: "Wednesday", name: "Makar Sankranti / Pongal", type: "Restricted (RH)" },
    { date: "Apr 03, 2026", day: "Friday", name: "Good Friday", type: "Restricted (RH)" },
    { date: "Apr 14, 2026", day: "Tuesday", name: "Dr. B.R. Ambedkar Jayanti", type: "Restricted (RH)" },
    { date: "Jun 17, 2026", day: "Wednesday", name: "Bakrid / Eid al-Adha", type: "Restricted (RH)" },
    { date: "Aug 28, 2026", day: "Friday", name: "Varamahalakshmi Vrata", type: "Restricted (RH)" },
    { date: "Sep 04, 2026", day: "Friday", name: "Janmashtami", type: "Restricted (RH)" },
    { date: "Sep 16, 2026", day: "Wednesday", name: "Eid-e-Milad", type: "Restricted (RH)" },
    { date: "Nov 25, 2026", day: "Wednesday", name: "Guru Nanak Jayanti", type: "Restricted (RH)" },
    { date: "Dec 31, 2026", day: "Thursday", name: "New Year's Eve", type: "Restricted (RH)" }
  ],

  importantContacts: [
    {
      id: "c-hr",
      role: "HR & Onboarding Desk",
      name: "Campus HR Support Cell",
      email: "hr.mangaluru@esyasoft.com",
      phone: "+91 824 288 4101",
      desk: "Reception Block, Level 0",
      hours: "09:00 AM – 06:30 PM",
      category: "hr"
    },
    {
      id: "c-it",
      role: "IT & Hardware Support",
      name: "Engineering IT Helpdesk",
      email: "it.support@esyasoft.com",
      phone: "+91 824 288 4102",
      desk: "Room 104, Level 1",
      hours: "08:30 AM – 08:00 PM",
      category: "it"
    },
    {
      id: "c-facilities",
      role: "Hostel & Facilities Desk",
      name: "Campus Facility In-Charge",
      email: "facilities.gcc@esyasoft.com",
      phone: "+91 824 288 4103",
      desk: "Ground Floor Admin Office",
      hours: "24/7 Help Desk",
      category: "facilities"
    },
    {
      id: "c-medical",
      role: "Medical & First Aid",
      name: "Campus Emergency Health Care",
      email: "medical.support@esyasoft.com",
      phone: "+91 824 288 4108",
      desk: "First Aid Station (Near Reception)",
      hours: "24/7 Emergency Line",
      category: "emergency"
    },
    {
      id: "c-mess",
      role: "Mess & Dining Operations",
      name: "Foods Adya Dining Manager",
      email: "dining.adya@esyasoft.com",
      phone: "+91 824 288 4105",
      desk: "Dining Hall Main Office",
      hours: "07:30 AM – 10:00 PM",
      category: "dining"
    },
    {
      id: "c-training",
      role: "Lead Training Mentor",
      name: "Graduate Programme Mentorship Cell",
      email: "training.mentors@esyasoft.com",
      phone: "+91 824 288 4106",
      desk: "Academic Bay 1, Level 1",
      hours: "09:00 AM – 06:00 PM",
      category: "training"
    }
  ],

  campusFloorGuide: [
    {
      level: "Level 0",
      title: "Arrival, Dining & Reception",
      icon: "building",
      items: [
        { name: "Main Reception & Security Desk", desc: "Visitor passes, biometric onboarding enrollment, entry register." },
        { name: "Foods Adya Dining Hall", desc: "Breakfast, lunch, evening cutting chai, and dinner buffet." },
        { name: "First Aid & Medical Station", desc: "Basic medical essentials, doctor-on-call triage." }
      ]
    },
    {
      level: "Level 1",
      title: "Training Labs & Wellness",
      icon: "cpu",
      items: [
        { name: "Smart Metering & AMI Testing Lab", desc: "Single-phase, polyphase meters, HES and RF mesh gateways." },
        { name: "Software & Data Science Bays", desc: "MDM data processing, VEE rule sandboxes, cloud workstations." },
        { name: "Iron & Fitness Gym", desc: "Cardio treads, dumbbell racks, cable towers (06:00 AM – 09:30 PM)." }
      ]
    },
    {
      level: "Level 2",
      title: "Recreation & Study Hub",
      icon: "trophy",
      items: [
        { name: "Table Tennis & Foosball Arena", desc: "Championship ping-pong tables, 2v2 tournament zone." },
        { name: "Architectural Library & Study Lounge", desc: "Backlit quiet reading pods with technical grid literature." },
        { name: "Billiards & Snooker Hall", desc: "Standard felt cue sports table for evening downtime." }
      ]
    },
    {
      level: "Hostels",
      title: "Residential Quarters",
      icon: "home",
      items: [
        { name: "3 BHK & 4 BHK Living Flats", desc: "Air-conditioned rooms, attached baths, RO water purifiers." },
        { name: "Laundry Amenities", desc: "Fully automatic washing machines in each flat." },
        { name: "Living Etiquette", desc: "10:00 PM sign-in; zero-tolerance policy on smoking/alcohol indoors." }
      ]
    }
  ]
};
